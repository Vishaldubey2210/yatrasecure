'use client';
import { useEffect } from 'react';

export function useKeyboardShortcut(key: string, callback: () => void, ctrlOrMeta: boolean = false) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = (e: KeyboardEvent) => {
      const matchesModifier = ctrlOrMeta ? e.ctrlKey || e.metaKey : true;
      if (matchesModifier && e.key.toLowerCase() === key.toLowerCase()) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, callback, ctrlOrMeta]);
}
