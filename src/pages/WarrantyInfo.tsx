import React from 'react';
import {
  ShieldCheck,
  Calendar,
  Award,
  AlertTriangle,
  HelpCircle,
  FileText,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import LegalHero from '../components/Legal/LegalHero';
import LegalDualOverview from '../components/Legal/LegalDualOverview';
import LegalQuickNav from '../components/Legal/LegalQuickNav';
import LegalContactBox from '../components/Legal/LegalContactBox';
import type { NavPage } from '../types/navigation';

interface WarrantyInfoProps {
  onNavigate: (page: NavPage) => void;
}

const WarrantyInfo: React.FC<WarrantyInfoProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage={'warranty-info' as any} />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <LegalHero
          tag="Product Warranty Information"
          titleWhite="Manufacturer"
          titleAccent="Warranty"
          subtitle="Manufacturer warranty information for products sold by Pixfix Digital."
          badges={[
            { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Genuine Hardware" },
            { icon: <Calendar className="w-4 h-4" />, text: "Policy Updated: 2026" },
            { icon: <Award className="w-4 h-4" />, text: "Original OEM Warranties" },
          ]}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-8 relative z-20 pb-16">
          {/* Dual Overview Cards */}
          <LegalDualOverview
            cardLeft={{
              icon: <MapPin className="w-5 h-5" />,
              tag: "Company Information",
              title: "Pixfix Digital",
              description: (
                <div className="space-y-1">
                  <p>3545 Ellicott Mills DR, Ellicott City MD 21043, USA</p>
                  <p>Email: <span className="text-[#0284c7] font-semibold">support@geeksafeglobal.com</span></p>
                  <p>Phone: <span className="text-gray-900 font-bold">1-833-785-8085</span></p>
                </div>
              ),
            }}
            cardRight={{
              icon: <FileText className="w-5 h-5" />,
              tag: "Policy Scope & Terms",
              title: "Original Manufacturer Warranties",
              description:
                "Warranty coverage periods, hardware repair conditions, and service terms are determined exclusively by the respective product manufacturer and may vary by printer model, class, and region.",
            }}
          />

          {/* Quick Jump Navigation */}
          <LegalQuickNav
            title="Warranty Information Sections"
            items={[
              { id: 'warranty-coverage', label: 'Warranty Coverage' },
              { id: 'warranty-notices', label: 'Important Notices' },
              { id: 'warranty-support', label: 'Manufacturer Support' },
              { id: 'warranty-registration', label: 'Product Registration' },
              { id: 'warranty-related', label: 'Related Policies' },
            ]}
          />

          {/* Structured Policy Sections */}
          <div className="space-y-6">
            {/* Section 1: Warranty Coverage */}
            <div
              id="warranty-coverage"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Coverage Scope
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Warranty Coverage
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-6">
                <p>• All brand new printers sold by Pixfix Digital are covered by the original manufacturer&apos;s warranty where applicable.</p>
                <p>• Pixfix Digital does not provide direct internal manufacturer warranty service, component repairs, or proprietary parts replacement.</p>
                <p>• Warranty coverage duration, limited policies, and terms are determined solely by the manufacturer and vary by product category and region.</p>
              </div>

              {/* 3 Highlight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="font-bold text-sm text-gray-900 mb-1">
                    Manufacturer Warranty
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Products are covered by original manufacturer hardware warranty where applicable.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="font-bold text-sm text-gray-900 mb-1">
                    Coverage Terms
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Standard 1-year limited hardware warranty for parts and repair on most models.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="font-bold text-sm text-gray-900 mb-1">
                    Regional Requirements
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Coverage is valid for hardware purchased and operated within the United States.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Important Notices */}
            <div
              id="warranty-notices"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                    Important Disclaimers
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Important Notices
                  </h2>
                </div>
              </div>

              {/* Notice 1 */}
              <div className="p-4 sm:p-5 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-950 text-xs sm:text-sm leading-relaxed mb-4">
                <strong>No Additional Warranty:</strong> Pixfix Digital makes no warranties beyond any manufacturer warranty that may apply. Products are provided on an &quot;as is&quot; and &quot;as available&quot; basis except as required by applicable law.
              </div>

              {/* Notice 2 */}
              <div className="p-4 sm:p-5 rounded-xl bg-sky-50/70 border border-sky-100 text-sky-950 text-xs sm:text-sm leading-relaxed">
                <strong>Manufacturer Direct Support:</strong> For warranty service, repairs, or technical hardware claims, please contact the product manufacturer directly. Their contact information is typically located in the product documentation or on the manufacturer&apos;s official website.
              </div>
            </div>

            {/* Section 3: Manufacturer Support Contacts */}
            <div
              id="warranty-support"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Direct Manufacturer Assistance
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Manufacturer Support Directory
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Contact your printer manufacturer directly for hardware diagnostics, warranty claim initiation, or replacement parts:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* HP */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
                  <div className="font-bold text-base text-gray-900 mb-1 flex items-center justify-between">
                    <span>HP Support</span>
                    <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">Hewlett-Packard</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Toll Free: 1-800-474-6836</p>
                  <a href="https://support.hp.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0284c7] hover:underline inline-flex items-center gap-1">
                    support.hp.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Canon */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
                  <div className="font-bold text-base text-gray-900 mb-1 flex items-center justify-between">
                    <span>Canon Support</span>
                    <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">Canon USA</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Toll Free: 1-800-652-2666</p>
                  <a href="https://usa.canon.com/support" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0284c7] hover:underline inline-flex items-center gap-1">
                    usa.canon.com/support <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Brother */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
                  <div className="font-bold text-base text-gray-900 mb-1 flex items-center justify-between">
                    <span>Brother Support</span>
                    <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">Brother USA</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Toll Free: 1-877-276-8437</p>
                  <a href="https://brother-usa.com/support" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0284c7] hover:underline inline-flex items-center gap-1">
                    brother-usa.com/support <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Epson */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 transition-colors">
                  <div className="font-bold text-base text-gray-900 mb-1 flex items-center justify-between">
                    <span>Epson Support</span>
                    <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">Epson America</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Toll Free: 1-800-463-7766</p>
                  <a href="https://epson.com/support" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#0284c7] hover:underline inline-flex items-center gap-1">
                    epson.com/support <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Section 4: Product Registration */}
            <div
              id="warranty-registration"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Fast Registration
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Product Registration
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Some manufacturers require product registration to activate warranty coverage. We recommend registering your printer with the manufacturer promptly after purchase to ensure full warranty eligibility.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-gray-600">
                <strong>Keep Your Warranty Active:</strong> Check your product documentation for registration requirements and accurate registration timing as required by the manufacturer.
              </div>
            </div>

            {/* Section 5: Related Policies */}
            <div
              id="warranty-related"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Quick Links
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Related Policies
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('privacy-policy')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 text-gray-800 hover:text-[#0284c7] border border-slate-200/70 hover:border-sky-300 text-xs font-bold transition-all cursor-pointer text-center"
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('terms-of-service')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 text-gray-800 hover:text-[#0284c7] border border-slate-200/70 hover:border-sky-300 text-xs font-bold transition-all cursor-pointer text-center"
                >
                  Terms of Service
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('refund-return')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 text-gray-800 hover:text-[#0284c7] border border-slate-200/70 hover:border-sky-300 text-xs font-bold transition-all cursor-pointer text-center"
                >
                  Refund and Return
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('shipping-policy')}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-sky-50 text-gray-800 hover:text-[#0284c7] border border-slate-200/70 hover:border-sky-300 text-xs font-bold transition-all cursor-pointer text-center"
                >
                  Shipping Policy
                </button>
              </div>
            </div>
          </div>

          {/* Contact Box with Footer Info */}
          <LegalContactBox
            title="Need Help With Your Warranty?"
            description="For questions regarding your purchase invoice, serial number location, or manufacturer warranty verification, contact our support team."
          />
        </div>
      </main>

      <FloatingCart />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default WarrantyInfo;
