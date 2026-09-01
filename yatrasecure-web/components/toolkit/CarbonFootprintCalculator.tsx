'use client';
import React, { useState } from 'react';
import { Leaf, Plane, Train, Car, Bus } from 'lucide-react';
import { estimateTripCO2 } from '@/app/lib/utils/carbonCalculator';

export const CarbonFootprintCalculator: React.FC = () => {
  const [distanceKm, setDistanceKm] = useState(500);
  const [mode, setMode] = useState<'flight' | 'train' | 'car' | 'bus'>('train');

  const { kgCO2, treesNeeded } = estimateTripCO2(distanceKm, mode);

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Leaf className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Eco Travel Carbon Footprint</h3>
          <p className="text-xs text-slate-400">Track and offset emissions</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-slate-400">Estimated Travel Distance: {distanceKm} km</label>
          <input
            type="range"
            min="50"
            max="3000"
            step="50"
            value={distanceKm}
            onChange={(e) => setDistanceKm(Number(e.target.value))}
            className="w-full mt-2 accent-emerald-500"
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { id: 'flight', label: 'Flight', icon: <Plane className="w-4 h-4" /> },
            { id: 'train', label: 'Train', icon: <Train className="w-4 h-4" /> },
            { id: 'car', label: 'Car', icon: <Car className="w-4 h-4" /> },
            { id: 'bus', label: 'Bus', icon: <Bus className="w-4 h-4" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setMode(item.id as any)}
              className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 text-xs transition-all \${
                mode === item.id
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-semibold'
                  : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
          <div>
            <p className="text-xs text-emerald-300 font-medium">Estimated Emissions</p>
            <p className="text-xl font-bold text-white">{kgCO2} kg CO₂</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-emerald-300 font-medium">Trees to Offset</p>
            <p className="text-xl font-bold text-emerald-400">🌳 {treesNeeded} Trees</p>
          </div>
        </div>
      </div>
    </div>
  );
};
