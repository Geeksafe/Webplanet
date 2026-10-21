import React from 'react';
import { useCart } from './CartContext';

interface CartDrawerProps {
  onNavigateToProduct?: (productId: string) => void;
  onNavigateToShop?: () => void;
  onNavigateToCheckout?: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  onNavigateToProduct,
  onNavigateToShop,
  onNavigateToCheckout,
}) => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    total,
    totalCount,
  } = useCart();

  const handleItemClick = (id: string) => {
    if (onNavigateToProduct) {
      onNavigateToProduct(id);
      closeCart();
    }
  };

  const handleProceedToCheckout = () => {
    closeCart();
    if (onNavigateToCheckout) {
      onNavigateToCheckout();
    } else {
      window.location.hash = '#checkout';
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* 1. Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-black/45 z-50 transition-opacity backdrop-blur-[1px]"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* 2. Slide-over Drawer Panel */}
      <aside 
        className="fixed inset-y-0 right-0 z-50 w-full max-w-[420px] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out"
        role="dialog"
        aria-modal="true"
        aria-label="Review Your Cart"
      >
        {/* Drawer Header */}
        <div className="px-6 py-4.5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
          {/* Close Arrow Button (Points right to slide away) */}
          <button
            type="button"
            onClick={closeCart}
            className="text-gray-600 hover:text-black p-1 -ml-1 transition-colors cursor-pointer bg-transparent border-none flex items-center justify-center"
            title="Close Cart"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Title */}
          <h2 className="text-[18px] font-bold text-gray-900 tracking-tight">
            Review Your Cart
          </h2>

          {/* Total Items Badge */}
          <span className="w-6 h-6 bg-[#f1f3f5] text-gray-700 rounded text-[12px] font-bold flex items-center justify-center shrink-0">
            {totalCount}
          </span>
        </div>

        {/* Drawer Body - Scrollable Items List */}
        <div className="flex-1 overflow-y-auto px-6 divide-y divide-gray-100">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </div>
              <p className="text-gray-800 font-semibold text-[15px] mb-1">Your cart is empty</p>
              <p className="text-gray-500 text-[13px] mb-5">Explore our wide collection of printers and scanners.</p>
              {onNavigateToShop && (
                <button
                  type="button"
                  onClick={() => {
                    closeCart();
                    onNavigateToShop();
                  }}
                  className="px-5 py-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-[13px] font-semibold rounded transition-colors cursor-pointer border-none"
                >
                  Browse Shop
                </button>
              )}
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="py-4.5 flex items-center gap-3.5">
                {/* Thumbnail */}
                <div 
                  onClick={() => handleItemClick(item.id)}
                  className="w-[68px] h-[68px] rounded bg-[#f8f9fa] border border-gray-100 p-1.5 flex items-center justify-center shrink-0 cursor-pointer hover:border-gray-300 transition-colors"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 pr-1">
                  <h4 
                    onClick={() => handleItemClick(item.id)}
                    className="text-[13px] font-semibold text-[#0284c7] hover:underline cursor-pointer leading-snug line-clamp-2 mb-1 transition-colors"
                  >
                    {item.title}
                  </h4>
                  <div className="text-[13.5px] font-bold text-gray-900 mb-1">
                    ${(item.price * item.quantity).toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-[10.5px] font-bold text-[#0284c7] underline hover:text-[#0369a1] uppercase tracking-wider cursor-pointer border-none bg-transparent p-0"
                  >
                    REMOVE
                  </button>
                </div>

                {/* Vertical Stepper Counter */}
                <div className="w-[26px] border border-gray-200 rounded flex flex-col items-center bg-white text-[11px] shrink-0 overflow-hidden select-none">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-full h-[22px] flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 cursor-pointer border-none bg-transparent transition-colors font-semibold"
                    title="Increase quantity"
                  >
                    +
                  </button>
                  <span className="w-full h-[22px] flex items-center justify-center font-bold text-gray-800 border-t border-b border-gray-200 bg-white">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-full h-[22px] flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 cursor-pointer border-none bg-transparent transition-colors font-semibold"
                    title="Decrease quantity"
                  >
                    -
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer (Totals & Checkout) */}
        {items.length > 0 && (
          <div className="border-t border-gray-200/80 bg-white shrink-0">
            {/* Totals Summary */}
            <div className="px-6 py-4 flex flex-col gap-2.5 text-[13.5px]">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">Subtotal</span>
                <span className="font-bold text-gray-900">
                  ${subtotal.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[14px]">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-gray-900 text-[16px]">
                  ${total.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <div className="px-6 pb-6 pt-1">
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full py-3 bg-[#0284c7] hover:bg-[#0369a1] text-white text-[13.5px] font-bold rounded shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer border-none"
              >
                Proceed to Checkout →
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
