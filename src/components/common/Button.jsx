import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-display font-bold transition-all duration-150 select-none disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]';

  const variants = {
    // Precision Sapphire Blue Primary CTA
    primary: 'bg-brand-blue hover:bg-brand-blue-hover text-white shadow-blue-glow hover:shadow-blue-glow-lg border border-blue-400/40 focus-visible:ring-blue-600 focus-visible:ring-offset-white',
    // Obsidian Secondary
    secondary: 'bg-brand-charcoal hover:bg-brand-charcoal-light text-white shadow-sm border border-slate-700/80 focus-visible:ring-slate-900 focus-visible:ring-offset-white',
    // Clean Outline
    outline: 'bg-white hover:bg-slate-50 text-brand-charcoal border border-slate-200 hover:border-slate-300 shadow-xs focus-visible:ring-blue-600 focus-visible:ring-offset-white',
    // Blue Subtle Surface
    subtleBlue: 'bg-blue-50 hover:bg-blue-100/80 text-brand-blue-hover border border-blue-200/80 shadow-xs focus-visible:ring-blue-600',
    // Ghost
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-brand-charcoal focus-visible:ring-slate-400 focus-visible:ring-offset-white',
    // Dark Outline for dark hero
    darkOutline: 'bg-transparent hover:bg-slate-800/80 text-white border border-slate-700 hover:border-slate-500 shadow-sm focus-visible:ring-blue-400 focus-visible:ring-offset-slate-900',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 min-h-[34px] gap-1.5',
    md: 'text-sm px-4.5 py-2.5 min-h-[42px] gap-2',
    lg: 'text-sm sm:text-base px-6 py-3 min-h-[48px] gap-2.5',
    xl: 'text-base sm:text-lg px-7 py-3.5 min-h-[52px] gap-3',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </button>
  );
};
