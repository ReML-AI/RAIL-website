"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

type AnchorNavItem = {
  label: string;
  anchor: string; // e.g. "#about"
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
    // When not on the homepage, prefix with "/" so the browser navigates to
    // the homepage and then scrolls to the section.
    return pathname === "/" ? anchor : `/${anchor}`;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="RAIL - Reliable AI Lab"
            width={240}
            height={107}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.anchor}
              href={buildHref(item.anchor)}
              className="group relative text-sm font-medium text-dark/70 transition-colors hover:text-primary-green-dark"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-dark/70 transition-colors hover:text-primary-green-dark lg:hidden"
          aria-label="Toggle navigation"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="border-t border-border bg-white px-6 py-2 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.anchor}
              href={buildHref(item.anchor)}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-2 py-3 text-base font-medium text-dark/80 transition-colors hover:bg-light-gray hover:text-primary-green-dark"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
