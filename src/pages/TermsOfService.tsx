import React from 'react';
import {
  Scale,
  Calendar,
  FileCheck,
  AlertTriangle,
  FileText,
  ShoppingBag,
  ShieldAlert,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import LegalHero from '../components/Legal/LegalHero';
import LegalDualOverview from '../components/Legal/LegalDualOverview';
import LegalQuickNav from '../components/Legal/LegalQuickNav';
import LegalContactBox from '../components/Legal/LegalContactBox';
import type { NavPage } from '../types/navigation';

interface TermsOfServiceProps {
  onNavigate: (page: NavPage) => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage={'terms-of-service' as any} />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <LegalHero
          tag="Legal & Policies"
          titleWhite="Terms of"
          titleAccent="Service"
          subtitle="Clear guidelines, rights, and policies governing your use of Pixfix Digital printer hardware and online services."
          badges={[
            { icon: <Scale className="w-4 h-4" />, text: "Legally Binding" },
            { icon: <Calendar className="w-4 h-4" />, text: "Effective: 2026" },
            { icon: <FileCheck className="w-4 h-4" />, text: "Maryland, USA Jurisdiction" },
          ]}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-8 relative z-20 pb-16">
          {/* Dual Overview Cards */}
          <LegalDualOverview
            cardLeft={{
              icon: <FileText className="w-5 h-5" />,
              tag: "Agreement Scope",
              title: "Mutual Trust & Guidelines",
              description:
                "These terms establish a transparent understanding between Pixfix Digital and you regarding online store orders, device setup, and customer care.",
            }}
            cardRight={{
              icon: <AlertTriangle className="w-5 h-5" />,
              tag: "Independent Status",
              title: "Independent Service Provider",
              description:
                "Pixfix Digital operates as an independent third-party provider and seller. All third-party trademarks and brand names are used solely for descriptive reference.",
            }}
          />

          {/* Quick Nav */}
          <LegalQuickNav
            title="Terms of Service Sections"
            items={[
              { id: 'terms-acceptance', label: 'Acceptance of Terms' },
              { id: 'terms-independent', label: 'Independent Disclaimer' },
              { id: 'terms-orders', label: 'Orders & Pricing' },
              { id: 'terms-conduct', label: 'Permitted Use' },
              { id: 'terms-liability', label: 'Limitation of Liability' },
              { id: 'terms-law', label: 'Governing Law' },
            ]}
          />

          {/* Structured Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <div
              id="terms-acceptance"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Acceptance of Terms & Eligibility
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                By browsing the Pixfix Digital website, purchasing printer hardware, or utilizing our customer support channels, you confirm that you are at least 18 years old and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue using this website.
              </p>
            </div>

            {/* Section 2: Independent Provider & Trademark Disclaimer */}
            <div
              id="terms-independent"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                    Section 02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Independent Provider & Trademark Notice
                  </h2>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed mb-4">
                <strong>Important Notice:</strong> Pixfix Digital is an independent service provider and retailer for printers and related equipment. Brand names, logos, and trademarks—including but not limited to <strong>HP, Canon, Brother, and Epson</strong>—are registered trademarks of their respective owners and are mentioned purely for identification and compatibility purposes. Pixfix Digital disclaims any direct sponsorship, affiliation, or authorized dealer endorsement by these manufacturers unless explicitly stated.
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Manufacturer warranties and customer support for hardware are provided directly by each respective manufacturer according to their standard warranty documentation.
              </p>
            </div>

            {/* Section 3: Orders & Pricing */}
            <div
              id="terms-orders"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Product Orders, Pricing & Availability
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <p>
                    <strong className="text-gray-900">Pricing Accuracy:</strong> All listed prices are displayed in USD ($). We make every reasonable effort to display accurate specifications and pricing; in the event of an inadvertent typographical error, Pixfix Digital reserves the right to cancel the order prior to shipment and issue a full refund.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <p>
                    <strong className="text-gray-900">Order Acceptance:</strong> Receipt of an electronic order confirmation does not signify our final acceptance. We reserve the right to verify billing credentials and shipping addresses before dispatch.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Permitted Use */}
            <div
              id="terms-conduct"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Permitted Use & User Conduct
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                You agree not to misuse this website, introduce malicious software, scrape content without written consent, or attempt unauthorized access to server infrastructure. All text, graphics, and UI layouts are proprietary to Pixfix Digital or licensed partners.
              </p>
            </div>

            {/* Section 5: Limitation of Liability */}
            <div
              id="terms-liability"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Disclaimer of Warranties & Limitation of Liability
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Except for manufacturer warranties provided with hardware units, our services and digital content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Under no circumstances shall Pixfix Digital, its officers, or employees be liable for indirect, incidental, or consequential damages resulting from printer downtime or data loss.
              </p>
            </div>

            {/* Section 6: Governing Law */}
            <div
              id="terms-law"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Governing Law & Legal Jurisdiction
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                These Terms of Service are governed and interpreted under the laws of the State of Maryland, United States, without giving effect to conflicts of legal provisions. Any legal claim arising from these terms shall be resolved exclusively within Maryland state or federal courts.
              </p>
            </div>
          </div>

          {/* Contact Box with Footer Info */}
          <LegalContactBox
            title="Questions Regarding Terms of Service?"
            description="For legal inquiries, terms clarification, or official correspondence, contact our administrative office."
          />
        </div>
      </main>

      <FloatingCart />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default TermsOfService;
