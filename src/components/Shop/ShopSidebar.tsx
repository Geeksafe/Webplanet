import React, { useState } from 'react';
import { bestSellers } from './productsData';

interface ShopSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  categoryCounts: {
    enterprise: number;
    scanners: number;
    smallMedium: number;
  };
  onSelectProduct?: (productId: string) => void;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  categoryCounts,
  onSelectProduct,
}) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [maxPrice, setMaxPrice] = useState(priceRange[1]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localSearch);
  };

  const handleFilterClick = () => {
    onPriceChange([priceRange[0], maxPrice]);
  };

  return (
    <aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
      <div className="bg-white rounded-lg border border-gray-200/80 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="flex-1 bg-transparent text-[13.5px] text-gray-800 placeholder-gray-400 py-2 px-3 border border-r-0 border-gray-200 rounded-l focus:outline-none focus:border-[#0284c7]"
          />
          <button
            type="submit"
            className="bg-[#0284c7] hover:bg-[#0369a1] text-white p-2.5 rounded-r flex items-center justify-center transition-colors cursor-pointer border-none"
            title="Search"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg border border-gray-200/80 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <h3 className="text-[15px] font-bold text-gray-900 mb-4">
          Filter by Price
        </h3>

        <div className="relative mb-5 flex items-center h-5">
          <div className="w-full h-1 bg-gray-200 rounded-full relative pointer-events-none">
            <div 
              className="absolute h-1 bg-gray-900 rounded-full left-0 top-0" 
              style={{ width: `${Math.min(100, Math.max(0, ((maxPrice - 50) / (1710 - 50)) * 100))}%` }}
            ></div>
          </div>
          <input 
            type="range" 
            min="50" 
            max="1710" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="price-slider"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={handleFilterClick}
            className="bg-[#0284c7] hover:bg-[#0369a1] text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded transition-colors cursor-pointer border-none"
          >
            FILTER
          </button>
          <span className="text-[12px] text-gray-600 font-medium">
            Price: ${priceRange[0]} -  ${maxPrice.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200/80 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[15px] font-bold text-gray-900">
            Categories
          </h3>
          {selectedCategory && (
            <button
              onClick={() => onSelectCategory(null)}
              className="text-[11px] text-[#0284c7] hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        <ul className="space-y-2.5 list-none m-0 p-0 text-[13px]">
          <li>
            <button
              onClick={() => onSelectCategory(selectedCategory === 'Enterprise Printer' ? null : 'Enterprise Printer')}
              className={`w-full flex items-center justify-between text-left py-1 transition-colors cursor-pointer bg-transparent border-none p-0 ${
                selectedCategory === 'Enterprise Printer' ? 'text-[#0284c7] font-bold' : 'text-gray-700 hover:text-black font-normal'
              }`}
            >
              <span>Enterprise Printer</span>
              <span className="text-gray-400">({categoryCounts.enterprise})</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onSelectCategory(selectedCategory === 'Scanners' ? null : 'Scanners')}
              className={`w-full flex items-center justify-between text-left py-1 transition-colors cursor-pointer bg-transparent border-none p-0 ${
                selectedCategory === 'Scanners' ? 'text-[#0284c7] font-bold' : 'text-gray-700 hover:text-black font-normal'
              }`}
            >
              <span>Scanners</span>
              <span className="text-gray-400">({categoryCounts.scanners})</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onSelectCategory(selectedCategory === 'Small and Medium Office' ? null : 'Small and Medium Office')}
              className={`w-full flex items-center justify-between text-left py-1 transition-colors cursor-pointer bg-transparent border-none p-0 ${
                selectedCategory === 'Small and Medium Office' ? 'text-[#0284c7] font-bold' : 'text-gray-700 hover:text-black font-normal'
              }`}
            >
              <span className="truncate pr-2">Small and Medium Office</span>
              <span className="text-gray-400 shrink-0">({categoryCounts.smallMedium})</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg border border-gray-200/80 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <h3 className="text-[15px] font-bold text-gray-900 mb-4">
          Our Best Sellers
        </h3>

        <div className="flex flex-col divide-y divide-gray-100">
          {bestSellers.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelectProduct?.(item.id)}
              className="py-3.5 first:pt-0 last:pb-0 flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-12 h-12 shrink-0 bg-[#f8f9fa] rounded p-1 flex items-center justify-center border border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-[12.5px] font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-[#0284c7] transition-colors mb-1">
                  {item.title}
                </h4>
                <span className="text-[12.5px] font-bold text-gray-900">
                  ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
