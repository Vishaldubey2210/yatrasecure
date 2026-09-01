'use client';
import React, { useState } from 'react';
import { Wallet, PieChart } from 'lucide-react';
import { calculateDailyAllowance } from '@/app/lib/utils/budgetUtils';
import { formatCurrencyINR } from '@/app/lib/utils/formatters';

export const TripBudgetPlanner: React.FC = () => {
  const [budget, setBudget] = useState(25000);
  const [days, setDays] = useState(5);

  const { dailyAllowance, emergencyBuffer, availableSpend } = calculateDailyAllowance(budget, days);

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <Wallet className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Trip Budget Forecaster</h3>
          <p className="text-xs text-slate-400">Smart per-day expense breakdown</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-slate-400">Total Budget (₹)</label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full px-3.5 py-2 mt-1 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-slate-400">Duration (Days)</label>
            <input
              type="number"
              value={days}
              min="1"
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full px-3.5 py-2 mt-1 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700">
            <p className="text-xs text-slate-400">Daily Spending Limit</p>
            <p className="text-lg font-bold text-teal-400 mt-1">{formatCurrencyINR(dailyAllowance)} / day</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700">
            <p className="text-xs text-slate-400">Emergency Buffer (15%)</p>
            <p className="text-lg font-bold text-amber-400 mt-1">{formatCurrencyINR(emergencyBuffer)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
