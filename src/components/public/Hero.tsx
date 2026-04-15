"use client";

import Link from "next/link";
import { HeroShapes } from "./GeometricShapes";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-light-gray px-6 py-20 lg:py-28"
      style={{
        backgroundImage: "url(/images/hero-bg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroShapes />

      <div className="relative mx-auto max-w-content">
        <span
          className="inline-flex items-center gap-2 rounded-full border border-primary-green/30 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-green-dark backdrop-blur"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-orange" />
          Reliable AI Lab · University College Cork
        </span>
        <h1
          className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-dark sm:text-5xl lg:text-6xl xl:text-7xl"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards",
          }}
        >
          Building{" "}
          <span
            className="px-1"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(255, 136, 62, 0.4) 30%, transparent 30%)",
              WebkitBoxDecorationBreak: "clone",
              boxDecorationBreak: "clone",
            }}
          >
            Reliable AI
          </span>{" "}
          for a Trustworthy Future
        </h1>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-dark/65"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
          }}
        >
          RAIL advances research on trustworthy, explainable, and safe
          artificial intelligence — bridging rigorous theory with real-world
          impact across six specialised research groups.
        </p>
        <div
          className="mt-9 flex flex-wrap gap-4"
          style={{
            opacity: 0,
            animation: "fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards",
          }}
        >
          <Link
            href="#research"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-green px-7 py-3.5 text-base font-medium text-white shadow-sm transition-all hover:bg-primary-green-dark hover:shadow-md"
          >
            Explore Research
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="#people"
            className="inline-flex items-center gap-2 rounded-lg border border-dark/15 bg-white/60 px-7 py-3.5 text-base font-medium text-dark backdrop-blur transition-colors hover:border-primary-orange hover:text-primary-orange"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
