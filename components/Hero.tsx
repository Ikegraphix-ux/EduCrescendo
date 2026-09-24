"use client";
import { useEffect, useState } from "react";

const heroSlides = [
  "/images/edu/leadership.jpg",
  "/images/edu/flourid.jpg",
  "/images/edu/community.jpg",
  "/images/edu/interview.jpg",
];

export default function Hero({
  children,
  style,
  slideshow = true,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  slideshow?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slideshow) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slideshow]);

  const bgStyle: React.CSSProperties = slideshow
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(10,57,96,.72), rgba(30,158,106,.30)), url('${heroSlides[index]}')`,
        ...style,
      }
    : { ...style };

  return (
    <section className="hero" style={bgStyle}>
      {children}
    </section>
  );
}
