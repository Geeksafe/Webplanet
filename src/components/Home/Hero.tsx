import React, { useState, useEffect } from 'react';
import type { BrandId } from '../BrandSetup';
import BrandSetupCard from './BrandSetupCard';

interface HeroProps {
  onNavigate?: (page: 'home' | 'shop') => void;
  onSelectBrand?: (brand: BrandId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onSelectBrand }) => {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsBrandModalOpen(false);
    };
    if (isBrandModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isBrandModalOpen]);

  const handleSelect = (brandId: BrandId) => {
    setIsBrandModalOpen(false);
    onSelectBrand?.(brandId);
  };

  return (
    <>
      <section className="relative min-h-[660px] flex items-center bg-[url('/hero-bg.jpg')] bg-cover bg-center overflow-hidden">
        {/* Modern dark gradient overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1d2d]/90 via-[#172c42]/75 to-[#1c3852]/60 mix-blend-normal"></div>

        {/* Ambient radial glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-white max-w-[1200px] mx-auto w-full pt-28 sm:pt-32 md:pt-28 pb-12 sm:pb-16 px-5 md:px-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-sky-200 backdrop-blur-md mb-6 shadow-xs max-w-full">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0" />
            <span className="truncate">Trusted Printer Hardware, Setup &amp; Support</span>
          </div>

          <h1 className="text-[38px] sm:text-[48px] md:text-[62px] font-black leading-[1.12] mb-5 tracking-tight">
            Printing Made Simple.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-white">
              Reliable. Efficient.
            </span>
          </h1>

          <p className="text-[15px] sm:text-[16px] md:text-[17px] mb-8 leading-relaxed max-w-[620px] text-slate-200">
            Discover reliable printers, professional printing solutions, and expert assistance designed for homes, offices, and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-12">
            <button
              id="hero-printer-setup-btn"
              type="button"
              onClick={() => setIsBrandModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center py-3.5 px-8 rounded-xl font-bold text-[14px] uppercase tracking-wider transition-all duration-300 bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md cursor-pointer shadow-sm hover:scale-[1.02]"
            >
              <span>PRINTER SETUP</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          {/* Quick Stats Strip */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>4 Major Brands Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Fast Ground Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Expert Setup Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Selection Section (Below Hero & Above BrandSelection / Featured Products) */}
      <section className="bg-slate-50/80 py-12 sm:py-16 border-b border-slate-200/80" id="select-printer-brand">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <BrandSetupCard onSelectBrand={handleSelect} prefixId="hero-inline-brand" />
          </div>
        </div>
      </section>

      {/* Brand Selection Modal */}
      {isBrandModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsBrandModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative text-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsBrandModalOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer border-none"
              title="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <BrandSetupCard onSelectBrand={handleSelect} prefixId="hero-modal-brand" />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
