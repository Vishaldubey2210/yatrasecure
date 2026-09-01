'use client';
import { useState, useCallback } from 'react';
import toast from 'react-hot-toast';

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string, successMessage: string = 'Copied to clipboard!') => {
    if (typeof window === 'undefined' || !navigator.clipboard) {
      toast.error('Clipboard not supported');
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(successMessage);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      toast.error('Failed to copy');
      return false;
    }
  }, []);

  return { copied, copy };
}
