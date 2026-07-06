"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setCount(end);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, reduceMotion]);

  return { count, ref };
}

export function pushDataLayer(event: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    (window as Window & { dataLayer?: unknown[] }).dataLayer =
      (window as Window & { dataLayer?: unknown[] }).dataLayer || [];
    (window as Window & { dataLayer?: unknown[] }).dataLayer!.push({
      event,
      ...data,
    });
  }
}
