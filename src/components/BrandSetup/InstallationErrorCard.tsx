import React from 'react';
import type { BrandSetupConfig } from './types';

interface InstallationErrorCardProps {
  config: BrandSetupConfig;
  onRestart: () => void;
}

const InstallationErrorCard: React.FC<InstallationErrorCardProps> = ({
  config,
  onRestart,
}) => {
  return (
    <div className="w-full max-w-[880px] mx-auto px-4 py-8 animate-fadeIn">
      <div className="bg-white rounded-lg border border-gray-300/80 shadow-2xl overflow-hidden text-left relative">
        <div className="bg-[#e9ecef] px-6 py-4 flex items-center justify-between border-b border-gray-300">
          <div>
            <h3 className="text-[17px] font-bold text-gray-900 m-0">
              Installing
            </h3>
            <p className="text-[13px] text-gray-600 m-0 mt-0.5">
              Fatal error occurred during installation..
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={config.brandLogo}
              alt={`${config.brandName} Logo`}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
        </div>

        <div className="p-8 sm:p-12 text-center flex flex-col items-center">
          <div className="relative mb-8 flex items-center justify-center">
            <svg
              className="w-32 h-28 text-gray-700"
              viewBox="0 0 100 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M25 25 V5 H75 V25" stroke="currentColor" fill="#f8fafc" />
              <rect x="10" y="25" width="80" height="35" rx="6" fill="#f1f5f9" stroke="currentColor" />
              <circle cx="20" cy="35" r="2" fill="#475569" />
              <rect x="25" y="42" width="50" height="4" fill="#334155" rx="1" />
              <path d="M20 52 L25 75 H75 L80 52" fill="#e2e8f0" stroke="currentColor" />
              <rect x="30" y="60" width="40" height="12" fill="#ffffff" stroke="currentColor" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-20 h-20 rounded-full border-4 border-red-600 flex items-center justify-center bg-white/70">
                <div className="absolute w-full h-1 bg-red-600 rotate-45"></div>
                <span className="relative z-10 text-[11px] font-black text-black bg-white/90 px-1 rounded shadow-xs tracking-wider">
                  ERROR
                </span>
              </div>
            </div>
          </div>

          <p className="text-[15px] sm:text-[16px] text-gray-800 leading-relaxed max-w-[680px] mb-8 font-normal">
            Printer driver installation has been failed due to fatal error &quot;C0000022&quot; preventing product driver installation.
          </p>

          <p className="text-[18px] sm:text-[20px] font-serif text-gray-900 mb-4">
            Please Contact {config.brandName} Customer Support at :
          </p>

          <div className="mb-14">
            <a
              href={`tel:${config.supportPhone.replace(/[^0-9+]/g, '')}`}
              className="text-[26px] sm:text-[34px] font-black text-black hover:text-blue-700 tracking-tight transition-colors no-underline block"
            >
              Toll Free (USA/CA) : {config.supportPhone}
            </a>
          </div>
        </div>

        <div className="relative w-full h-24 overflow-hidden mt-6">
          <div 
            className="absolute bottom-0 left-0 w-80 sm:w-96 h-28 bg-[#0085d0] flex items-center pl-6 sm:pl-8"
            style={{
              clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
              background: config.brandColor || '#0085d0'
            }}
          >
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                <img
                  src={config.brandLogo}
                  alt={config.brandName}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[14px] sm:text-[16px] font-semibold text-white tracking-wide">
                24x7 {config.brandName} Assistance
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={`tel:${config.supportPhone.replace(/[^0-9+]/g, '')}`}
          className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[14px] uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all no-underline"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>Call Support Now</span>
        </a>

        <button
          type="button"
          onClick={onRestart}
          className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-[14px] uppercase tracking-wider cursor-pointer border-none transition-all shadow-sm"
        >
          Restart Printer Setup
        </button>
      </div>
    </div>
  );
};

export default InstallationErrorCard;
