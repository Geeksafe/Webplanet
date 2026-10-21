import React from 'react';
import {
  RotateCcw,
  Calendar,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  Truck,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Clock,
  MapPin,
  Flag,
} from 'lucide-react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import LegalHero from '../components/Legal/LegalHero';
import LegalDualOverview from '../components/Legal/LegalDualOverview';
import LegalMetricCards from '../components/Legal/LegalMetricCards';
import LegalQuickNav from '../components/Legal/LegalQuickNav';
import LegalContactBox from '../components/Legal/LegalContactBox';
import type { NavPage } from '../types/navigation';

interface RefundReturnProps {
  onNavigate: (page: NavPage) => void;
}

const RefundReturn: React.FC<RefundReturnProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage={'refund-return' as any} />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <LegalHero
          tag="Refund & Returns"
          titleWhite="Refund &"
          titleAccent="Return Policy"
          subtitle="Your satisfaction is our priority. Learn about our return process, refund timelines, exchanges, and return requirements."
          badges={[
            { icon: <ShieldCheck className="w-4 h-4" />, text: "Easy Returns" },
            { icon: <Calendar className="w-4 h-4" />, text: "Last Updated: April 2026" },
            { icon: <Flag className="w-4 h-4" />, text: "US-Based Company" },
          ]}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-8 relative z-20 pb-16">
          {/* Dual Overview Cards */}
          <LegalDualOverview
            cardLeft={{
              icon: <RotateCcw className="w-5 h-5" />,
              tag: "Our Customer Satisfaction Promise",
              title: "Your Satisfaction Matters",
              description:
                "We stand behind every printer and accessory we deliver. If you are not completely satisfied with your purchase, our straightforward return process ensures a prompt and hassle-free experience.",
            }}
            cardRight={{
              icon: <CheckCircle2 className="w-5 h-5" />,
              tag: "Expert Assistance",
              title: "Pixfix Digital Service",
              description:
                "Our dedicated return team inspects all returned units promptly and issues eligible refunds directly to your original payment method.",
            }}
          />

          {/* 3 Metric Highlight Cards */}
          <LegalMetricCards
            metrics={[
              {
                icon: <Clock className="w-5 h-5" />,
                value: "14 Days",
                label: "Return window from date of delivery",
              },
              {
                icon: <PackageCheck className="w-5 h-5" />,
                value: "New & Unused",
                label: "Original packaging & factory condition required",
              },
              {
                icon: <CreditCard className="w-5 h-5" />,
                value: "5-7 Days",
                label: "Processing timeline after receipt & inspection",
              },
            ]}
          />

          {/* Quick Jump Navigation */}
          <LegalQuickNav
            title="Return & Refund Information"
            items={[
              { id: 'returns-policy', label: 'Returns', icon: <RotateCcw className="w-3.5 h-3.5" /> },
              { id: 'return-process', label: 'Return Process', icon: <Truck className="w-3.5 h-3.5" /> },
              { id: 'refunds-timeline', label: 'Refunds', icon: <CreditCard className="w-3.5 h-3.5" /> },
              { id: 'return-exceptions', label: 'Exceptions', icon: <AlertCircle className="w-3.5 h-3.5" /> },
              { id: 'return-questions', label: 'Questions', icon: <HelpCircle className="w-3.5 h-3.5" /> },
            ]}
          />

          {/* Structured Policy Sections */}
          <div className="space-y-6">
            {/* Section 1: Returns */}
            <div
              id="returns-policy"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Policy Guidelines
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Returns Eligibility
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-5">
                <p>• Customers can initiate a return within <strong>14 calendar days</strong> of the confirmed delivery date.</p>
                <p>• Products must be brand new, unblemished, and in complete re-sellable condition.</p>
              </div>

              {/* Highlight Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-sky-50/70 border border-sky-100 text-sky-950 text-xs sm:text-sm leading-relaxed">
                <strong>Return requirement:</strong> Products must be returned in the original manufacturer packaging with all protective foam, power adapters, cables, starter ink cartridges, documentation, and accessories intact.
              </div>
            </div>

            {/* Section 2: Return Process */}
            <div
              id="return-process"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Step-by-Step
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Return Process
                  </h2>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                To return an item, please follow our simple 3-step return procedure to obtain a Return Merchandise Authorization (RMA) number:
              </p>

              {/* 3 Step Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 relative">
                  <div className="w-8 h-8 rounded-lg bg-[#0284c7] text-white font-bold text-sm flex items-center justify-center mb-3">
                    1
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1.5">
                    Request an RMA
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Contact our support team with your order number to receive your Return Merchandise Authorization.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 relative">
                  <div className="w-8 h-8 rounded-lg bg-[#0284c7] text-white font-bold text-sm flex items-center justify-center mb-3">
                    2
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1.5">
                    Pack Your Item
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Carefully repackage the printer in its factory box with all foam and accessories to avoid transit damage.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 relative">
                  <div className="w-8 h-8 rounded-lg bg-[#0284c7] text-white font-bold text-sm flex items-center justify-center mb-3">
                    3
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1.5">
                    Ship It Back
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Affix the return shipping label clearly to the outside carton and hand it over to FedEx or UPS.
                  </p>
                </div>
              </div>

              {/* Return Address Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Physical Return Address
                </span>
                <div className="font-bold text-sm sm:text-base text-gray-900">
                  Pixfix Digital — Returns Department
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-0.5">
                  3545 Ellicott Mills DR, Ellicott City MD 21043, USA
                </div>
                <div className="text-[11px] text-gray-400 mt-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" />
                  <span>Please write your RMA number on the shipping label above the return address.</span>
                </div>
              </div>
            </div>

            {/* Section 3: Refunds */}
            <div
              id="refunds-timeline"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Reimbursement
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Refunds & Timelines
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-4">
                <p>• After our intake facility receives and inspects the condition of the returned printer, we process your refund immediately.</p>
                <p>• Refunds are issued to the original method of payment used at checkout.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-950 text-xs sm:text-sm leading-relaxed">
                <strong>Processing Timeline:</strong> Please allow about <strong>5–7 business days</strong> after our facility receives the item for the refund to be processed. Your financial institution may require an additional 2–3 business days to post the balance to your credit statement.
              </div>
            </div>

            {/* Section 4: Exceptions */}
            <div
              id="return-exceptions"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                    Important Notes
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Return Exceptions & Non-Returnable Items
                  </h2>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 leading-relaxed mb-4">
                <p>• <strong>Opened Ink & Toner:</strong> Consumable cartridges with broken factory foil seals cannot be returned unless found defective upon initial insertion.</p>
                <p>• <strong>Software & Licenses:</strong> Downloadable setup keys, warranties, or software packages are non-refundable once activated.</p>
                <p>• <strong>Physical Damage:</strong> Units with signs of customer misuse, ink leaks caused by inverted shipment, or dropped hardware cannot be accepted for refund.</p>
              </div>

              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-950 text-xs sm:text-sm leading-relaxed">
                <strong>Defective or Damaged on Arrival:</strong> If your printer is damaged in transit or defective out of the box, please report it within <strong>48 hours</strong> of delivery for an immediate expedited replacement.
              </div>
            </div>

            {/* Section 5: Questions (Anchor) */}
            <div id="return-questions">
              <LegalContactBox
                title="We're Here to Help"
                description="If you have questions regarding return authorization, refund timelines, or an exchange request, reach out directly to our dedicated customer support team."
              />
            </div>
          </div>
        </div>
      </main>

      <FloatingCart />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default RefundReturn;
