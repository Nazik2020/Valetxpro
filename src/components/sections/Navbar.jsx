import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Button } from '../common/Button';
import { Phone, MessageSquare, Menu, X, Sparkles } from 'lucide-react';

export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90 py-2.5 sm:py-3'
          : 'bg-white border-b border-slate-200/80 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5"
            aria-label="ValetXpress Nottingham Homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 fill-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-display font-extrabold text-xl tracking-tight text-brand-charcoal">
                  VALET<span className="text-brand-blue">XPRESS</span>
                </span>
                <span className="text-[10px] font-extrabold uppercase bg-blue-50 text-brand-blue-hover px-1.5 py-0.5 rounded font-display tracking-wider border border-blue-200/80">
                  NOTTS
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-display font-semibold tracking-wider uppercase mt-0.5">
                Mobile Car Detailing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7">
            {COMPANY_INFO.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display font-semibold text-sm text-slate-600 hover:text-brand-blue transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2.5 md:gap-3.5 flex-shrink-0">
            {/* Phone link */}
            <a
              href={`tel:${COMPANY_INFO.phoneIntl}`}
              className="flex items-center gap-2 text-xs md:text-sm font-display font-bold text-brand-charcoal hover:text-brand-blue transition-colors px-2 py-1.5 rounded-lg hover:bg-slate-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label={`Call ValetXpress at ${COMPANY_INFO.phoneDisplay}`}
            >
              <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Phone className="w-3.5 h-3.5 fill-emerald-600" aria-hidden="true" />
              </div>
              <span className="hidden md:inline">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            {/* Request Booking Slot CTA */}
            <Button
              onClick={(e) => {
                e.preventDefault();
                if (onOpenBooking) onOpenBooking();
              }}
              variant="primary"
              size="sm"
              icon={MessageSquare}
              className="shadow-xs whitespace-nowrap"
            >
              Book Valet Slot
            </Button>
          </div>

          {/* Mobile Menu & Quick Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#areas"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenBooking) onOpenBooking();
                const el = document.getElementById('areas');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-2 text-white bg-brand-blue rounded-lg hover:bg-brand-blue-hover transition-colors shadow-xs"
              aria-label="Book Slot"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-brand-charcoal hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav aria-label="Mobile Navigation" className="space-y-1">
            {COMPANY_INFO.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-display font-semibold text-slate-700 hover:text-brand-blue hover:bg-blue-50/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${COMPANY_INFO.phoneIntl}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-display font-bold text-brand-charcoal bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600 fill-emerald-600" aria-hidden="true" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <Button
              href="#areas"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
                const el = document.getElementById('areas');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="primary"
              size="md"
              fullWidth
              icon={MessageSquare}
            >
              Book Valet Slot
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
