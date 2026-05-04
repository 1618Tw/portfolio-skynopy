"use client";

import Image from "next/image";
import { Project } from "@/data/projects";

const BG = "#0A0A0A";
const TEXT = "#F5F5F5";
const ACCENT = "#5DD3FF";
const MUTED = "rgba(245,245,245,0.55)";

const IMG = {
  hero: "/projects/hypermind/Visual 2 1.png",
  grid: [
    "/projects/hypermind/Group 22 1.png",
    "/projects/hypermind/Group 24 1.png",
    "/projects/hypermind/Group 25 1.png",
    "/projects/hypermind/Group 31 1.png",
  ],
  wide: "/projects/hypermind/A4 - 2 1.png",
  iconLight:
    "/projects/hypermind/app icon -macOS-Default-1024x1024@1x 1.png",
  iconDark: "/projects/hypermind/app icon -macOS-Dark-1024x1024@1x 1.png",
  finale: "/projects/hypermind/Backpack UBIQ 1.png",
};

export default function HypermindLayout({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div style={{ background: BG, color: TEXT }} className="min-h-screen">
      {/* Floating top bar */}
      <header
        className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-10 lg:px-14 py-4"
        style={{
          background: "rgba(10,10,10,0.7)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <button
          onClick={onClose}
          className="press flex items-center gap-2 text-sm tracking-tight"
          style={{ color: ACCENT }}
        >
          <span aria-hidden className="text-base leading-none">←</span>
          <span>Return to portfolio</span>
        </button>
        <button
          onClick={onClose}
          aria-label="Close"
          className="press flex items-center justify-center w-9 h-9 rounded-full"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: TEXT,
          }}
        >
          <span aria-hidden className="text-base leading-none">×</span>
        </button>
      </header>

      {/* HERO ──────────────────────────────────────────── */}
      <section className="relative w-full">
        <Image
          src={IMG.hero}
          alt="Hypermind — Your private AI"
          width={2855}
          height={1595}
          sizes="100vw"
          className="w-full h-auto block"
          unoptimized
          priority
        />
      </section>

      {/* PROJECT INFO ──────────────────────────────────── */}
      <section className="px-6 sm:px-12 lg:px-20 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] mb-10 sm:mb-14"
          style={{ color: MUTED }}
        >
          <span className="tnum">{project.year}</span>
          <span aria-hidden>·</span>
          <span>{project.category}</span>
        </div>

        <h1
          id="project-title"
          className="font-display uppercase leading-[0.9] tracking-[-0.025em] mb-12 sm:mb-16"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            color: ACCENT,
          }}
        >
          Hyper<span style={{ color: TEXT }}>mind</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 max-w-6xl">
          <p
            className="md:col-span-7 text-base sm:text-[17px] leading-[1.75]"
            style={{ color: TEXT }}
          >
            {project.description}
          </p>

          {project.bullets.length > 0 && (
            <ul className="md:col-span-5 flex flex-col gap-3.5">
              {project.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm sm:text-[15px] leading-[1.6]"
                  style={{ color: TEXT }}
                >
                  <span
                    aria-hidden
                    className="mt-[10px] w-1 h-1 rounded-full shrink-0"
                    style={{ background: ACCENT }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* 2×2 GRID ──────────────────────────────────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
        {IMG.grid.map((src, i) => (
          <div key={i} className="relative w-full" style={{ background: BG }}>
            <Image
              src={src}
              alt={`Hypermind product ${i + 1}`}
              width={1600}
              height={1000}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full h-auto block"
              unoptimized
              loading="lazy"
            />
          </div>
        ))}
      </section>

      {/* WIDE — Local AI for your family ────────────────── */}
      <section className="relative w-full mt-px" style={{ background: BG }}>
        <Image
          src={IMG.wide}
          alt="Local AI for your family, and no one else"
          width={2855}
          height={1595}
          sizes="100vw"
          className="w-full h-auto block"
          unoptimized
          loading="lazy"
        />
      </section>

      {/* APP ICONS ──────────────────────────────────────── */}
      <section className="px-6 sm:px-12 py-24 sm:py-36 flex items-center justify-center gap-6 sm:gap-10">
        <div className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56">
          <Image
            src={IMG.iconLight}
            alt="UBIQ icon — light"
            fill
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 224px"
            className="object-contain"
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56">
          <Image
            src={IMG.iconDark}
            alt="UBIQ icon — dark"
            fill
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 224px"
            className="object-contain"
            unoptimized
            loading="lazy"
          />
        </div>
      </section>

      {/* FINALE — Backpack ─────────────────────────────── */}
      <section className="relative w-full" style={{ background: "#F5F1EC" }}>
        <Image
          src={IMG.finale}
          alt="UBIQ — Your personal intelligence, always with you"
          width={2855}
          height={2855}
          sizes="100vw"
          className="w-full h-auto block"
          unoptimized
          loading="lazy"
        />
      </section>

      {/* Bottom bar */}
      <footer className="px-6 sm:px-12 py-12 flex items-center justify-between border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <span
          className="text-[11px] uppercase tracking-[0.26em]"
          style={{ color: MUTED }}
        >
          End of case
        </span>
        <button
          onClick={onClose}
          className="press text-sm"
          style={{ color: ACCENT }}
        >
          ← Return to portfolio
        </button>
      </footer>
    </div>
  );
}
