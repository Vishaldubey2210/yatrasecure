'use client';
import React from 'react';
import { ArrowRight, Split } from 'lucide-react';
import { formatCurrencyINR } from '@/app/lib/utils/formatters';

export const SplitwiseSettlementGraph: React.FC<{
  settlements?: { from: string; to: string; amount: number }[];
}> = ({
  settlements = [
    { from: 'Rohit Sharma', to: 'Vishal Kumar', amount: 3500 },
    { from: 'Ananya Verma', to: 'Vishal Kumar', amount: 1200 },
  ],
}) => {
  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
          <Split className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Optimal Debt Settlements</h3>
          <p className="text-xs text-slate-400">Minimizes group transactions</p>
        </div>
      </div>

      <div className="space-y-3">
        {settlements.map((s, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-between"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <span className="text-rose-300">{s.from}</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
              <span className="text-emerald-300">{s.to}</span>
            </div>
            <span className="text-sm font-bold text-teal-400">{formatCurrencyINR(s.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
