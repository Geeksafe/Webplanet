import React from 'react';
import type { Product } from '../Shop/types';

interface RelatedProductsProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, onSelectProduct }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="w-full mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-[24px] font-bold text-gray-900 mb-8">
        Related products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product.id)}
            className="group flex flex-col bg-white rounded-lg p-3 sm:p-4 border border-transparent hover:border-gray-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
          >
            <div className="w-full aspect-square bg-[#fcfcfd] rounded-md overflow-hidden flex items-center justify-center p-4 mb-3 border border-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
              />
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="text-[14px] font-bold text-gray-900 leading-snug line-clamp-2 min-h-[38px] mb-1 group-hover:text-[#0284c7] transition-colors">
                {product.title}
              </h3>

              <p className="text-[12px] text-[#0284c7] mb-2 truncate">
                {product.categoryLabel || product.category}
              </p>

              <span className="text-[15px] font-extrabold text-gray-900 mt-auto">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
