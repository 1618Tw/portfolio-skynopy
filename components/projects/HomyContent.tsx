"use client";

import Image from "next/image";
import { Project, ProjectStat } from "@/data/projects";

const ACCENT_GRADIENTS = [
  "from-[#FF6BB5] to-[#A06BFF]",
  "from-[#7BD9FF] to-[#6B8AFF]",
  "from-[#FFB46B] to-[#FF6B9D]",
  "from-[#A06BFF] to-[#5BD3FF]",
];

export default function HomyContent({ project }: { project: Project }) {
  const stats = project.stats ?? [];
  const slides = project.marquee ?? [];

  return (
    <div className="text-white">
      {/* HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Layered gradient backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 80% at 70% 0%, rgba(255,107,181,0.35) 0%, rgba(160,107,255,0.18) 35%, rgba(10,10,10,1) 75%), linear-gradient(180deg, #1A0A2A 0%, #0A0A0A 100%)",
          }}
        />
        <div className="px-6 sm:px-12 lg:px-16 pt-24 sm:pt-40 pb-28 sm:pb-40">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/55 mb-16 sm:mb-24">
            <span>{project.category}</span>
            <span className="tnum">{project.year}</span>
          </div>

          <h2
            id="project-title"
            className="font-display uppercase leading-[0.85] tracking-[-0.03em]"
            style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
          >
            Homy
          </h2>

          <p className="mt-16 sm:mt-24 text-xl sm:text-2xl lg:text-3xl text-white leading-[1.3] tracking-[-0.01em] max-w-2xl">
            A startup built end-to-end with three friends.
          </p>

          <p className="mt-10 sm:mt-12 text-base sm:text-[17px] text-white/65 leading-[1.75] max-w-[60ch]">
            {project.description}
          </p>
        </div>
      </section>

      {/* STATS ──────────────────────────────────────────── */}
      <section className="relative bg-black border-t border-white/10">
        <div className="px-6 sm:px-12 lg:px-16 pt-24 sm:pt-36 pb-24 sm:pb-36">
          <span className="block text-[11px] uppercase tracking-[0.24em] text-white/50 mb-14 sm:mb-20">
            By the numbers
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} accent={ACCENT_GRADIENTS[i % 4]} />
            ))}
          </div>
        </div>
      </section>

      {/* PITCH MARQUEE ──────────────────────────────────── */}
      {slides.length > 0 && (
        <section className="relative bg-black border-t border-white/10 py-24 sm:py-36 overflow-hidden">
          {/* Side fade masks */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-black to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-black to-transparent"
          />

          <div className="px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16">
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/50">
              {project.marqueeLabel ?? "Pitch deck"}
            </span>
          </div>

          <div className="marquee-pause overflow-hidden">
            <div className="marquee">
              {[...slides, ...slides].map((src, i) => (
                <div
                  key={i}
                  className="relative shrink-0 h-[48vh] sm:h-[64vh] aspect-[4/3] overflow-hidden rounded-xl bg-white/[0.04] border border-white/10"
                >
                  <Image
                    src={src}
                    alt={`Homy pitch slide ${(i % slides.length) + 1}`}
                    fill
                    sizes="64vh"
                    className="object-cover"
                    unoptimized
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PHONE MOCKUP FINALE ────────────────────────────── */}
      <section className="relative bg-black border-t border-white/10 overflow-hidden">
        {/* Glow behind the phone */}
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 60%, rgba(255,107,181,0.35) 0%, rgba(160,107,255,0.15) 35%, rgba(10,10,10,0) 70%)",
          }}
        />

        <div className="relative px-6 sm:px-12 lg:px-16 pt-28 sm:pt-44 pb-28 sm:pb-44 flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-[0.24em] text-white/50 mb-10">
            The product
          </span>
          <h3 className="font-display uppercase text-center leading-[0.9] tracking-[-0.02em] mb-16 sm:mb-24"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Built from scratch
          </h3>
          <div className="relative w-full max-w-3xl aspect-[4/3]">
            <Image
              src={project.thumbnail}
              alt="Homy app mockup"
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

function StatCard({
  stat,
  accent,
}: {
  stat: ProjectStat;
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] px-7 py-9 sm:px-8 sm:py-12">
      {/* Corner glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${accent}`}
      />

      <div className="relative">
        <div
          className="font-display tracking-[-0.04em] leading-[0.85] text-white"
          style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
        >
          {stat.value}
        </div>
        <div className={`mt-7 h-px w-10 bg-gradient-to-r ${accent}`} />
        <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-white/60 leading-[1.55] max-w-[22ch]">
          {stat.label}
        </div>
      </div>
    </div>
  );
}
