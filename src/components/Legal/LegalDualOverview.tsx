import React from 'react';

export interface OverviewCardItem {
  icon?: React.ReactNode;
  tag?: string;
  title: string;
  description: string | React.ReactNode;
}

interface LegalDualOverviewProps {
  cardLeft: OverviewCardItem;
  cardRight: OverviewCardItem;
}

const LegalDualOverview: React.FC<LegalDualOverviewProps> = ({ cardLeft, cardRight }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
      {/* Left Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          {cardLeft.icon && (
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
              {cardLeft.icon}
            </div>
          )}
          <div>
            {cardLeft.tag && (
              <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block mb-0.5">
                {cardLeft.tag}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              {cardLeft.title}
            </h3>
          </div>
        </div>
        <div className="text-sm text-gray-600 leading-relaxed">
          {cardLeft.description}
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          {cardRight.icon && (
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
              {cardRight.icon}
            </div>
          )}
          <div>
            {cardRight.tag && (
              <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block mb-0.5">
                {cardRight.tag}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              {cardRight.title}
            </h3>
          </div>
        </div>
        <div className="text-sm text-gray-600 leading-relaxed">
          {cardRight.description}
        </div>
      </div>
    </div>
  );
};

export default LegalDualOverview;
