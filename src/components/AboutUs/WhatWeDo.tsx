import React from 'react';

const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-[#3e476c] text-white py-14 sm:py-18 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Centered Section Title */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white">
            What We Do
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Descriptive text */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 text-gray-200 text-sm sm:text-base leading-relaxed">
            <p>
              We provide reliable printer guidance to help users install, connect, and troubleshoot their devices with ease. Our services include driver and software assistance, Wi-Fi and network troubleshooting, and solutions for common printer issues. With clear instructions, transparent processes, and hands-on support, we ensure your printer remains functional and hassle-free.
            </p>
            <p>
              We assist users in both home and office environments to address everyday printing challenges efficiently and clearly. From verifying device compatibility to resolving connectivity and performance issues, our service-first, customer-focused approach provides straightforward guidance and reliable support—ensuring long-term printer performance and a smoother, hassle-free printing experience.
            </p>
          </div>

          {/* Right Column: Office Workspace Printer Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] overflow-hidden rounded-2xl shadow-xl border border-white/10 transition-transform duration-300 hover:scale-[1.01]">
              <img
                src="/about/about-what-we-do.jpg"
                alt="Printer setup and workspace with printed materials and supplies"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
