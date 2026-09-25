"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateVisibility = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setVisible(window.scrollY > 480);
        frame = 0;
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function returnToTop() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <button
      className={`back-to-top${visible ? " is-visible" : ""}`}
      type="button"
      onClick={returnToTop}
      aria-label="Return to top"
      title="Return to top"
      disabled={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 14 6-6 6 6" />
      </svg>
    </button>
  );
}

