import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  title,
  description,
  badge,
  initialSplit = 50,
}) => {
  const [position, setPosition] = useState(initialSplit);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(Math.round(percent));
  }, []);

  const handleTouch = (e) => {
    if (e.touches && e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleRangeChange = (e) => {
    setPosition(Number(e.target.value));
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-card-rest hover:shadow-card-hover transition-all duration-300 flex flex-col h-full group">
      {/* Slider Viewport */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden select-none bg-slate-900 cursor-ew-resize"
        onTouchMove={handleTouch}
      >
        {/* AFTER Image (Full width background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none transition-[clip-path] duration-75"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
          />
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none shadow-[0_0_8px_rgba(0,0,0,0.5)] z-10 transition-[left] duration-75"
          style={{ left: `${position}%` }}
        >
          {/* Draggable Circle Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-blue text-white border-2 border-white shadow-md flex items-center justify-center transform transition-transform group-hover:scale-110">
            <ChevronsLeftRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </div>
        </div>

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="text-[11px] font-display font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-brand-charcoal/85 text-white backdrop-blur-sm shadow-sm border border-white/10">
            {beforeLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className="text-[11px] font-display font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-brand-blue/90 text-white backdrop-blur-sm shadow-sm border border-white/20">
            {afterLabel}
          </span>
        </div>

        {/* Accessible slider input for keyboard/screen readers */}
        <input
          type="range"
          min="5"
          max="95"
          value={position}
          onChange={handleRangeChange}
          aria-label={`Compare ${title}: ${beforeLabel} and ${afterLabel}`}
          aria-valuenow={position}
          aria-valuemin="5"
          aria-valuemax="95"
          aria-valuetext={`${position}% showing ${beforeLabel}`}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 focus-visible:opacity-100 focus-visible:h-auto focus-visible:bottom-0"
        />
      </div>

      {/* Card Content & Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow bg-white">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg text-brand-charcoal">
            {title}
          </h3>
          {badge && (
            <span className="text-[10px] font-bold font-display uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-brand-blue-hover border border-blue-200/80 shrink-0">
              {badge}
            </span>
          )}
        </div>
        <p className="font-body text-sm text-slate-600 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Quick toggle chips */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-display">
          <button
            type="button"
            onClick={() => setPosition(90)}
            className={`font-semibold transition-colors px-2 py-1 rounded hover:bg-slate-100 ${
              position >= 80 ? 'text-brand-charcoal bg-slate-100 font-bold' : 'text-slate-500'
            }`}
          >
            Show Before
          </button>
          <span className="text-slate-300" aria-hidden="true">•</span>
          <button
            type="button"
            onClick={() => setPosition(50)}
            className={`font-bold transition-colors px-2 py-1 rounded hover:bg-blue-50 ${
              position > 35 && position < 65 ? 'text-brand-blue bg-blue-50' : 'text-slate-600'
            }`}
          >
            Split (50/50)
          </button>
          <span className="text-slate-300" aria-hidden="true">•</span>
          <button
            type="button"
            onClick={() => setPosition(10)}
            className={`font-semibold transition-colors px-2 py-1 rounded hover:bg-blue-50 ${
              position <= 20 ? 'text-brand-blue font-bold bg-blue-50' : 'text-slate-500'
            }`}
          >
            Show After
          </button>
        </div>
      </div>
    </div>
  );
};
