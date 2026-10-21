import React from 'react';

interface BadgeItem {
  icon: React.ReactNode;
  text: string;
}

interface LegalHeroProps {
  tag: string;
  titleWhite: string;
  titleAccent: string;
  subtitle: string;
  badges: BadgeItem[];
}

const LegalHero: React.FC<LegalHeroProps> = ({
  tag,
  titleWhite,
  titleAccent,
  subtitle,
  badges,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2f3e50] via-[#3d5067] to-[#4e627b] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 border-b border-slate-700/30">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-white/10 text-sky-200 border border-white/15 backdrop-blur-md mb-5 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          {tag}
        </div>

        {/* Two-tone Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.15] mb-4">
          <span className="text-white">{titleWhite} </span>
          <span className="text-[#38bdf8] drop-shadow-sm">{titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8">
          {subtitle}
        </p>

        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-[13px] font-medium text-slate-100 backdrop-blur-md transition-colors"
            >
              <span className="text-sky-300">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalHero;
