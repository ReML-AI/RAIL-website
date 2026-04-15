"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "left" | "right";
};

export default function StaggerChildren({
  children,
  className = "",
  staggerDelay = 120,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate3d(0, 50px, 0)",
    left: "translate3d(-50px, 0, 0)",
    right: "translate3d(50px, 0, 0)",
  };

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translate3d(0, 0, 0)"
                  : transforms[direction],
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}ms`,
                willChange: "opacity, transform",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
