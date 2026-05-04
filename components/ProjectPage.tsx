"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

interface Theme {
  bg: string;
  text: string;
  accent: string;
  muted: string;
  surface: string;
  border: string;
}

const THEMES: Record<string, Theme> = {
  homy: {
    bg: "#0A0A0A",
    text: "#FFFFFF",
    accent: "#FF6BB5",
    muted: "rgba(255,255,255,0.55)",
    surface: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
  },
  clubhouse: {
    bg: "#FAF3E5",
    text: "#1E1611",
    accent: "#D2533D",
    muted: "#7A6B58",
    surface: "#F2E7D2",
    border: "#E5D8C2",
  },
  jugaad: {
    bg: "#0A0A0A",
    text: "#FFFFFF",
    accent: "#E0FF1A",
    muted: "rgba(255,255,255,0.55)",
    surface: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
  },
  hypermind: {
    bg: "#0A0E1F",
    text: "#E8EAF0",
    accent: "#5DD3FF",
    muted: "rgba(232,234,240,0.55)",
    surface: "rgba(93,211,255,0.05)",
    border: "rgba(93,211,255,0.12)",
  },
};

const DEFAULT_THEME: Theme = {
  bg: "#FFFFFF",
  text: "#0A0A0A",
  accent: "#0A0A0A",
  muted: "#6E6E6E",
  surface: "#F5F5F5",
  border: "#EBEBEB",
};

const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPage({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-page"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.55, ease: EASE_DRAWER }}
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{
            background: (THEMES[project.slug] ?? DEFAULT_THEME).bg,
            color: (THEMES[project.slug] ?? DEFAULT_THEME).text,
          }}
        >
          <PageInner project={project} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PageInner({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const theme = THEMES[project.slug] ?? DEFAULT_THEME;

  // Compose image list: thumbnail → marquee → images (deduped)
  const seen = new Set<string>();
  const images: string[] = [];
  const push = (src?: string | string[]) => {
    if (!src) return;
    const arr = Array.isArray(src) ? src : [src];
    for (const s of arr) {
      if (s && !seen.has(s)) {
        seen.add(s);
        images.push(s);
      }
    }
  };
  push(project.thumbnail);
  push(project.marquee);
  push(project.images);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* LEFT — image composition ─────────────────────── */}
      <div className="flex flex-col">
        {project.slug === "hypermind" ? (
          <HypermindLeft theme={theme} />
        ) : images.length > 0 ? (
          images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-full"
              style={{ background: theme.surface }}
            >
              <Image
                src={asset(src)}
                alt={`${project.title} ${i + 1}`}
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto block"
                unoptimized
                loading={i < 2 ? "eager" : "lazy"}
                priority={i === 0}
              />
            </div>
          ))
        ) : (
          <div
            className="flex items-center justify-center min-h-[60vh] md:min-h-screen"
            style={{ background: theme.surface }}
          >
            <span
              className="text-[11px] uppercase tracking-[0.26em]"
              style={{ color: theme.muted }}
            >
              Visuals coming soon
            </span>
          </div>
        )}
      </div>

      {/* RIGHT — sticky info ────────────────────────────── */}
      <aside className="md:sticky md:top-0 md:h-screen md:overflow-y-auto">
        <div className="flex flex-col h-full min-h-[80vh] md:min-h-0 px-7 sm:px-10 lg:px-14 py-8 sm:py-10 lg:py-12">
          {/* Top: return + close */}
          <div className="flex items-center justify-between mb-12 sm:mb-16">
            <button
              onClick={onClose}
              className="press flex items-center gap-2 text-sm tracking-tight"
              style={{ color: theme.accent }}
            >
              <span aria-hidden className="text-base leading-none">←</span>
              <span>Return to portfolio</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="press flex items-center justify-center w-9 h-9 rounded-full"
              style={{
                background: theme.surface,
                color: theme.text,
                border: `1px solid ${theme.border}`,
              }}
            >
              <span aria-hidden className="text-base leading-none">×</span>
            </button>
          </div>

          {/* Middle: project content */}
          <div className="flex-1 flex flex-col justify-center max-w-xl">
            <div
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] mb-8"
              style={{ color: theme.muted }}
            >
              <span className="tnum">{project.year}</span>
              <span aria-hidden>·</span>
              <span>{project.category}</span>
            </div>

            <h1
              className="font-display uppercase leading-[0.92] tracking-[-0.025em] mb-10"
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 5.5rem)",
                color: theme.accent,
              }}
            >
              {project.title}
            </h1>

            <p
              className="text-base sm:text-[17px] leading-[1.7] mb-10"
              style={{ color: theme.text }}
            >
              {project.description}
            </p>

            {project.bullets.length > 0 && (
              <ul className="flex flex-col gap-3.5 mb-10">
                {project.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm sm:text-[15px] leading-[1.6]"
                    style={{ color: theme.text }}
                  >
                    <span
                      aria-hidden
                      className="mt-[10px] w-1 h-1 rounded-full shrink-0"
                      style={{ background: theme.accent }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {project.stats && project.stats.length > 0 && (
              <div
                className="grid grid-cols-3 gap-x-5 gap-y-2 pt-7 border-t"
                style={{ borderColor: theme.border }}
              >
                {project.stats.map((s, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <span
                      className="font-display tracking-[-0.04em] leading-[0.85]"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                        color: theme.accent,
                      }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-[10px] uppercase tracking-[0.18em] leading-[1.4]"
                      style={{ color: theme.muted }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom: CTA */}
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center justify-between w-full max-w-xl px-6 py-4 rounded-full text-sm font-medium mt-12 sm:mt-16"
              style={{
                background: theme.accent,
                color: theme.bg,
              }}
            >
              <span>View on Behance</span>
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </aside>
    </div>
  );
}

/* ───────────────── Hypermind left column composition ───────────────── */

const HM = {
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

function HypermindLeft({ theme }: { theme: Theme }) {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full" style={{ background: theme.surface }}>
        <Image
          src={asset(HM.hero)}
          alt="Hypermind — Your private AI"
          width={2855}
          height={1595}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto block"
          unoptimized
          priority
        />
      </div>

      {/* 2×2 grid */}
      <div
        className="grid grid-cols-2 gap-px"
        style={{ background: theme.border }}
      >
        {HM.grid.map((src, i) => (
          <div
            key={i}
            className="relative w-full"
            style={{ background: theme.surface }}
          >
            <Image
              src={asset(src)}
              alt={`Hypermind product ${i + 1}`}
              width={1600}
              height={1000}
              sizes="(max-width: 768px) 50vw, 25vw"
              className="w-full h-auto block"
              unoptimized
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Wide — Local AI for your family */}
      <div
        className="relative w-full mt-px"
        style={{ background: theme.surface }}
      >
        <Image
          src={asset(HM.wide)}
          alt="Local AI for your family, and no one else"
          width={2855}
          height={1595}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto block"
          unoptimized
          loading="lazy"
        />
      </div>

      {/* App icons pair */}
      <div
        className="flex items-center justify-center gap-4 sm:gap-6 px-6 py-16 sm:py-24 mt-px"
        style={{ background: theme.surface }}
      >
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
          <Image
            src={asset(HM.iconLight)}
            alt="UBIQ icon — light"
            fill
            sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
            className="object-contain"
            unoptimized
            loading="lazy"
          />
        </div>
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
          <Image
            src={asset(HM.iconDark)}
            alt="UBIQ icon — dark"
            fill
            sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
            className="object-contain"
            unoptimized
            loading="lazy"
          />
        </div>
      </div>

      {/* Finale — backpack */}
      <div className="relative w-full mt-px" style={{ background: "#F5F1EC" }}>
        <Image
          src={asset(HM.finale)}
          alt="UBIQ — Your personal intelligence, always with you"
          width={2855}
          height={2855}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto block"
          unoptimized
          loading="lazy"
        />
      </div>
    </>
  );
}
