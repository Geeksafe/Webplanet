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
  const textColor = isHome ? 'text-white' : 'text-gray-800';

  // Close mobile menu on escape key or resize
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
      className={`w-full z-30 transition-colors ${
        isHome
          ? 'absolute top-0 left-0 bg-black/25 backdrop-blur-sm border-b border-white/10'
          : 'relative bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs'
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 flex justify-between items-center h-18 sm:h-20">
        {/* LOGO */}
        <Logo
          isDark={isHome}
          onClick={() => handleNav('home')}
        />

        {/* DESKTOP NAV (Hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          <ul className="flex items-center list-none gap-6 lg:gap-8 m-0 p-0">
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

          {/* Direct CTA button for desktop */}
          {/* <button
            onClick={() => handleNav('shop')}
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-[#0284c7] hover:bg-[#0369a1] text-white px-4 py-2.5 rounded-lg transition-colors cursor-pointer border-none shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Store</span>
          </button> */}
        </nav>

        {/* MOBILE HAMBURGER BUTTON (Visible only on mobile screens < 768px) */}
        <div className="flex md:hidden items-center gap-2.5">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`p-2 rounded-xl transition-all duration-200 cursor-pointer border ${
              isHome
                ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div 
          className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 shadow-2xl border-b z-50 ${
            isHome 
              ? 'bg-[#0f1d2d]/98 backdrop-blur-xl border-white/10 text-white' 
              : 'bg-white/98 backdrop-blur-xl border-slate-200 text-slate-900'
          }`}
        >
          <div className="px-5 py-6 flex flex-col gap-2">
            <button
              onClick={() => handleNav('home')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'home'
                  ? 'bg-sky-500/15 text-[#0284c7] font-bold'
                  : isHome ? 'text-slate-200 hover:bg-white/10 bg-transparent' : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <Home className="w-4 h-4 text-[#0284c7]" />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'about'
                  ? 'bg-sky-500/15 text-[#0284c7] font-bold'
                  : isHome ? 'text-slate-200 hover:bg-white/10 bg-transparent' : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <Info className="w-4 h-4 text-[#0284c7]" />
              <span>About Us</span>
            </button>

            <button
              onClick={() => handleNav('shop')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'shop'
                  ? 'bg-sky-500/15 text-[#0284c7] font-bold'
                  : isHome ? 'text-slate-200 hover:bg-white/10 bg-transparent' : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#0284c7]" />
              <span>Hardware & Printer Shop</span>
            </button>

            <button
              onClick={() => handleNav('services')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'services'
                  ? 'bg-sky-500/15 text-[#0284c7] font-bold'
                  : isHome ? 'text-slate-200 hover:bg-white/10 bg-transparent' : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <Wrench className="w-4 h-4 text-[#0284c7]" />
              <span>Printer Services & Support</span>
            </button>

            <button
              onClick={() => handleNav('faq')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'faq'
                  ? 'bg-sky-500/15 text-[#0284c7] font-bold'
                  : isHome ? 'text-slate-200 hover:bg-white/10 bg-transparent' : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-[#0284c7]" />
              <span>Help & FAQs</span>
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-none ${
                currentPage === 'contact'
                  ? 'bg-sky-500/15 text-[#0284c7] font-bold'
                  : isHome ? 'text-slate-200 hover:bg-white/10 bg-transparent' : 'text-slate-700 hover:bg-slate-100 bg-transparent'
              }`}
            >
              <PhoneCall className="w-4 h-4 text-[#0284c7]" />
              <span>Contact Us</span>
            </button>

            {/* Quick Action in Mobile Menu */}
            <div className="pt-4 mt-2 border-t border-slate-700/40">
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
