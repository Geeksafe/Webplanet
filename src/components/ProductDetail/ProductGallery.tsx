import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeImage = images[activeImageIndex] || images[0] || '/products/hp_deskjet_cyan.jpg';

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square bg-white rounded-lg border border-gray-100 p-8 flex items-center justify-center overflow-hidden group shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <img
          src={activeImage}
          alt={title}
          className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-105"
        />

        <button
          type="button"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 border border-gray-200 text-gray-500 hover:text-black flex items-center justify-center shadow-sm cursor-pointer transition-colors"
          title="Zoom image"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </button>
      </div>

      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto py-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              className={`w-20 h-20 shrink-0 rounded-md border p-2 bg-white flex items-center justify-center cursor-pointer transition-all ${
                activeImageIndex === idx
                  ? 'border-gray-800 shadow-sm'
                  : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`${title} view ${idx + 1}`} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
