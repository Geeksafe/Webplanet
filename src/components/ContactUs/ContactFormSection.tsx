import React, { useState } from 'react';
import { CheckCircle2, Clock, AlertCircle, Loader2, Send } from 'lucide-react';
import { sendEmail } from '../../services/emailService';
import { trackContactConversion } from '../../services/analytics';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const result = await sendEmail({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      from_name: 'Pixfix Digital Contact Form',
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      trackContactConversion();
      setFormData({
        name: '',
        subject: '',
        email: '',
        message: '',
      });
    } else {
      setErrorMessage(result.message || 'Something went wrong while sending your message. Please try again.');
    }
  };

  return (
    <section className="bg-white py-14 sm:py-20 border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context Info */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-2">
            <span className="text-[#0284c7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
              PIXFIX DIGITAL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight mb-5">
              We're Ready to Help
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Have a question about an order, product, shipping, returns, or anything else? Contact us by phone or email during our office hours and we'll be happy to assist.
            </p>

            {/* Office Hours Info from Footer */}
            <div className="inline-flex items-center gap-3 bg-[#f8fafc] border border-gray-200/80 rounded-xl p-4 text-xs sm:text-sm text-gray-700">
              <Clock className="w-5 h-5 text-[#0284c7] shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Office Hours</p>
                <p className="text-gray-500 text-xs mt-0.5">9 AM to 5 PM (Mon – Fri Only)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 sm:p-10">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Received!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out to Pixfix Digital. Our support team will review your query and respond to your email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs uppercase font-bold tracking-wider px-6 py-2.5 rounded-lg transition-colors cursor-pointer border-none"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="flex items-start gap-3 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs sm:text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                      <div className="flex-1">
                        <p className="font-semibold">Unable to send message</p>
                        <p className="text-red-600 text-xs mt-0.5">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Honeypot field for anti-spam (invisible to normal users) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="NAME *"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="SUBJECT *"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="EMAIL *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="MESSAGE"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#f9fafb] border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:outline-none transition-colors resize-y"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer border-none disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
