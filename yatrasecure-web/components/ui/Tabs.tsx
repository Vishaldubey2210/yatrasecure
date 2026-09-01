'use client';
import React from 'react';

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export const Tabs: React.FC<{
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex space-x-1 p-1 bg-slate-900 border border-slate-800 rounded-xl">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all \${
              isActive
                ? 'bg-primary-500 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
