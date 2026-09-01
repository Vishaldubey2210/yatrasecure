'use client';
import React, { useState } from 'react';
import { Check, Plus, Trash2, Luggage } from 'lucide-react';
import { DEFAULT_PACKING_ITEMS, PresetItem } from '@/app/lib/utils/packingListPresets';

export const PackingListGenerator: React.FC = () => {
  const [items, setItems] = useState<PresetItem[]>(DEFAULT_PACKING_ITEMS);
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set(['1', '2', '3']));
  const [newItemName, setNewItemName] = useState('');

  const toggleCheck = (id: string) => {
    const next = new Set(checkedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCheckedIds(next);
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    const newItem: PresetItem = {
      id: Date.now().toString(),
      name: newItemName.trim(),
      category: 'Essentials',
    };
    setItems([...items, newItem]);
    setNewItemName('');
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const progress = Math.round((checkedIds.size / Math.max(1, items.length)) * 100);

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <Luggage className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Smart Packing Checklist</h3>
            <p className="text-xs text-slate-400">{checkedIds.size} of {items.length} packed ({progress}%)</p>
          </div>
        </div>
      </div>

      <form onSubmit={addItem} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add custom item..."
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="flex-1 px-3.5 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-primary-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-sm font-medium flex items-center gap-1"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </form>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {items.map((item) => {
          const isChecked = checkedIds.has(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer \${
                isChecked
                  ? 'bg-slate-900/40 border-slate-800/60 opacity-60'
                  : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors \${
                    isChecked ? 'bg-teal-500 border-teal-500 text-white' : 'border-slate-600 bg-slate-800'
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5" />}
                </div>
                <span className={`text-sm \${isChecked ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                  {item.name}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item.id);
                }}
                className="p-1 text-slate-500 hover:text-rose-400"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
