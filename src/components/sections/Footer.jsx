import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Sparkles, Phone, MessageSquare, ShieldCheck, MapPin, Facebook, Instagram } from 'lucide-react';

/* TikTok SVG — not in lucide-react */
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z"/>
  </svg>
);

export const Footer = ({ onOpenBooking }) => {
  return (
    <footer className="bg-brand-charcoal text-white pt-12 pb-28 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white border border-blue-500/40">
                <Sparkles className="w-4 h-4 fill-white" aria-hidden="true" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                VALET<span className="text-brand-blue">XPRESS</span>
              </span>
              <span className="text-[10px] font-extrabold uppercase bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-display tracking-wider border border-slate-700">
                NOTTS
              </span>
            </div>

            <p className="font-body text-sm text-slate-400 max-w-md leading-relaxed">
              ValetXpress Mobile Car Valeting — Nottingham &amp; Surrounding Areas. Professional, fully insured mobile detailing delivering showroom finishes directly to your driveway or workplace.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400 font-display pt-1">
              <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-blue-400" aria-hidden="true" />
                £5M Public Liability Insured
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                <MapPin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                Based in Nottingham
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-1">
              <p className="text-xs font-display font-semibold text-slate-500 uppercase tracking-wider">Follow Us</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ValetXpress on Facebook"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 border border-slate-700 hover:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ValetXpress on Instagram"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 border border-slate-700 hover:border-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ValetXpress on TikTok"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 border border-slate-700 hover:border-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-body text-slate-400">
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">
                  Services &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">
                  Before &amp; After
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">
                  Areas Covered
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm font-body text-slate-400">
              <a
                href={`tel:${COMPANY_INFO.phoneIntl}`}
                className="block font-display font-bold text-lg text-brand-blue hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
              <p className="text-xs text-slate-400">
                {COMPANY_INFO.operatingHours}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs font-display font-bold px-3.5 py-2.5 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Request Booking Slot</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-body">
          <p>
            © {new Date().getFullYear()} ValetXpress Notts. Fully Insured Mobile Valeter. Serving Nottinghamshire &amp; Derbyshire.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-slate-500">
            <span>Safe Wash Guarantee</span>
            <span aria-hidden="true">·</span>
            <span>Self-Contained Unit</span>
            <span aria-hidden="true">·</span>
            <span>Eco-Friendly Products</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
