'use client';
import React, { useState } from 'react';
import { ArrowRightLeft, DollarSign } from 'lucide-react';

export const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [from, setFrom] = useState('INR');
  const [to, setTo] = useState('USD');

  const rates: Record<string, number> = {
    INR: 1,
    USD: 0.0116,
    EUR: 0.011,
    GBP: 0.0091,
    THB: 0.408,
    AED: 0.0425,
  };

  const converted = ((amount / (rates[from] || 1)) * (rates[to] || 1)).toFixed(2);

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <DollarSign className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Live Currency Exchange</h3>
          <p className="text-xs text-slate-400">Real-time travel rates</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-slate-400">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 mt-1 bg-slate-800 border border-slate-700 rounded-xl text-white font-semibold text-lg focus:outline-none focus:border-primary-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-slate-400">From</label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-3 py-2 mt-1 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm"
            >
              {Object.keys(rates).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-slate-400">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 mt-1 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm"
            >
              {Object.keys(rates).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center mt-2">
          <p className="text-xs text-slate-400">Estimated Value</p>
          <p className="text-2xl font-bold text-teal-400 mt-0.5">{converted} {to}</p>
        </div>
      </div>
    </div>
  );
};
