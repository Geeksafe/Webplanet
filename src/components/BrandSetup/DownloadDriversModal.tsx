import React, { useState, useEffect } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { sendEmail } from '../../services/emailService';

export interface DriverFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  modelNumber: string;
}

interface DownloadDriversModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DriverFormData) => void;
  defaultModel?: string;
}

const DownloadDriversModal: React.FC<DownloadDriversModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  defaultModel = '',
}) => {
  const [formData, setFormData] = useState<DriverFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    modelNumber: defaultModel,
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (defaultModel) {
      setFormData((prev) => ({ ...prev, modelNumber: defaultModel }));
    }
  }, [defaultModel]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone || !formData.modelNumber) return;

    setSubmitting(true);
    setErrorMessage(null);

    const result = await sendEmail({
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      subject: `Driver Download Request: ${formData.modelNumber}`,
      message: `Customer requested driver download for printer model: ${formData.modelNumber}. Phone: ${formData.phone}`,
      from_name: 'Pixfix Driver Download Portal',
      modelNumber: formData.modelNumber,
    });

    setSubmitting(false);

    if (result.success) {
      onSubmit(formData);
    } else {
      setErrorMessage(result.message || 'Failed to submit. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-[620px] bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close Button (matching Image 2) */}
        <div className="pt-6 pb-2 px-6 sm:px-8 flex items-start justify-between">
          <h2 className="text-[26px] sm:text-[28px] font-semibold text-[#1e5d95] tracking-tight m-0">
            Download Printer Drivers
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#335670] hover:bg-[#203a4f] text-white flex items-center justify-center transition-colors cursor-pointer border-none shadow-sm shrink-0"
            title="Close"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body Form */}
        <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-8 pt-4 space-y-5 text-left">
          {errorMessage && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-[13px]">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              <div className="flex-1">
                <p className="font-semibold">Unable to submit form</p>
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

          {/* Name Field (First, Last) */}
          <div>
            <label className="block text-[14px] font-medium text-gray-800 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
                />
                <span className="block text-[11.5px] text-gray-400 mt-1">First</span>
              </div>
              <div>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
                />
                <span className="block text-[11.5px] text-gray-400 mt-1">Last</span>
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[14px] font-medium text-gray-800 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-[14px] font-medium text-gray-800 mb-1.5">
              Phone Number: <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
            />
          </div>

          {/* Printer Model Number Field */}
          <div>
            <label className="block text-[14px] font-medium text-gray-800 mb-1.5">
              Printer Model Number: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.modelNumber}
              onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
              placeholder="e.g. DeskJet 2820e"
              className="w-full bg-[#f9fafb] border border-gray-200 focus:border-blue-500 focus:bg-white rounded px-3 py-2 text-[14px] outline-none transition-colors"
            />
          </div>

          {/* SUBMIT Button (matching Image 2) */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-[#0084d6] hover:bg-[#0071be] text-white font-bold text-[14px] uppercase tracking-wider rounded cursor-pointer transition-colors shadow-sm border-none disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>SUBMITTING...</span>
                </>
              ) : (
                'SUBMIT'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownloadDriversModal;
