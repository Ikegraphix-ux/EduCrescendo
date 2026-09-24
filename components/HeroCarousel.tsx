"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  href: string;
};

const slidesByPath: Record<string, HeroSlide[]> = {
  "/": [
    {
      eyebrow: "A connected ecosystem",
      title: "From potential to progress.",
      description:
        "The FLOURISH™ framework brings learners, educators, leaders, schools, and communities into one shared journey.",
      action: "Explore the framework",
      href: "/flourish",
    },
    {
      eyebrow: "Insight for meaningful change",
      title: "See what helps people thrive.",
      description:
        "FlourishScore™ turns a clear baseline into practical insight and purposeful next steps for your institution.",
      action: "Discover FlourishScore™",
      href: "/flourish",
    },
  ],
  "/about": [
    {
      eyebrow: "Our belief",
      title: "Every person has potential worth nurturing.",
      description:
        "We see education as a human, relational process that can help people and communities grow together.",
      action: "Explore our approach",
      href: "/flourish",
    },
    {
      eyebrow: "Our way of working",
      title: "Thoughtful ideas, made practical.",
      description:
        "We work alongside institutions to turn a shared vision for flourishing into meaningful, lasting change.",
      action: "See our solutions",
      href: "/solutions",
    },
  ],
  "/flourish": [
    {
      eyebrow: "Six connected domains",
      title: "Flourishing is bigger than one measure.",
      description:
        "The ecosystem connects learners, educators, leadership, schools, communities, and societies.",
      action: "Explore the six domains",
      href: "/flourish",
    },
    {
      eyebrow: "From insight to action",
      title: "Measure what matters. Plan what’s next.",
      description:
        "FlourishScore™ helps institutions understand their starting point and shape a focused path forward.",
      action: "View our solutions",
      href: "/solutions",
    },
  ],
  "/solutions": [
    {
      eyebrow: "Designed around your context",
      title: "Progress begins with the right next step.",
      description:
        "Explore practical support for school improvement, leadership development, assessment, and partnerships.",
      action: "Explore FLOURISH™",
      href: "/flourish",
    },
    {
      eyebrow: "A shared process",
      title: "Build change with the people closest to it.",
      description:
        "Our approach brings institutional insight and collaborative action together for sustainable transformation.",
      action: "Start a conversation",
      href: "/contact",
    },
  ],
  "/validation": [
    {
      eyebrow: "Shape what comes next",
      title: "Help validate a new approach to flourishing.",
      description:
        "Participating institutions help strengthen FlourishScore™ through structured use, reflection, and feedback.",
      action: "See the programme",
      href: "/validation",
    },
    {
      eyebrow: "Learn alongside peers",
      title: "Turn institutional insight into shared learning.",
      description:
        "Join a growing community exploring how evidence and collaboration can support educational transformation.",
      action: "Ask about participation",
      href: "/contact",
    },
  ],
  "/insights": [
    {
      eyebrow: "Ideas built for action",
      title: "Research and reflection for real contexts.",
      description:
        "Explore perspectives on flourishing education, leadership, and the conditions that help communities thrive.",
      action: "Browse insights",
      href: "/insights",
    },
    {
      eyebrow: "Join the conversation",
      title: "Better questions create room for progress.",
      description:
        "Bring your experience, questions, and ideas into a wider conversation about the future of education.",
      action: "Connect with us",
      href: "/contact",
    },
  ],
  "/contact": [
    {
      eyebrow: "Start with a conversation",
      title: "A clear next step begins with listening.",
      description:
        "Tell us what your institution is working toward and we’ll explore where a conversation could lead.",
      action: "Book a discovery conversation",
      href: "https://wa.me/233201649041?text=Hi%2C%20I%27d%20like%20to%20book%20a%20Discovery%20Conversation%20with%20EduCrescendo%20Global.",
    },
    {
      eyebrow: "Partnerships that make a difference",
      title: "Let’s build a flourishing future together.",
      description:
        "We welcome thoughtful collaborations with schools, communities, universities, and organisations.",
      action: "Explore partnership options",
      href: "/solutions",
    },
  ],
};

export default function HeroCarousel({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const extraSlides = slidesByPath[pathname] ?? [];
  const slideCount = extraSlides.length + 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const currentIndex = activeIndex % slideCount;

  useEffect(() => {
    setActiveIndex(0);
  }, [pathname]);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || slideCount < 2) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActiveIndex((current) => (current + 1) % slideCount);
      }
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion, slideCount]);

  const showSlide = (index: number) => {
    setActiveIndex((index + slideCount) % slideCount);
  };
  const currentSlide = extraSlides[currentIndex - 1];

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Page highlights"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="hero-slide" key={`${pathname}-${activeIndex}`} aria-live="off">
        {currentIndex === 0 ? (
          children
        ) : (
          <div className="hero-message-slide">
            <p className="eyebrow">{currentSlide.eyebrow}</p>
            <h1>{currentSlide.title}</h1>
            <p className="lead">{currentSlide.description}</p>
            <Link
              className="btn btn-accent hero-slide-action"
              href={currentSlide.href}
              target={currentSlide.href.startsWith("https://") ? "_blank" : undefined}
              rel={currentSlide.href.startsWith("https://") ? "noopener noreferrer" : undefined}
            >
              {currentSlide.action}<span aria-hidden="true"> ↗</span>
            </Link>
          </div>
        )}
      </div>
      {slideCount > 1 && (
        <div className="hero-carousel-controls" aria-label="Carousel controls">
          <button type="button" className="hero-arrow" aria-label="Previous slide" onClick={() => showSlide(activeIndex - 1)}>
            ←
          </button>
          <div className="hero-dots" role="group" aria-label="Choose a slide">
            {Array.from({ length: slideCount }, (_, index) => (
              <button
                key={index}
                type="button"
              className={`hero-dot${currentIndex === index ? " active" : ""}`}
              aria-label={`Show slide ${index + 1} of ${slideCount}`}
                aria-current={currentIndex === index ? "true" : undefined}
                onClick={() => showSlide(index)}
              />
            ))}
          </div>
          <button type="button" className="hero-arrow" aria-label="Next slide" onClick={() => showSlide(activeIndex + 1)}>
            →
          </button>
          {!reducedMotion && (
            <button
              type="button"
              className="hero-play-toggle"
              aria-label={paused ? "Play automatic slides" : "Pause automatic slides"}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? "Play" : "Pause"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

