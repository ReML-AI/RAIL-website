"use client";

import { useState } from "react";
import type { Publication } from "@/lib/types";

export default function PublicationEntry({ publication }: { publication: Publication }) {
  const [showBibtex, setShowBibtex] = useState(false);

  return (
    <div className="group relative overflow-hidden border-b border-border last:border-0">
      {/* Background sweep from bottom to top on hover */}
      <div className="absolute inset-0 translate-y-full bg-primary-orange/5 transition-transform duration-500 ease-out group-hover:translate-y-0" />
      <div className="relative px-4 py-5 -mx-4">
        <h3 className="font-semibold text-dark group-hover:text-primary-green transition-colors duration-300">{publication.title}</h3>
        <p className="mt-1 text-sm text-dark/60">{publication.authors}</p>
        <p className="mt-0.5 text-sm text-dark/40">{publication.venue}, {publication.year}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          {publication.doi_url && (
            <a href={publication.doi_url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-primary-orange hover:underline">DOI</a>
          )}
          {publication.pdf_url && (
            <a href={publication.pdf_url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-primary-orange hover:underline">PDF</a>
          )}
          {publication.bibtex && (
            <button onClick={() => setShowBibtex(!showBibtex)} className="text-xs font-medium text-primary-orange hover:underline">
              {showBibtex ? "Hide BibTeX" : "BibTeX"}
            </button>
          )}
        </div>
        {showBibtex && publication.bibtex && (
          <pre className="mt-3 overflow-x-auto rounded bg-light-gray p-3 font-mono text-xs text-dark/70">
            {publication.bibtex}
          </pre>
        )}
      </div>
    </div>
  );
}
