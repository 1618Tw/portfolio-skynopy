"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

interface Props {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: Props) {
  const isExternal = Boolean(project.externalUrl);

  const inner = (
    <>
      <div
        className="card-hover relative w-full overflow-hidden rounded-2xl aspect-[4/5]"
        style={{ background: project.cardBg }}
      >
        <div className="card-hover__media absolute inset-0 flex items-center justify-center p-8 sm:p-10 transition-transform duration-[600ms] [transition-timing-function:var(--ease-out)]">
          {project.thumbnail ? (
            <Image
              src={asset(project.thumbnail)}
              alt={project.title}
              width={800}
              height={1000}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="max-w-full max-h-full w-auto h-auto object-contain"
              unoptimized
            />
          ) : (
            <span
              className="font-display uppercase text-center leading-[0.92] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
                color: project.cardDark ? "#FFFFFF" : "#0A0A0A",
              }}
            >
              {project.title}
            </span>
          )}
        </div>

        {isExternal && (
          <span
            aria-hidden
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/85 text-black flex items-center justify-center text-sm leading-none"
          >
            ↗
          </span>
        )}
      </div>

      <h3 className="mt-5 text-center text-base sm:text-[15px] font-medium tracking-tight text-black">
        {project.title} - {project.tagline}
      </h3>
      <p className="mt-3 text-center text-sm text-[var(--muted)] leading-[1.55] max-w-[36ch] mx-auto">
        {project.summary}
      </p>
    </>
  );

  const className = "press group block w-full text-left fade-in-up";
  const style = { animationDelay: `${100 + index * 50}ms` };

  if (isExternal) {
    return (
      <a
        href={project.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        aria-label={`Open ${project.title} on Behance (opens in new tab)`}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      style={style}
      aria-label={`Open project: ${project.title}`}
    >
      {inner}
    </button>
  );
}
