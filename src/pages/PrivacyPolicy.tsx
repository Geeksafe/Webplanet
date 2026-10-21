import React from 'react';
import {
  ShieldCheck,
  Calendar,
  Lock,
  Database,
  FileText,
  Users,
  Cookie,
  UserCheck,
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

interface PrivacyPolicyProps {
  onNavigate: (page: NavPage) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage={'privacy-policy' as any} />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <LegalHero
          tag="Product Policy / Privacy"
          titleWhite="Privacy"
          titleAccent="Policy"
          subtitle="How Pixfix Digital collects, protects, and manages your personal information when using our printer services and online store."
          badges={[
            { icon: <ShieldCheck className="w-4 h-4" />, text: "256-Bit SSL Secured" },
            { icon: <Calendar className="w-4 h-4" />, text: "Last Updated: April 2026" },
            { icon: <Lock className="w-4 h-4" />, text: "US-Based Entity" },
          ]}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-8 relative z-20 pb-16">
          {/* Top Dual Overview Cards */}
          <LegalDualOverview
            cardLeft={{
              icon: <ShieldCheck className="w-5 h-5" />,
              tag: "Your Privacy Matters",
              title: "Transparent & Responsible Data Use",
              description:
                "We collect only the essential details required to process your printer orders, provide genuine setup assistance, and maintain security across our platform.",
            }}
            cardRight={{
              icon: <Lock className="w-5 h-5" />,
              tag: "Our Commitment",
              title: "Never Sold or Monetized",
              description:
                "Pixfix Digital never sells, rents, or distributes your contact or payment information to commercial data brokers or unrelated third-party advertisers.",
            }}
          />

          {/* Quick Jump Navigation */}
          <LegalQuickNav
            title="Privacy Policy Sections"
            items={[
              { id: 'info-collect', label: 'Information We Collect' },
              { id: 'how-we-use', label: 'How We Use Data' },
              { id: 'data-security', label: 'Data Protection & Security' },
              { id: 'third-parties', label: 'Service Partners' },
              { id: 'cookies', label: 'Cookies & Analytics' },
              { id: 'your-rights', label: 'Your Privacy Rights' },
            ]}
          />

          {/* Structured Policy Cards */}
          <div className="space-y-6">
            {/* 1. Information We Collect */}
            <div
              id="info-collect"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Information We Collect
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                When you interact with Pixfix Digital—whether purchasing a printer, requesting setup assistance, or contacting customer care—we may collect the following details:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-sm text-gray-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Contact & Billing
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Name, physical mailing address, billing details, email address, and phone number.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-sm text-gray-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Transaction Data
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Printer models purchased, order history, timestamps, and encrypted payment confirmations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-sm text-gray-900 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Technical Details
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Browser type, IP address, and printer diagnostics voluntarily shared for technical support.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. How We Use Data */}
            <div
              id="how-we-use"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    How We Use Your Information
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <p>
                    <strong className="text-gray-900">Order Fulfillment:</strong> Processing transactions, preparing printer shipments, verifying delivery addresses, and issuing order receipts.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <p>
                    <strong className="text-gray-900">Customer Support & Setup:</strong> Answering configuration questions, troubleshooting driver setups, and managing warranty or return requests.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <p>
                    <strong className="text-gray-900">Security & Fraud Prevention:</strong> Protecting our customers and online infrastructure against unauthorized transactions and abuse.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Data Protection & Security */}
            <div
              id="data-security"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Data Protection & Security Measures
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                We implement strict administrative, technical, and physical safeguards to prevent unauthorized access or disclosure:
              </p>

              <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 flex items-start gap-3.5 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#0284c7] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-sky-950 leading-relaxed">
                  <strong>Encryption Standard:</strong> All payment transactions are handled through encrypted PCI-DSS Level 1 compliant gateways. Pixfix Digital never stores your raw credit card number or CVV on our servers.
                </div>
              </div>
            </div>

            {/* 4. Service Partners */}
            <div
              id="third-parties"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Third-Party Service Partners
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                We share essential information only with verified operational partners strictly necessary to complete your requests:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
                <li><strong className="text-gray-900">Logistics & Shipping:</strong> FedEx, UPS, and USPS to fulfill delivery to your specified destination.</li>
                <li><strong className="text-gray-900">Payment Processors:</strong> Certified merchants for authorized transaction settlement.</li>
                <li><strong className="text-gray-900">Legal Compliance:</strong> When required by federal or state law, subpoenas, or official government inquiries.</li>
              </ul>
            </div>

            {/* 5. Cookies & Analytics */}
            <div
              id="cookies"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Cookies & Tracking Technologies
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                We use functional cookies to remember items placed in your shopping cart, maintain session status, and monitor page performance. You may modify your browser preferences to disable non-essential cookies at any time without restricting your ability to browse products.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div
              id="your-rights"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Section 06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Your Rights & Control
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                You possess full rights regarding your personal information, including the right to inspect, update, or request the deletion of your customer records from our active databases.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-gray-600 leading-relaxed">
                To submit a privacy or data request, please email our privacy team at <a href="mailto:support@geeksafeglobal.com" className="font-bold text-[#0284c7] hover:underline">support@geeksafeglobal.com</a> or call Toll Free <a href="tel:1-833-785-8085" className="font-bold text-[#0284c7] hover:underline">1-833-785-8085</a>.
              </div>
            </div>
          </div>

          {/* Contact Box with Footer Info */}
          <LegalContactBox
            title="Have Questions About Your Privacy?"
            description="Our privacy officer is available to answer any questions regarding how your data is handled, stored, or protected."
          />
        </div>
      </main>

      <FloatingCart />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacyPolicy;
