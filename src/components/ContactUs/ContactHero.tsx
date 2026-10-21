import React from 'react';

const ContactHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#eaf2f8] via-[#f3f7fa] to-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1f3b64] leading-[1.15] tracking-tight mb-4">
              Let's Get in Touch
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg">
              Need help with your printer, ink, paper, or printing requirements? We're here to help.
            </p>
          </div>

          {/* Right Column: Hero Printer & Specialist Photo */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] overflow-hidden rounded-2xl shadow-md border border-gray-100 transition-transform duration-300 hover:shadow-lg">
              <img
                src="/contact/contact-hero.jpg"
                alt="Pixfix Digital friendly customer support specialist at office printer"
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

export default ContactHero;
