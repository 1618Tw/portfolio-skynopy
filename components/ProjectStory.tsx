"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Project, GalleryItem } from "@/data/projects";
import { asset } from "@/lib/asset";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectStory({ project, onClose }: Props) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header onClose={onClose} />
      <Hero project={project} />
      <Info project={project} />
      {project.gallery && project.gallery.length > 0 && (
        <Gallery items={project.gallery} title={project.title} />
      )}
      <Closer onClose={onClose} />
    </div>
  );
}

/* ───────────────────────── header ───────────────────────── */

function Header({ onClose }: { onClose: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10 py-4 sm:py-5 pointer-events-none">
      <motion.button
        onClick={onClose}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: EASE_OUT }}
        className="press pointer-events-auto text-[11px] uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors"
      >
        ← Back
      </motion.button>
      <motion.button
        onClick={onClose}
        aria-label="Close"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: EASE_OUT }}
        className="press pointer-events-auto flex items-center justify-center w-9 h-9 rounded-full bg-white/8 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors"
      >
        <span aria-hidden className="text-base leading-none text-white">
          ×
        </span>
      </motion.button>
    </header>
  );
}

/* ───────────────────────── hero ───────────────────────── */

function Hero({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax — media drifts up slightly and fades as user scrolls past.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.55, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const titleClass =
    project.titleFont === "serif"
      ? "font-serif font-medium"
      : "font-helvetica font-bold";

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0">
        {project.hero?.type === "video" ? (
          <video
            src={asset(project.hero.src)}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : project.hero?.type === "image" ? (
          <Image
            src={asset(project.hero.src)}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
        )}
      </motion.div>

      {/* Bottom gradient overlay so the title remains legible */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />

      {/* Title overlay */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 lg:pb-28">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.45 }}
          className="text-[10.5px] uppercase tracking-[0.26em] text-white/65 mb-6"
        >
          <span className="tnum">{project.year}</span>
          <span aria-hidden className="mx-3 opacity-50">/</span>
          <span>{project.category}</span>
        </motion.div>

        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: EASE_OUT, delay: 0.55 }}
          className={`${titleClass} uppercase leading-[0.85] tracking-[-0.025em]`}
          style={{ fontSize: "clamp(3.5rem, 13vw, 14rem)" }}
        >
          {project.title}
        </motion.h1>
      </div>

      {/* Scroll indicator — bouncing dot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.3em] text-white/55"
      >
        <span>Scroll</span>
        <motion.span
          aria-hidden
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── info ───────────────────────── */

function Info({ project }: { project: Project }) {
  return (
    <>
      {/* DEK — marquee statement, centered with generous padding */}
      {project.dek && (
        <section className="relative px-6 sm:px-10 lg:px-20 py-36 sm:py-52">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="font-helvetica font-medium text-center leading-[1.08] tracking-[-0.02em] text-white max-w-5xl mx-auto"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)" }}
          >
            {project.dek}
          </motion.p>
        </section>
      )}

      {/* OVERVIEW */}
      <SectionRow label="Overview">
        <p className="text-lg sm:text-xl lg:text-[1.375rem] leading-[1.5] text-white max-w-[58ch]">
          {project.description}
        </p>
      </SectionRow>

      {/* ROLES */}
      {project.bullets.length > 0 && (
        <SectionRow label="Roles">
          <ul className="flex flex-col">
            {project.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ y: 18, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  ease: EASE_OUT,
                  delay: i * 0.07,
                }}
                className="grid grid-cols-[auto_1fr] gap-6 sm:gap-12 py-6 sm:py-8 items-baseline border-t border-white/10 first:border-t-0"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] tnum text-white/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base sm:text-lg lg:text-xl leading-[1.5] text-white max-w-[55ch]">
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>
        </SectionRow>
      )}

      {/* NUMBERS */}
      {project.stats && project.stats.length > 0 && (
        <SectionRow label="By the Numbers">
          <div className="grid grid-cols-2 gap-y-16 sm:gap-y-24 gap-x-10 sm:gap-x-16">
            {project.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: EASE_OUT,
                  delay: i * 0.08,
                }}
              >
                <div
                  className="font-serif font-medium leading-[0.9] tracking-[-0.015em] text-white"
                  style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
                >
                  {s.value}
                </div>
                <div className="font-helvetica mt-4 sm:mt-5 text-[14px] sm:text-[15px] leading-[1.45] text-white whitespace-pre-line max-w-[24ch]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionRow>
      )}
    </>
  );
}

function SectionRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 sm:px-10 lg:px-20 py-24 sm:py-36 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="md:col-span-3"
        >
          <span className="text-[11px] uppercase tracking-[0.28em] text-white/55">
            {label}
          </span>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
          className="md:col-span-9"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── stats ───────────────────────── */


/* ───────────────────────── gallery ───────────────────────── */

function Gallery({ items, title }: { items: GalleryItem[]; title: string }) {
  return (
    <section className="border-t border-white/10">
      {items.map((item, i) => (
        <GalleryRow key={i} item={item} index={i} title={title} />
      ))}
    </section>
  );
}

function GalleryRow({
  item,
  index,
  title,
}: {
  item: GalleryItem;
  index: number;
  title: string;
}) {
  const motionProps = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.85, ease: EASE_OUT },
  } as const;

  if (item.type === "quartet" && item.srcs && item.srcs.length === 4) {
    return (
      <motion.div
        {...motionProps}
        className="grid grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {item.srcs.map((src, j) => (
          <div
            key={j}
            className="relative bg-black"
            style={{ aspectRatio: item.aspect ?? "16/9" }}
          >
            <Image
              src={asset(src)}
              alt={`${title} ${index + 1}-${j + 1}`}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-contain"
              unoptimized
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    );
  }

  if (item.type === "tallSplit" && item.tall && item.stack) {
    return (
      <motion.div
        {...motionProps}
        className="grid grid-cols-2 gap-px aspect-[4/3]"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {/* Tall left — image or video */}
        <div className="relative bg-black overflow-hidden">
          {item.tallType === "video" ? (
            <video
              src={asset(item.tall)}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              aria-label={`${title} reel`}
            />
          ) : (
            <Image
              src={asset(item.tall)}
              alt={`${title} ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 50vw"
              className="object-cover"
              unoptimized
              loading="lazy"
            />
          )}
        </div>
        {/* 2 horizontals stacked right */}
        <div
          className="grid grid-rows-2 gap-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {item.stack.map((src, j) => (
            <div key={j} className="relative bg-black overflow-hidden min-h-0">
              <Image
                src={asset(src)}
                alt={`${title} ${index + 1}-${j + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 50vw"
                className="object-cover"
                unoptimized
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (item.type === "split" && item.srcs && item.srcs.length === 2) {
    return (
      <motion.div
        {...motionProps}
        className="grid grid-cols-1 sm:grid-cols-2 gap-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {item.srcs.map((src, j) => (
          <div
            key={j}
            className="relative w-full bg-black"
            style={{ aspectRatio: item.aspect ?? "4/3" }}
          >
            <Image
              src={asset(src)}
              alt={`${title} ${index + 1}-${j + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    );
  }

  if (item.type === "video" && item.src) {
    return (
      <motion.div
        {...motionProps}
        className="relative w-full"
        style={{
          background: item.bg ?? "#000",
          aspectRatio: item.aspect ?? "16/9",
        }}
      >
        <video
          src={asset(item.src)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    );
  }

  // single image — natural aspect, full width
  if (item.src) {
    return (
      <motion.div
        {...motionProps}
        className="relative w-full"
        style={{ background: item.bg ?? "#000" }}
      >
        <Image
          src={asset(item.src)}
          alt={`${title} ${index + 1}`}
          width={2400}
          height={1600}
          sizes="100vw"
          className="w-full h-auto block"
          unoptimized
          loading="lazy"
        />
      </motion.div>
    );
  }

  return null;
}

/* ───────────────────────── closer ───────────────────────── */

function Closer({ onClose }: { onClose: () => void }) {
  return (
    <section className="px-6 sm:px-10 py-32 sm:py-44 border-t border-white/10 text-center">
      <motion.button
        onClick={onClose}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="press inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/70 hover:text-white transition-colors"
      >
        <span aria-hidden className="text-white">↑</span>
        <span>Return to portfolio</span>
      </motion.button>
    </section>
  );
}
