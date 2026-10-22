import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import BrandSetup from './pages/BrandSetup';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import ServicesPage from './pages/ServicesPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundReturn from './pages/RefundReturn';
import WarrantyInfo from './pages/WarrantyInfo';
import ShippingPolicy from './pages/ShippingPolicy';
import Sitemap from './pages/Sitemap';
import Checkout from './pages/Checkout';
import { CartProvider, CartDrawer } from './components/Cart';
import type { BrandId } from './components/BrandSetup';
import type { NavPage } from './types/navigation';

const App: React.FC = () => {
  const parseHash = (): { page: NavPage; id: string; brand: BrandId; category?: string | null } => {
    if (typeof window === 'undefined') {
      return { page: 'home', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }
    const hash = window.location.hash.toLowerCase();

    // Setup routes for brand printers
    if (hash.startsWith('#setup/')) {
      const b = hash.replace(/^#setup\//i, '').trim();
      const validBrand: BrandId = (['hp', 'canon', 'brother', 'epson'].includes(b) ? b : 'hp') as BrandId;
      return { page: 'setup', id: 'hp-deskjet-2820e', brand: validBrand, category: null };
    }

    if (hash === '#setup') {
      return { page: 'setup', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    if (hash.includes('hp-printer') || hash.includes('#hp')) {
      return { page: 'setup', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    if (hash.includes('canon-printer') || hash.includes('#canon')) {
      return { page: 'setup', id: 'hp-deskjet-2820e', brand: 'canon', category: null };
    }

    if (hash.includes('brother-printer') || hash.includes('#brother')) {
      return { page: 'setup', id: 'hp-deskjet-2820e', brand: 'brother', category: null };
    }

    if (hash.includes('epson-printer') || hash.includes('#epson')) {
      return { page: 'setup', id: 'hp-deskjet-2820e', brand: 'epson', category: null };
    }

    // Product detail route
    if (hash.startsWith('#product/')) {
      const id = window.location.hash.replace(/^#product\//i, '');
      return { page: 'product', id: id || 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    // FAQs route
    if (hash.includes('faq')) {
      return { page: 'faq', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    // Services route
    if (hash.includes('service')) {
      return { page: 'services', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    if (hash.includes('track')) {
      return { page: 'services', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    // Legal routes
    if (hash.includes('privacy')) {
      return { page: 'privacy-policy', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    if (hash.includes('terms')) {
      return { page: 'terms-of-service', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    if (hash.includes('refund') || hash.includes('return')) {
      return { page: 'refund-return', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    if (hash.includes('warranty')) {
      return { page: 'warranty-info', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    if (hash.includes('shipping')) {
      return { page: 'shipping-policy', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    if (hash.includes('sitemap')) {
      return { page: 'sitemap', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    // About route
    if (hash.includes('about')) {
      return { page: 'about', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    // Contact route
    if (hash.includes('contact')) {
      return { page: 'contact', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    // Checkout route
    if (hash.includes('checkout')) {
      return { page: 'checkout', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
    }

    // Shop route with optional category filter
    if (hash.startsWith('#shop') || hash.includes('shop')) {
      let cat: string | null = null;
      if (hash.includes('enterprise')) {
        cat = 'Enterprise Printer';
      } else if (hash.includes('scanner')) {
        cat = 'Scanners';
      } else if (hash.includes('small') || hash.includes('medium') || hash.includes('office')) {
        cat = 'Small and Medium Office';
      }
      return { page: 'shop', id: 'hp-deskjet-2820e', brand: 'hp', category: cat };
    }

    return { page: 'home', id: 'hp-deskjet-2820e', brand: 'hp', category: null };
  };

  const initial = parseHash();
  const [currentPage, setCurrentPage] = useState<NavPage>(initial.page);
  const [selectedProductId, setSelectedProductId] = useState<string>(initial.id);
  const [selectedBrand, setSelectedBrand] = useState<BrandId>(initial.brand);
  const [shopCategory, setShopCategory] = useState<string | null>(initial.category || null);

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash();
      setCurrentPage(parsed.page);
      if (parsed.id) {
        setSelectedProductId(parsed.id);
      }
      if (parsed.brand) {
        setSelectedBrand(parsed.brand);
      }
      if (parsed.page === 'shop') {
        setShopCategory(parsed.category || null);
      }

      // Track virtual pageview in TrafficGuard for Single Page App transitions
      if (typeof window !== 'undefined' && (window as any).dataTrafficGuard) {
        (window as any).dataTrafficGuard.push([
          'event',
          'pageview',
          JSON.stringify({ evs: 'spa', path: window.location.hash || '#home' })
        ]);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: NavPage | any, category?: string | null) => {
    setCurrentPage(page);
    if (page === 'shop') {
      const cat = category !== undefined ? category : null;
      setShopCategory(cat);
      if (cat === 'Enterprise Printer') {
        window.location.hash = '#shop/enterprise';
      } else if (cat === 'Scanners') {
        window.location.hash = '#shop/scanners';
      } else if (cat === 'Small and Medium Office') {
        window.location.hash = '#shop/small-medium';
      } else {
        window.location.hash = '#shop';
      }
    } else if (page === 'home') {
      window.location.hash = '#home';
    } else {
      window.location.hash = `#${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
    window.location.hash = `#product/${productId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBrand = (brandId: BrandId) => {
    setSelectedBrand(brandId);
    setCurrentPage('setup');
    window.location.hash = `#setup/${brandId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="app">
        {currentPage === 'setup' ? (
          <BrandSetup
            brand={selectedBrand}
            onNavigate={navigate}
            onSelectBrand={handleSelectBrand}
            onSelectProduct={handleSelectProduct}
          />
        ) : currentPage === 'product' ? (
          <ProductDetail
            productId={selectedProductId}
            onNavigate={navigate}
            onSelectProduct={handleSelectProduct}
          />
        ) : currentPage === 'shop' ? (
          <Shop
            onNavigate={navigate}
            onSelectProduct={handleSelectProduct}
            initialCategory={shopCategory}
            onCategoryChange={setShopCategory}
          />
        ) : currentPage === 'about' ? (
          <AboutUs
            onNavigate={navigate}
          />
        ) : currentPage === 'contact' ? (
          <ContactUs
            onNavigate={navigate}
          />
        ) : currentPage === 'faq' ? (
          <FAQ
            onNavigate={navigate}
          />
        ) : currentPage === 'services' ? (
          <ServicesPage
            onNavigate={navigate}
          />
        ) : currentPage === 'privacy-policy' ? (
          <PrivacyPolicy
            onNavigate={navigate}
          />
        ) : currentPage === 'terms-of-service' ? (
          <TermsOfService
            onNavigate={navigate}
          />
        ) : currentPage === 'refund-return' ? (
          <RefundReturn
            onNavigate={navigate}
          />
        ) : currentPage === 'warranty-info' ? (
          <WarrantyInfo
            onNavigate={navigate}
          />
        ) : currentPage === 'shipping-policy' ? (
          <ShippingPolicy
            onNavigate={navigate}
          />
        ) : currentPage === 'sitemap' ? (
          <Sitemap
            onNavigate={navigate}
            onSelectBrand={handleSelectBrand}
          />
        ) : currentPage === 'checkout' ? (
          <Checkout
            onNavigate={navigate}
          />
        ) : (
          <Home 
            onNavigate={navigate} 
            onSelectBrand={handleSelectBrand} 
            onSelectProduct={handleSelectProduct}
          />
        )}

        {/* Global Slide-over Cart Drawer */}
        <CartDrawer
          onNavigateToProduct={handleSelectProduct}
          onNavigateToShop={() => navigate('shop')}
          onNavigateToCheckout={() => navigate('checkout')}
        />
      </div>
    </CartProvider>
  );
};

export default App;
