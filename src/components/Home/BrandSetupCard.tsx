import React from 'react';
import type { BrandId } from '../BrandSetup';

export interface BrandSetupCardProps {
  onSelectBrand?: (brand: BrandId) => void;
  className?: string;
  prefixId?: string;
}

export const brands: { id: BrandId; name: string; imageUrl: string; title: string }[] = [
  {
    id: 'hp',
    name: 'HP',
    imageUrl: '/setup/brand_card_hp.png',
    title: 'HP Printer',
  },
  {
    id: 'canon',
    name: 'Canon',
    imageUrl: '/setup/brand_card_canon.png',
    title: 'Canon Printer',
  },
  {
    id: 'brother',
    name: 'brother',
    imageUrl: '/setup/brand_card_brother.png',
    title: 'Brother Printer',
  },
  {
    id: 'epson',
    name: 'EPSON',
    imageUrl: '/setup/brand_card_epson.png',
    title: 'Epson Printer',
  },
];

const BrandSetupCard: React.FC<BrandSetupCardProps> = ({
  onSelectBrand,
  className = '',
  prefixId = 'brand-setup',
}) => {
  return (
    <div className={className}>
      {/* Header */}
      <div className="text-center mb-7 sm:mb-8">
        <span className="text-[12px] font-bold tracking-widest text-lightBlue uppercase">
          Printer Setup &amp; Drivers
        </span>
        <h2 className="text-[22px] sm:text-[28px] font-extrabold text-[#0a1c3d] uppercase mt-1 mb-2">
          Select Your Printer Brand
        </h2>
        <p className="text-[13.5px] sm:text-[14.5px] text-gray-500 max-w-md mx-auto">
          Select your printer brand below to proceed with model configuration and driver setup.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {brands.map((brand) => (
          <div
            key={brand.id}
            id={`${prefixId}-${brand.id}`}
            onClick={() => onSelectBrand?.(brand.id)}
            className="group relative flex flex-col items-center justify-between p-5 sm:p-6 rounded-2xl border border-slate-100 hover:border-sky-300 bg-white hover:bg-sky-50/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="h-20 sm:h-24 w-full flex items-center justify-center mb-3">
              <img
                src={brand.imageUrl}
                alt={`${brand.name} logo`}
                className="max-h-full max-w-[120px] object-contain group-hover:scale-110 transition-transform duration-300 select-none"
              />
            </div>
            <span className="text-[14px] sm:text-[15px] font-bold text-gray-800 group-hover:text-lightBlue transition-colors mb-2.5">
              {brand.title}
            </span>
            <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-lightBlue bg-sky-100 group-hover:bg-lightBlue group-hover:text-white py-1.5 px-3 rounded-lg transition-colors w-full">
              Setup
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSetupCard;
