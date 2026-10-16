import React, { useState } from 'react';
import { MapPin, Navigation, Radio } from 'lucide-react';

export const CoverageMapVisual = () => {
  const [activeArea, setActiveArea] = useState(null);

  const zones = [
    { name: 'Nottingham Centre', x: 340, y: 110, isHub: true, note: 'Daily Valet Hub' },
    { name: 'West Bridgford', x: 350, y: 165, note: 'Same-day Priority Zone' },
    { name: 'Beeston', x: 260, y: 140, note: 'Full Mobile Coverage' },
    { name: 'Arnold', x: 365, y: 65, note: 'Daily Van Route' },
    { name: 'Hucknall', x: 275, y: 55, note: 'Scheduled Visits' },
    { name: 'Long Eaton', x: 195, y: 180, note: 'Direct M1 Access' },
    { name: 'Castle Donington', x: 145, y: 225, note: 'Airport & Business Parks' },
    { name: 'Derby & Surrounds', x: 80, y: 130, note: 'West Route Bookings' },
  ];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0B0F17] shadow-xl aspect-[16/9] sm:aspect-[16/8]">
      {/* Top Console Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 px-4 py-2.5 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-display font-bold text-slate-200">
            Mobile Coverage Area — Notts &amp; Derbyshire
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-display text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2.5 py-0.5 rounded-full">
          <Radio className="w-3 h-3 text-blue-400" />
          100% Mobile — No Fixed Base
        </span>
      </div>

      {/* Schematic Map Vector Visual */}
      <svg
        viewBox="0 0 600 270"
        className="w-full h-full object-cover pt-7 opacity-90 select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Interactive map schematic showing ValetXpress service coverage across Nottingham and surrounding towns"
      >
        <defs>
          <radialGradient id="coverageRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="65%" stopColor="#2563EB" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Map grid lines */}
        <path d="M 0 50 L 600 50 M 0 100 L 600 100 M 0 150 L 600 150 M 0 200 L 600 200 M 0 250 L 600 250" stroke="#1E293B" strokeWidth="0.6" strokeDasharray="4 4" />
        <path d="M 100 0 L 100 270 M 200 0 L 200 270 M 300 0 L 300 270 M 400 0 L 400 270 M 500 0 L 500 270" stroke="#1E293B" strokeWidth="0.6" strokeDasharray="4 4" />

        {/* River Trent curve */}
        <path
          d="M 50 245 C 180 215, 240 185, 310 165 C 380 145, 440 135, 560 95"
          fill="none"
          stroke="#1E3A8A"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.8"
        />
        <text x="460" y="115" fill="#3B82F6" fontSize="9" opacity="0.6" fontStyle="italic" fontFamily="Inter">River Trent</text>

        {/* Road networks: M1 & A52 */}
        {/* M1 Motorway */}
        <path
          d="M 120 0 L 180 270"
          fill="none"
          stroke="#475569"
          strokeWidth="2.5"
          strokeDasharray="6 3"
        />
        <text x="130" y="40" fill="#94A3B8" fontSize="9" fontWeight="bold" fontFamily="Plus Jakarta Sans">M1</text>

        {/* A52 Road */}
        <path
          d="M 50 135 C 180 145, 320 140, 550 150"
          fill="none"
          stroke="#64748B"
          strokeWidth="2"
        />
        <text x="70" y="125" fill="#94A3B8" fontSize="9" fontWeight="bold" fontFamily="Plus Jakarta Sans">A52</text>

        {/* Service Radius Rings */}
        <circle cx="340" cy="130" r="115" fill="url(#coverageRadial)" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.85" />
        <circle cx="340" cy="130" r="65" fill="#2563EB" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="1" />

        {/* Coverage Nodes */}
        {zones.map((zone) => {
          const isHovered = activeArea === zone.name;
          return (
            <g
              key={zone.name}
              transform={`translate(${zone.x}, ${zone.y})`}
              className="cursor-pointer transition-transform"
              onMouseEnter={() => setActiveArea(zone.name)}
              onMouseLeave={() => setActiveArea(null)}
            >
              {zone.isHub ? (
                <>
                  <circle cx="0" cy="0" r="6" fill="#3B82F6" />
                  <circle cx="0" cy="0" r="14" fill="#3B82F6" fillOpacity="0.35">
                    <animate attributeName="r" values="6;16;6" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <text
                    x="12"
                    y="4"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="bold"
                    fontFamily="Plus Jakarta Sans"
                    className="drop-shadow"
                  >
                    {zone.name} ★
                  </text>
                </>
              ) : (
                <>
                  <circle
                    cx="0"
                    cy="0"
                    r={isHovered ? 5.5 : 4}
                    fill={isHovered ? '#60A5FA' : '#3B82F6'}
                    className="transition-all"
                  />
                  <text
                    x="8"
                    y="4"
                    fill={isHovered ? '#FFFFFF' : '#CBD5E1'}
                    fontSize="10"
                    fontWeight={isHovered ? 'bold' : '500'}
                    fontFamily="Plus Jakarta Sans"
                  >
                    {zone.name}
                  </text>
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Floating Status / Area Details Pill over Map */}
      <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-display text-slate-200 border border-slate-700/80 flex items-center justify-between sm:justify-start gap-2.5 shadow-md">
        <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
        <span className="truncate">
          {activeArea
            ? `Zone: ${activeArea} — ${zones.find((z) => z.name === activeArea)?.note}`
            : 'Zero customer water or electricity needed. 100% mobile.'}
        </span>
      </div>
    </div>
  );
};
