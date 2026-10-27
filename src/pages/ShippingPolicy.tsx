import React from 'react';
import {
  Truck,
  Calendar,
  Clock,
  PackageCheck,
  Search,
  MapPin,
  AlertTriangle,
  CreditCard,
  CheckCircle2,
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

interface ShippingPolicyProps {
  onNavigate: (page: NavPage) => void;
}

const ShippingPolicy: React.FC<ShippingPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage={'shipping-policy' as any} />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <LegalHero
          tag="Order Fulfillment & Delivery"
          titleWhite="Shipping"
          titleAccent="Policy"
          subtitle="Fast, reliable, and tracked delivery across the United States for printers, consumables, and hardware accessories."
          badges={[
            { icon: <Truck className="w-4 h-4" />, text: "100% Tracked Shipping" },
            { icon: <Calendar className="w-4 h-4" />, text: "Updated: 2026" },
            { icon: <Clock className="w-4 h-4" />, text: "1-2 Day Dispatch" },
          ]}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-8 relative z-20 pb-16">
          {/* Dual Overview Cards */}
          <LegalDualOverview
            cardLeft={{
              icon: <PackageCheck className="w-5 h-5" />,
              tag: "Protection Guarantee",
              title: "Reinforced Heavy-Duty Packaging",
              description:
                "Printers contain sensitive laser and inkjet heads. Every unit is packaged with factory-grade foam inserts and rigid outer boxing to eliminate transit vibration and shock.",
            }}
            cardRight={{
              icon: <Truck className="w-5 h-5" />,
              tag: "Nationwide Fulfillment",
              title: "Rapid Dispatch & Tracking",
              description:
                "Orders placed on business days before 2:00 PM EST are processed, verified, and staged for carrier handoff within 24-48 hours.",
            }}
          />

          {/* 3 Metric Highlight Cards */}
          <LegalMetricCards
            metrics={[
              {
                icon: <Clock className="w-5 h-5" />,
                value: "1-2 Days",
                label: "Order processing & dispatch timeline",
              },
              {
                icon: <Truck className="w-5 h-5" />,
                value: "3-5 Days",
                label: "Standard ground delivery across continental US",
              },
              {
                icon: <CreditCard className="w-5 h-5" />,
                value: "Free Shipping",
                label: "On all qualifying orders over $50",
              },
            ]}
          />

          {/* Quick Jump Navigation */}
          <LegalQuickNav
            title="Shipping Policy Sections"
            items={[
              { id: 'shipping-methods', label: 'Shipping Methods & Rates' },
              { id: 'shipping-tracking', label: 'Tracking & Carriers' },
              { id: 'shipping-address', label: 'Delivery Addresses' },
              { id: 'shipping-damaged', label: 'Damaged or Lost Shipments' },
              { id: 'shipping-support', label: 'Shipping Inquiries' },
            ]}
          />

          {/* Structured Policy Sections */}
          <div className="space-y-6">
            {/* Section 1: Methods & Rates */}
            <div
              id="shipping-methods"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Domestic Shipping
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Shipping Methods & Rates
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-sm text-gray-900 mb-1 flex items-center justify-between">
                    <span>Standard Ground</span>
                    <span className="text-emerald-600 font-extrabold text-xs">FREE &gt;$50</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">3-5 business days transit time.</p>
                  <span className="text-[11px] text-gray-400">$9.95 flat rate for orders under $50.</span>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-sm text-gray-900 mb-1 flex items-center justify-between">
                    <span>Expedited 2-Day</span>
                    <span className="text-[#0284c7] font-extrabold text-xs">Available</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">2 business days guaranteed transit.</p>
                  <span className="text-[11px] text-gray-400">Calculated at checkout by package weight.</span>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="font-bold text-sm text-gray-900 mb-1 flex items-center justify-between">
                    <span>Heavy Freight Delivery</span>
                    <span className="text-slate-700 font-extrabold text-xs">Oversized</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">5-7 business days with lift-gate.</p>
                  <span className="text-[11px] text-gray-400">For enterprise commercial laser printers.</span>
                </div>
              </div>
            </div>

            {/* Section 2: Tracking & Carriers */}
            <div
              id="shipping-tracking"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Carriers & Scans
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Order Tracking & Carrier Partners
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-4">
                <p>• We partner primarily with <strong>FedEx, UPS, and the United States Postal Service (USPS)</strong> to deliver your merchandise safely.</p>
                <p>• As soon as your order has been packaged and scanned by the carrier, an automated confirmation email containing your direct tracking link will be dispatched to your email address.</p>
                <p>• Real-time updates generally become active in the carrier system within 12-24 hours of package handoff.</p>
              </div>
            </div>

            {/* Section 3: Delivery Addresses */}
            <div
              id="shipping-address"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
                    Address Requirements
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Delivery Addresses & P.O. Boxes
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <p><strong>Physical Addresses:</strong> We ship to all physical residential and commercial addresses within the 50 United States.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <p><strong>P.O. Boxes & APO/FPO:</strong> Due to courier size and weight restrictions for printer boxes, standard oversized printers cannot be shipped to P.O. Boxes. Please provide a physical street address at checkout.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Damaged or Lost Shipments */}
            <div
              id="shipping-damaged"
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">
                    Transit Claims
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Damaged or Missing Shipments
                  </h2>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-950 text-xs sm:text-sm leading-relaxed mb-4">
                <strong>Report Within 48 Hours:</strong> If your printer box arrives damaged or appears to have been tampered with in transit, please take exterior photos and notify our support desk within <strong>48 hours</strong> of carrier delivery. We will initiate a priority carrier investigation and dispatch an immediate replacement unit.
              </div>
            </div>

            {/* Section 5: Shipping Inquiries (Anchor) */}
            <div id="shipping-support">
              <LegalContactBox
                title="Questions About Shipping & Tracking?"
                description="Our dispatch and fulfillment specialists can assist you with tracking lookups, address updates, or delivery scheduling."
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

export default ShippingPolicy;
