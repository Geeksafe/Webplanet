import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { allProducts } from '../Shop/productsData';

interface BrandSelectionProps {
  onNavigate?: (page: 'home' | 'shop' | 'about' | 'contact') => void;
  onSelectProduct?: (productId: string) => void;
}

// Curated 8 popular featured products representing both Home/Office & Enterprise printers
const featuredIds = [
  'hp-deskjet-2825e-all-in-one-printer',
  'hp-deskjet-2855e-all-in-one-printer',
  'hp-deskjet-2925-all-in-one-printer',
  'hp-deskjet-4355-all-in-one-printer',
  // 'hp-laserjet-pro-4001dn-printer',
  // 'hp-laserjet-pro-4001dw-printer',
  // 'hp-laserjet-pro-4001n-printer',
  // 'hp-laserjet-pro-m118dw-printer',
];

const featuredProducts = featuredIds
  .map((id) => allProducts.find((p) => p.id === id))
  .filter((p): p is typeof allProducts[0] => Boolean(p));

const BrandSelection: React.FC<BrandSelectionProps> = ({ onNavigate, onSelectProduct }) => {
  return (
    <section className="py-20 sm:py-24 bg-white" id="featured-products">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#0284c7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 block">
            Featured Collection
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0a1c3d] tracking-tight mb-3">
            POPULAR PRINTERS & HARDWARE
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Explore our best-selling all-in-one inkjet and high-efficiency laser printers for home and business.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct?.(product.id)}
              className="group relative flex flex-col bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(2,132,199,0.16)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Product Image Box */}
              <div className="w-full aspect-square bg-[#f8fafc] rounded-xl overflow-hidden flex items-center justify-center p-4 mb-4 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 select-none drop-shadow-sm"
                  loading="lazy"
                />
                <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-[10px] font-semibold text-gray-600 px-2.5 py-1 rounded-md border border-gray-100 shadow-2xs">
                  {product.categoryLabel || product.category}
                </span>
              </div>

              {/* Title & Price */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug line-clamp-2 min-h-[42px] mb-2 group-hover:text-[#0284c7] transition-colors">
                    {product.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[11px] text-gray-400 block leading-none mb-1">Price</span>
                    <span className="text-[17px] font-black text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  <span className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ShoppingBag className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            type="button"
            onClick={() => onNavigate?.('shop')}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer border-none"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandSelection;
