"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Project, ProjectStat } from "@/data/projects";
import HomyContent from "./projects/HomyContent";
import ClubhouseContent from "./projects/ClubhouseContent";
import JugaadContent from "./projects/JugaadContent";
import HypermindContent from "./projects/HypermindContent";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

export default function ProjectModal({ project, onClose }: Props) {
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

  const dark = project?.dark === true;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-root"
          className="fixed inset-0 z-40"
          initial={{ pointerEvents: "none" }}
          animate={{ pointerEvents: "auto" }}
          exit={{ pointerEvents: "none" }}
        >
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25, ease: EASE_DRAWER }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: EASE_DRAWER }}
            className="absolute inset-x-0 bottom-0 top-12 sm:inset-0 sm:flex sm:items-center sm:justify-center sm:p-6 pointer-events-none"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-title"
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto relative w-full sm:max-w-5xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl shadow-2xl"
              style={{
                background:
                  project.modalCardBg ?? (dark ? "#000000" : "#ffffff"),
              }}
            >
              {/* Sticky top bar (theme-aware) */}
              <div
                className={`sticky top-0 z-20 flex items-center justify-between px-5 sm:px-10 py-3 backdrop-blur-md border-b ${
                  dark
                    ? "bg-black/70 border-white/10 text-white"
                    : "bg-white/85 border-[var(--line)]"
                }`}
              >
                <span
                  className={`text-xs uppercase tracking-[0.12em] ${
                    dark ? "text-white/60" : "text-[var(--muted)]"
                  }`}
                >
                  {project.category}
                </span>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className={`press flex items-center justify-center w-8 h-8 rounded-full transition-colors text-[15px] leading-none ${
                    dark
                      ? "bg-white/10 hover:bg-white/15 text-white"
                      : "bg-black/5 hover:bg-black/10"
                  }`}
                >
                  <span aria-hidden>×</span>
                </button>
              </div>

              {project.slug === "homy" ? (
                <HomyContent project={project} />
              ) : project.slug === "clubhouse" ? (
                <ClubhouseContent project={project} />
              ) : project.slug === "jugaad" ? (
                <JugaadContent project={project} />
              ) : project.slug === "hypermind" ? (
                <HypermindContent project={project} />
              ) : (
                <DefaultContent project={project} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────── default modal layout ─────────────────────────── */

function DefaultContent({ project }: { project: Project }) {
  return (
    <>
      <div className="relative w-full bg-[var(--surface)]">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={1600}
          height={1000}
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="w-full h-auto block"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
          unoptimized
          priority
        />
      </div>

      <section className="px-5 sm:px-10 pt-12 sm:pt-16 pb-6">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <h2
            id="project-title"
            className="text-4xl sm:text-6xl font-semibold tracking-[-0.02em] leading-[0.95]"
          >
            {project.title}
          </h2>
          <span className="tnum text-sm text-[var(--muted)] whitespace-nowrap">
            {project.year}
          </span>
        </div>

        <div className="grid sm:grid-cols-12 gap-x-10 gap-y-8">
          <p className="sm:col-span-7 text-base sm:text-[17px] leading-[1.6] text-[#333]">
            {project.description}
          </p>

          <ul className="sm:col-span-5 flex flex-col gap-3">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm sm:text-[15px] leading-[1.55] text-[#222]"
              >
                <span
                  aria-hidden
                  className="mt-[10px] w-1 h-1 rounded-full bg-current shrink-0"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.marquee && project.marquee.length > 0 && (
        <Marquee
          images={project.marquee}
          label={project.marqueeLabel ?? "Visuals"}
          alt={project.title}
        />
      )}

      {project.stats && project.stats.length > 0 && (
        <Stats stats={project.stats} />
      )}

      {project.images && project.images.length > 0 && (
        <section className="px-5 sm:px-10 pt-10 sm:pt-14 pb-2 flex flex-col gap-5 sm:gap-7">
          {project.images.map((src, i) => (
            <div
              key={i}
              className="relative w-full bg-[var(--surface)] overflow-hidden rounded-md"
            >
              <Image
                src={src}
                alt={`${project.title} — ${i + 1}`}
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full h-auto block"
                unoptimized
                loading="lazy"
              />
            </div>
          ))}
        </section>
      )}

      <div className="h-12 sm:h-20" />
    </>
  );
}

function Marquee({
  images,
  label,
  alt,
}: {
  images: string[];
  label: string;
  alt: string;
}) {
  const looped = [...images, ...images];
  return (
    <section className="mt-8 sm:mt-12 mb-2">
      <div className="px-5 sm:px-10 mb-5 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          {label}
        </span>
        <span className="tnum text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          {String(images.length).padStart(2, "0")}{" "}
          {images.length === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="marquee-pause overflow-hidden">
        <div className="marquee">
          {looped.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 h-[44vh] sm:h-[56vh] aspect-[3154/1751] bg-[var(--surface)] overflow-hidden rounded-md"
            >
              <Image
                src={src}
                alt={`${alt} ${(i % images.length) + 1}`}
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
  );
}

function Stats({ stats }: { stats: ProjectStat[] }) {
  return (
    <section className="px-5 sm:px-10 pt-12 sm:pt-16 pb-2 mt-8 border-t border-[var(--line)]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-x-10 pt-12">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 sm:border-l sm:border-[var(--line)] sm:pl-6 first:sm:border-l-0 first:sm:pl-0"
          >
            <span className="tnum text-7xl sm:text-8xl font-semibold tracking-[-0.04em] leading-none">
              {s.value}
            </span>
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--muted)] max-w-[18ch]">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
