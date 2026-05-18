"use client";

import { useMemo, useState } from "react";
import type { Publication } from "@/lib/types";
import PublicationEntry from "./PublicationEntry";

const INITIAL_VISIBLE = 5;

export default function PublicationsList({
  publications,
}: {
  publications: Publication[];
}) {
  const years = useMemo(() => {
    const set = new Set(publications.map((p) => p.year));
    return Array.from(set).sort((a, b) => b - a);
  }, [publications]);

  const counts = useMemo(() => {
    const map = new Map<number, number>();
    for (const p of publications) map.set(p.year, (map.get(p.year) ?? 0) + 1);
    return map;
  }, [publications]);

  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const list =
      activeYear === "all"
        ? publications
        : publications.filter((p) => p.year === activeYear);
    return [...list].sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return b.created_at.localeCompare(a.created_at);
    });
  }, [publications, activeYear]);

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hiddenCount = filtered.length - visible.length;

  function handleYear(year: number | "all") {
    setActiveYear(year);
    setExpanded(false);
  }

  return (
    <div>
      {/* Year tabs */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <YearPill
          label={`All (${publications.length})`}
          active={activeYear === "all"}
          onClick={() => handleYear("all")}
        />
        {years.map((y) => (
          <YearPill
            key={y}
            label={`${y} (${counts.get(y) ?? 0})`}
            active={activeYear === y}
            onClick={() => handleYear(y)}
          />
        ))}
      </div>

      {/* List */}
      <div className="border-t border-border bg-white">
        {visible.map((pub) => (
          <PublicationEntry key={pub.id} publication={pub} />
        ))}
      </div>

      {/* Show more / less */}
      {filtered.length > INITIAL_VISIBLE && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="group inline-flex items-center gap-2 border border-primary-green-dark/40 bg-white px-5 py-2.5 text-sm font-semibold text-primary-green-dark transition-all hover:border-primary-green-dark hover:bg-primary-green-dark hover:text-white"
          >
            {expanded ? "Show fewer" : `Show ${hiddenCount} more`}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              {expanded ? "↑" : "↓"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

function YearPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "border-primary-green-dark bg-primary-green-dark text-white"
          : "border-border bg-white text-dark/70 hover:border-primary-green-dark hover:text-primary-green-dark"
      }`}
    >
      {label}
    </button>
  );
}
