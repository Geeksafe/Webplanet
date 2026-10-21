import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section className="pt-8 sm:pt-10 pb-16 sm:pb-20 bg-white border-y border-slate-100">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Image with badge */}
        <div className="flex-1 w-full relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop"
              alt="Pixfix Digital Printer Setup"
              className="w-full h-auto object-cover block select-none"
              loading="lazy"
            />
          </div>

          {/* Floating Trust Card */}
          <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[260px]">
            <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                Quality Assurance
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight block">
                Independent Expert Support
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Checklist */}
        <div className="flex-1 w-full mt-6 lg:mt-0">
          <span className="text-[#0284c7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 block">
            ABOUT PIXFIX DIGITAL
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black mb-5 leading-tight text-[#0a1c3d] tracking-tight">
            Your Printing Partner, From Setup To Support.
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
            We are dedicated to providing comprehensive and reliable printer solutions for homes and businesses. Our team of specialists is here to assist you with every aspect of your printing requirements.
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-7 leading-relaxed">
            Whether you need a new wireless printer configured, an operating system driver issue resolved, or scheduled maintenance advice, we have the practical skills to get the job done right.
          </p>

          {/* Checklist */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 list-none p-0">
            <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800">
              <span className="w-6 h-6 rounded-full bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                <Check size={14} className="stroke-[3]" />
              </span>
              Professional technicians
            </li>
            <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800">
              <span className="w-6 h-6 rounded-full bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                <Check size={14} className="stroke-[3]" />
              </span>
              Dedicated customer service
            </li>
            <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800">
              <span className="w-6 h-6 rounded-full bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                <Check size={14} className="stroke-[3]" />
              </span>
              Quality printer diagnostics
            </li>
            <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800">
              <span className="w-6 h-6 rounded-full bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                <Check size={14} className="stroke-[3]" />
              </span>
              Reliable printing solutions
            </li>
          </ul>

          <button
            type="button"
            onClick={() => onNavigate?.('about')}
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer border-none"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
