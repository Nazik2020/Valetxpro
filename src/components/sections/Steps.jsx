import React from 'react';
import { STEPS_DATA } from '../../data/stepsData';
import { SectionHeader } from '../common/SectionHeader';
import { Sparkles, MessageSquare, Truck, ArrowRight } from 'lucide-react';

export const Steps = () => {
  const iconMap = {
    Sparkles: Sparkles,
    MessageSquare: MessageSquare,
    Truck: Truck,
  };

  return (
    <section id="how-it-works" className="py-10 md:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="EASY 3-STEP PROCESS"
          title="Spotless Showroom Finish in 3 Steps"
          subtitle="No waiting around at car washes or dealing with busy queue lines. Booking a mobile showroom finish has never been simpler."
        />

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {STEPS_DATA.map((step, idx) => {
            const Icon = iconMap[step.icon] || Sparkles;
            return (
              <div
                key={step.step}
                className="bg-white rounded-xl border border-slate-200/90 p-6 md:p-8 shadow-card-rest hover:shadow-card-hover transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 text-brand-charcoal font-display font-extrabold text-sm flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors">
                      {step.step < 10 ? `0${step.step}` : step.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center border border-blue-100/80 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-display font-bold text-xl text-brand-charcoal mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom detail / highlight */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-display">
                  <span className="font-semibold text-slate-700">{step.tip}</span>
                  {idx < 2 && (
                    <ArrowRight className="hidden md:block w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
