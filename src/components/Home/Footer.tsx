import React from 'react';
import type { NavPage } from '../../types/navigation';

interface FooterProps {
  onNavigate?: (page: NavPage | any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#48596e] text-white pt-16 pb-6">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* 1. Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-5 tracking-tight">Quick Links</h4>
            <ul className="list-none space-y-2.5 p-0 m-0">
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate?.('home')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate?.('shop')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Shop
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate?.('about')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('faq')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('services')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* 2. Legal */}
          <div>
            <h4 className="text-base font-bold mb-5 tracking-tight">Legal</h4>
            <ul className="list-none space-y-2.5 p-0 m-0">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('privacy-policy')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('terms-of-service')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('refund-return')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Refund and Return
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('warranty-info')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Warranty Info
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('shipping-policy')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Shipping Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate?.('sitemap')}
                  className="text-[13px] text-[#dcdcdc] transition-colors duration-300 hover:text-white bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Sitemap
                </button>
              </li>
            </ul>
          </div>

          {/* 3. Contact Us */}
          <div>
            <h4 className="text-base font-bold mb-5 tracking-tight">Contact Us</h4>
            <div className="space-y-2 text-[13px] text-[#dcdcdc] leading-relaxed">
              <p className="font-medium text-white">Customer Support center &amp; B2B Control Center</p>
              <p>3545 Ellicott Mills DR, Ellicott City MD 21043, USA</p>
              <p>
                Toll Free:{' '}
                <a href="tel:1-833-785-8085" className="text-white hover:text-sky-300 transition-colors font-semibold">
                  1-833-785-8085
                </a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:support@geeksafeglobal.com" className="text-white hover:text-sky-300 transition-colors">
                  support@geeksafeglobal.com
                </a>
              </p>
              <p>Office Hours: 9 AM to 5 PM (Mon - Fri Only)</p>
            </div>
          </div>
        </div>

        {/* Corporate Details & Disclaimer Strip */}
        <div className="border-t border-[rgba(255,255,255,0.12)] pt-6 mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-bold text-[#b0c4de] uppercase tracking-wider mb-3 gap-2 text-center sm:text-left">
            <span>BUSINESS NAME: Pixfix Digital</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>REGISTERED ADDRESS: 3545 Ellicott Mills DR, Ellicott City MD 21043, USA</span>
          </div>

          <p className="text-[11px] text-[#b0c4de] mb-3 leading-relaxed text-center sm:text-left">
            Disclaimer: Pixfix digital operates as an independent service provider and retailer for printers and accessories. All brand names, logos, and trademarks (including HP, Canon, Brother, Epson) mentioned are the property of their respective owners and are used solely for identification and reference purposes.
          </p>
          <p className="text-xs text-[#b0c4de] text-center sm:text-left">
            Copyright &copy; 2026 Pixfix digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
