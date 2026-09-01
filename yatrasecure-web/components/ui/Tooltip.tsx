'use client';
import React, { useState } from 'react';

export const Tooltip: React.FC<{
  content: string;
  children: React.ReactNode;
}> = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-800 text-slate-200 text-xs rounded-md shadow-lg whitespace-nowrap z-50 border border-slate-700 pointer-events-none">
          {content}
        </div>
      )}
    </div>
  );
};
