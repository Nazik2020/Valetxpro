import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  variant = 'white',
  padding = 'p-6',
  ...props
}) => {
  const base = 'rounded-xl transition-all duration-200 relative';
  
  const variants = {
    white: 'bg-white border border-slate-200/90 shadow-card-rest',
    dark: 'bg-brand-charcoal border border-slate-800/90 text-white shadow-card-dark',
    slate: 'bg-slate-50/80 border border-slate-200 shadow-card-rest',
    blueHighlight: 'bg-white border-2 border-brand-blue shadow-[0_8px_24px_rgba(37,99,235,0.16)]',
  };

  const hover = hoverEffect
    ? 'hover:-translate-y-0.5 hover:shadow-card-hover hover:border-slate-300'
    : '';

  return (
    <div
      className={`${base} ${variants[variant] || variants.white} ${hover} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
