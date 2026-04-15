"use client";

export function HeroShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Large orange circle - top right */}
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-[0.14]"
        style={{ background: "var(--color-primary-orange)", animation: "float 8s ease-in-out infinite" }}
      />
      {/* Green rounded rectangle */}
      <div
        className="absolute right-24 top-12 h-40 w-56 rotate-12 rounded-2xl opacity-[0.12]"
        style={{ background: "var(--color-primary-green)", animation: "float 11s ease-in-out infinite 1.5s" }}
      />
      {/* Sage circle - right center */}
      <div
        className="absolute right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full opacity-[0.16]"
        style={{ background: "var(--color-primary-sage)", animation: "float 9s ease-in-out infinite 2s" }}
      />
      {/* Small orange rotated square - upper left */}
      <div
        className="absolute left-[15%] top-16 h-20 w-20 rotate-45 rounded-md opacity-[0.15]"
        style={{ background: "var(--color-primary-orange)", animation: "float 7s ease-in-out infinite 0.5s" }}
      />
      {/* Green circle - bottom left */}
      <div
        className="absolute -bottom-12 -left-12 h-52 w-52 rounded-full opacity-[0.10]"
        style={{ background: "var(--color-primary-green)", animation: "float 10s ease-in-out infinite 3s" }}
      />
      {/* Sage triangle - bottom right */}
      <div
        className="absolute bottom-16 right-1/4 h-24 w-24 opacity-[0.18]"
        style={{
          background: "var(--color-primary-sage)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animation: "float 6s ease-in-out infinite 1s",
        }}
      />
      {/* Small dark circle */}
      <div
        className="absolute bottom-1/3 right-1/3 h-12 w-12 rounded-full opacity-[0.20]"
        style={{ background: "var(--color-dark)", animation: "float 5s ease-in-out infinite 2.5s" }}
      />
      {/* Small orange circle - bottom mid */}
      <div
        className="absolute bottom-14 left-1/4 h-14 w-14 rounded-full opacity-[0.13]"
        style={{ background: "var(--color-primary-orange)", animation: "float 8s ease-in-out infinite 4s" }}
      />
    </div>
  );
}

export function SectionShapes({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  if (variant === "a") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -right-20 top-8 h-56 w-56 rounded-full opacity-[0.09]"
          style={{ background: "var(--color-primary-green)", animation: "float 10s ease-in-out infinite" }}
        />
        <div
          className="absolute -left-10 bottom-16 h-32 w-32 rotate-45 rounded-lg opacity-[0.10]"
          style={{ background: "var(--color-primary-orange)", animation: "float 8s ease-in-out infinite 1.5s" }}
        />
        <div
          className="absolute left-12 top-6 h-16 w-16 rounded-full opacity-[0.12]"
          style={{ background: "var(--color-primary-sage)", animation: "float 7s ease-in-out infinite 0.8s" }}
        />
      </div>
    );
  }
  if (variant === "b") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Sage circle - left edge */}
        <div
          className="absolute -left-16 top-1/3 h-36 w-36 rounded-full opacity-[0.08]"
          style={{ background: "var(--color-primary-sage)", animation: "float 9s ease-in-out infinite 0.5s" }}
        />
        <div
          className="absolute bottom-8 right-16 h-28 w-28 rounded-full opacity-[0.11]"
          style={{ background: "var(--color-primary-orange)", animation: "float 7s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute right-10 top-4 h-20 w-20 opacity-[0.10]"
          style={{
            background: "var(--color-primary-green)",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "float 6s ease-in-out infinite 3s",
          }}
        />
      </div>
    );
  }
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute right-10 top-4 h-40 w-48 rotate-12 rounded-2xl opacity-[0.08]"
        style={{ background: "var(--color-primary-green)", animation: "float 11s ease-in-out infinite 1s" }}
      />
      <div
        className="absolute -bottom-8 left-20 h-36 w-36 rounded-full opacity-[0.10]"
        style={{ background: "var(--color-primary-orange)", animation: "float 9s ease-in-out infinite 2.5s" }}
      />
      <div
        className="absolute left-4 top-1/2 h-14 w-14 rotate-45 rounded opacity-[0.12]"
        style={{ background: "var(--color-primary-sage)", animation: "float 7s ease-in-out infinite 1.5s" }}
      />
    </div>
  );
}
