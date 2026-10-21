import React from 'react';

interface AboutCtaProps {
  onNavigate?: (page: 'home' | 'shop') => void;
}

const AboutCta: React.FC<AboutCtaProps> = ({ onNavigate }) => {
  return (
    <section className="bg-white py-16 sm:py-20 text-center">
      <div className="max-w-[800px] mx-auto px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
          Ready For Better Printing?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          Find the right printing solution for your needs.
        </p>
        <button
          type="button"
          onClick={() => onNavigate?.('shop')}
          className="inline-block bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border-none"
        >
          EXPLORE PRINTERS
        </button>
      </div>
    </section>
  );
};

export default AboutCta;
