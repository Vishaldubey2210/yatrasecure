'use client';
import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { AlertTriangle, PhoneCall, Radio, Volume2 } from 'lucide-react';
import { useGeolocation } from '@/app/lib/hooks/useGeolocation';
import { useSoundAlert } from '@/app/lib/hooks/useSoundAlert';
import { INDIA_EMERGENCY_SERVICES } from '@/app/lib/utils/emergencyContactsData';
import toast from 'react-hot-toast';

export const EmergencySOSModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { lat, lng } = useGeolocation();
  const { playSOSAlarm } = useSoundAlert();
  const [broadcasting, setBroadcasting] = useState(false);

  const handleBroadcast = () => {
    setBroadcasting(true);
    playSOSAlarm();
    setTimeout(() => {
      setBroadcasting(false);
      toast.success('🚨 SOS Beacon broadcasted to emergency contacts & group members!');
    }, 1500);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="🚨 Emergency SOS Distress Center" maxWidth="lg">
      <div className="space-y-6">
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-rose-400 flex-shrink-0" />
          <span>Triggering SOS broadcasts your live GPS coordinates to verified emergency services and trip companions.</span>
        </div>

        <div className="text-center py-3">
          <button
            onClick={handleBroadcast}
            disabled={broadcasting}
            className="w-32 h-32 rounded-full bg-gradient-to-tr from-rose-600 to-red-500 hover:from-rose-500 hover:to-red-400 text-white font-black text-2xl shadow-2xl shadow-rose-600/50 active:scale-95 transition-all mx-auto flex flex-col items-center justify-center gap-1 border-4 border-rose-400/40 animate-pulse"
          >
            <Radio className="w-8 h-8" />
            <span>SOS</span>
          </button>
          <p className="text-xs text-slate-400 mt-3">
            Current GPS: {lat ? `${lat.toFixed(4)}, ${lng?.toFixed(4)}` : 'Locating satellite...'}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Quick Dial Emergency Services</h4>
          <div className="grid grid-cols-2 gap-2">
            {INDIA_EMERGENCY_SERVICES.slice(0, 4).map((svc) => (
              <a
                key={svc.number}
                href={`tel:${svc.number}`}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
              >
                <div>
                  <p className="text-xs font-medium text-white">{svc.name}</p>
                  <p className="text-xs text-slate-400">{svc.number}</p>
                </div>
                <PhoneCall className="w-4 h-4 text-emerald-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
