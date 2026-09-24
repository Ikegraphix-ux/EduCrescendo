"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(el);
    const safety = setTimeout(() => setVisible(true), 2000);
    return () => {
      observer.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal-pending${visible ? " is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
