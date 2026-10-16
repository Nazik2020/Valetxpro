import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Phone, MessageSquare } from 'lucide-react';

export const StickyMobileBar = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-charcoal/95 backdrop-blur-md border-t border-slate-800 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-modal-float"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phoneIntl}`}
          className="flex items-center justify-center gap-2 h-11 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={`Call ValetXpress at ${COMPANY_INFO.phoneDisplay}`}
        >
          <Phone className="w-4 h-4 text-emerald-400 fill-emerald-400" aria-hidden="true" />
          <span>Call Now</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 h-11 px-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-display font-extrabold text-xs shadow-blue-glow transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Book Valet Slot"
        >
          <MessageSquare className="w-4 h-4" aria-hidden="true" />
          <span>Book Valet Slot</span>
        </button>
      </div>
    </aside>
  );
};
