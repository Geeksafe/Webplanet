import React from 'react';
import {
  Wrench,
  Wifi,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Settings,
  Download,
  Activity,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  Printer,
} from 'lucide-react';
import Header from '../components/auth/Header';
import Footer from '../components/Home/Footer';
import FloatingCart from '../components/Cart/FloatingCart';
import LegalHero from '../components/Legal/LegalHero';
import LegalDualOverview from '../components/Legal/LegalDualOverview';
import LegalMetricCards from '../components/Legal/LegalMetricCards';
import LegalContactBox from '../components/Legal/LegalContactBox';
import type { NavPage } from '../types/navigation';

interface ServicesPageProps {
  onNavigate: (page: NavPage) => void;
}

const SERVICES_LIST = [
  {
    id: 'diagnosis',
    icon: <Activity className="w-6 h-6 text-[#0284c7]" />,
    title: 'Printer Issue Diagnosis & Solutions',
    badge: 'Hardware & Diagnostics',
    description:
      "When your printer isn't working properly, our troubleshooting service helps identify the exact root cause. We handle common problems such as error codes, paper jams, slow printing, streaky output, and unexpected hardware stops.",
    highlights: [
      'Error code interpretation & mechanical checks',
      'Printhead cleaning & nozzle alignment advice',
      'Paper feed mechanism inspection',
      'Clear step-by-step resolution walkthroughs',
    ],
  },
  {
    id: 'setup',
    icon: <Settings className="w-6 h-6 text-[#0284c7]" />,
    title: 'Printer Setup & Optimization',
    badge: 'Installation & Setup',
    description:
      'Proper initial setup ensures your printer performs at peak efficiency and avoids future driver conflicts. From unpacking and ink initialization to computer pairing and default settings, we make setup effortless.',
    highlights: [
      'Unboxing, ink initialization & test page printing',
      'Windows 10/11 & macOS system pairing',
      'Default print resolution & paper profile configuration',
      'Mobile printing readiness (AirPrint & Mopria setup)',
    ],
  },
  {
    id: 'wifi',
    icon: <Wifi className="w-6 h-6 text-[#0284c7]" />,
    title: 'Wi-Fi & Network Performance Optimization',
    badge: 'Connectivity & Wireless',
    description:
      'Maintain a fast, stable, and drop-free connection between your router, computers, mobile devices, and wireless printer. We resolve persistent "Printer Offline" states and router band mismatch problems.',
    highlights: [
      'Static IP address configuration to prevent drops',
      '2.4GHz vs 5GHz dual-band router synchronization',
      'Resolving "Printer Offline" and firewall blocking',
      'Multi-device office network printer sharing',
    ],
  },
  {
    id: 'drivers',
    icon: <Download className="w-6 h-6 text-[#0284c7]" />,
    title: 'Driver Installation & System Updates',
    badge: 'Software & Drivers',
    description:
      'Keep your printer communicating seamlessly with your operating system. We assist with installing the correct manufacturer-approved software packages and removing conflicting legacy drivers.',
    highlights: [
      'Direct manufacturer OEM driver package verification',
      'Clean removal of outdated or corrupt printer drivers',
      'Scanner software & OCR tool configuration',
      'Firmware update verification for security & stability',
    ],
  },
];

const COMMON_ISSUES = [
  {
    title: 'Fix Offline Printer',
    desc: 'Restore broken communication between computer and printer caused by IP sleep states.',
  },
  {
    title: 'Paper Jam Solutions',
    desc: 'Safe removal procedures and roller cleaning advice to stop recurring paper feed jams.',
  },
  {
    title: 'Wi-Fi Connection Errors',
    desc: 'Troubleshoot wireless signal drops, router password changes, and network pairing.',
  },
  {
    title: 'Driver Compatibility',
    desc: 'Resolve driver errors after major Windows 11 or macOS system version updates.',
  },
];

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-gray-800">
      <Header onNavigate={onNavigate} currentPage={'services' as any} />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <LegalHero
          tag="Expert Printer Solutions"
          titleWhite="Our"
          titleAccent="Services"
          subtitle="Comprehensive printer setup, wireless connectivity troubleshooting, diagnostic guidance, and performance optimization for home and business."
          badges={[
            { icon: <Wrench className="w-4 h-4" />, text: "Professional Diagnostics" },
            { icon: <Wifi className="w-4 h-4" />, text: "Wi-Fi & Network Optimization" },
            { icon: <PhoneCall className="w-4 h-4" />, text: "Toll Free: 1-833-785-8085" },
          ]}
        />

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 -mt-8 relative z-20 pb-16">
          {/* Dual Overview Cards */}
          <LegalDualOverview
            cardLeft={{
              icon: <Wrench className="w-5 h-5" />,
              tag: "End-to-End Assistance",
              title: "Comprehensive Printer Care",
              description:
                "From unboxing and initial wireless pairing to solving stubborn paper jams and driver conflicts, our specialists deliver practical, step-by-step solutions to keep your printers running smoothly.",
            }}
            cardRight={{
              icon: <ShieldCheck className="w-5 h-5" />,
              tag: "Independent & Transparent",
              title: "Honest & Practical Support",
              description:
                "Pixfix Digital operates as an independent service provider and retailer. You receive objective recommendations, straightforward guidance, and genuine support tailored to your equipment.",
            }}
          />

          {/* 3 Metric Cards */}
          <LegalMetricCards
            metrics={[
              {
                icon: <Printer className="w-5 h-5" />,
                value: "4 Major Brands",
                label: "Expertise across HP, Canon, Brother & Epson",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                value: "Fast Turnaround",
                label: "Rapid diagnosis and setup resolution",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                value: "5-Star Care",
                label: "Dedicated Maryland-based customer support",
              },
            ]}
          />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider block mb-1">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              Professional Printer Support Services
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Explore our comprehensive range of setup, configuration, and troubleshooting solutions designed to eliminate printing headaches.
            </p>
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {SERVICES_LIST.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center">
                      {srv.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {srv.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-bold text-[#0284c7] hover:text-[#0369a1] inline-flex items-center gap-1.5 bg-transparent border-none p-0 cursor-pointer"
                  >
                    <span>Request Assistance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="tel:1-833-785-8085"
                    className="text-xs font-bold text-gray-500 hover:text-gray-900 no-underline"
                  >
                    1-833-785-8085
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Common Issues Handled */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] mb-12">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                Frequent Challenges
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Common Printer Issues We Help Resolve
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COMMON_ISSUES.map((issue, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-[#0284c7] text-white font-bold text-xs flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1.5">{issue.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{issue.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Simple 3-Step Process */}
          <div className="bg-gradient-to-r from-sky-50 via-slate-50 to-blue-50/70 rounded-2xl p-6 sm:p-8 md:p-10 border border-sky-100 mb-12">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider block mb-1">
                How It Works
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Getting Help is Simple &amp; Fast
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-10 h-10 rounded-full bg-[#0284c7] text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-xs">
                  1
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Describe Your Issue</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Call our Toll Free line or submit an inquiry with your printer brand and model.
                </p>
              </div>

              <div className="p-4">
                <div className="w-10 h-10 rounded-full bg-[#0284c7] text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-xs">
                  2
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Diagnostic Review</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our specialists identify the exact error code, driver gap, or connectivity obstacle.
                </p>
              </div>

              <div className="p-4">
                <div className="w-10 h-10 rounded-full bg-[#0284c7] text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-xs">
                  3
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Smooth Printing Restored</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Receive clear guidance and verification test prints to ensure full reliability.
                </p>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-sky-100">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-none inline-flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Contact Our Support Team</span>
              </button>
            </div>
          </div>

          {/* Contact Box with Footer Info */}
          <LegalContactBox
            title="Need Printer Assistance Today?"
            description="Our friendly Maryland-based team is ready to walk you through setup diagnostics, Wi-Fi pairing, or hardware inquiries."
          />
        </div>
      </main>

      <FloatingCart />
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ServicesPage;
