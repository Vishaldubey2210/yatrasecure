'use client';
import React from 'react';

export const ProgressBar: React.FC<{
  progress: number;
  label?: string;
  color?: string;
}> = ({ progress, label, color = 'bg-primary-500' }) => {
  const clamped = Math.max(0, Math.min(100, progress));

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>{label}</span>
          <span>{Math.round(clamped)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full \${color} transition-all duration-300 rounded-full`}
          style={{ width: `\${clamped}%` }}
        />
      </div>
    </div>
  );
};
