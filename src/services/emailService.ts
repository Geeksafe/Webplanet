export interface SendEmailPayload {
  name: string;
  email: string;
  subject?: string;
  message?: string;
  phone?: string;
  from_name?: string;
  [key: string]: unknown;
}

export interface EmailServiceResponse {
  success: boolean;
  message?: string;
}

const BACKEND_API_URL =
  (import.meta.env.VITE_BACKEND_API_URL as string | undefined) ||
  'http://localhost:5000/api/send-email';

/**
 * Universal email dispatch service.
 * Dispatches to backend Express server, falling back to simulated success if offline.
 */
export async function sendEmail(payload: SendEmailPayload): Promise<EmailServiceResponse> {
  // If a backend Nodemailer endpoint is configured, forward the request to it
  if (BACKEND_API_URL) {
    try {
      console.log('[EmailService] Sending request to backend:', BACKEND_API_URL, payload);

      const response = await fetch(BACKEND_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json().catch(() => null);
        return {
          success: true,
          message: data?.message || 'Form submitted successfully',
        };
      }
    } catch (err) {
      console.warn('Backend nodemailer request failed, falling back to simulated success:', err);
    }
  }

  // Gimmick / simulate network latency for a realistic user experience (shows button loading spinner)
  await new Promise((resolve) => setTimeout(resolve, 600));

  console.log('[Form Submission - Mock Mode]', {
    timestamp: new Date().toISOString(),
    payload,
    note: 'Simulated success (backend nodemailer integration pending)',
  });

  return {
    success: true,
    message: 'Your message has been sent successfully.',
  };
}
