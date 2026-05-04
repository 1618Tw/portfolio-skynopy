"use client";

import { Project } from "@/data/projects";

const CREAM = "#FAF3E5";
const INK = "#1E1611";
const MUTED = "#7A6B58";
const ACCENT = "#D2533D";
const LINE = "#E5D8C2";

export default function ClubhouseContent({ project }: { project: Project }) {
  return (
    <div style={{ background: CREAM, color: INK }}>
      {/* HERO ───────────────────────────────────────────── */}
      <section className="relative px-6 sm:px-12 lg:px-16 pt-24 sm:pt-40 pb-24 sm:pb-36 overflow-hidden">
        <div
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] mb-16 sm:mb-24"
          style={{ color: MUTED }}
        >
          <span>{project.category}</span>
          <span className="tnum">{project.year}</span>
        </div>

        <h2
          id="project-title"
          className="font-display uppercase leading-[0.85] tracking-[-0.03em]"
          style={{ fontSize: "clamp(4rem, 14vw, 14rem)" }}
        >
          Clubhouse
        </h2>

        <p
          className="mt-16 sm:mt-24 italic font-medium leading-[1.2] tracking-[-0.015em]"
          style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)", color: ACCENT }}
        >
          Never go alone in a city.
        </p>

        <p
          className="mt-12 sm:mt-16 text-base sm:text-[17px] leading-[1.75] max-w-[60ch]"
          style={{ color: INK }}
        >
          {project.description}
        </p>
      </section>

      {/* THE PIVOT ──────────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-16 py-28 sm:py-44 border-t"
        style={{ borderColor: LINE }}
      >
        <div
          className="text-[11px] uppercase tracking-[0.24em] mb-14 sm:mb-20"
          style={{ color: ACCENT }}
        >
          The pivot
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          <PivotCard
            label="Before"
            heading="A matching service"
            body="Students looking for a place. Landlords with quality apartments. A clean two-sided business — but transactional."
            tone="muted"
          />
          <PivotCard
            label="After"
            heading="A community"
            body="The apartment plus the people doing the same things in your new city. You don't just rent — you join."
            tone="accent"
          />
        </div>
      </section>

      {/* PULL QUOTE ─────────────────────────────────────── */}
      <section
        className="relative px-6 sm:px-12 lg:px-16 py-32 sm:py-52 border-t"
        style={{ borderColor: LINE }}
      >
        <p
          className="font-display uppercase leading-[0.95] tracking-[-0.025em] max-w-5xl"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}
        >
          You'll never go{" "}
          <span style={{ color: ACCENT }}>alone</span>
          <br />
          in a city.
        </p>
      </section>

      {/* WHAT I DID ─────────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-16 py-28 sm:py-44 border-t"
        style={{ borderColor: LINE }}
      >
        <div
          className="text-[11px] uppercase tracking-[0.24em] mb-14 sm:mb-20"
          style={{ color: ACCENT }}
        >
          What I did
        </div>

        <ul className="flex flex-col">
          {project.bullets.map((b, i) => (
            <li
              key={i}
              className="grid grid-cols-[auto_1fr] gap-8 sm:gap-14 py-7 sm:py-10 border-t items-baseline"
              style={{ borderColor: LINE }}
            >
              <span
                className="tnum text-[11px] sm:text-xs uppercase tracking-[0.22em]"
                style={{ color: ACCENT }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg sm:text-2xl leading-[1.4] tracking-[-0.01em] max-w-[55ch]">
                {b}
              </span>
            </li>
          ))}
          <li
            className="border-t"
            style={{ borderColor: LINE, height: 0 }}
          />
        </ul>
      </section>

      {/* FOOTER NOTE ────────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 lg:px-16 py-20 sm:py-28 text-center border-t"
        style={{ borderColor: LINE }}
      >
        <p
          className="text-[11px] uppercase tracking-[0.26em]"
          style={{ color: MUTED }}
        >
          Case-study visuals coming soon
        </p>
      </section>
    </div>
  );
}

function PivotCard({
  label,
  heading,
  body,
  tone,
}: {
  label: string;
  heading: string;
  body: string;
  tone: "muted" | "accent";
}) {
  const isAccent = tone === "accent";
  return (
    <div
      className="relative px-8 py-10 sm:px-12 sm:py-14 rounded-2xl border flex flex-col gap-8"
      style={{
        background: isAccent ? ACCENT : "transparent",
        borderColor: isAccent ? ACCENT : LINE,
        color: isAccent ? CREAM : INK,
      }}
    >
      <span
        className="text-[11px] uppercase tracking-[0.24em]"
        style={{ color: isAccent ? "rgba(250,243,229,0.7)" : MUTED }}
      >
        {label}
      </span>
      <h3
        className="font-display uppercase leading-[0.95] tracking-[-0.025em]"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {heading}
      </h3>
      <p
        className="text-base sm:text-lg leading-[1.65] max-w-[42ch]"
        style={{ color: isAccent ? "rgba(250,243,229,0.92)" : INK }}
      >
        {body}
      </p>
    </div>
  );
}
