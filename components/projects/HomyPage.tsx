"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { asset } from "@/lib/asset";

const BG = "#1A1A1A";
const PANEL = "#D9D9D9";
const PANEL_DARK = "#0A0A0A";
const PANEL_LIGHT = "#FFFFFF";
const BLACK = "#0A0A0A";

const VIDEO = "/projects/homy/homy_recording.mp4";
const INSTAGRAM = "/projects/homy/IMG_4339.PNG";
const PHONE_STRIP = "/projects/homy/Mockup homy.jpg";
const PITCH_GRID = "/projects/homy/slides/1.0 homy pitch_Page_1.jpg";
const ICON_DARK = "/projects/homy/Group 32.png";
const ICON_LIGHT = "/projects/homy/Group 33.png";
const FINALE = "/projects/homy/felpa homy 1.png";

const STATS = [
  { value: "50+", lines: ["house parties"] },
  { value: "800.000", lines: ["people reached"] },
  { value: "1°", lines: ["ranked for", "one week in the app", "store"] },
  { value: "40.000", lines: ["download"] },
];

const BODY = [
  "Co-founded a startup with three friends. Built the UX/UI from scratch and ran the brand and content engine end-to-end.",
  "Designed go-to-market strategies starting from our friend network and produced viral social content that hit #1 weekly on the App Store.",
];

export default function HomyPage({
  project: _project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* LEFT — dark column */}
      <div className="flex flex-col" style={{ background: BG }}>
        {/* Section 1: VIDEO + Instagram phone screenshot */}
        <div className="grid grid-cols-2 gap-4 p-4 sm:gap-5 sm:p-5">
          <div
            className="relative aspect-[888/1920] overflow-hidden"
            style={{ background: PANEL }}
          >
            <video
              src={asset(VIDEO)}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Homy app screen recording"
            />
          </div>
          <div
            className="relative aspect-[1170/2532] overflow-hidden"
            style={{ background: PANEL_LIGHT }}
          >
            <Image
              src={asset(INSTAGRAM)}
              alt="Homy Instagram"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Section 2: wide phones strip */}
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <div
            className="relative w-full p-4 sm:p-6"
            style={{ background: PANEL }}
          >
            <Image
              src={asset(PHONE_STRIP)}
              alt="Homy app phone screens"
              width={2400}
              height={1500}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto block"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>

        {/* Section 3: pitch grid + 2 stacked icons */}
        <div className="grid grid-cols-3 gap-4 px-4 pb-4 sm:gap-5 sm:px-5 sm:pb-5">
          <div className="col-span-2 relative aspect-[3/2] overflow-hidden bg-black">
            <Image
              src={asset(PITCH_GRID)}
              alt="Homy pitch deck preview"
              fill
              sizes="(max-width: 768px) 33vw, 16vw"
              className="object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4 sm:gap-5">
            <div
              className="relative aspect-square overflow-hidden"
              style={{ background: PANEL_DARK }}
            >
              <Image
                src={asset(ICON_DARK)}
                alt="Homy icon — dark"
                fill
                sizes="(max-width: 768px) 16vw, 8vw"
                className="object-contain"
                unoptimized
                loading="lazy"
              />
            </div>
            <div
              className="relative aspect-square overflow-hidden"
              style={{ background: PANEL_LIGHT }}
            >
              <Image
                src={asset(ICON_LIGHT)}
                alt="Homy icon — light"
                fill
                sizes="(max-width: 768px) 16vw, 8vw"
                className="object-contain"
                unoptimized
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Section 4: finale photo */}
        <div className="px-4 pb-6 sm:px-5 sm:pb-8">
          <div className="relative aspect-[3/2] overflow-hidden bg-black">
            <Image
              src={asset(FINALE)}
              alt="Homy apparel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              unoptimized
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* RIGHT — white sticky info */}
      <aside
        className="md:sticky md:top-0 md:h-screen md:overflow-y-auto"
        style={{ background: "#FFFFFF", color: BLACK }}
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

          {/* Title — bold sans */}
          <h1
            id="project-title"
            className="font-helvetica font-bold leading-[0.95] tracking-[-0.025em]"
            style={{
              color: BLACK,
              fontSize: "clamp(3.5rem, 5.5vw, 5rem)",
            }}
          >
            Homy
          </h1>

          {/* Body */}
          <div className="mt-8 sm:mt-10 max-w-[36ch] flex flex-col gap-4 text-[14.5px] sm:text-[15px] leading-[1.5]">
            {BODY.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Stats grid (Didone serif numbers in black) */}
          <div className="mt-14 sm:mt-20 grid grid-cols-2 gap-y-12 gap-x-10 max-w-md">
            {STATS.map((s, i) => (
              <div key={i}>
                <div
                  className="font-serif font-medium leading-[0.95]"
                  style={{
                    color: BLACK,
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

