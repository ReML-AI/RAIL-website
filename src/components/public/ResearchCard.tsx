"use client";

import { useState } from "react";

export default function ResearchCard({
  name,
  tag,
  description,
  accent,
}: {
  name: string;
  tag: string | null;
  description: string;
  accent: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group relative flex flex-col overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-green hover:shadow-xl">
      {/* Visual header — colored swatch carrying the tag */}
      <div
        className={`relative flex h-40 items-center justify-center overflow-hidden ${accent}`}
      >
        {tag && (
          <span className="font-serif text-4xl font-semibold tracking-wide text-white/95 transition-transform duration-500 group-hover:scale-110 md:text-5xl">
            {tag}
          </span>
        )}
        <span
          className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/5"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary-orange/80"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold leading-snug text-dark transition-colors duration-300 group-hover:text-primary-green-dark">
          {name}
        </h3>
        <p
          className={`mt-3 flex-1 text-sm leading-relaxed text-muted transition-all duration-300 ${
            expanded ? "" : "line-clamp-5"
          }`}
        >
          {description}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-green-dark transition-all duration-300 hover:gap-2"
        >
          {expanded ? "Show less" : "Explore group"}
          <span aria-hidden="true">{expanded ? "\u2190" : "\u2192"}</span>
        </button>
      </div>
    </article>
  );
}
