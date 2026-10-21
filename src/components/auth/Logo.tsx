import React from 'react';

interface LogoProps {
  isDark?: boolean;
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ isDark = false, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 select-none cursor-pointer group ${className}`}
      role="button"
      tabIndex={0}
      aria-label="Pixfix Digital Logo"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      {/* Icon Mark: Geometric Pixel & Technical Fix Emblem */}
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#0284c7] via-[#0ea5e9] to-[#2563eb] p-1.5 shadow-sm group-hover:shadow-md transition-transform duration-200 group-hover:scale-105 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pixel Matrix: 4 blocks representing digital CMYK print precision */}
          <rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="#ffffff" />
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="#38bdf8" />
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="#ffffff" fillOpacity="0.85" />
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="#bae6fd" />
          {/* Subtle spark accent */}
          <circle cx="21" cy="2" r="1.5" fill="#38bdf8" />
        </svg>
      </div>

      {/* Typography: PIXFIX DIGITAL */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`text-base sm:text-lg md:text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
          PIX<span className="text-[#0284c7]">FIX</span>
        </div>
        <div className={`text-[9px] sm:text-[10px] font-bold tracking-[0.26em] uppercase mt-0.5 ${isDark ? 'text-sky-200' : 'text-slate-500'}`}>
          DIGITAL
        </div>
      </div>
    </div>
  );
};

export default Logo;
