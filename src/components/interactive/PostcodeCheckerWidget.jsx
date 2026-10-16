import React, { useState } from 'react';
import { validatePostcode } from '../../utils/postcodeRules';
import { MapPin, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const PostcodeCheckerWidget = ({ onCoverageConfirmed, className = '' }) => {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!postcode.trim()) return;
    const res = validatePostcode(postcode);
    setResult(res);
    if (onCoverageConfirmed && res.covered) {
      onCoverageConfirmed(postcode);
    }
  };

  return (
    <div className={`bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 shadow-card-rest ${className}`}>
      <div className="flex items-center gap-2 mb-1.5">
        <MapPin className="w-4 h-4 text-brand-blue" aria-hidden="true" />
        <h4 className="font-display font-bold text-sm text-brand-charcoal">
          Check Your Nottingham Postcode Coverage
        </h4>
      </div>
      <p className="text-xs text-slate-500 mb-3.5 font-body">
        Enter your home or work postcode (e.g. NG2 7LA, NG9, DE74) to verify instant van availability.
      </p>

      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="relative flex-grow">
          <label htmlFor="postcode-checker-input" className="sr-only">
            Postcode (e.g. NG2 7LA)
          </label>
          <input
            id="postcode-checker-input"
            type="text"
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value);
              setResult(validatePostcode(e.target.value));
            }}
            placeholder="e.g. NG2 7LA"
            className="w-full h-11 px-3.5 text-sm rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none uppercase font-semibold text-brand-charcoal placeholder:text-slate-400 placeholder:normal-case placeholder:font-normal transition-all"
          />
        </div>
        <button
          type="submit"
          className="h-11 px-4 bg-brand-charcoal hover:bg-slate-800 text-white text-xs font-display font-bold rounded-lg shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          Check
        </button>
      </form>

      {/* Result feedback with live region for assistive tech */}
      {result && result.message && (
        <div
          role="status"
          aria-live="polite"
          className={`mt-3 p-3 rounded-lg text-xs flex items-start gap-2.5 transition-all ${
            result.status === 'success'
              ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
              : result.status === 'warning'
              ? 'bg-amber-50 text-amber-900 border border-amber-200'
              : 'bg-slate-50 text-slate-700 border border-slate-200'
          }`}
        >
          {result.status === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />}
          {result.status === 'warning' && <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />}
          {result.status === 'neutral' && <Info className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" aria-hidden="true" />}
          <span className="font-medium leading-relaxed">{result.message}</span>
        </div>
      )}
    </div>
  );
};
