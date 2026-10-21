import React from 'react';
import {
  Compass,
  Calendar,
  CheckCircle2,
  Home,
  ShoppingBag,
  Phone,
  Printer,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import LegalHero from '../components/Legal/LegalHero';
import LegalDualOverview from '../components/Legal/LegalDualOverview';
import LegalContactBox from '../components/Legal/LegalContactBox';
import type { NavPage } from '../types/navigation';
import type { BrandId } from '../components/BrandSetup';

interface SitemapProps {
  onNavigate: (page: NavPage) => void;
  onSelectBrand?: (brand: BrandId) => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onNavigate, onSelectBrand }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage={'sitemap' as any} />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <LegalHero
          tag="Website Directory & Navigation"
          titleWhite="Site"
          titleAccent="Map"
          subtitle="Explore all pages, setup tutorials, product categories, and store policies across Pixfix Digital in one clear directory."
          badges={[
            { icon: <Compass className="w-4 h-4" />, text: "Full Website Index" },
            { icon: <Calendar className="w-4 h-4" />, text: "Updated: 2026" },
            { icon: <CheckCircle2 className="w-4 h-4" />, text: "Instant Direct Access" },
          ]}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-8 relative z-20 pb-16">
          {/* Dual Overview */}
          <LegalDualOverview
            cardLeft={{
              icon: <Compass className="w-5 h-5" />,
              tag: "Intuitive Directory",
              title: "Everything at a Glance",
              description:
                "Easily navigate across our printer hardware collections, driver setup manuals, corporate background, and customer protection policies.",
            }}
            cardRight={{
              icon: <HelpCircle className="w-5 h-5" />,
              tag: "Customer Care",
              title: "Need Assistance Locating a Page?",
              description:
                "Our customer support team is available via toll-free phone and email to point you toward the exact setup guide or order form you need.",
            }}
          />

          {/* Directory Categorized Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Main Pages */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                    <Home className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900">Main Pages</h2>
                </div>

                <ul className="space-y-2 list-none p-0 m-0">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('home')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Home Page</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('shop')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Printer Shop</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('about')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>About Pixfix Digital</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('services')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Our Services</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('faq')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Frequently Asked Questions</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Contact Us & Support</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Brand Setups */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                    <Printer className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900">Brand Setups</h2>
                </div>

                <ul className="space-y-2 list-none p-0 m-0">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectBrand) {
                          onSelectBrand('hp');
                        } else {
                          window.location.hash = '#setup/hp';
                        }
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>HP Printer Setup & Drivers</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectBrand) {
                          onSelectBrand('canon');
                        } else {
                          window.location.hash = '#setup/canon';
                        }
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Canon Printer Setup & Drivers</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectBrand) {
                          onSelectBrand('brother');
                        } else {
                          window.location.hash = '#setup/brother';
                        }
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Brother Printer Setup & Drivers</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectBrand) {
                          onSelectBrand('epson');
                        } else {
                          window.location.hash = '#setup/epson';
                        }
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Epson Printer Setup & Drivers</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Legal & Policies */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900">Legal & Policies</h2>
                </div>

                <ul className="space-y-2 list-none p-0 m-0">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('privacy-policy')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Privacy Policy</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('terms-of-service')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Terms of Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('refund-return')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Refund and Return</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('warranty-info')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Warranty Info</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigate('shipping-policy')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#0284c7] transition-all cursor-pointer border-none bg-transparent text-left"
                    >
                      <span>Shipping Policy</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Popular Hardware */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900">Featured Categories</h2>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <div
                    onClick={() => onNavigate('shop')}
                    className="p-2.5 rounded-xl hover:bg-sky-50 hover:text-[#0284c7] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span>All-in-One Inkjet Printers</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <div
                    onClick={() => onNavigate('shop')}
                    className="p-2.5 rounded-xl hover:bg-sky-50 hover:text-[#0284c7] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span>High-Speed LaserJet Printers</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <div
                    onClick={() => onNavigate('shop')}
                    className="p-2.5 rounded-xl hover:bg-sky-50 hover:text-[#0284c7] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span>Wireless &amp; Mobile Printing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Support & Assistance */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900">Support Center</h2>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900 block">Toll Free Phone:</strong>
                    <a href="tel:1-833-785-8085" className="text-[#0284c7] font-bold hover:underline">1-833-785-8085</a>
                  </p>
                  <p>
                    <strong className="text-gray-900 block">Email Support:</strong>
                    <a href="mailto:support@geeksafeglobal.com" className="text-[#0284c7] font-bold hover:underline">support@geeksafeglobal.com</a>
                  </p>
                  <p>
                    <strong className="text-gray-900 block">Operating Hours:</strong>
                    9:00 AM – 5:00 PM EST (Mon – Fri)
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Company Headquarters */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900">Headquarters</h2>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <p className="font-bold text-gray-900">Pixfix Digital</p>
                  <p>Customer Support center &amp; B2B Control Center</p>
                  <p>3545 Ellicott Mills DR, Ellicott City MD 21043, USA</p>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-gray-400">
                    Independent printer solutions and hardware provider.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Box with Footer Info */}
          <LegalContactBox
            title="Have Questions or Need Navigation Help?"
            description="Our customer support desk is ready to assist you with order inquiries, product recommendations, or setup guides."
          />
        </div>
      </main>

      <FloatingCart />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Sitemap;
