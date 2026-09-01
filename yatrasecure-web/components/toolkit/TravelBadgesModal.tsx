'use client';
import React from 'react';
import { Modal } from '../ui/Modal';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SAMPLE_USER_BADGES } from '@/app/lib/utils/badgeData';

export const TravelBadgesModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="🎖️ Traveler Achievements & Badges" maxWidth="md">
      <div className="space-y-3">
        {SAMPLE_USER_BADGES.map((badge) => (
          <div
            key={badge.id}
            className={`p-4 rounded-xl border flex items-center justify-between \${
              badge.unlocked
                ? 'bg-slate-800/60 border-amber-500/30'
                : 'bg-slate-900/40 border-slate-800 opacity-60'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl \${badge.unlocked ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-500'}`}>
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{badge.title}</h4>
                <p className="text-xs text-slate-400">{badge.description}</p>
              </div>
            </div>
            {badge.unlocked ? (
              <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Unlocked
              </span>
            ) : (
              <span className="text-xs text-slate-500 font-medium">{badge.progress}%</span>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};
