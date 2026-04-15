"use client";

import { useEffect, useRef, useState } from "react";
import type { ResearchArea } from "@/lib/types";

const ACCENT_BARS = [
  "bg-primary-green",
  "bg-primary-orange",
  "bg-primary-sage",
  "bg-primary-green-dark",
  "bg-primary-orange-dark",
  "bg-primary-green",
];

const ACCENT_TINTS = [
  "bg-primary-green/10",
  "bg-primary-orange/10",
  "bg-primary-sage/15",
  "bg-primary-green-dark/10",
  "bg-primary-orange-dark/10",
  "bg-primary-sage/10",
];

const DOT_COLORS = ACCENT_BARS;

// Vertical offset between stacked cards (peek height)
const STACK_OFFSET_PX = 16;
// Sticky top (space reserved for navbar)
const STICKY_TOP_REM = 5.5;

function extractTag(title: string): { name: string; tag: string | null } {
  const match = title.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (match) return { name: match[1].trim(), tag: match[2].trim() };
  return { name: title, tag: null };
}

export default function ResearchStickyRail({ areas }: { areas: ResearchArea[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the intersecting card with the highest index (topmost in the stack)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => Number(e.target.getAttribute("data-index")))
          .filter((n) => !Number.isNaN(n))
          .sort((a, b) => b - a)[0];
        if (typeof visible === "number") setActiveIndex(visible);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [areas.length]);

  function scrollTo(i: number) {
    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
      {/* Sticky left rail — desktop only */}
      <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
        <div className="rounded-2xl border border-border bg-white/70 p-4 backdrop-blur-sm">
          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-dark/50">
            Groups
          </p>
          <ol className="space-y-1">
            {areas.map((area, i) => {
              const { name, tag } = extractTag(area.title);
              const isActive = i === activeIndex;
              return (
                <li key={area.id}>
                  <button
                    onClick={() => scrollTo(i)}
                    className={`group flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-all ${
                      isActive
                        ? "bg-primary-green/10 text-primary-green-dark"
                        : "text-dark/70 hover:bg-light-gray hover:text-dark"
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full transition-all ${
                        isActive ? `${DOT_COLORS[i % DOT_COLORS.length]} scale-125` : "bg-dark/20"
                      }`}
                    />
                    <span className="flex-1">
                      <span className="block text-sm font-medium leading-tight">{name}</span>
                      {tag && (
                        <span className="mt-0.5 block font-mono text-[10px] tracking-wider text-dark/40">
                          {tag}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </aside>

      {/* Stacked sticky cards */}
      <div className="relative">
        {areas.map((area, i) => {
          const { name, tag } = extractTag(area.title);
          const bar = ACCENT_BARS[i % ACCENT_BARS.length];
          const tint = ACCENT_TINTS[i % ACCENT_TINTS.length];
          const dot = DOT_COLORS[i % DOT_COLORS.length];
          const behindActive = i < activeIndex;

          return (
            <div
              key={area.id}
              data-index={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="sticky pb-6"
              style={{
                top: `calc(${STICKY_TOP_REM}rem + ${i * STACK_OFFSET_PX}px)`,
                zIndex: i + 1,
              }}
            >
              <article
                className={`relative overflow-hidden rounded-3xl border border-border bg-white p-6 pl-8 shadow-xl shadow-dark/10 transition-all duration-500 ease-out sm:p-8 sm:pl-10 lg:p-12 lg:pl-14 ${
                  behindActive ? "scale-[0.985]" : "scale-100"
                }`}
              >
                {/* Colored left accent bar */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 h-full w-1.5 ${bar}`}
                />
                {/* Subtle tinted corner blob */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full ${tint} blur-3xl`}
                />
                {/* Decorative number watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-2 select-none font-mono text-[7rem] font-black leading-none text-dark/[0.05] sm:text-[9rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
                  {tag && (
                    <span className="font-mono text-xs tracking-[0.2em] text-dark/50">
                      {tag} · {String(i + 1).padStart(2, "0")} / {String(areas.length).padStart(2, "0")}
                    </span>
                  )}
                </div>
                <h3 className="relative mt-4 text-2xl font-bold leading-tight text-dark sm:text-3xl lg:text-4xl">
                  {name}
                </h3>
                <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-dark/75">
                  {area.description}
                </p>
              </article>
            </div>
          );
        })}
        {/* Trailing spacer so the last card has room to rest before the next section */}
        <div className="h-24" aria-hidden="true" />
      </div>
    </div>
  );
}
