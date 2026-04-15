"use client";

import Image from "next/image";
import { useState } from "react";
import { director, groups, type TeamMember } from "@/data/team";

function getInitials(name: string): string {
  return name
    .replace(/^(Dr|Prof|A\.\s*Prof|New)\s+/i, "")
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
  ringColor = "#169B62",
}: {
  person: TeamMember;
  sizeClass?: string;
  hovered?: boolean;
  ringColor?: string;
}) {
  return (
    <div className={`relative shrink-0 ${sizeClass}`}>
      <svg
        className="absolute inset-0 z-10 transition-transform duration-500"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        style={{ transform: hovered ? "rotate(360deg)" : "rotate(0deg)" }}
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke={ringColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          className="transition-all duration-500"
          style={{
            strokeDasharray: hovered ? "295 0" : "220 75",
            filter: hovered ? `drop-shadow(0 0 4px ${ringColor}50)` : "none",
          }}
        />
      </svg>

      <div
        className="absolute inset-[3px] overflow-hidden rounded-full transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      >
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="110px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-light-gray text-base font-semibold text-dark/50">
            {getInitials(person.name)}
          </div>
        )}
      </div>
    </div>
  );
}

function MemberCard({
  person,
  ringColor,
}: {
  person: TeamMember;
  ringColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col items-center gap-1.5 transition-all duration-300"
      style={{ transform: hovered ? "translateY(-4px)" : "translateY(0)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <Avatar
          person={person}
          sizeClass="h-[56px] w-[56px] sm:h-[72px] sm:w-[72px]"
          hovered={hovered}
          ringColor={ringColor}
        />
        <div
          className="absolute inset-0 -z-10 rounded-full blur-xl transition-opacity duration-500"
          style={{
            backgroundColor: ringColor,
            opacity: hovered ? 0.15 : 0,
          }}
        />
      </div>
      <span
        className="inline-block max-w-[7.5rem] rounded-full px-2.5 py-1 text-center text-[10.5px] font-medium leading-tight text-white transition-all duration-300 sm:max-w-none sm:whitespace-nowrap sm:px-3.5 sm:py-1.5 sm:text-[13px]"
        style={{
          backgroundColor: hovered ? ringColor : "#107048",
          boxShadow: hovered ? `0 4px 12px ${ringColor}40` : "none",
        }}
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
      className="flex flex-col items-center gap-2.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <Avatar
          person={director}
          sizeClass="h-[88px] w-[88px] sm:h-[110px] sm:w-[110px]"
          hovered={hovered}
        />
        <div
          className="absolute inset-0 -z-10 rounded-full blur-2xl transition-opacity duration-500"
          style={{ backgroundColor: "#169B62", opacity: hovered ? 0.2 : 0 }}
        />
      </div>
      <span
        className="inline-block rounded-full px-5 py-1.5 text-sm font-semibold text-white transition-all duration-300 sm:px-6 sm:py-2 sm:text-base"
        style={{
          backgroundColor: hovered ? "#169B62" : "#107048",
          boxShadow: hovered ? "0 6px 20px rgba(22, 155, 98, 0.35)" : "none",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        {director.title} {director.name}
      </span>
    </div>
  );
}

const GROUP_RING_COLORS = [
  "#169B62",
  "#FF883E",
  "#6CBF8A",
  "#107048",
  "#E56F1F",
  "#169B62",
];

function GroupColumn({
  group,
  colorIndex,
}: {
  group: (typeof groups)[0];
  colorIndex: number;
}) {
  const [headerHovered, setHeaderHovered] = useState(false);
  const ringColor = GROUP_RING_COLORS[colorIndex % GROUP_RING_COLORS.length];

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Group header pill — fixed height on desktop so all columns align */}
      <div
        className="flex w-full cursor-default items-center justify-center rounded-xl px-3 py-3 text-center transition-all duration-300 lg:min-h-[5rem] lg:py-0"
        onMouseEnter={() => setHeaderHovered(true)}
        onMouseLeave={() => setHeaderHovered(false)}
        style={{
          backgroundColor: headerHovered ? ringColor : "#107048",
          boxShadow: headerHovered ? `0 8px 24px ${ringColor}40` : "none",
          transform: headerHovered ? "scale(1.03)" : "scale(1)",
        }}
      >
        <div>
          <p className="text-sm font-bold leading-tight text-white">{group.name}</p>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-white/70">
            ({group.tag})
          </p>
        </div>
      </div>

      {/* Connector — hidden on mobile */}
      <div
        className="hidden h-6 w-0.5 transition-all duration-500 lg:block"
        style={{
          backgroundColor: ringColor,
          opacity: headerHovered ? 0.8 : 0.4,
          boxShadow: headerHovered ? `0 0 6px ${ringColor}` : "none",
        }}
      />

      {/* Members: horizontal wrap on mobile, vertical column on desktop */}
      <div className="flex flex-wrap justify-center gap-4 lg:flex-col lg:items-center lg:gap-5">
        {group.members.map((member) => (
          <MemberCard
            key={member.name}
            person={member}
            ringColor={ringColor}
          />
        ))}
      </div>
    </div>
  );
}

export default function OrgChart() {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden">
      {/* Top bar */}
      <div className="relative mb-3 flex w-full flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-0">
        <div className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="RAIL"
            width={120}
            height={40}
            className="h-10 w-auto sm:h-14"
          />
        </div>
        <p className="text-center text-sm font-semibold tracking-tight text-primary-orange sm:text-right sm:text-xl lg:text-2xl">
          Reliable Artificial Intelligence lab (RAIL)
        </p>
      </div>

      {/* Director */}
      <DirectorCard />

      {/* Connector tree */}
      <div className="flex flex-col items-center">
        <div className="h-8 w-0.5 bg-primary-green/40" />
        <div className="relative hidden w-full lg:block">
          <div
            className="mx-auto h-0.5 bg-primary-green/35"
            style={{ width: "85%" }}
          />
          <div className="absolute left-[7.5%] right-[7.5%] top-0 flex justify-between">
            {groups.map((g) => (
              <div key={g.tag} className="h-6 w-0.5 bg-primary-green/35" />
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

      <p className="mt-8 text-center text-xs text-dark/30">
        {groups.reduce((sum, g) => sum + g.members.length, 1)} members · {groups.length} research groups
      </p>
    </div>
  );
}
