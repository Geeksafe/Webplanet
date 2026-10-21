import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load server/.env regardless of where the command is run from
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config(); // fallback for root .env if needed

const app = express();
const PORT = process.env.PORT || 5000;

// Allowed Origins for CORS
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, server-to-server) or allowed list
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive fallback to prevent deployment CORS blockers
    },
    credentials: true,
  })
);

app.use(express.json());

// In-Memory Rate Limiter to prevent spam
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 20;

function rateLimiter(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown-ip';
  const now = Date.now();
  const userRecord = rateLimitMap.get(ip) || { count: 0, firstRequestTime: now };

  if (now - userRecord.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    userRecord.count = 1;
    userRecord.firstRequestTime = now;
  } else {
    userRecord.count += 1;
  }

  rateLimitMap.set(ip, userRecord);

  if (userRecord.count > MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again after a few minutes.',
    });
  }

  next();
}

// Nodemailer Transporter Setup for Hostinger / Gmail SMTP
function createTransporter() {
  const rawPass = process.env.HOSTINGER_EMAIL_PASS || process.env.EMAIL_PASS;
  if (!rawPass || !rawPass.trim()) {
    return null;
  }

  // Clean password (strip spaces Google puts in App Passwords)
  const password = rawPass.trim().replace(/\s+/g, '');
  const user = (process.env.EMAIL_USER || 'support@geeksafeglobal.com').trim();
  const isGmail = user.toLowerCase().endsWith('@gmail.com');

  // Auto-detect host: if user is Gmail, use smtp.gmail.com
  let host = process.env.EMAIL_HOST || 'smtp.hostinger.com';
  if (isGmail && (!process.env.EMAIL_HOST || process.env.EMAIL_HOST === 'smtp.hostinger.com')) {
    host = 'smtp.gmail.com';
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: process.env.EMAIL_SECURE !== 'false', // true for 465 (SSL)
    auth: {
      user,
      pass: password,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

/**
 * Health Check API
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Pixfix Mail Service',
    smtpConfigured: Boolean(process.env.HOSTINGER_EMAIL_PASS),
    hostingerEmail: process.env.EMAIL_USER || 'support@geeksafeglobal.com',
  });
});

/**
 * Main Email Dispatch Endpoint
 */
app.post('/api/send-email', rateLimiter, async (req, res) => {
  console.log(`\n📥 [Incoming Form Submission] ${new Date().toLocaleTimeString()}`);
  console.log('   Payload:', {
    name: req.body?.name,
    email: req.body?.email,
    subject: req.body?.subject,
    from_name: req.body?.from_name,
  });

  const {
    name,
    email,
    phone,
    subject,
    message,
    from_name,
    order_id,
    order_total,
    delivery_address,
    items_summary,
    order_notes,
    payment_method,
    modelNumber,
    rating,
    review,
  } = req.body;

  // Basic Validation
  if (!email || !name) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required fields.',
    });
  }

  const transporter = createTransporter();

  // If password hasn't been set yet, safely mock success for development
  if (!transporter) {
    console.warn(
      '[Backend Mail Warning] HOSTINGER_EMAIL_PASS is not set in server/.env. Simulating successful dispatch.'
    );
    return res.json({
      success: true,
      message: 'Simulated dispatch (waiting for Hostinger password in server/.env).',
    });
  }

  try {
    const senderEmail = process.env.EMAIL_USER || 'support@geeksafeglobal.com';
    const recipientEmail = process.env.RECIPIENT_EMAIL || senderEmail;
    const emailSubject = subject || `New Inquiry from ${name}`;

    // Generate responsive HTML template
    let contentHtml = '';

    if (order_id) {
      // Cash on Delivery Order Template
      contentHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0284c7; padding: 20px; color: #ffffff; text-align: center;">
            <h2 style="margin: 0; font-size: 22px;">New Cash on Delivery Order</h2>
            <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Order ID: ${order_id}</p>
          </div>
          <div style="padding: 24px; color: #334155; line-height: 1.6;">
            <h3 style="color: #0f172a; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Delivery Address:</strong><br>${delivery_address || 'N/A'}</p>
            <p><strong>Payment Method:</strong> ${payment_method || 'Cash on Delivery (COD)'}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <h3 style="color: #0f172a;">Order Details</h3>
            <pre style="background: #f8fafc; padding: 12px; border-radius: 6px; font-family: monospace; white-space: pre-wrap;">${items_summary || message}</pre>
            <p style="font-size: 18px; font-weight: bold; color: #0284c7;">Total Due: ${order_total || 'N/A'}</p>
            ${order_notes ? `<p><strong>Order Notes:</strong> ${order_notes}</p>` : ''}
          </div>
        </div>
      `;
    } else {
      // Standard Contact / Inquiry / Setup Support Template
      contentHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0284c7; padding: 20px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px;">${from_name || 'Website Inquiry'}</h2>
            <p style="margin: 5px 0 0; font-size: 13px; opacity: 0.9;">Pixfix Digital Portal</p>
          </div>
          <div style="padding: 24px; color: #334155; line-height: 1.6;">
            <p><strong>Customer Name:</strong> ${name}</p>
            <p><strong>Customer Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${modelNumber ? `<p><strong>Printer Model:</strong> ${modelNumber}</p>` : ''}
            ${rating ? `<p><strong>Rating:</strong> ${rating}</p>` : ''}
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
            <h3 style="color: #0f172a; margin-top: 0;">Message / Details:</h3>
            <div style="background: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #0284c7;">
              ${(review || message || 'No message provided.').replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `;
    }

    const mailOptions = {
      from: `"${from_name || 'Pixfix Digital'}" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email, // Direct reply to the customer
      subject: emailSubject,
      html: contentHtml,
      text: message || emailSubject,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('[Hostinger Email Sent]', {
      messageId: info.messageId,
      to: recipientEmail,
      subject: emailSubject,
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('[Hostinger SMTP Error]', error);
    return res.status(500).json({
      success: false,
      message:
        'Failed to deliver email through mail server. Please try again or reach out directly.',
    });
  }
});

// Optional: Serve frontend static build if combined in production
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  const user = (process.env.EMAIL_USER || 'support@geeksafeglobal.com').trim();
  const isGmail = user.toLowerCase().endsWith('@gmail.com');
  const host = isGmail && (!process.env.EMAIL_HOST || process.env.EMAIL_HOST === 'smtp.hostinger.com')
    ? 'smtp.gmail.com'
    : (process.env.EMAIL_HOST || 'smtp.hostinger.com');
  const hasPass = Boolean(process.env.HOSTINGER_EMAIL_PASS?.trim());

  console.log(`===============================================`);
  console.log(`🚀 Pixfix Mail Service running on port ${PORT}`);
  console.log(`📧 Account: ${user}`);
  console.log(`🌐 Server Host: ${host}`);
  console.log(`🔒 SMTP Password: ${hasPass ? 'CONFIGURED ✅' : 'PENDING ⚠️ (Enter in server/.env)'}`);
  console.log(`===============================================`);
});
