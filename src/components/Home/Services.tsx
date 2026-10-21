import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { NavPage } from '../../types/navigation';

interface ServicesProps {
  onNavigate?: (page: NavPage | any) => void;
}

const services = [
  {
    badge: 'Diagnostics',
    image: 'https://webplanets.online/wp-content/uploads/2026/09/ChatGPT-Image-Sep-21-2026-02_06_57-PM-1536x867.png',
    title: 'PRINTER ISSUE DIAGNOSIS & SOLUTIONS',
    description: "When your printer isn't working properly, our troubleshooting service helps identify the exact cause and provides effective solutions. We handle printing errors, connectivity issues, driver problems, paper jams, slow printing, and software conflicts.",
  },
  {
    badge: 'Installation',
    image: 'https://webplanets.online/wp-content/uploads/2026/09/ChatGPT-Image-Sep-21-2026-02_09_05-PM-1536x848.png',
    title: 'PRINTER SETUP & OPTIMIZATION',
    description: 'Ensure your printer is installed correctly and calibrated for peak efficiency. From connecting the device and installing manufacturer drivers to configuring print preferences and mobile device pairing.',
  },
  {
    badge: 'Connectivity',
    image: 'https://webplanets.online/wp-content/uploads/2026/09/ChatGPT-Image-Sep-21-2026-02_10_24-PM-1536x877.png',
    title: 'WI-FI & NETWORK PERFORMANCE OPTIMIZATION',
    description: 'Maintain a fast, stable, and reliable connection for your printer and connected devices. We resolve IP conflicts, fix recurring "Printer Offline" states, and configure dual-band wireless router sync.',
  },
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 bg-[#f8fafc]" id="home-services">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#0284c7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 block">
            Comprehensive Support
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0a1c3d] tracking-tight mb-3">
            OUR PRINTER SERVICES
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Professional guidance, hardware diagnostics, and network configuration to keep your home or office equipment running reliably.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(2,132,199,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Box */}
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[10px] font-bold text-sky-700 px-3 py-1 rounded-md border border-slate-100 shadow-xs uppercase tracking-wider">
                  {service.badge}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900 group-hover:text-[#0284c7] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => onNavigate?.('services')}
                    className="text-xs font-bold text-[#0284c7] hover:text-[#0369a1] inline-flex items-center gap-1.5 transition-colors bg-transparent border-none p-0 cursor-pointer"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
