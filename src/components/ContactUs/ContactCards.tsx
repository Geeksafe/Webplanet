import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCards: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header Text */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
            Have any queries?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111827] tracking-tight">
            We're here to help.
          </h2>
        </div>

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1020px] mx-auto">
          {/* Card 1: Phone */}
          <div className="bg-[#fcfdfe] border border-gray-200/80 rounded-2xl p-6 sm:p-7 text-center shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-[#1e40af] flex items-center justify-center mb-3.5">
              <Phone className="w-5 h-5 text-[#1e40af]" />
            </div>
            <h3 className="font-bold text-[#111827] text-base mb-1.5">Phone</h3>
            <a
              href="tel:+18337858085"
              className="text-xs sm:text-sm text-gray-600 hover:text-[#0284c7] transition-colors"
            >
              1-833-785-8085
            </a>
            {/* <span className="text-[11px] text-gray-400 mt-0.5">Toll Free: 1-833-785-8085</span> */}
          </div>

          {/* Card 2: Email */}
          <div className="bg-[#fcfdfe] border border-gray-200/80 rounded-2xl p-6 sm:p-7 text-center shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-[#1e40af] flex items-center justify-center mb-3.5">
              <Mail className="w-5 h-5 text-[#1e40af]" />
            </div>
            <h3 className="font-bold text-[#111827] text-base mb-1.5">Email</h3>
            <a
              href="mailto:support@geeksafeglobal.com"
              className="text-xs sm:text-sm text-gray-600 hover:text-[#0284c7] transition-colors"
            >
              support@geeksafeglobal.com
            </a>
            {/* <span className="text-[11px] text-gray-400 mt-0.5">info@webplanets.online</span> */}
          </div>

          {/* Card 3: Office */}
          <div className="bg-[#fcfdfe] border border-gray-200/80 rounded-2xl p-6 sm:p-7 text-center shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-blue-50 text-[#1e40af] flex items-center justify-center mb-3.5">
              <MapPin className="w-5 h-5 text-[#1e40af]" />
            </div>
            <h3 className="font-bold text-[#111827] text-base mb-1.5">Office</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-snug">
              3545 Ellicott Mills DR, 
              <br />Ellicott City MD 21043, USA            
            </p>
            {/* <span className="text-[11px] text-gray-400 mt-0.5">3545 Ellicott Mills DR, Ellicott City MD 21043</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
