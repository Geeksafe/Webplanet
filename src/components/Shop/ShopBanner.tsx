import React from 'react';
import { Filter, X } from 'lucide-react';

interface ShopBannerProps {
  onNavigate: (page: any) => void;
  selectedCategory?: string | null;
  onClearCategory?: () => void;
  totalResults?: number;
}

const ShopBanner: React.FC<ShopBannerProps> = ({
  onNavigate,
  selectedCategory,
  onClearCategory,
  totalResults,
}) => {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-[13px] text-gray-400 mb-2 flex items-center gap-1.5 font-normal flex-wrap">
        <button 
          onClick={() => onNavigate('home')} 
          className="hover:text-gray-700 text-gray-400 cursor-pointer bg-transparent border-none p-0 transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <button
          onClick={() => {
            if (selectedCategory && onClearCategory) {
              onClearCategory();
            } else {
              onNavigate('shop');
            }
          }}
          className={`${selectedCategory ? 'hover:text-gray-700 text-gray-400 cursor-pointer' : 'text-gray-500 font-medium'} bg-transparent border-none p-0 transition-colors`}
        >
          Shop
        </button>
        {selectedCategory && (
          <>
            <span>/</span>
            <span className="text-[#0284c7] font-semibold truncate max-w-[280px]">
              {selectedCategory}
            </span>
          </>
        )}
      </nav>

      {/* Main Title */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-5">
        <h1 className="text-[32px] sm:text-[38px] font-bold text-gray-900 tracking-tight m-0">
          {selectedCategory ? selectedCategory : 'Hardware & Printer Shop'}
        </h1>
        {selectedCategory && totalResults !== undefined && (
          <span className="text-sm font-medium text-gray-500">
            {totalResults} {totalResults === 1 ? 'model' : 'models'} found
          </span>
        )}
      </div>

      {/* Active Category Filter Pill Bar */}
      {selectedCategory && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-sky-50 to-blue-50/60 border border-sky-100 rounded-xl px-4 sm:px-5 py-3 mb-5 shadow-2xs">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="flex items-center gap-1 text-[11px] font-bold text-[#0284c7] uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5" />
              Active Filter:
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-white px-3 py-1 rounded-full border border-sky-200/80 shadow-2xs">
              <span>{selectedCategory}</span>
              {onClearCategory && (
                <button
                  onClick={onClearCategory}
                  className="w-4 h-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer border-none p-0 transition-colors"
                  title="Clear filter"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              )}
            </span>
          </div>
          {onClearCategory && (
            <button
              onClick={onClearCategory}
              className="text-xs font-semibold text-[#0284c7] hover:text-[#0369a1] hover:underline cursor-pointer bg-transparent border-none p-0 transition-colors"
            >
              Reset to view all 22 products →
            </button>
          )}
        </div>
      )}

      {/* Hero Printer Image Card */}
      <div className="bg-white rounded-xl border border-gray-200/70 p-4 sm:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="w-full flex items-center justify-center bg-white">
          <img 
            src="/shop-hero-printer.jpg" 
            alt="HP All-in-One Printer" 
            className="w-full max-h-[380px] object-contain mx-auto select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
