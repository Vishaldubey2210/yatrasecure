'use client';
import React, { useState } from 'react';
import { CloudSun, Wind, Droplets, Sun } from 'lucide-react';

export const WeatherWidget: React.FC<{ city?: string }> = ({ city = 'Manali' }) => {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Destination Forecast</span>
          <h3 className="text-xl font-bold text-white mt-0.5">{city}</h3>
        </div>
        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          <CloudSun className="w-6 h-6" />
        </div>
      </div>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl font-black text-white">18°C</span>
        <span className="text-sm font-medium text-slate-300">Partly Cloudy</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <Droplets className="w-3.5 h-3.5 mx-auto text-blue-400 mb-1" />
          <span className="text-slate-400">Humidity</span>
          <p className="font-semibold text-white mt-0.5">52%</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <Wind className="w-3.5 h-3.5 mx-auto text-teal-400 mb-1" />
          <span className="text-slate-400">Wind</span>
          <p className="font-semibold text-white mt-0.5">14 km/h</p>
        </div>
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <Sun className="w-3.5 h-3.5 mx-auto text-amber-400 mb-1" />
          <span className="text-slate-400">UV Index</span>
          <p className="font-semibold text-white mt-0.5">4 (Mod)</p>
        </div>
      </div>
    </div>
  );
};
