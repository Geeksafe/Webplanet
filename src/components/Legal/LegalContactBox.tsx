import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface LegalContactBoxProps {
  title?: string;
  description?: string;
}

const LegalContactBox: React.FC<LegalContactBoxProps> = ({
  title = "We're Here to Help",
  description = "If you have questions regarding our policies, warranty claims, returns, or printer orders, our support team is ready to assist you.",
}) => {
  return (
    <div className="bg-gradient-to-br from-[#2b3a4a] via-[#354659] to-[#253241] rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-xl mt-12 mb-6 border border-slate-700/40 relative overflow-hidden">
      {/* Decorative accent glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <span className="text-sky-300 text-xs font-bold uppercase tracking-wider block mb-2">
          Customer Support
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-8">
          {description}
        </p>

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Phone */}
          <a
            href="tel:1-833-785-8085"
            className="flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all text-white no-underline group"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-0.5">
                Toll Free Phone
              </span>
              <span className="text-base sm:text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                1-833-785-8085
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:support@geeksafeglobal.com"
            className="flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all text-white no-underline group"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-0.5">
                Direct Email
              </span>
              <span className="text-sm sm:text-base font-bold text-white truncate block group-hover:text-sky-200 transition-colors">
                support@geeksafeglobal.com
              </span>
            </div>
          </a>
        </div>

        {/* Company Info Footer Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sky-300 shrink-0" />
            <span>3545 Ellicott Mills DR, Ellicott City MD 21043, USA</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-300 shrink-0" />
            <span>Office Hours: 9 AM to 5 PM (Mon - Fri Only)</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
          Pixfix Digital operates as an independent service provider and retailer for printers and accessories.
        </p>
      </div>
    </div>
  );
};

export default LegalContactBox;
