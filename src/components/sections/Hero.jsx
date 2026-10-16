import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Button } from '../common/Button';
import { Star, ArrowRight, MessageSquare, Droplets, ShieldCheck, Sparkles, Home, PawPrint } from 'lucide-react';

export const Hero = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-brand-charcoal text-white overflow-hidden pt-8 pb-10 md:pt-12 md:pb-16 border-b border-slate-800">
      {/* Ambient background lighting — sleek and refined */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Trust, Value Props & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Rating Cluster Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-sm mb-5 sm:mb-6 text-xs font-display shadow-xs">
              <div className="flex items-center gap-0.5 text-brand-gold" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-gold stroke-brand-gold" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Google Rating</span>
              <span className="text-slate-400 font-normal">({COMPANY_INFO.reviewCount} Verified Reviews)</span>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">•</span>
              <span className="hidden sm:inline text-slate-300">West Bridgford & Notts</span>
            </div>

            {/* Display H1 with Clear Cadence */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight-hero leading-[1.15] text-white">
              <span className="block">Professional Mobile Car Valeting</span>
              <span className="block text-brand-blue">At Your Driveway or Workplace</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 font-body leading-relaxed max-w-2xl">
              Skip the car wash queues. We bring premium scratch-safe products, deep interior sanitisation, pet hair extraction, and a showroom hydrophobic shine straight to your driveway.
            </p>

            {/* 4 Feature Bullet Badges (2x2 Grid on desktop & mobile) */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-xl">
              <div className="flex items-center gap-2 sm:gap-2.5 bg-slate-900/70 border border-slate-800 rounded-xl p-2.5 sm:px-3.5 sm:py-2.5 backdrop-blur-sm">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center shrink-0 text-blue-300">
                  <Home className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span className="font-display font-semibold text-[11px] sm:text-xs text-slate-200 leading-tight">
                  100% Mobile (Home / Work)
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 bg-slate-900/70 border border-slate-800 rounded-xl p-2.5 sm:px-3.5 sm:py-2.5 backdrop-blur-sm">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center shrink-0 text-blue-300">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span className="font-display font-semibold text-[11px] sm:text-xs text-slate-200 leading-tight">
                  Fully Insured (£5M Liability)
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 bg-slate-900/70 border border-slate-800 rounded-xl p-2.5 sm:px-3.5 sm:py-2.5 backdrop-blur-sm">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center shrink-0 text-blue-300">
                  <PawPrint className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span className="font-display font-semibold text-[11px] sm:text-xs text-slate-200 leading-tight">
                  Pet Hair & Odour Removal
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5 bg-slate-900/70 border border-slate-800 rounded-xl p-2.5 sm:px-3.5 sm:py-2.5 backdrop-blur-sm">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center shrink-0 text-blue-300">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span className="font-display font-semibold text-[11px] sm:text-xs text-slate-200 leading-tight">
                  Hydrophobic Paint Sealant
                </span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
              <Button
                href="#areas"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenBooking();
                }}
                variant="primary"
                size="lg"
                icon={MessageSquare}
                className="text-base font-bold shadow-blue-glow hover:shadow-blue-glow-lg"
              >
                Request Your Valet Slot
              </Button>

              <Button
                href="#services"
                variant="darkOutline"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                View Packages & Pricing
              </Button>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Frame Accent */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src="/images/hero-car.jpg"
                  alt="Professional Mobile Car Valeting BMW Snow Foam in Nottingham Driveway"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-transparent to-transparent pointer-events-none" />

                {/* Floating Self-Contained Badge Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-xs bg-white text-brand-charcoal p-3.5 rounded-xl shadow-modal-float border border-slate-100 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 border border-blue-100">
                    <Droplets className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <p className="text-[10px] font-display font-extrabold tracking-label-caps uppercase text-brand-blue-hover">
                        100% SELF-CONTAINED
                      </p>
                    </div>
                    <p className="font-display font-bold text-xs text-brand-charcoal leading-snug">
                      On-board Water & Power Supply
                    </p>
                    <p className="text-[11px] text-slate-500 font-body">
                      Zero customer water & power required
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
