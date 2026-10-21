import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { sendEmail } from '../../services/emailService';

interface SetupSupportFormProps {
  brandName: string;
}

const SetupSupportForm: React.FC<SetupSupportFormProps> = ({ brandName }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;

    setSubmitting(true);
    setErrorMessage(null);

    const result = await sendEmail({
      name: contactForm.name,
      email: contactForm.email,
      subject: `${brandName} Printer Setup Support Request`,
      message: contactForm.message || `Customer requested setup support for ${brandName} printer`,
      from_name: `Pixfix Setup Support (${brandName})`,
      brand: brandName,
    });

    setSubmitting(false);

    if (result.success) {
      setFormSubmitted(true);
      setContactForm({ name: '', email: '', message: '' });
    } else {
      setErrorMessage(result.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <div id="setup-contact-form" className="w-full max-w-[560px]">
      {formSubmitted ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-left">
          <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-[16px] mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Message Sent Successfully!</span>
          </div>
          <p className="text-[13.5px] text-emerald-800 m-0 leading-relaxed">
            Thank you. Our printer setup specialist for {brandName} will reach out to you shortly to assist with driver installation.
          </p>
          <button
            type="button"
            onClick={() => {
              setFormSubmitted(false);
              setErrorMessage(null);
            }}
            className="mt-4 px-4 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-[13px] font-semibold border-none cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} className="space-y-4">
          {errorMessage && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-[13px]">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              <div className="flex-1">
                <p className="font-semibold">Unable to send message</p>
                <p className="text-red-600 text-xs mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Anti-spam honeypot */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />
          {/* Name field */}
          <div>
            <label htmlFor="setup-name" className="block text-[13.5px] text-gray-700 font-medium mb-1.5">
              Name
            </label>
            <input
              id="setup-name"
              type="text"
              required
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
            />
          </div>

          {/* Email field */}
          <div>
            <label htmlFor="setup-email" className="block text-[13.5px] text-gray-700 font-medium mb-1.5">
              Email
            </label>
            <input
              id="setup-email"
              type="email"
              required
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"
            />
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="setup-message" className="block text-[13.5px] text-gray-700 font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="setup-message"
              rows={4}
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              placeholder="Message"
              className="w-full border border-gray-300 rounded px-3.5 py-2.5 text-[14px] text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-y min-h-[110px] bg-white"
            />
          </div>

          {/* Submit SEND button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 px-6 rounded text-[14px] font-bold uppercase tracking-wider text-white bg-[#5e6e82] hover:bg-[#4d5c6f] transition-colors duration-200 cursor-pointer border-none shadow-sm flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>SENDING...</span>
              </>
            ) : (
              'SEND'
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default SetupSupportForm;
