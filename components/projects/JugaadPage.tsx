"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

const RED = "#C62828";
const WHITE = "#FFFFFF";
const BLACK = "#0A0A0A";

const IMG = {
  topLeft1: "/projects/jugaad/jugaad behance 1-02.png",
  topLeft2: "/projects/jugaad/jugaad behance 1-03.png",
  video: "/projects/jugaad/jugaadportfo.mp4",
  wide: "/projects/jugaad/DSC01875.JPG",
  bottomLeft: "/projects/jugaad/DSC01650.JPG",
  bottomRight1: "/projects/jugaad/DSC01660.JPG",
  bottomRight2: "/projects/jugaad/DSC01853.JPG",
};

const STATS = [
  { value: "350", lines: ["ticket sold", "the first night."] },
  { value: "3000+", lines: ["people reached"] },
  { value: "85%", lines: ["of growth", "in three events"] },
  { value: "60.000€", lines: ["of total incomes"] },
];

const BODY = [
  "Co-created an independent music event series with three friends because we wanted to choose the music we danced to.",
  "Built the structure where everyone owned a slice of responsibility, and built the brand from scratch. Every detail curated, from the name and logo to the dress code of each night to the lineup.",
];

export default function JugaadPage({
  project: _project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* LEFT — red column */}
      <div className="flex flex-col" style={{ background: RED }}>
        {/* Section 1: 2 stacked left + tall video right */}
        <div className="grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <Image
                src={asset(IMG.topLeft1)}
                alt="Jugaad social mockups"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                unoptimized
                priority
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <Image
                src={asset(IMG.topLeft2)}
                alt="Jugaad post"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                unoptimized
                priority
              />
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ background: "#D9D9D9" }}>
            <video
              src={asset(IMG.video)}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Jugaad video reel"
            />
          </div>
        </div>

        {/* Section 2: wide */}
        <div className="px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="relative w-full overflow-hidden">
            <Image
              src={asset(IMG.wide)}
              alt="Jugaad outdoor party"
              width={2400}
              height={1600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto block"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>

        {/* Section 3: 1 big left + 2 stacked right */}
        <div className="grid grid-cols-2 gap-3 p-3 pt-0 sm:gap-4 sm:p-4 sm:pt-0">
          <div className="relative aspect-square overflow-hidden bg-black">
            <Image
              src={asset(IMG.bottomLeft)}
              alt="Jugaad crowd"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <Image
                src={asset(IMG.bottomRight1)}
                alt="Jugaad night"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                unoptimized
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <Image
                src={asset(IMG.bottomRight2)}
                alt="Jugaad DJ"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                unoptimized
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — white sticky info */}
      <aside
        className="md:sticky md:top-0 md:h-screen md:overflow-y-auto"
        style={{ background: WHITE, color: BLACK }}
      >
        <div className="relative h-full px-10 sm:px-14 lg:px-20 py-12 sm:py-16 lg:py-20">
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="press absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center justify-center w-9 h-9 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
          >
            <span aria-hidden className="text-base leading-none">×</span>
          </button>

          {/* Title */}
          <h1
            id="project-title"
            className="font-serif font-medium leading-[0.95] tracking-[-0.005em]"
            style={{
              color: RED,
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
            }}
          >
            Jugaad
          </h1>

          {/* Body */}
          <div className="mt-8 sm:mt-10 max-w-[36ch] flex flex-col gap-4 text-[14.5px] sm:text-[15px] leading-[1.5]">
            {BODY.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Stats grid */}
          <div className="mt-14 sm:mt-20 grid grid-cols-2 gap-y-12 gap-x-10 max-w-md">
            {STATS.map((s, i) => (
              <div key={i}>
                <div
                  className="font-serif font-medium leading-[0.95]"
                  style={{
                    color: RED,
                    fontSize: "clamp(2.25rem, 3.4vw, 3.25rem)",
                  }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-[12.5px] leading-[1.45]">
                  {s.lines.map((line, j) => (
                    <div key={j}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
