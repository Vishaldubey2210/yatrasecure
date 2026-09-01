'use client';
import React, { useState } from 'react';
import { PackingListGenerator } from '@/components/toolkit/PackingListGenerator';
import { CurrencyConverter } from '@/components/toolkit/CurrencyConverter';
import { CarbonFootprintCalculator } from '@/components/toolkit/CarbonFootprintCalculator';
import { TripBudgetPlanner } from '@/components/toolkit/TripBudgetPlanner';
import { TravelLanguageGuide } from '@/components/toolkit/TravelLanguageGuide';
import { OfflineEmergencyHandbook } from '@/components/toolkit/OfflineEmergencyHandbook';
import { WeatherWidget } from '@/components/toolkit/WeatherWidget';
import { SplitwiseSettlementGraph } from '@/components/toolkit/SplitwiseSettlementGraph';
import { SafetyHeatmapView } from '@/components/toolkit/SafetyHeatmapView';
import { RouteElevationChart } from '@/components/toolkit/RouteElevationChart';
import { EmergencySOSModal } from '@/components/toolkit/EmergencySOSModal';
import { TravelBadgesModal } from '@/components/toolkit/TravelBadgesModal';
import { ShieldAlert, Award, Sparkles } from 'lucide-react';

export default function ToolkitPage() {
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [isBadgesOpen, setIsBadgesOpen] = useState(false);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> All-in-One Traveler Suite
            </span>
          </div>
          <h1 className="text-3xl font-black text-white mt-2">Smart Travel Toolkit</h1>
          <p className="text-slate-400 text-sm mt-1">
            Essential interactive utilities for safety, budgeting, eco-travel, and trip preparation.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsBadgesOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 flex items-center gap-2 transition-all shadow-lg"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>My Badges</span>
          </button>
          <button
            onClick={() => setIsSosOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold shadow-lg shadow-rose-600/30 flex items-center gap-2 animate-pulse transition-all"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Emergency SOS</span>
          </button>
        </div>
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeatherWidget city="Manali, HP" />
        <SafetyHeatmapView />
        <PackingListGenerator />
        <CurrencyConverter />
        <TripBudgetPlanner />
        <SplitwiseSettlementGraph />
        <CarbonFootprintCalculator />
        <RouteElevationChart />
        <TravelLanguageGuide />
        <OfflineEmergencyHandbook />
      </div>

      {/* Modals */}
      <EmergencySOSModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />
      <TravelBadgesModal isOpen={isBadgesOpen} onClose={() => setIsBadgesOpen(false)} />
    </div>
  );
}
