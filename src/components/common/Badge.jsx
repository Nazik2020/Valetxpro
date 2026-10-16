import React from 'react';
import { Check } from 'lucide-react';

export const Badge = ({
  children,
  variant = 'trust',
  size = 'md',
  className = '',
  icon: Icon,
  withCheck = false,
}) => {
  const base = 'inline-flex items-center font-display font-bold select-none transition-colors';

  const variants = {
    // Electric blue trust badge with high-contrast text (>6:1 contrast)
    trust: 'bg-blue-50 text-brand-blue-hover border border-blue-200/80',
    // Solid Sapphire Blue badge for ribbons and active filters
    blueSolid: 'bg-brand-blue text-white shadow-xs',
    // Rating pill: Obsidian dark with gold stars
    rating: 'bg-brand-charcoal text-white border border-slate-700/80 shadow-xs',
    // Neutral Slate
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    // Dark outline for dark hero
    dark: 'bg-slate-800/90 text-slate-200 border border-slate-700 backdrop-blur-sm',
    // Dark subtle blue pill
    darkBlue: 'bg-blue-950/70 text-blue-200 border border-blue-800/60',
    // Green success
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  };

  const sizes = {
    xs: 'text-[10px] px-2 py-0.5 rounded-full tracking-wider uppercase',
    sm: 'text-xs px-2.5 py-1 rounded-full',
    md: 'text-xs px-3 py-1.5 rounded-full',
    caps: 'text-[11px] font-extrabold tracking-label-caps uppercase px-2.5 py-1 rounded-md',
  };

  return (
    <span className={`${base} ${variants[variant] || variants.trust} ${sizes[size] || sizes.md} ${className}`}>
      {withCheck && <Check className="w-3.5 h-3.5 mr-1 stroke-[2.5]" aria-hidden="true" />}
      {Icon && !withCheck && <Icon className="w-3.5 h-3.5 mr-1" aria-hidden="true" />}
      {children}
    </span>
  );
};
