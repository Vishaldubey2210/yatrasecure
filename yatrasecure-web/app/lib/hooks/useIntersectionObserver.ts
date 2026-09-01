'use client';
import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(options: IntersectionObserverInit = { threshold: 0.1 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { elementRef, isIntersecting };
}
