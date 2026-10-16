import React, { useState } from 'react';
import { PACKAGES } from '../../data/packagesData';
import { SectionHeader } from '../common/SectionHeader';
import { VehicleSizeSelector } from '../interactive/VehicleSizeSelector';
import { Button } from '../common/Button';
import { Check, Clock, Sparkles } from 'lucide-react';

export const Pricing = ({ onSelectPackage }) => {
  const [selectedSize, setSelectedSize] = useState('medium');

  const handleBook = (pkg) => {
    const price = pkg.prices[selectedSize] || pkg.basePrice;
    if (onSelectPackage) {
      onSelectPackage({ packageId: pkg.id, size: selectedSize, price });
    }
  };

  return (
    <section id="services" className="pt-10 md:pt-16 pb-6 md:pb-8 bg-brand-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="TRANSPARENT FIXED PRICING"
          title="Professional Mobile Valeting Packages"
          subtitle="Fixed upfront pricing with zero hidden charges. Select your vehicle category below to see exact rates for your car."
        />

        {/* Vehicle Size Selector Filter */}
        <div className="mb-6 sm:mb-10">
          <VehicleSizeSelector
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((pkg) => {
            const currentPrice = pkg.prices[selectedSize] || pkg.basePrice;
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between relative bg-white ${
                  isPopular
                    ? 'border-2 border-brand-blue shadow-[0_12px_32px_rgba(37,99,235,0.18)] -translate-y-1 z-10 ring-1 ring-brand-blue/20'
                    : 'border border-slate-200/90 shadow-card-rest hover:shadow-card-hover hover:border-slate-300'
                }`}
              >
                {/* Popular Highlight Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-brand-blue text-white font-display font-extrabold text-[11px] tracking-label-caps uppercase px-3.5 py-1 rounded-full shadow-sm border border-blue-400/40">
                      {pkg.ribbonText || 'MOST POPULAR'}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {/* Top Badges: Category & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-display font-extrabold uppercase tracking-label-caps text-brand-blue-hover bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-display font-semibold text-slate-600 flex items-center gap-1 bg-slate-100/90 px-2.5 py-0.5 rounded-md border border-slate-200/60">
                      <Clock className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Package Name */}
                  <h3 className="font-display font-bold text-xl text-brand-charcoal mb-3">
                    {pkg.name}
                  </h3>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="font-display font-extrabold text-4xl text-brand-charcoal tracking-tight">
                      £{currentPrice}
                    </span>
                    <span className="text-xs font-body text-slate-500 font-medium">
                      / fixed price
                    </span>
                  </div>

                  {/* Package Inclusions Checklist */}
                  <ul className="space-y-3 pt-4 border-t border-slate-100">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                          <Check className="w-3 h-3 text-brand-blue stroke-[3]" aria-hidden="true" />
                        </div>
                        <span className="text-xs sm:text-[13px] font-body text-slate-700 leading-snug">
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="p-6 pt-0">
                  <Button
                    onClick={() => handleBook(pkg)}
                    variant={isPopular ? 'primary' : 'outline'}
                    size="md"
                    fullWidth
                    className={isPopular ? 'shadow-blue-glow font-bold' : 'font-semibold'}
                  >
                    {pkg.buttonText}
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
