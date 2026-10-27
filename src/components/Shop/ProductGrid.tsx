import React from 'react';
import type { Product, SortOption } from './types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  totalResults: number;
  startIndex: number;
  endIndex: number;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  onSelectProduct?: (productId: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  totalResults,
  startIndex,
  endIndex,
  sortOption,
  onSortChange,
  onSelectProduct,
}) => {
  return (
    <div>
      {/* Grid Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-2">
        <p className="text-[13px] sm:text-[14px] text-gray-500 font-normal">
          {totalResults > 0 ? (
            <>
              Showing {startIndex}-{endIndex} of {totalResults} results
            </>
          ) : (
            'No results found'
          )}
        </p>

        {/* Sorting Dropdown */}
        <div className="relative inline-block text-left">
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="appearance-none bg-transparent border-none text-[13px] sm:text-[14px] text-gray-600 font-normal pr-6 py-1 cursor-pointer focus:outline-none"
          >
            <option value="default">Default sorting</option>
            <option value="price-low">Sort by price: low to high</option>
            <option value="price-high">Sort by price: high to low</option>
            <option value="name">Sort by name: A to Z</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-400">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* 3-Column Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg p-12 text-center border border-gray-100">
          <p className="text-gray-500 text-sm mb-2">No products found matching your selection.</p>
          <p className="text-gray-400 text-xs">Try adjusting your filters or search keywords.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
