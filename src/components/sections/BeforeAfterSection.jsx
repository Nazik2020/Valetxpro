import React from 'react';
import { BEFORE_AFTER_DATA } from '../../data/beforeAfterData';
import { SectionHeader } from '../common/SectionHeader';
import { BeforeAfterSlider } from '../interactive/BeforeAfterSlider';
import { Sparkles } from 'lucide-react';

export const BeforeAfterSection = () => {
  return (
    <section id="before-after" className="py-10 md:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="REAL RESULTS BEFORE & AFTER"
          title="Real Results — Attention to Every Detail"
          subtitle="Drag the sliders left or right to inspect genuine transformations achieved on our Nottingham customers' driveways."
        />

        {/* 3 Before/After Slider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {BEFORE_AFTER_DATA.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              beforeLabel={item.beforeLabel}
              afterLabel={item.afterLabel}
              title={item.title}
              description={item.description}
              badge={item.badge}
              initialSplit={item.defaultSplit || 50}
            />
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-xs text-slate-600 font-display">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue shrink-0" aria-hidden="true" />
            <span>All vehicles washed using scratch-safe two-bucket contact methods &amp; pH-neutral snow foams.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
