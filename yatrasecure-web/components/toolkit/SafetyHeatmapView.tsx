'use client';
import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export const SafetyHeatmapView: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Live Geofenced Safety Heatmap</h3>
          <p className="text-xs text-slate-400">Verified police booths & hospital zones</p>
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
          <div className="text-xs">
            <p className="font-semibold text-emerald-300">Mall Road & Tourist Police Post</p>
            <p className="text-slate-400">Response time &lt; 3 mins • Active Patrol</p>
          </div>
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Safe Zone (98%)
          </span>
        </div>

        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
          <div className="text-xs">
            <p className="font-semibold text-amber-300">High-Altitude Trek Ridge (Rohtang)</p>
            <p className="text-slate-400">Extreme weather risk after 4:00 PM</p>
          </div>
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
            Advisory Zone
          </span>
        </div>
      </div>
    </div>
  );
};
