import React from 'react';
import { VEHICLE_SIZES } from '../../data/packagesData';
import { Car, Truck, CheckCircle2 } from 'lucide-react';

export const VehicleSizeSelector = ({
  selectedSize,
  onSelectSize,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-4xl mx-auto mb-3.5 px-1">
        <label
          id="vehicle-size-label"
          className="text-xs font-display font-extrabold text-slate-600 uppercase tracking-label-caps"
        >
          Select Your Vehicle Category For Accurate Pricing:
        </label>
        <span className="text-[11px] font-medium text-brand-blue font-body">
          Prices update instantly below
        </span>
      </div>

      <div
        role="radiogroup"
        aria-labelledby="vehicle-size-label"
        className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto"
      >
        {VEHICLE_SIZES.map((size) => {
          const isSelected = selectedSize === size.id;
          return (
            <button
              key={size.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onSelectSize(size.id)}
              className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                isSelected
                  ? 'border-brand-blue bg-blue-50/70 shadow-sm ring-1 ring-brand-blue/30'
                  : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/80 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-600 group-hover:text-slate-900'
                }`}>
                  {size.id === 'commercial' ? (
                    <Truck className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Car className="w-4 h-4" aria-hidden="true" />
                  )}
                </div>
                {isSelected ? (
                  <CheckCircle2 className="w-4 h-4 text-brand-blue stroke-[2.5]" aria-hidden="true" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-slate-300 transition-colors" />
                )}
              </div>
              <div>
                <p className={`font-display font-bold text-xs sm:text-sm ${
                  isSelected ? 'text-brand-charcoal' : 'text-slate-800'
                }`}>
                  {size.label}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 font-body">
                  {size.sub}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
