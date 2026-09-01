'use client';
import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOfflineStatus } from '@/app/lib/hooks/useOfflineStatus';

export const OfflineBanner: React.FC = () => {
  const isOffline = useOfflineStatus();

  if (!isOffline) return null;

  return (
    <div className="sticky top-0 z-50 bg-amber-600 text-white px-4 py-2 text-sm font-medium flex items-center justify-center gap-2 shadow-md">
      <WifiOff className="w-4 h-4" />
      <span>You are currently offline. Cached trips and emergency handbook remain available.</span>
    </div>
  );
};
