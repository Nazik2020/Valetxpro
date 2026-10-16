import React from 'react';

export const SectionHeader = ({
  badgeText,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'} ${className}`}>
      {badgeText && (
        <div className="inline-block mb-3.5">
          <span className={`text-[11px] font-extrabold tracking-label-caps uppercase px-3 py-1 rounded-full font-display select-none ${
            dark 
              ? 'bg-blue-950/70 text-blue-200 border border-blue-800/60' 
              : 'bg-blue-50 text-brand-blue-hover border border-blue-200/80'
          }`}>
            {badgeText}
          </span>
        </div>
      )}
      
      <h2 className={`font-display text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight-headline leading-tight sm:leading-[46px] ${
        dark ? 'text-white' : 'text-brand-charcoal'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3.5 text-sm sm:text-base md:text-lg font-body leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
