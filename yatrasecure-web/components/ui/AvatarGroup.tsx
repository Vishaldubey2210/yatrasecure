'use client';
import React from 'react';

export const AvatarGroup: React.FC<{
  users: { name: string; image?: string }[];
  max?: number;
}> = ({ users, max = 4 }) => {
  const visible = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className="flex items-center -space-x-2">
      {visible.map((u, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-semibold text-white overflow-hidden"
          title={u.name}
        >
          {u.image ? (
            <img src={u.image} alt={u.name} className="w-full h-full object-cover" />
          ) : (
            u.name.charAt(0).toUpperCase()
          )}
        </div>
      ))}
      {remaining > 0 && (
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-300">
          +{remaining}
        </div>
      )}
    </div>
  );
};
