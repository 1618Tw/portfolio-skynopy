"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

const NAVY = "#0A0E1F";
const SURFACE = "#13182A";
const CYAN = "#5DD3FF";
const TEXT = "#E8EAF0";
const MUTED = "rgba(232,234,240,0.55)";
const LINE = "rgba(93,211,255,0.12)";

const STREAMS = [
  {
    title: "Mesh-network app",
    body: "Built and helped sell an app that creates mesh networks across people's devices, so anyone can run the best open-source models locally and privately.",
    tag: "Product · GTM",
  },
  {
    title: "IP & copyright research",
    body: "Led an IP and copyright research deep-dive for an AI-in-film project — mapping the legal landscape and translating it into design constraints.",
    tag: "Research",
  },
  {
    title: "Gen-AI model & VFX study",
    body: "Hands-on study of every leading image and video generation model — closed and open source — and the new VFX toolset built around them.",
    tag: "Practice",
  },
];

export default function HypermindContent({ project }: { project: Project }) {
  const slides = project.marquee ?? [];

  return (
    <div style={{ background: NAVY, color: TEXT }}>
      {/* HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Cyan radial bloom */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(80% 60% at 30% 0%, rgba(93,211,255,0.28) 0%, rgba(93,211,255,0.08) 30%, ${NAVY} 65%)`,
          }}
        />
        <div className="px-6 sm:px-12 lg:px-16 pt-24 sm:pt-40 pb-24 sm:pb-36">
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
            style={{ fontSize: "clamp(4rem, 14vw, 13rem)" }}
          >
            Hyper
            <span style={{ color: CYAN }}>mind</span>
          </h2>

          <p
            className="mt-16 sm:mt-24 leading-[1.2] tracking-[-0.015em] max-w-2xl"
            style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.6rem)" }}
          >
            Founder Associate at a small{" "}
            <span style={{ color: CYAN }}>local-AI</span> startup.
          </p>

          <p
            className="mt-10 sm:mt-12 text-base sm:text-[17px] leading-[1.75] max-w-[60ch]"
            style={{ color: MUTED }}
          >
            {project.description}
          </p>
        </div>

        {/* Hero asset */}
        <div className="relative w-full overflow-hidden border-t" style={{ borderColor: LINE }}>
          <Image
            src="/projects/hypermind/Visual 2.1.png"
            alt="Hypermind hero visual"
            width={2855}
            height={1595}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto block"
            unoptimized
            priority
          />
        </div>
      </section>

      {/* THREE STREAMS ──────────────────────────────────── */}
      <section
        className="relative px-6 sm:px-12 lg:px-16 py-28 sm:py-44 border-t"
        style={{ borderColor: LINE }}
      >
        <span
          className="block text-[11px] uppercase tracking-[0.24em] mb-14 sm:mb-20"
          style={{ color: CYAN }}
        >
          Three streams
        </span>

        <div className="flex flex-col">
          {STREAMS.map((s, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-12 gap-x-12 gap-y-8 py-14 sm:py-20 border-t"
              style={{ borderColor: LINE }}
            >
              <div className="sm:col-span-3 flex sm:flex-col items-baseline sm:items-start gap-4">
                <span
                  className="font-display tracking-[-0.03em] leading-none"
                  style={{
                    fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    color: CYAN,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[11px] uppercase tracking-[0.24em]"
                  style={{ color: MUTED }}
                >
                  {s.tag}
                </span>
              </div>
              <div className="sm:col-span-9">
                <h3 className="text-2xl sm:text-4xl font-display uppercase tracking-[-0.02em] leading-[1] mb-6 sm:mb-8">
                  {s.title}
                </h3>
                <p
                  className="text-base sm:text-[17px] leading-[1.75] max-w-[60ch]"
                  style={{ color: TEXT }}
                >
                  {s.body}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t" style={{ borderColor: LINE }} />
        </div>
      </section>

      {/* MARQUEE ────────────────────────────────────────── */}
      {slides.length > 0 && (
        <section
          className="relative py-24 sm:py-36 border-t overflow-hidden"
          style={{ borderColor: LINE, background: NAVY }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10"
            style={{
              background: `linear-gradient(90deg, ${NAVY}, transparent)`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10"
            style={{
              background: `linear-gradient(-90deg, ${NAVY}, transparent)`,
            }}
          />

          <div className="px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16">
            <span
              className="text-[11px] uppercase tracking-[0.24em]"
              style={{ color: CYAN }}
            >
              {project.marqueeLabel ?? "Product visuals"}
            </span>
          </div>

          <div className="marquee-pause overflow-hidden">
            <div className="marquee">
              {[...slides, ...slides].map((src, i) => (
                <div
                  key={i}
                  className="relative shrink-0 h-[44vh] sm:h-[60vh] aspect-[3154/1751] overflow-hidden rounded-xl"
                  style={{
                    background: SURFACE,
                    border: `1px solid ${LINE}`,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Hypermind product visual ${(i % slides.length) + 1}`}
                    fill
                    sizes="60vh"
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

      {/* CITY VISUAL — wide cinematic ───────────────────── */}
      <section
        className="relative border-t"
        style={{ borderColor: LINE }}
      >
        <div className="relative w-full">
          <Image
            src="/projects/hypermind/City visual.png"
            alt="Hypermind environment"
            width={3806}
            height={2126}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto block"
            unoptimized
            loading="lazy"
          />
        </div>
      </section>

      {/* UBIQ FINALE ────────────────────────────────────── */}
      <section
        className="relative border-t overflow-hidden"
        style={{ borderColor: LINE }}
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-0"
          style={{
            background: `radial-gradient(60% 50% at 50% 60%, rgba(93,211,255,0.25) 0%, rgba(93,211,255,0.08) 35%, ${NAVY} 70%)`,
          }}
        />
        <div className="relative px-6 sm:px-12 lg:px-16 pt-28 sm:pt-44 pb-28 sm:pb-44 flex flex-col items-center">
          <span
            className="text-[11px] uppercase tracking-[0.24em] mb-10"
            style={{ color: CYAN }}
          >
            The product
          </span>
          <h3
            className="font-display uppercase text-center leading-[0.9] tracking-[-0.02em] mb-16 sm:mb-20"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Local AI, private by default
          </h3>
          <div className="relative w-full max-w-3xl aspect-[3510/2480]">
            <Image
              src="/projects/hypermind/UBIQ 4.png"
              alt="UBIQ product visual"
              fill
              sizes="(max-width: 1024px) 90vw, 768px"
              className="object-contain"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FULL CASE SPREAD ───────────────────────────────── */}
      <section
        className="relative border-t"
        style={{ borderColor: LINE }}
      >
        <div className="px-6 sm:px-12 lg:px-16 pt-20 sm:pt-28 pb-12">
          <span
            className="text-[11px] uppercase tracking-[0.24em]"
            style={{ color: CYAN }}
          >
            The full case
          </span>
        </div>
        <div className="relative w-full pb-10">
          <Image
            src="/projects/hypermind/Frame 20.png"
            alt="Hypermind full case spread"
            width={1343}
            height={4600}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto block"
            unoptimized
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
