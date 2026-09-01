'use client';
import React from 'react';
import { Mountain, Activity } from 'lucide-react';

export const RouteElevationChart: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Mountain className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Trek Elevation & Difficulty Profile</h3>
          <p className="text-xs text-slate-400">Real-time topographic ascent</p>
        </div>
      </div>

      <div className="h-32 w-full bg-slate-800/40 rounded-xl border border-slate-700/60 p-3 flex flex-col justify-between">
        <div className="flex justify-between text-xs text-slate-400 font-mono">
          <span>Base Camp (2,050m)</span>
          <span className="text-cyan-400 font-semibold">Peak Summit (3,980m)</span>
        </div>
        <div className="w-full h-12 flex items-end gap-1.5 px-2">
          {[20, 35, 45, 40, 60, 75, 90, 100, 85, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-cyan-600 to-teal-400 rounded-t-sm"
              style={{ height: `${h}%` }}
              title={`Waypoint ${i + 1}: ${Math.round(2050 + (h / 100) * 1930)}m`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-500">
          <span>0 km</span>
          <span>Total: 14.5 km</span>
        </div>
      </div>
    </div>
  );
};
