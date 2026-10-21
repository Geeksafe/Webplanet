import React, { useMemo } from 'react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import ProductGallery from '../components/ProductDetail/ProductGallery';
import ProductOverview from '../components/ProductDetail/ProductOverview';
import ProductSpecsTable from '../components/ProductDetail/ProductSpecsTable';
import RelatedProducts from '../components/ProductDetail/RelatedProducts';
import { getProductDetailById, getRelatedProducts } from '../components/ProductDetail/productDetailsData';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: 'home' | 'shop' | 'about' | 'contact') => void;
  onSelectProduct: (productId: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  productId,
  onNavigate,
  onSelectProduct,
}) => {
  // Fetch product details dynamically (mocked locally, ready for future API replacement)
  const product = useMemo(() => getProductDetailById(productId), [productId]);
  const relatedProducts = useMemo(() => getRelatedProducts(productId, 3), [productId]);

  const handleSelectRelated = (id: string) => {
    onSelectProduct(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-800">
      {/* 1. TOPBAR */}
      <Header onNavigate={onNavigate} currentPage="shop" />

      {/* 2. OPTIONAL COUPON ALERT NOTIFICATION (as in Image 2 & 3) */}
      {product.couponAlert && (
        <div className="w-full bg-[#fdf2f2] border-t-2 border-b border-[#e02424]/30 py-2.5 px-4">
          <div className="max-w-[1400px] mx-auto flex items-center gap-2.5 text-[13px] text-[#9b1c1c]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e02424" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{product.couponAlert}</span>
          </div>
        </div>
      )}

      {/* 3. MAIN PRODUCT DETAIL CONTAINER */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="text-[13px] text-gray-400 mb-6 flex flex-wrap items-center gap-1.5 font-normal">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-gray-700 text-gray-400 cursor-pointer bg-transparent border-none p-0 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button 
            onClick={() => onNavigate('shop')} 
            className="hover:text-gray-700 text-gray-400 cursor-pointer bg-transparent border-none p-0 transition-colors"
          >
            {product.category}
          </button>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate max-w-[320px] sm:max-w-none">
            {product.title}
          </span>
        </nav>

        {/* 2-Column Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Gallery */}
          <ProductGallery images={product.gallery} title={product.title} />

          {/* Right: Overview & Purchase Controls */}
          <ProductOverview product={product} onNavigate={onNavigate} />
        </div>

        {/* 4. TABS & SPECIFICATIONS TABLE */}
        <ProductSpecsTable
          productId={product.id}
          specifications={product.specifications}
          productTitle={product.title}
        />

        {/* 5. RELATED PRODUCTS */}
        <RelatedProducts
          products={relatedProducts}
          onSelectProduct={handleSelectRelated}
        />
      </main>

      {/* 6. FLOATING CART */}
      <FloatingCart />

      {/* 7. FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProductDetail;
