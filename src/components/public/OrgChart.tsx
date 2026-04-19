"use client";

import Image from "next/image";
import { useState } from "react";
import { director, groups, type TeamMember } from "@/data/team";

// Theme colors (matches globals.css tokens)
const COLOR_GREEN = "#0E6E4C";
const COLOR_GREEN_DARK = "#0A5238";
const COLOR_ORANGE = "#E8731C";
const COLOR_ORANGE_DARK = "#C55C12";

const GROUP_COLORS = [
  COLOR_GREEN,
  COLOR_ORANGE,
  COLOR_GREEN_DARK,
  COLOR_ORANGE_DARK,
  COLOR_GREEN,
  COLOR_ORANGE,
];

function getInitials(name: string): string {
  return name
    .replace(/^(Dr|Prof|A\/Prof|New)\s+/i, "")
    .split(/[\s_]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

function Avatar({
  person,
  sizeClass = "h-[72px] w-[72px]",
  hovered = false,
  ringColor = COLOR_GREEN,
}: {
  person: TeamMember;
  sizeClass?: string;
  hovered?: boolean;
  ringColor?: string;
}) {
  return (
    <div className={`relative shrink-0 ${sizeClass}`}>
      <svg
        className="absolute inset-0 z-10"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke={ringColor}
          strokeWidth={hovered ? 3 : 2}
          strokeLinecap="round"
          className="transition-all duration-300"
          style={{
            filter: hovered ? `drop-shadow(0 0 6px ${ringColor}60)` : "none",
          }}
        />
      </svg>

      <div
        className="absolute inset-[3px] overflow-hidden rounded-full transition-transform duration-300"
        style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
      >
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="150px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-light-gray font-serif text-xl font-semibold text-muted">
            {getInitials(person.name)}
          </div>
        )}
      </div>
    </div>
  );
}

function MemberCard({
  person,
  accentColor,
}: {
  person: TeamMember;
  accentColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col items-center gap-2 transition-all duration-300"
      style={{ transform: hovered ? "translateY(-3px)" : "translateY(0)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Avatar
        person={person}
        sizeClass="h-[80px] w-[80px] sm:h-[96px] sm:w-[96px]"
        hovered={hovered}
        ringColor={accentColor}
      />
      <span
        className="max-w-[9rem] text-center font-serif text-[14px] font-medium leading-tight text-dark transition-colors duration-300 sm:text-[15px]"
        style={{ color: hovered ? accentColor : undefined }}
      >
        {person.name}
      </span>
    </div>
  );
}

function DirectorCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Avatar
        person={director}
        sizeClass="h-[120px] w-[120px] sm:h-[150px] sm:w-[150px]"
        hovered={hovered}
        ringColor={COLOR_GREEN_DARK}
      />
      <div
        className="px-5 py-2 text-center transition-all duration-300"
        style={{
          backgroundColor: hovered ? COLOR_GREEN : COLOR_GREEN_DARK,
          boxShadow: hovered ? "0 6px 16px rgba(14, 110, 76, 0.3)" : "none",
        }}
      >
        <p className="text-[11px] font-medium uppercase tracking-wider text-white/80">
          Director
        </p>
        <p className="font-serif text-base font-semibold text-white sm:text-lg">
          {director.title} {director.name}
        </p>
      </div>
    </div>
  );
}

function GroupColumn({
  group,
  colorIndex,
}: {
  group: (typeof groups)[0];
  colorIndex: number;
}) {
  const [hovered, setHovered] = useState(false);
  const accentColor = GROUP_COLORS[colorIndex % GROUP_COLORS.length];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Group header — squared block */}
      <div
        className="flex w-full cursor-default items-center justify-center px-3 py-3 text-center transition-all duration-300 lg:h-24"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: accentColor,
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered ? `0 8px 20px ${accentColor}40` : "none",
        }}
      >
        <div>
          <p className="font-serif text-sm font-semibold leading-tight text-white sm:text-base">
            {group.name}
          </p>
          <p className="mt-1 text-[10.5px] font-medium uppercase tracking-wider text-white/80">
            ({group.tag})
          </p>
        </div>
      </div>

      {/* Connector — desktop only */}
      <div
        className="hidden h-6 w-px transition-all duration-300 lg:block"
        style={{
          backgroundColor: accentColor,
          opacity: hovered ? 0.9 : 0.4,
        }}
      />

      {/* Members */}
      <div className="flex flex-wrap justify-center gap-4 lg:flex-col lg:items-center lg:gap-5">
        {group.members.map((member) => (
          <MemberCard
            key={member.name}
            person={member}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
}

export default function OrgChart() {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden">
      {/* Header strip */}
      <div className="relative mb-6 flex w-full flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
        <div className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="RAIL"
            width={220}
            height={80}
            className="h-14 w-auto sm:h-20"
          />
        </div>
        <p className="text-center font-serif text-base font-semibold text-dark sm:text-right sm:text-lg lg:text-xl">
          Reliable Artificial Intelligence Lab{" "}
          <span className="text-primary-orange">(RAIL)</span>
        </p>
      </div>

      {/* Director */}
      <DirectorCard />

      {/* Connector tree */}
      <div className="flex w-full flex-col items-center">
        <div className="h-8 w-px bg-primary-green/40" />
        <div className="relative hidden w-full lg:block">
          <div
            className="mx-auto h-px bg-primary-green/35"
            style={{ width: "85%" }}
          />
          <div className="absolute left-[7.5%] right-[7.5%] top-0 flex justify-between">
            {groups.map((g) => (
              <div key={g.tag} className="h-6 w-px bg-primary-green/35" />
            ))}
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="mt-2 grid w-full grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-2 lg:gap-y-0">
        {groups.map((group, i) => (
          <GroupColumn key={group.tag} group={group} colorIndex={i} />
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-muted">
        {groups.reduce((sum, g) => sum + g.members.length, 1)} members ·{" "}
        {groups.length} research groups
      </p>
    </div>
  );
}
