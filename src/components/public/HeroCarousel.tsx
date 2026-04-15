"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const slides: Slide[] = [
  {
    src: "/images/hero/ai-abstract.jpg",
    alt: "Abstract AI visualization",
    caption: "Advancing trustworthy AI",
  },
  {
    src: "/images/hero/neural-net.jpg",
    alt: "Neural network abstract",
    caption: "Explainable systems by design",
  },
  {
    src: "/images/hero/research-lab.jpg",
    alt: "Research environment",
    caption: "Rigorous, open research",
  },
  {
    src: "/images/hero/data-viz.jpg",
    alt: "Data visualization",
    caption: "Grounded in real-world data",
  },
  {
    src: "/images/hero/team-collab.jpg",
    alt: "Team collaboration",
    caption: "A collaborative team in Cork",
  },
];

const INTERVAL_MS = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const update = () => setReducedMotion(media.matches);
    media.addEventListener("change", update);

    setTabHidden(document.hidden);
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (hovered || tabHidden || reducedMotion) return;
    const timer = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [next, hovered, tabHidden, reducedMotion]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-dark/5 sm:aspect-[16/10] lg:aspect-[4/3]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      role="region"
      aria-label="RAIL image carousel"
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent px-6 py-5">
            <p className="text-sm font-medium tracking-wide text-white/90">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-primary-orange"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
