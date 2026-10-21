import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface CtaSectionProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0f2847] via-[#153e6b] to-[#0284c7] py-16 sm:py-20 text-white">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-sky-200 border border-white/15 backdrop-blur-xs mb-3.5">
            <HelpCircle className="w-3.5 h-3.5 text-sky-300" />
            <span>Personalized Hardware Advice</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 tracking-tight leading-tight">
            Need Help Choosing The Right Printer?
          </h2>
          <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-xl">
            Tell us what you need to print, how often you print, and whether you are printing from home or the office. We will help you select the ideal model.
          </p>
        </div>

        <div className="shrink-0">
          <button
            type="button"
            onClick={() => onNavigate?.('shop')}
            className="inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-white text-[#0a1c3d] hover:bg-slate-100 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer border-none"
          >
            <span>FIND YOUR PRINTER</span>
            <ArrowRight className="w-4 h-4 text-[#0284c7]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
