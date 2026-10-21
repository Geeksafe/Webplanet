import React from 'react';

export interface MetricItem {
  icon?: React.ReactNode;
  value: string;
  label: string;
}

interface LegalMetricCardsProps {
  metrics: MetricItem[];
}

const LegalMetricCards: React.FC<LegalMetricCardsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
      {metrics.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] text-center flex flex-col items-center justify-center hover:border-sky-300 transition-colors"
        >
          {item.icon && (
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center mb-3">
              {item.icon}
            </div>
          )}
          <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-1">
            {item.value}
          </span>
          <span className="text-xs sm:text-[13px] text-gray-500 font-medium leading-snug">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LegalMetricCards;
