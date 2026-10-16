import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqsData';
import { SectionHeader } from '../common/SectionHeader';
import { ChevronDown } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-10 md:py-16 bg-brand-canvas border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="QUESTIONS & ANSWERS"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our mobile valeting service in Nottingham."
        />

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={index}
                className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-brand-blue/50 bg-white shadow-xs'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  id={questionId}
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-brand-charcoal hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      Q
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-blue' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-5 pb-5 pt-1 text-sm sm:text-[15px] font-body text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
