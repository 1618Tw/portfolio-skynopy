"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

const InfiniteGallery = dynamic(
  () => import("../ui/3d-gallery-photography"),
  { ssr: false }
);

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const JUGAAD_IMAGES = [
  "/projects/jugaad/jugaad behance 1-02.png",
  "/projects/jugaad/jugaad behance 1-03.png",
  "/projects/jugaad/DSC01650.JPG",
  "/projects/jugaad/DSC01660.JPG",
  "/projects/jugaad/DSC01828.JPG",
  "/projects/jugaad/DSC01853.JPG",
  "/projects/jugaad/DSC01875.JPG",
  "/projects/jugaad/DSC01877.JPG",
  "/projects/jugaad/PHOTO-2025-10-20-16-07-26.jpg",
  "/projects/jugaad/JUGAAD 2 TIGRE.png",
];

const STATS = [
  { value: "350", label: "ticket sold\nthe first night" },
  { value: "3000+", label: "people reached" },
  { value: "85%", label: "of growth\nin three events" },
  { value: "60.000€", label: "of total incomes" },
];

const BOTTOM_LINES = [
  "An independent music event series, co-created with three friends.",
  "Every detail curated — name, logo, dress code, lineup. Four years of sold-out nights.",
];

interface Props {
  project: Project;
  onClose: () => void;
}

export default function JugaadFullScreen({ project: _p, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden text-white">
      {/* 3D gallery — background */}
      <InfiniteGallery
        images={JUGAAD_IMAGES.map((src) => asset(src))}
        speed={1.2}
        visibleCount={12}
        className="absolute inset-0 h-full w-full"
      />

      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5 sm:py-6 pointer-events-none">
        <motion.button
          onClick={onClose}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: EASE_OUT }}
          className="press pointer-events-auto text-[11px] uppercase tracking-[0.22em] text-white/75 hover:text-white transition-colors mix-blend-exclusion"
        >
          ← Back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: EASE_OUT }}
          className="hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/65 mix-blend-exclusion"
        >
          <span className="tnum">2021—2025</span>
          <span aria-hidden className="opacity-50">/</span>
          <span>Event · Brand</span>
        </motion.div>

        <motion.button
          onClick={onClose}
          aria-label="Close"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: EASE_OUT }}
          className="press pointer-events-auto flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors"
        >
          <span aria-hidden className="text-base leading-none text-white">
            ×
          </span>
        </motion.button>
      </header>

      {/* CENTERED TITLE — italic serif, mix-blend */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-exclusion">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.4 }}
          className="font-serif italic font-medium leading-none tracking-[-0.01em] text-white text-center"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
        >
          Jugaad
        </motion.h1>
      </div>

      {/* STATS — stacked on the left edge, vertically centered */}
      <div className="absolute left-5 sm:left-8 lg:left-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-8 sm:gap-10 lg:gap-12 mix-blend-exclusion">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: EASE_OUT,
              delay: 0.9 + i * 0.1,
            }}
          >
            <div
              className="font-serif font-medium leading-[0.9] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" }}
            >
              {s.value}
            </div>
            <div className="mt-1.5 text-[10px] sm:text-[10.5px] uppercase tracking-[0.18em] leading-[1.45] text-white/75 whitespace-pre-line max-w-[14ch]">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM — two-line description */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 px-6 text-center mix-blend-exclusion">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: EASE_OUT,
            delay: 1.4,
          }}
          className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-white max-w-3xl mx-auto leading-[1.6]"
        >
          {BOTTOM_LINES[0]}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: EASE_OUT,
            delay: 1.55,
          }}
          className="mt-2 text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-white/65 max-w-3xl mx-auto leading-[1.6]"
        >
          {BOTTOM_LINES[1]}
        </motion.p>
      </div>
    </div>
  );
}
