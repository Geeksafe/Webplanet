import React, { useState, useMemo, useEffect } from 'react';
import Header from '../components/auth/Header';
import ShopBanner from '../components/Shop/ShopBanner';
import ShopSidebar from '../components/Shop/ShopSidebar';
import ProductGrid from '../components/Shop/ProductGrid';
import Pagination from '../components/Shop/Pagination';
import FloatingCart from '../components/Cart/FloatingCart';
import Footer from '../components/Home/Footer';
import { allProducts } from '../components/Shop/productsData';
import type { SortOption } from '../components/Shop/types';

interface ShopProps {
  onNavigate: (page: any, category?: string | null) => void;
  onSelectProduct?: (productId: string) => void;
  initialCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
}

const Shop: React.FC<ShopProps> = ({ 
  onNavigate, 
  onSelectProduct, 
  initialCategory,
  onCategoryChange 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Resolve category from initial prop or current URL hash
  const getCategoryFromHash = (): string | null => {
    if (initialCategory) return initialCategory;
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('enterprise')) return 'Enterprise Printer';
      if (hash.includes('scanner')) return 'Scanners';
      if (hash.includes('small') || hash.includes('medium') || hash.includes('office')) return 'Small and Medium Office';
    }
    return null;
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(getCategoryFromHash);
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 1710]);
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // React to initialCategory prop changes from parent router
  useEffect(() => {
    if (initialCategory !== undefined) {
      setSelectedCategory(initialCategory);
      setCurrentPage(1);
    }
  }, [initialCategory]);

  // Listen to hash changes in case user navigates back/forward or clicks direct links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#shop') || hash.includes('shop')) {
        let matchedCat: string | null = null;
        if (hash.includes('enterprise')) {
          matchedCat = 'Enterprise Printer';
        } else if (hash.includes('scanner')) {
          matchedCat = 'Scanners';
        } else if (hash.includes('small') || hash.includes('medium') || hash.includes('office')) {
          matchedCat = 'Small and Medium Office';
        }
        setSelectedCategory(matchedCat);
        setCurrentPage(1);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    return {
      enterprise: allProducts.filter((p) => p.category === 'Enterprise Printer').length,
      scanners: allProducts.filter((p) => p.category === 'Scanners').length,
      smallMedium: allProducts.filter((p) => p.category === 'Small and Medium Office').length,
    };
  }, []);

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return allProducts
      .filter((product) => {
        // Search filter
        if (searchQuery.trim()) {
          const matchTitle = product.title.toLowerCase().includes(searchQuery.toLowerCase());
          const matchCat = product.category.toLowerCase().includes(searchQuery.toLowerCase());
          if (!matchTitle && !matchCat) return false;
        }

        // Category filter
        if (selectedCategory && product.category !== selectedCategory) {
          return false;
        }

        // Price filter
        if (product.price < priceRange[0] || product.price > priceRange[1]) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortOption === 'price-low') return a.price - b.price;
        if (sortOption === 'price-high') return b.price - a.price;
        if (sortOption === 'name') return a.title.localeCompare(b.title);
        return 0; // default order
      });
  }, [searchQuery, selectedCategory, priceRange, sortOption]);

  const totalResults = filteredProducts.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  // Paginated slice
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const startIndex = totalResults > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endIndex = Math.min(currentPage * itemsPerPage, totalResults);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    onCategoryChange?.(category);
    setCurrentPage(1);

    if (category === 'Enterprise Printer') {
      window.location.hash = '#shop/enterprise';
    } else if (category === 'Scanners') {
      window.location.hash = '#shop/scanners';
    } else if (category === 'Small and Medium Office') {
      window.location.hash = '#shop/small-medium';
    } else {
      window.location.hash = '#shop';
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fa] flex flex-col font-sans text-gray-800">
      {/* 1. TOP NAVIGATION */}
      <Header onNavigate={onNavigate} currentPage="shop" />

      {/* 2. MAIN SHOP CONTENT CONTAINER */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Sidebar Widgets */}
          <ShopSidebar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            priceRange={priceRange}
            onPriceChange={handlePriceChange}
            categoryCounts={categoryCounts}
            onSelectProduct={onSelectProduct}
          />

          {/* Right Column: Hero Banner, Products Grid & Pagination */}
          <div className="flex-1 w-full min-w-0">
            <ShopBanner 
              onNavigate={onNavigate} 
              selectedCategory={selectedCategory}
              onClearCategory={() => handleCategorySelect(null)}
              totalResults={totalResults}
            />

            <ProductGrid
              products={paginatedProducts}
              totalResults={totalResults}
              startIndex={startIndex}
              endIndex={endIndex}
              sortOption={sortOption}
              onSortChange={setSortOption}
              onSelectProduct={onSelectProduct}
            />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>

      {/* 3. FLOATING CART BADGE */}
      <FloatingCart />

      {/* 4. FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Shop;
