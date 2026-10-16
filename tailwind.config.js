/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Precision Cobalt / Sapphire Blue Primary Palette
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          'blue-active': '#1E40AF',
          'blue-light': '#EFF6FF',
          'blue-tint': '#DBEAFE',
          'blue-subtle': 'rgba(37, 99, 235, 0.08)',
          'blue-glow': 'rgba(37, 99, 235, 0.35)',

          // Secondary Amber/Gold strictly reserved for Ratings & Trust Stars
          gold: '#F59E0B',
          'gold-dark': '#B45309',
          'gold-light': '#FEF3C7',
          amber: '#F59E0B',
          'amber-dark': '#B45309',
          'amber-light': '#FEF3C7',

          // Deep Obsidian & Slate Core
          charcoal: '#0B0F17',
          'charcoal-light': '#1E293B',
          'charcoal-card': '#111827',
          'charcoal-border': '#1F2937',

          slate: '#475569',
          'slate-light': '#64748B',
          'slate-border': '#E2E8F0',
          canvas: '#F8FAFC',
          surface: '#FFFFFF',
          'surface-subtle': '#F1F5F9',
        },
        // Semantic design system token mapping
        'surface-base': '#F8FAFC',
        'surface-card': '#FFFFFF',
        'surface-subtle': '#F8FAFC',
        'surface-dark': '#0B0F17',
        'surface-dark-card': '#111827',
        'on-surface': '#0F172A',
        'on-surface-muted': '#475569',
        'outline-border': '#E2E8F0',
        'outline-border-dark': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        headline: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        label: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-rest': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 24px -6px rgba(15, 23, 42, 0.08), 0 4px 8px -4px rgba(15, 23, 42, 0.04)',
        'card-dark': '0 12px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'modal-float': '0 25px 50px -12px rgba(15, 23, 42, 0.22)',
        'blue-glow': '0 4px 16px 0 rgba(37, 99, 235, 0.28)',
        'blue-glow-lg': '0 8px 26px 0 rgba(37, 99, 235, 0.38)',
        'inner-gloss': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.25)',
        'inner-gloss-subtle': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      letterSpacing: {
        'tight-hero': '-0.035em',
        'tight-headline': '-0.025em',
        'tight-title': '-0.015em',
        'label-caps': '0.08em',
      }
    },
  },
  plugins: [],
}
