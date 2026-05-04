"use client";

import { useState } from "react";
import { projects, Project } from "@/data/projects";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <>
      {/* Yellow announcement banner */}
      <div className="w-full bg-[var(--yellow)] text-black text-center py-2.5 text-sm tracking-wide">
        Open for opportunities — 2026
      </div>

      <main className="w-full">
        {/* Top nav */}
        <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8 text-xs uppercase tracking-[0.16em]">
          <a href="#" className="nav-link">
            Home
          </a>
          <div className="flex items-center gap-6 sm:gap-9">
            <a href="#work" className="nav-link">
              Work
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="mailto:paolo.lancellotti02@gmail.com" className="nav-link">
              Contact
            </a>
          </div>
        </nav>

        {/* Massive headline */}
        <section className="px-2 sm:px-4 mt-2 sm:mt-3">
          <h1
            className="font-display uppercase text-center leading-[0.85] tracking-[-0.025em] fade-in-up"
            style={{
              fontSize: "clamp(3rem, 14vw, 16rem)",
              animationDelay: "60ms",
            }}
          >
            Paolo Lancellotti
          </h1>
        </section>

        {/* Tagline */}
        <p
          className="fade-in-up mt-12 sm:mt-16 text-center text-base sm:text-lg leading-[1.45] text-black"
          style={{ animationDelay: "180ms" }}
        >
          Distinctive experiences and brands for the
          <br />
          startups of tomorrow.
        </p>

        {/* Yellow rotated Contact circle */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="mailto:paolo.lancellotti02@gmail.com"
            aria-label="Send email"
            className="press flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[var(--yellow)] fade-in-up"
            style={{ animationDelay: "260ms" }}
          >
            <span
              className="font-medium text-base sm:text-lg tracking-wide"
              style={{ transform: "rotate(-22deg)" }}
            >
              Contact
            </span>
          </a>
        </div>

        {/* Section heading */}
        <p
          id="work"
          className="text-center mt-24 sm:mt-32 mb-10 sm:mb-14 text-sm sm:text-base text-black"
        >
          Some of my recent work
        </p>

        {/* Project grid */}
        <section className="px-6 sm:px-10 lg:px-14 pb-24">
          <ProjectGrid projects={projects} onOpen={setOpen} />
        </section>

        {/* Footer */}
        <footer
          id="about"
          className="px-6 sm:px-10 lg:px-14 pt-10 pb-10 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs uppercase tracking-[0.14em] text-[var(--muted)]"
        >
          <span>© Paolo Lancellotti, 2026</span>
          <a
            href="mailto:paolo.lancellotti02@gmail.com"
            className="text-black"
          >
            paolo.lancellotti02@gmail.com
          </a>
        </footer>

        <ProjectModal project={open} onClose={() => setOpen(null)} />
      </main>
    </>
  );
}
