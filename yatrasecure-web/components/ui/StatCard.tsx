'use client';
import React from 'react';

export const StatCard: React.FC<{
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: string;
}> = ({ title, value, subtitle, icon, trend }) => {
  return (
    <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start justify-between">
      <div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{title}</p>
        <h4 className="text-2xl font-bold text-white mt-1">{value}</h4>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
        {trend && <span className="text-xs text-emerald-400 font-medium">{trend}</span>}
      </div>
      <div className="p-3 bg-primary-500/10 border border-primary-500/20 rounded-xl text-primary-400">
        {icon}
      </div>
    </div>
  );
};
