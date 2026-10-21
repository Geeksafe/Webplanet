import React from 'react';

export interface QuickNavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface LegalQuickNavProps {
  title?: string;
  items: QuickNavItem[];
}

const LegalQuickNav: React.FC<LegalQuickNavProps> = ({
  title = 'Policy Sections',
  items,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] mb-8">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold text-gray-700 bg-slate-50 hover:bg-sky-50 hover:text-[#0284c7] border border-slate-200/60 hover:border-sky-200 transition-all cursor-pointer"
          >
            <span className="w-5 h-5 rounded-md bg-white text-gray-400 text-[11px] font-bold flex items-center justify-center border border-slate-200/60">
              {idx + 1}
            </span>
            {item.icon && <span className="text-gray-400">{item.icon}</span>}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LegalQuickNav;
