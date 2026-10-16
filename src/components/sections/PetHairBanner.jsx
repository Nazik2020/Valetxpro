import React from 'react';
import { Button } from '../common/Button';
import { PawPrint, Plus } from 'lucide-react';

export const PetHairBanner = ({ onAddPetHair }) => {
  return (
    <section className="bg-brand-canvas pt-0 pb-10 md:pb-16 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-slate-900 via-[#0B1322] to-blue-950/90 border border-slate-800/90 rounded-2xl p-5 sm:p-7 lg:px-8 lg:py-6 shadow-xl relative overflow-hidden group">
          {/* Subtle ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 lg:gap-8">
            
            {/* Left Content Area (Paw Icon + Details) */}
            <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
              
              {/* Paw Icon — crisp top alignment */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-950/90 text-blue-400 border border-blue-700/50 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform mt-0.5 sm:mt-1">
                <PawPrint className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" aria-hidden="true" />
              </div>

              {/* Text Block */}
              <div className="space-y-1.5 flex-1 min-w-0">
                {/* Pill Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] font-display font-extrabold uppercase tracking-label-caps bg-blue-900/60 text-blue-300 px-2.5 py-0.5 rounded-md border border-blue-700/50">
                    SPECIALIST EXTRACTION ADD-ON
                  </span>
                  <span className="text-xs font-display font-extrabold text-blue-200 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                    From +£15
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-white tracking-tight leading-snug">
                  Travelling With Dogs? Deep Pet Hair &amp; Odour Removal Available
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Stubborn pet hair embedded in boot carpets and seat fibers is lifted and extracted using mechanical rubber tools and hot steam sanitisation. Add this to any valet package.
                </p>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 w-full sm:w-auto lg:self-center pt-1 lg:pt-0">
              <Button
                onClick={onAddPetHair}
                variant="primary"
                size="md"
                icon={Plus}
                className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 shadow-blue-glow hover:shadow-blue-glow-lg font-bold text-sm whitespace-nowrap"
              >
                Add to My Valet Request
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
