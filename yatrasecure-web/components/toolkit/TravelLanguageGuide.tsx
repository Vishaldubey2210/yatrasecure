'use client';
import React, { useState } from 'react';
import { Languages, Volume2 } from 'lucide-react';
import { TRAVEL_PHRASES } from '@/app/lib/utils/phrasebookData';
import { useSoundAlert } from '@/app/lib/hooks/useSoundAlert';

export const TravelLanguageGuide: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const { playBeep } = useSoundAlert();

  const filtered = category === 'all' ? TRAVEL_PHRASES : TRAVEL_PHRASES.filter((p) => p.category === category);

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <Languages className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">Travel Language Guide</h3>
          <p className="text-xs text-slate-400">Essential Hindi phrases for travelers</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {['all', 'emergency', 'greetings', 'directions', 'food'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-colors \${
              category === cat ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-2 max-h-56 overflow-y-auto">
        {filtered.map((phrase, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-slate-400">{phrase.english}</p>
              <p className="text-sm font-semibold text-white mt-0.5">{phrase.hindi} <span className="text-xs text-teal-400 font-normal">({phrase.phonetic})</span></p>
            </div>
            <button
              onClick={() => playBeep(520, 150)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
