"use client";

import Image from "next/image";
import { Project, ProjectStat } from "@/data/projects";

const BLACK = "#0A0A0A";
const ACID = "#E0FF1A";
const LINE = "rgba(255,255,255,0.08)";

const RESPONSIBILITIES = [
  { label: "Artist selection & management" },
  { label: "Theme direction per night" },
  { label: "Social media & comms" },
  { label: "Furniture & venue design" },
];

export default function JugaadContent({ project }: { project: Project }) {
  const stats = project.stats ?? [];
  return (
    <div className="text-white" style={{ background: BLACK }}>
      {/* HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Acid bloom corner */}
        <div
          aria-hidden
          className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-25 -z-10"
          style={{ background: ACID }}
        />

        <div className="px-6 sm:px-12 lg:px-16 pt-24 sm:pt-40 pb-24 sm:pb-36">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/55 mb-16 sm:mb-24">
            <span>{project.category}</span>
            <span className="tnum">{project.year}</span>
          </div>

          <h2
            id="project-title"
            className="font-display uppercase leading-[0.85] tracking-[-0.03em]"
            style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
          >
            Juga
            <span style={{ color: ACID }}>a</span>d
          </h2>

          <p
            className="mt-16 sm:mt-24 leading-[1.2] tracking-[-0.015em] max-w-2xl"
            style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
          >
            Four years of independent nights.
          </p>

          <p className="mt-10 sm:mt-12 text-base sm:text-[17px] text-white/65 leading-[1.75] max-w-[60ch]">
            {project.description}
          </p>
        </div>
      </section>

      {/* MANIFESTO ──────────────────────────────────────── */}
      <section
        className="relative px-6 sm:px-12 lg:px-16 py-32 sm:py-48 border-t"
        style={{ borderColor: LINE }}
      >
        <p
          className="font-display uppercase leading-[0.95] tracking-[-0.025em] max-w-5xl"
          style={{ fontSize: "clamp(2rem, 6.5vw, 6rem)" }}
        >
          We built it because we wanted to{" "}
          <span style={{ color: ACID }}>choose the music</span>{" "}
          we danced to.
        </p>
      </section>

      {/* BIG NUMBERS ────────────────────────────────────── */}
      <section
        className="relative px-6 sm:px-12 lg:px-16 py-28 sm:py-44 border-t"
        style={{ borderColor: LINE }}
      >
        <span
          className="block text-[11px] uppercase tracking-[0.24em] mb-14 sm:mb-20"
          style={{ color: ACID }}
        >
          By the numbers
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((s, i) => (
            <NumberBlock
              key={i}
              stat={s}
              index={i}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </section>

      {/* RESPONSIBILITIES ──────────────────────────────── */}
      <section
        className="relative px-6 sm:px-12 lg:px-16 py-28 sm:py-44 border-t"
        style={{ borderColor: LINE }}
      >
        <span
          className="block text-[11px] uppercase tracking-[0.24em] mb-14 sm:mb-20"
          style={{ color: ACID }}
        >
          My role
        </span>

        <ul className="flex flex-col">
          {RESPONSIBILITIES.map((r, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-8 sm:gap-14 py-7 sm:py-10 border-t items-baseline"
              style={{ borderColor: LINE }}
            >
              <span
                className="tnum text-[11px] uppercase tracking-[0.22em]"
                style={{ color: ACID }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg sm:text-2xl leading-[1.4] tracking-[-0.01em]">
                {r.label}
              </span>
            </li>
          ))}
          <li className="border-t" style={{ borderColor: LINE, height: 0 }} />
        </ul>
      </section>

      {/* BRAND FINALE ───────────────────────────────────── */}
      <section
        className="relative border-t overflow-hidden"
        style={{ borderColor: LINE }}
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{
            background: `radial-gradient(60% 50% at 50% 50%, ${ACID}33 0%, ${ACID}10 30%, ${BLACK} 70%)`,
          }}
        />
        <div className="relative px-6 sm:px-12 lg:px-16 pt-28 sm:pt-44 pb-28 sm:pb-44 flex flex-col items-center">
          <span
            className="text-[11px] uppercase tracking-[0.24em] mb-10"
            style={{ color: ACID }}
          >
            The brand
          </span>
          <h3
            className="font-display uppercase text-center leading-[0.9] tracking-[-0.02em] mb-16 sm:mb-20"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Curated, every detail
          </h3>
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            <Image
              src={project.thumbnail}
              alt="Jugaad brand visual"
              fill
              sizes="(max-width: 1024px) 90vw, 768px"
              className="object-contain"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function NumberBlock({
  stat,
  index,
  isLast,
}: {
  stat: ProjectStat;
  index: number;
  isLast: boolean;
}) {
  return (
    <div
      className={`relative px-2 sm:px-10 py-12 sm:py-14 ${
        isLast ? "" : "sm:border-r"
      } border-b sm:border-b-0`}
      style={{ borderColor: LINE }}
      data-index={index}
    >
      <div
        className="font-display tracking-[-0.04em] leading-[0.85]"
        style={{ fontSize: "clamp(4.5rem, 11vw, 9rem)" }}
      >
        {stat.value}
      </div>
      <div
        className="mt-8 h-px"
        style={{ background: ACID, width: "2.5rem" }}
      />
      <div className="mt-7 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-white/65 leading-[1.55] max-w-[24ch]">
        {stat.label}
      </div>
    </div>
  );
}
