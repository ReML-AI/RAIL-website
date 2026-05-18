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
  const sorted = useMemo(
    () =>
      [...publications].sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year;
        return b.created_at.localeCompare(a.created_at);
      }),
    [publications],
  );

  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? sorted : sorted.slice(0, INITIAL_VISIBLE);
  const hiddenCount = sorted.length - visible.length;

  return (
    <div>
      <div className="border-t border-border bg-white">
        {visible.map((pub) => (
          <PublicationEntry key={pub.id} publication={pub} />
        ))}
      </div>

      {sorted.length > INITIAL_VISIBLE && (
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
