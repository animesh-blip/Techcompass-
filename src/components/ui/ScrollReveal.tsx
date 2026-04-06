"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("revealed"), delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const variantClass = {
    up: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
  }[variant];

  return (
    <div ref={ref} className={clsx(variantClass, className)}>
      {children}
    </div>
  );
}
