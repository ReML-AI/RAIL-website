"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero/UCC_campus.jpg",
    alt: "UCC Quadrangle campus",
    position: "center",
  },
  {
    src: "/images/hero/WGB-outside.png",
    alt: "Western Gateway Building exterior",
    position: "center",
  },
  {
    src: "/images/hero/wgb-outside2.png",
    alt: "Western Gateway Building exterior view",
    position: "center",
  },
] as const;

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[600px]">
        {/* Slides with crossfade */}
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundPosition: slide.position,
              opacity: i === index ? 1 : 0,
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark/35" aria-hidden="true" />

        {/* Overlay card */}
        <div className="relative mx-auto flex max-w-content items-end px-4 pb-12 pt-6 sm:h-full sm:px-6 sm:pb-20 sm:pt-0 md:pb-24 lg:px-8">
          <div className="max-w-xl bg-primary-green-darker/95 p-5 text-white shadow-xl sm:p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-orange">
              Reliable AI Lab · University College Cork
            </p>
            <h1 className="mt-2 font-serif text-2xl font-semibold leading-tight sm:mt-3 sm:text-3xl md:text-[2.75rem]">
              Building{" "}
              <span className="relative inline-block text-primary-orange">
                Reliable AI
                <svg
                  className="pointer-events-none absolute -bottom-1 left-0 w-full text-primary-orange"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5 C 40 1, 80 7, 120 3 S 190 5, 198 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              for a Trustworthy Future
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-base">
              RAIL advances research on trustworthy, explainable, and safe
              artificial intelligence, bridging rigorous theory with real-world
              impact across six specialised research groups.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#research"
                className="group inline-flex items-center gap-2 bg-primary-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-orange-dark hover:gap-3"
              >
                Explore Research
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#people"
                className="inline-flex items-center gap-2 border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}: ${slide.alt}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-primary-orange"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Bottom orange accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary-orange" aria-hidden="true" />
      </div>
    </section>
  );
}
