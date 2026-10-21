import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  Printer,
  Truck,
  RotateCcw,
  ShieldCheck,
  PhoneCall,
  Sparkles,
  Wrench,
} from 'lucide-react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import LegalHero from '../components/Legal/LegalHero';
import LegalDualOverview from '../components/Legal/LegalDualOverview';
import LegalContactBox from '../components/Legal/LegalContactBox';
import type { NavPage } from '../types/navigation';

interface FAQProps {
  onNavigate: (page: NavPage) => void;
}

interface FAQItem {
  id: string;
  category: 'setup' | 'orders' | 'returns' | 'warranty';
  categoryLabel: string;
  question: string;
  answer: string | React.ReactNode;
}

const FAQ_DATA: FAQItem[] = [
  // Setup & Connectivity
  {
    id: 'setup-wifi',
    category: 'setup',
    categoryLabel: 'Setup & WiFi',
    question: 'How do I connect my wireless printer to Wi-Fi?',
    answer:
      'Most modern inkjet and laser printers feature Wi-Fi Protected Setup (WPS) or direct wireless discovery. Power on your printer, access the network settings on the control panel, select your Wi-Fi SSID, and enter your password. For model-specific guidance, visit our brand setup pages for HP, Canon, Brother, or Epson.',
  },
  {
    id: 'setup-offline',
    category: 'setup',
    categoryLabel: 'Setup & WiFi',
    question: 'Why does my printer show "Offline" in Windows or macOS?',
    answer:
      'A printer status showing "Offline" is commonly caused by a sleep-mode disconnect, IP address conflict, or paused print queue. Try restarting both your printer and router. In Windows, go to Settings > Bluetooth & Devices > Printers & Scanners, click your printer, and ensure "Use Printer Offline" is unchecked.',
  },
  {
    id: 'setup-drivers',
    category: 'setup',
    categoryLabel: 'Setup & WiFi',
    question: 'Where can I download the official printer drivers?',
    answer:
      'We always recommend installing official OEM drivers directly from the manufacturer portal (support.hp.com, usa.canon.com, brother-usa.com, or epson.com). Our brand setup tools provide direct links for verified driver utilities.',
  },

  // Orders & Shipping
  {
    id: 'orders-track',
    category: 'orders',
    categoryLabel: 'Orders & Shipping',
    question: 'How can I check my printer order and shipping status?',
    answer:
      'Direct carrier tracking links from FedEx, UPS, or USPS are emailed automatically as soon as your printer is dispatched from our warehouse. You can also reach our customer support desk at 1-833-785-8085 or email support@geeksafeglobal.com with your order number for an immediate status update.',
  },
  {
    id: 'orders-timeline',
    category: 'orders',
    categoryLabel: 'Orders & Shipping',
    question: 'What are your delivery times and shipping rates?',
    answer:
      'Orders placed before 2:00 PM EST on business days are processed within 24–48 hours. Standard Ground shipping takes 3–5 business days and is FREE on all orders over $50 ($9.95 flat rate otherwise). Expedited 2-day delivery is also available at checkout.',
  },
  {
    id: 'orders-change',
    category: 'orders',
    categoryLabel: 'Orders & Shipping',
    question: 'Can I modify or cancel my order after it has been placed?',
    answer:
      'If your order has not yet been processed by our warehouse, we can assist with address updates or cancellations. Please call our Toll Free support line at 1-833-785-8085 immediately with your order number.',
  },

  // Returns & Refunds
  {
    id: 'returns-window',
    category: 'returns',
    categoryLabel: 'Returns & Refunds',
    question: 'What is your return policy and time window?',
    answer:
      'We offer a 14-day return window from the confirmed carrier delivery date. Products must be in new, unused condition with all original packaging, foam, cables, manuals, and accessories intact. Contact our team to generate a Return Merchandise Authorization (RMA) prior to shipping.',
  },
  {
    id: 'returns-refund-speed',
    category: 'returns',
    categoryLabel: 'Returns & Refunds',
    question: 'How long does it take to receive my refund?',
    answer:
      'Once our returns department in Ellicott City, MD inspects the returned merchandise (within 48 hours of arrival), your refund is issued directly to your original payment method. Funds generally appear in your account within 5–7 business days.',
  },
  {
    id: 'returns-ink',
    category: 'returns',
    categoryLabel: 'Returns & Refunds',
    question: 'Can opened ink or toner cartridges be returned?',
    answer:
      'Consumable items such as ink cartridges and toner bottles cannot be accepted for refund once their factory foil seal has been broken, unless determined to be factory defective upon initial insertion.',
  },

  // Warranty & Brand Support
  {
    id: 'warranty-coverage',
    category: 'warranty',
    categoryLabel: 'Warranty & Support',
    question: 'Do products sold by Pixfix Digital include a manufacturer warranty?',
    answer:
      'Yes. All brand new printers sold by Pixfix Digital are backed by full original manufacturer warranties (typically 1-year limited hardware coverage). Warranty fulfillment and authorized hardware repairs are handled directly by each manufacturer.',
  },
  {
    id: 'warranty-independent',
    category: 'warranty',
    categoryLabel: 'Warranty & Support',
    question: 'What is Pixfix Digital’s relationship with HP, Canon, Brother, and Epson?',
    answer:
      'Pixfix Digital operates as an independent service provider and retailer for printers and accessories. All brand names, logos, and trademarks mentioned are used purely for identification and compatibility reference and remain the property of their respective owners.',
  },
];

const FAQ: React.FC<FAQProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'setup-wifi': true,
    'orders-track': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof item.answer === 'string' &&
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage={'faq' as any} />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <LegalHero
          tag="Help Center & Knowledge Base"
          titleWhite="Frequently Asked"
          titleAccent="Questions"
          subtitle="Quick, straightforward answers for printer wireless setups, order tracking, returns, and manufacturer warranty information."
          badges={[
            { icon: <HelpCircle className="w-4 h-4" />, text: "Instant Answers" },
            { icon: <Printer className="w-4 h-4" />, text: "Setup & Troubleshooting" },
            { icon: <PhoneCall className="w-4 h-4" />, text: "Live Support Available" },
          ]}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-8 relative z-20 pb-16">
          {/* Dual Overview Cards */}
          <LegalDualOverview
            cardLeft={{
              icon: <Sparkles className="w-5 h-5" />,
              tag: "Quick Self-Service",
              title: "Resolve Issues in Minutes",
              description:
                "Most printer offline glitches, driver queries, and paper feed errors can be solved immediately using our step-by-step answers below.",
            }}
            cardRight={{
              icon: <PhoneCall className="w-5 h-5" />,
              tag: "One-on-One Assistance",
              title: "Dedicated Help Desk",
              description:
                "Need personal guidance? Our Maryland-based customer care center is open Monday through Friday, 9:00 AM to 5:00 PM EST via Toll Free 1-833-785-8085.",
            }}
          />

          {/* Search & Filter Controls */}
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] mb-8">
            {/* Search Input */}
            <div className="relative mb-5">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search FAQs by question, printer brand, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#0284c7] focus:ring-2 focus:ring-sky-100 transition-all placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 bg-transparent border-none cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Questions', icon: <HelpCircle className="w-3.5 h-3.5" /> },
                { id: 'setup', label: 'Setup & WiFi', icon: <Printer className="w-3.5 h-3.5" /> },
                { id: 'orders', label: 'Orders & Shipping', icon: <Truck className="w-3.5 h-3.5" /> },
                { id: 'returns', label: 'Returns & Refunds', icon: <RotateCcw className="w-3.5 h-3.5" /> },
                { id: 'warranty', label: 'Warranty & Support', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all cursor-pointer border ${
                    activeCategory === cat.id
                      ? 'bg-[#0284c7] text-white border-[#0284c7] shadow-xs'
                      : 'bg-slate-50 text-gray-600 hover:text-gray-900 border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5 mb-12">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = Boolean(openItems[faq.id]);
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl transition-all border ${
                      isOpen
                        ? 'bg-white border-sky-200 shadow-[0_4px_24px_-6px_rgba(2,132,199,0.12)]'
                        : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer bg-transparent border-none gap-4"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-sky-50 text-[#0284c7] border border-sky-100">
                          {faq.categoryLabel}
                        </span>
                        <h2 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                          {faq.question}
                        </h2>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-sky-50 text-[#0284c7] rotate-180'
                            : 'bg-slate-100 text-gray-400'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-slate-100/80 mt-1">
                        <div className="pt-2">{faq.answer}</div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 text-gray-500">
                <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="font-bold text-gray-800 text-base mb-1">No matching questions found</p>
                <p className="text-xs text-gray-500 mb-4">
                  Try adjusting your keywords or clearing the category filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-sky-50 text-[#0284c7] text-xs font-bold hover:bg-sky-100 transition-colors border-none cursor-pointer"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>

          {/* Quick Action Navigation Strip */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50/70 rounded-2xl p-6 sm:p-8 border border-sky-100 flex flex-col md:flex-row items-center justify-between gap-5 mb-12">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                Helpful Shortcuts
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                Looking for Professional Diagnostics or Returns?
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Explore our comprehensive printer services or learn about our return guidelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="px-5 py-3 rounded-xl bg-[#0284c7] text-white hover:bg-[#0369a1] text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer border-none flex items-center gap-2"
              >
                <Wrench className="w-4 h-4" />
                <span>Our Services</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('refund-return')}
                className="px-5 py-3 rounded-xl bg-white text-gray-800 hover:text-[#0284c7] hover:border-sky-300 border border-slate-200 text-xs font-bold uppercase tracking-wider transition-all shadow-2xs cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Return Policy</span>
              </button>
            </div>
          </div>

          {/* Contact Box with Footer Info */}
          <LegalContactBox
            title="Didn't Find Your Answer?"
            description="Our printer specialists are ready to walk you through setup diagnostics, order questions, or parts verification."
          />
        </div>
      </main>

      <FloatingCart />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default FAQ;
