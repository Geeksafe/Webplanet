import React from 'react';
import { FileText, Download, Printer, Wifi } from 'lucide-react';

const issues = [
  {
    Icon: FileText,
    title: 'Paper Jam Issue',
    description: "Paper jams disrupt your workflow and strain internal rollers. Our service quickly pinpoints the obstruction, safely extracts stuck paper, and checks the feed mechanism to prevent recurring jams.",
  },
  {
    Icon: Download,
    title: 'Driver Updates',
    description: 'Keep your printer communicating reliably with your PC or Mac. We verify, update, and install the latest manufacturer drivers to resolve spooler errors and system compatibility conflicts.',
  },
  {
    Icon: Printer,
    title: 'Fix Offline Printer',
    description: 'Is your printer stuck on "Offline"? We diagnose IP sleep states, re-establish computer-to-printer network ports, and get your device ready for immediate, uninterrupted printing.',
  },
  {
    Icon: Wifi,
    title: 'Printer Wi-Fi Issue',
    description: 'Trouble connecting to your home or office Wi-Fi? We diagnose router band mismatches, re-sync wireless credentials, and establish stable connections for effortless wireless printing.',
  },
];

const Issues: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#182638] via-[#203147] to-[#182638] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sky-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 block">
            Diagnostic Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight text-white mb-3">
            COMMON PRINTER ISSUES WE RESOLVE
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Encountering unexpected errors? Here are the most frequent printing obstacles our specialists diagnose and fix quickly.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {issues.map((issue, index) => {
            const IconComponent = issue.Icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-7 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Accent Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Step / Number Pill */}
                  <div className="flex justify-end mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-300 group-hover:text-sky-500 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Icon Mark: blue on normal, white icon on solid blue background on hover */}
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center mx-auto mb-5 shadow-xs group-hover:scale-110 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 transition-colors duration-300 text-current" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold mb-3 text-gray-900 group-hover:text-[#0284c7] transition-colors">
                    {issue.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {issue.description}
                  </p>
                </div>

                {/* Bottom Subtle Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center text-xs font-semibold text-[#0284c7]">
                  <span>Expert Guidance Available</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Issues;
