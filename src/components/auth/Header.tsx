import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Home, Info, ShoppingBag, PhoneCall, HelpCircle, Wrench, ArrowRight } from 'lucide-react';
import type { NavPage } from '../../types/navigation';

interface HeaderProps {
  onNavigate?: (page: NavPage | any) => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = currentPage === 'home';
  const textColor = 'text-slate-700';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNav = (page: NavPage) => {
    setIsMobileMenuOpen(false);
    onNavigate?.(page);
  };

  return (
    <header
      className={`w-full z-30 transition-colors bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs ${isHome ? 'absolute top-0 left-0' : 'relative'
        }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 flex justify-between items-center h-18 sm:h-20">
        <Logo
          onClick={() => handleNav('home')}
        />

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center list-none gap-5 lg:gap-7 m-0 p-0">
            <li>
              <a
                href="tel:1-844-883-0609"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] lg:text-[14px] font-semibold transition-all no-underline bg-sky-50 hover:bg-sky-100 text-[#0284c7] border border-sky-200 hover:border-sky-300 shadow-2xs"
                title="Call Toll Free: 1-844-883-0609"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>
                  <span className="font-medium opacity-90 text-[12px] lg:text-[12.5px] uppercase tracking-wider">Toll Free:</span>{' '}
                  <span className="font-bold tracking-tight">1-844-883-0609</span>
                </span>
              </a>
            </li>
            <li>
              <button
                onClick={() => handleNav('home')}
                className={`${currentPage === 'home' ? 'text-[#0284c7] font-bold' : textColor} text-[13.5px] lg:text-[14.5px] font-medium uppercase tracking-wider hover:text-[#0284c7] cursor-pointer bg-transparent border-none p-0 transition-colors`}
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('about')}
                className={`${currentPage === 'about' ? 'text-[#0284c7] font-bold' : textColor} text-[13.5px] lg:text-[14.5px] font-medium uppercase tracking-wider hover:text-[#0284c7] cursor-pointer bg-transparent border-none p-0 transition-colors`}
              >
                ABOUT US
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('shop')}
                className={`${currentPage === 'shop' ? 'text-[#0284c7] font-bold' : textColor} text-[13.5px] lg:text-[14.5px] font-medium uppercase tracking-wider hover:text-[#0284c7] flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 transition-colors`}
              >
                SHOP
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('contact')}
                className={`${currentPage === 'contact' ? 'text-[#0284c7] font-bold' : textColor} text-[13.5px] lg:text-[14.5px] font-medium uppercase tracking-wider hover:text-[#0284c7] cursor-pointer bg-transparent border-none p-0 transition-colors`}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:1-844-883-0609"
            aria-label="Call Toll Free 1-844-883-0609"
            title="Call Toll Free: 1-844-883-0609"
            className="p-2.5 rounded-xl transition-all duration-200 cursor-pointer border flex items-center justify-center no-underline bg-sky-50 hover:bg-sky-100 text-[#0284c7] border-sky-200 shadow-2xs"
          >
            <PhoneCall className="w-5 h-5 text-[#0284c7]" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2.5 rounded-xl transition-all duration-200 cursor-pointer border bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 shadow-2xs"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 stroke-[2.2]" />
            ) : (
              <Menu className="w-5 h-5 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full transition-all duration-300 shadow-2xl border-b z-50 bg-white border-slate-200 text-slate-900">
          <div className="px-5 py-6 flex flex-col gap-2">
            <a
              href="tel:1-844-883-0609"
              className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold transition-colors no-underline mb-1 bg-sky-50 text-[#0284c7] hover:bg-sky-100 border border-sky-200/60"
            >
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#0284c7]" />
                <span>Toll Free Support</span>
              </div>
              <span className="font-bold tracking-tight">1-844-883-0609</span>
            </a>

            <button
              onClick={() => handleNav('home')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${currentPage === 'home'
                  ? 'bg-sky-50 text-[#0284c7] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
                }`}
            >
              <Home className="w-4 h-4 text-[#0284c7]" />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${currentPage === 'about'
                  ? 'bg-sky-50 text-[#0284c7] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
                }`}
            >
              <Info className="w-4 h-4 text-[#0284c7]" />
              <span>About Us</span>
            </button>

            <button
              onClick={() => handleNav('shop')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${currentPage === 'shop'
                  ? 'bg-sky-50 text-[#0284c7] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
                }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#0284c7]" />
              <span>Hardware & Printer Shop</span>
            </button>

            <button
              onClick={() => handleNav('services')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${currentPage === 'services'
                  ? 'bg-sky-50 text-[#0284c7] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
                }`}
            >
              <Wrench className="w-4 h-4 text-[#0284c7]" />
              <span>Printer Services & Support</span>
            </button>

            <button
              onClick={() => handleNav('faq')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${currentPage === 'faq'
                  ? 'bg-sky-50 text-[#0284c7] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
                }`}
            >
              <HelpCircle className="w-4 h-4 text-[#0284c7]" />
              <span>Help & FAQs</span>
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${currentPage === 'contact'
                  ? 'bg-sky-50 text-[#0284c7] font-bold'
                  : 'text-slate-700 hover:bg-slate-100 bg-transparent'
                }`}
            >
              <PhoneCall className="w-4 h-4 text-[#0284c7]" />
              <span>Contact Us</span>
            </button>

            <div className="pt-4 mt-2 border-t border-slate-200">
              <button
                onClick={() => handleNav('shop')}
                className="w-full py-3.5 px-5 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer border-none transition-colors"
              >
                <span>Browse Store & Hardware</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
