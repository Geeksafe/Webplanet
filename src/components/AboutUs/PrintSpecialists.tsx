import React from 'react';

const PrintSpecialists: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 border-t border-gray-100/60">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Specialist Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-[540px] overflow-hidden rounded-2xl shadow-md border border-gray-100 transition-transform duration-300 hover:shadow-lg">
              <img
                src="/about/about-specialist.jpg"
                alt="Pixfix Digital friendly print support specialist in office"
                className="w-full h-auto object-cover select-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111827] leading-[1.25] tracking-tight mb-5">
              Ask anything—our print specialists are ready with answers.
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                We are an independent printer assistance service dedicated to helping users install, connect, and troubleshoot printers with confidence. Our team provides clear guidance, hands-on support, and transparent practices—without sales pressure or confusing offers. We simplify printer issues and deliver reliable solutions for both home and office users.
              </p>
              <p>
                We're a customer-focused printer assistance service committed to making printing simple and stress-free. Through clear guidance, transparent practices, and hands-on support, we help users resolve printer issues efficiently and confidently. Our goal is to deliver reliable, practical solutions that meet everyday printing needs—whether at home or in the office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintSpecialists;
