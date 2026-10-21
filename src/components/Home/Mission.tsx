import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[460px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://ik.imagekit.io/eqgw1ftw6/Doctor%20Setu/Gemini_Generated_Image_2fp76h2fp76h2fp7.png" 
                alt="Operating printer in modern office" 
                className="w-full h-auto object-cover select-none block" 
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[#0284c7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 block">
              Purpose &amp; Commitment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0a1c3d] tracking-tight mb-5 leading-tight">
              OUR MISSION FOR SMOOTHER PRINTING
            </h2>

            <div className="text-sm sm:text-base leading-relaxed text-gray-600 space-y-4 mb-8">
              <p>
                Our mission is to make printer maintenance and troubleshooting simple and stress-free, even for users with limited technical background. We cover common day-to-day challenges—including driver installation, network setup, offline errors, and Wi-Fi connectivity problems.
              </p>
              <p>
                Whether for home study or busy corporate offices, our guidance improves device performance and helps prevent recurring obstacles. Our focus is always on simplicity, accuracy, and getting you back to productive printing as quickly as possible.
              </p>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0284c7] flex items-center justify-center mb-2.5">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-1">Fast Solutions</h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Identify and fix error codes without wasted downtime.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0284c7] flex items-center justify-center mb-2.5">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-1">Accuracy First</h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Verified OEM drivers and proper configuration steps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0284c7] flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-1">Reliability</h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Long-term wireless stability and reduced paper jams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
