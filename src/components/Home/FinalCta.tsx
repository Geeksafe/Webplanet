import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Headphones } from 'lucide-react';

interface FinalCtaProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const FinalCta: React.FC<FinalCtaProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-[#172538] via-[#1f324b] to-[#172538] text-white text-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        <span className="text-sky-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 inline-block">
          Elevate Your Printing
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black mb-4 tracking-tight leading-tight">
          Ready For A Better Printing Experience?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 mb-9 max-w-2xl mx-auto leading-relaxed">
          Explore our printers, step-by-step setup assistance, and professional troubleshooting services to keep your home and office workflow smooth and productive.
        </p>

        {/* Action Button */}
        <div className="mb-12">
          <button
            type="button"
            onClick={() => onNavigate?.('shop')}
            className="inline-flex items-center justify-center gap-2.5 py-4 px-9 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-xl hover:shadow-sky-500/25 hover:scale-105 cursor-pointer border-none"
          >
            <span>GET STARTED</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Trust Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>100% Genuine Hardware</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Truck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Fast US Ground Dispatch</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Headphones className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Expert Technical Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
