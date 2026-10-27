import React, { useState } from 'react';
import type { ProductDetail } from './types';
import { useCart } from '../Cart/CartContext';

interface ProductOverviewProps {
  product: ProductDetail;
  onNavigate: (page: 'home' | 'shop') => void;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ product, onNavigate }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
      quantity
    );
    openCart();
  };

  return (
    <div className="flex flex-col">
      <div className="text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
        {product.category}
      </div>

      <h1 className="text-[26px] sm:text-[30px] font-bold text-gray-900 leading-tight mb-3">
        {product.title}
      </h1>

      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-[22px] font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        {product.freeShipping && (
          <span className="text-[13px] text-gray-500 font-normal">
            + Free Shipping
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 mb-7 text-[13.5px] leading-relaxed text-gray-700">
        {product.features.map((feature, idx) => (
          <div key={idx} className="flex flex-col">
            <h4 className="font-bold text-gray-900 text-[14px]">
              {feature.title}
            </h4>
            <p className="text-gray-600 mt-0.5">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-7 pt-2">
        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-[42px] bg-white">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 cursor-pointer border-none bg-transparent"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-12 h-full text-center text-sm font-semibold text-gray-800 border-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 cursor-pointer border-none bg-transparent"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="h-[42px] px-8 bg-[#0284c7] hover:bg-[#0369a1] text-white text-[13px] font-bold tracking-wider uppercase rounded transition-colors cursor-pointer border-none shadow-sm flex items-center justify-center"
        >
          Add To Cart
        </button>
      </div>

      <div className="border-t border-gray-100 pt-5 flex flex-col gap-1.5 text-[12.5px] text-gray-600">
        <div>
          <span className="font-semibold text-gray-800">SKU:</span> {product.sku}
        </div>
        <div>
          <span className="font-semibold text-gray-800">Category:</span>{' '}
          <button
            onClick={() => onNavigate('shop')}
            className="text-[#0284c7] hover:underline cursor-pointer bg-transparent border-none p-0"
          >
            {product.category}
          </button>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Tag:</span> {product.tag}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
