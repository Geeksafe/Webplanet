import React from 'react';
import { useCart } from './CartContext';

const FloatingCart: React.FC = () => {
  const { totalCount, openCart } = useCart();

  return (
    <div className="fixed right-5 sm:right-6 bottom-24 sm:bottom-28 z-40 flex flex-col items-center gap-3">
      {/* Floating Cart Button */}
      <button 
        type="button"
        onClick={openCart}
        className="w-11 h-11 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 relative cursor-pointer border-none"
        title="View Cart"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-emerald-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
          {totalCount}
        </span>
      </button>
    </div>
  );
};

export default FloatingCart;
