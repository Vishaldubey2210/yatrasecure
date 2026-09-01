'use client';
import React from 'react';
import { BookOpen, ShieldCheck, HeartPulse, Compass } from 'lucide-react';

export const OfflineEmergencyHandbook: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Offline Emergency Handbook</h3>
          <p className="text-xs text-slate-400">Essential field protocols saved offline</p>
        </div>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
          <div className="flex items-center gap-2 font-semibold text-rose-300 mb-1">
            <HeartPulse className="w-4 h-4" />
            <span>High Altitude Sickness (AMS) Protocol</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Immediately descend 500-1000m. Rest, keep hydrated with ORS, avoid alcohol, and administer oxygen if pulse oximeter reads below 80%.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
          <div className="flex items-center gap-2 font-semibold text-teal-300 mb-1">
            <Compass className="w-4 h-4" />
            <span>Lost in Trail or Forest Protocol</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Stay in one place (STOP: Stop, Think, Observe, Plan). Find high ground for cellular signal. Mark your trail and stay near water sources.
          </p>
        </div>
      </div>
    </div>
  );
};
