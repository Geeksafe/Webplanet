import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#0284c7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
              ABOUT Pixfix Digital
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111827] leading-[1.15] tracking-tight mb-5">
              Your Partner for<br className="hidden sm:inline" /> Better Printing.
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Pixfix digital provides reliable printing solutions, printer assistance, and practical services for homes, offices, and businesses.
            </p>
          </div>

          {/* Right Column: Hero Printer Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] overflow-hidden rounded-2xl shadow-md border border-gray-100 transition-transform duration-300 hover:shadow-lg">
              <img
                src="/about/about-hero-printer.jpg"
                alt="Printer ink cartridge installation and maintenance"
                className="w-full h-auto object-cover select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
