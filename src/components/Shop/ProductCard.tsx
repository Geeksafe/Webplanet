import React from 'react';
import type { Product } from './types';

interface ProductCardProps {
  product: Product;
  onSelectProduct?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div 
      onClick={() => onSelectProduct?.(product.id)}
      className="group flex flex-col bg-white rounded-lg p-3 sm:p-4 transition-all duration-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-100 cursor-pointer"
    >
      <div className="w-full aspect-square bg-[#fcfcfd] rounded-md overflow-hidden flex items-center justify-center p-3 mb-3">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="text-[14px] sm:text-[14.5px] font-bold text-gray-900 leading-snug line-clamp-2 min-h-[40px] mb-1 group-hover:text-[#0284c7] transition-colors">
          {product.title}
        </h3>
        
        <p className="text-[12px] font-normal text-[#0284c7] mb-2 truncate">
          {product.categoryLabel || product.category}
        </p>

        <div className="mt-auto pt-1 flex items-center justify-between">
          <span className="text-[15px] font-extrabold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
