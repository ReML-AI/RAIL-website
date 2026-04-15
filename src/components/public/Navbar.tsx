"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

type AnchorNavItem = {
  label: string;
  anchor: string;
};

const navItems: AnchorNavItem[] = [
  { label: "About", anchor: "#about" },
  { label: "Research", anchor: "#research" },
  { label: "People", anchor: "#people" },
  { label: "Projects", anchor: "#projects" },
  { label: "Publications", anchor: "#publications" },
  { label: "Contact", anchor: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function buildHref(anchor: string): string {
    return pathname === "/" ? anchor : `/${anchor}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      {/* Top accent strip */}
      <div className="h-1 w-full bg-primary-orange" aria-hidden="true" />

      {/* Main navigation */}
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-4 py-2.5 sm:px-6 lg:px-8 lg:py-3">
        <Link href="/" className="flex flex-shrink-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="RAIL - Reliable AI Lab"
            width={220}
            height={96}
            priority
            className="h-12 w-auto sm:h-16 lg:h-20"
          />
          <span className="hidden border-l border-border pl-3 md:block">
            <span className="block font-serif text-base font-semibold leading-tight text-dark lg:text-lg">
              Reliable AI Lab
            </span>
            <span className="block text-[11px] text-muted lg:text-xs">
              University College Cork
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.anchor}
              href={buildHref(item.anchor)}
              className="rounded-sm px-3 py-2 text-[15px] font-medium text-dark/80 transition-colors hover:bg-light-gray hover:text-primary-green-dark"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:info@reliableai.org"
            className="ml-3 inline-flex items-center bg-primary-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-green-dark"
          >
            Get in touch
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-dark/70 transition-colors hover:text-primary-green-dark lg:hidden"
          aria-label="Toggle navigation"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 py-2 sm:px-6 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.anchor}
              href={buildHref(item.anchor)}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-border/60 py-3 text-base font-medium text-dark/80 transition-colors last:border-0 hover:text-primary-green-dark"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:info@reliableai.org"
            onClick={() => setMobileOpen(false)}
            className="mt-3 mb-4 block bg-primary-green px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
