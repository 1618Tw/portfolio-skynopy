"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const STATS = [
  { value: "50+", label: "house parties" },
  { value: "800.000", label: "people reached" },
  { value: "1°", label: "weekly App Store ranking" },
  { value: "40.000", label: "downloads" },
];

const SUBTITLE_LINES = [
  "A startup we built end-to-end with three friends.",
  "From UX/UI to brand, viral content to #1 weekly on the App Store.",
];

interface Props {
  project: Project;
  onClose: () => void;
}

export default function HomyLight({ project: _p, onClose }: Props) {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10 py-4 sm:py-5 pointer-events-none">
        <motion.button
          onClick={onClose}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: EASE_OUT }}
          className="press pointer-events-auto text-[11px] uppercase tracking-[0.22em] text-black/65 hover:text-black transition-colors"
        >
          ← Back
        </motion.button>
        <motion.button
          onClick={onClose}
          aria-label="Close"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: EASE_OUT }}
          className="press pointer-events-auto flex items-center justify-center w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 transition-colors"
        >
          <span aria-hidden className="text-base leading-none text-black">
            ×
          </span>
        </motion.button>
      </header>

      {/* HERO — title + 2 lines, no button */}
      <section className="relative pt-32 sm:pt-44 lg:pt-52 px-6 sm:px-10 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="text-[11px] uppercase tracking-[0.28em] text-black/55 mb-8 sm:mb-12"
        >
          <span className="tnum">2023</span>
          <span aria-hidden className="mx-3 opacity-50">
            /
          </span>
          <span>Startup · Product</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
          className="font-helvetica font-bold leading-[0.92] tracking-[-0.03em]"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
        >
          Homy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.3 }}
          className="mt-10 sm:mt-14 max-w-2xl mx-auto flex flex-col items-center"
        >
          <p className="text-lg sm:text-xl lg:text-2xl leading-[1.45] text-black/80">
            {SUBTITLE_LINES[0]}
          </p>
          <p className="mt-2 text-lg sm:text-xl lg:text-2xl leading-[1.45] text-black/55">
            {SUBTITLE_LINES[1]}
          </p>
        </motion.div>
      </section>

      {/* MOCKUP — melts into the white page via mix-blend-multiply */}
      <section className="relative px-6 sm:px-10 mt-20 sm:mt-32 lg:mt-44">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: EASE_OUT }}
          className="max-w-5xl mx-auto"
        >
          <Image
            src={asset("/projects/homy/Mockup homy.jpg")}
            alt="Homy app screens"
            width={2400}
            height={1500}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto block mix-blend-multiply"
            unoptimized
            priority
          />
        </motion.div>
      </section>

      {/* NUMBERS — inside shapes, tight centered grid */}
      <section className="relative px-6 sm:px-10 py-32 sm:py-44 lg:py-52">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="text-center mb-12 sm:mb-20"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] text-black/55">
              By the Numbers
            </span>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: EASE_OUT,
                  delay: i * 0.1,
                }}
                className="aspect-square rounded-3xl bg-[#F4F2EE] flex flex-col items-center justify-center px-5 py-7 text-center border border-black/[0.06]"
              >
                <div
                  className="font-serif font-medium leading-[0.9] tracking-[-0.02em] text-black"
                  style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)" }}
                >
                  {s.value}
                </div>
                <div className="mt-3 sm:mt-4 text-[11px] uppercase tracking-[0.18em] text-black/60 max-w-[18ch] leading-[1.45]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PICTURES — Instagram + Felpa */}
      <section className="relative px-6 sm:px-10 pb-32 sm:pb-44">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: EASE_OUT }}
            className="md:col-span-1 relative aspect-[1170/2532] overflow-hidden rounded-2xl bg-[#F4F2EE]"
          >
            <Image
              src={asset("/projects/homy/IMG_4339.PNG")}
              alt="Homy Instagram"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              unoptimized
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: EASE_OUT, delay: 0.15 }}
            className="md:col-span-2 relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#F4F2EE]"
          >
            <Image
              src={asset("/projects/homy/felpa homy 1.png")}
              alt="Homy apparel"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
              unoptimized
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 py-16 sm:py-24 border-t border-black/10 text-center">
        <button
          onClick={onClose}
          className="press text-[11px] uppercase tracking-[0.28em] text-black/60 hover:text-black transition-colors"
        >
          ↑ Return to portfolio
        </button>
      </footer>
    </div>
  );
}
