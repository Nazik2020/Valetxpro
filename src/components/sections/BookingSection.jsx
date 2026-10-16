import React from 'react';
import { COVERED_AREAS } from '../../data/areasData';
import { COMPANY_INFO } from '../../data/companyData';
import { CoverageMapVisual } from '../interactive/CoverageMapVisual';
import { Button } from '../common/Button';
import { SectionHeader } from '../common/SectionHeader';
import { MapPin, Phone, Clock, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const BookingSection = ({ onOpenBooking }) => {
  return (
    <section id="areas" className="py-10 md:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Coverage Areas & Contact */}
          <div className="lg:col-span-6 flex flex-col gap-7">

            {/* Section Header */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-display font-bold text-brand-blue uppercase tracking-wider mb-3">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                Coverage Areas
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-charcoal tracking-tight leading-tight mb-3">
                We Come to You —<br />
                <span className="text-brand-blue">Across Nottingham &amp; Derbyshire</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed max-w-lg">
                No car wash queues. No driving anywhere. Book your slot and our fully-equipped mobile van arrives at your door.
              </p>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {COVERED_AREAS.slice(0, 12).map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/80 hover:border-brand-blue/40 hover:bg-blue-50/30 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" aria-hidden="true" />
                  <span className="text-xs font-display font-semibold text-slate-700 leading-tight">{area.name}</span>
                </div>
              ))}
            </div>

            {/* Contact & Hours Box */}
            <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-800/60 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-display font-bold text-slate-400 uppercase tracking-wider mb-0.5">Call or WhatsApp</p>
                  <a
                    href={`tel:${COMPANY_INFO.phoneIntl}`}
                    className="font-display font-extrabold text-xl text-white hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-900/60 border border-blue-800/60 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-display font-bold text-slate-400 uppercase tracking-wider mb-0.5">Operating Hours</p>
                  <p className="font-display font-semibold text-sm text-white">{COMPANY_INFO.operatingHours}</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={onOpenBooking}
              variant="primary"
              size="lg"
              fullWidth
              icon={MessageSquare}
              className="shadow-blue-glow hover:shadow-blue-glow-lg text-base font-bold"
            >
              Request Your Valet Slot
            </Button>
            <p className="text-xs text-slate-500 font-body text-center -mt-4">
              No upfront payment · Responds within 2 hours · 5.0★ Google rated
            </p>

          </div>

          {/* Right Column: Coverage Map */}
          <div className="lg:col-span-6">
            <div className="sticky top-24">
              <CoverageMapVisual />
              <p className="text-xs text-center text-slate-500 font-body mt-3 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-blue" aria-hidden="true" />
                Tap any pin to see your local coverage zone
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
