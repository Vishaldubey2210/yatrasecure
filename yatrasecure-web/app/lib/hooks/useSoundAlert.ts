'use client';
import { useCallback } from 'react';

export function useSoundAlert() {
  const playBeep = useCallback((freq: number = 880, durationMs: number = 200) => {
    if (typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + durationMs / 1000);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + durationMs / 1000);
    } catch (e) {
      // Ignore audio autoplay restrictions gracefully
    }
  }, []);

  const playSOSAlarm = useCallback(() => {
    playBeep(980, 400);
    setTimeout(() => playBeep(650, 400), 450);
  }, [playBeep]);

  return { playBeep, playSOSAlarm };
}
