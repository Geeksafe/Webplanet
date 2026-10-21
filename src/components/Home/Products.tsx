import React from 'react';
import { ArrowRight, ShoppingBag, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import type { NavPage } from '../../types/navigation';

interface ProductsProps {
  onNavigate?: (page: NavPage | any, category?: string | null) => void;
}

interface ProductCategoryItem {
  categoryKey: string;
  slug: string;
  badge: string;
  modelCount: string;
  categoryTag: string;
  title: string;
  series: string;
  description: string;
  image: string;
  priceHint: string;
  features: string[];
}

const productCategories: ProductCategoryItem[] = [
  {
    categoryKey: 'Small and Medium Office',
    slug: 'small-medium',
    badge: 'Home & Small Office',
    modelCount: '7 Models',
    categoryTag: 'Small & Medium Office',
    title: 'Small & Medium Office Printers',
    series: 'DeskJet All-in-One Series',
    description: 'Everyday color printing, scanning, and copying tailored for personal workspaces, remote desks, and student homework.',
    image: '/products/hp-deskjet-2825e-all-in-one-printer-1.webp',
    priceHint: 'From $59.99',
    features: ['Vibrant Color Printing', 'Wireless Scan & Copy', 'HP Smart Mobile App'],
  },
  {
    categoryKey: 'Enterprise Printer',
    slug: 'enterprise',
    badge: 'Heavy Duty & Speed',
    modelCount: '9 Models',
    categoryTag: 'Workplace & Enterprise',
    title: 'Enterprise LaserJet Printers',
    series: 'LaserJet Pro Commercial Series',
    description: 'High-speed monochrome and color laser printing with rapid page speeds, automatic two-sided duplexing, and enterprise networking.',
    // Note: uses exact .jpg filename in public/products/ to prevent missing image
    image: '/products/hp-laserjet-pro-4001dn-printer-1.jpg',
    priceHint: 'From $79.00',
    features: ['Ultra-Fast PPM Output', 'Automatic 2-Sided Duplex', 'Gigabit Ethernet & Security'],
  },
  {
    categoryKey: 'Scanners',
    slug: 'scanners',
    badge: 'Precision Digitization',
    modelCount: '6 Models',
    categoryTag: 'Document & Pro Digitization',
    title: 'High-Speed Document Scanners',
    series: 'ScanJet Professional Series',
    description: 'Dedicated professional sheet-fed and flatbed document scanners engineered for high-resolution digitization, automated ADF, and OCR archiving.',
    image: '/products/hp-scanjet-pro-2600-f1-scanner-1.jpeg',
    priceHint: 'From $439.00',
    features: ['High-Res Optical Scanning', 'Auto Document Feeder (ADF)', 'Direct-to-PDF & OCR'],
  },
];

const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const handleCategoryClick = (categoryKey: string, slug: string) => {
    // 1. Update hash for clean bookmarking and router listener
    window.location.hash = `#shop/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 2. Trigger programmatic router navigation with category filter
    if (onNavigate) {
      onNavigate('shop', categoryKey);
    }
  };

  const handleViewAll = () => {
    window.location.hash = '#shop';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onNavigate) {
      onNavigate('shop', null);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#f8fafc] border-t border-slate-200/60" id="home-categories">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-[#0284c7] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100/80 shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            Featured Hardware Categories
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0a1c3d] tracking-tight mb-3">
            EXPLORE OUR PRINTER CATEGORIES
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Browse dependable printing and scanning hardware tailored for personal desks, high-volume office workloads, and professional digitizing.
          </p>
        </div>

        {/* 3 Real Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 mb-12">
          {productCategories.map((item) => (
            <div
              key={item.categoryKey}
              onClick={() => handleCategoryClick(item.categoryKey, item.slug)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(2,132,199,0.18)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Product Image Frame with safe containment */}
                <div className="w-full h-56 sm:h-60 bg-gradient-to-b from-slate-50/90 to-slate-100/70 rounded-xl overflow-hidden flex items-center justify-center p-5 mb-5 relative border border-slate-100/80">
                  {/* Category Badge Top-Left */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#0284c7] px-3 py-1 rounded-full border border-sky-100 shadow-2xs z-10">
                    {item.badge}
                  </span>

                  {/* Model Count Badge Top-Right */}
                  <span className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-sm text-[10.5px] font-semibold text-white px-2.5 py-1 rounded-full shadow-2xs z-10">
                    {item.modelCount}
                  </span>

                  {/* Hardware Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-106 transition-transform duration-500 select-none drop-shadow-md"
                    loading="lazy"
                  />
                </div>

                {/* Subtitle / Series */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-wider block">
                    {item.categoryTag}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.series}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1c3d] group-hover:text-[#0284c7] transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.features.map((feat, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-sky-600 shrink-0" />
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Price and Stock Indicator */}
                <div className="flex items-center justify-between text-xs py-2 px-3 bg-slate-50/80 rounded-lg border border-slate-100 mb-5">
                  <span className="text-slate-500 font-medium">Starting at:</span>
                  <span className="text-[#0a1c3d] font-bold text-sm">{item.priceHint}</span>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-xs sm:text-[13px] font-bold text-slate-700 group-hover:text-[#0284c7] inline-flex items-center gap-1.5 transition-colors">
                  <span>Browse {item.title.split(' ')[0]} Printers</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <span className="w-9 h-9 rounded-lg bg-sky-50 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                  <ShoppingBag className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0a1c3d] to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-400 hidden sm:flex">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                Explore All 22 Hardware Models & Accessories
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Compare specifications, prices, and capabilities across all our Small Office, Enterprise LaserJet, and ScanJet models.
              </p>
            </div>
          </div>

          <button
            onClick={handleViewAll}
            className="w-full sm:w-auto shrink-0 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-none shadow-md hover:shadow-sky-500/25"
          >
            <span>View Complete Catalog (22 Products)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
