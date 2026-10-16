import React from 'react';
import { REVIEWS_DATA } from '../../data/reviewsData';
import { StarRating } from '../common/StarRating';
import { CheckCircle2, Quote } from 'lucide-react';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-10 md:py-16 bg-brand-canvas border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Header Cluster */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center mb-2.5">
            <StarRating count={5} size="lg" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold text-brand-charcoal tracking-tight-headline leading-tight">
            Rated 5.0 Out of 5 Stars on Google
            <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 mt-1.5 font-display">
              (12 Verified Local Reviews)
            </span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-body leading-relaxed">
            Read real feedback from vehicle owners across West Bridgford, Beeston, and greater Nottingham.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 md:p-7 shadow-card-rest hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* 5 Stars Header & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating count={rev.rating} size="sm" />
                  <Quote className="w-5 h-5 text-slate-300 group-hover:text-amber-500 transition-colors" aria-hidden="true" />
                </div>

                {/* Review Text */}
                <p className="font-body text-sm sm:text-[15px] text-slate-700 leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author & Location Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-charcoal">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-body">
                    {rev.location}
                  </p>
                </div>

                {rev.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-display font-semibold text-brand-blue-hover bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/80 shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-brand-blue stroke-[2.5]" aria-hidden="true" />
                    Verified Review
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
