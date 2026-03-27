'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function isElementInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const vh =
    typeof window !== 'undefined'
      ? window.innerHeight || document.documentElement.clientHeight
      : 800;
  return rect.top < vh && rect.bottom > 0;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Show above-the-fold content immediately (avoids blank page if IntersectionObserver is flaky)
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion) return;
    if (isElementInViewport(el)) {
      const run = () => setIsVisible(true);
      if (delay > 0) {
        const t = window.setTimeout(run, delay);
        return () => window.clearTimeout(t);
      }
      run();
    }
  }, [delay, prefersReducedMotion]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => {
            setIsVisible(true);
            if (observerRef.current && element) {
              observerRef.current.unobserve(element);
            }
          }, delay);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [delay, prefersReducedMotion]);

  // If still hidden while in view (observer quirk in dev/HMR), show after a short delay
  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = window.setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      if (isElementInViewport(el)) {
        setIsVisible((v) => (v ? v : true));
      }
    }, 600);
    return () => window.clearTimeout(t);
  }, [prefersReducedMotion]);

  const durationClass = prefersReducedMotion ? 'duration-0' : 'duration-[600ms]';

  return (
    <div
      ref={ref}
      className={`transition-all ${durationClass} ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
}
