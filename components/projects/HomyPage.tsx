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
  { value: "50+", label: "House parties hosted" },
  { value: "800,000", label: "People reached" },
  { value: "1°", label: "Weekly App Store ranking" },
  { value: "40,000", label: "Downloads" },
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
        <div className="relative h-full pl-14 sm:pl-24 lg:pl-32 pr-8 sm:pr-12 lg:pr-16 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20">
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="press absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center justify-center w-9 h-9 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
          >
            <span aria-hidden className="text-base leading-none">×</span>
          </button>

          {/* Top meta */}
          <div
            className="flex items-center gap-3 text-[10.5px] uppercase tracking-[0.22em] mb-10"
            style={{ color: "rgba(10,10,10,0.55)" }}
          >
            <span className="tnum">2023</span>
            <span aria-hidden className="opacity-40">/</span>
            <span>Startup · Product</span>
          </div>

          {/* Title — bold sans */}
          <h1
            id="project-title"
            className="font-helvetica font-bold leading-[0.92] tracking-[-0.03em]"
            style={{
              color: BLACK,
              fontSize: "clamp(3.75rem, 6vw, 5.5rem)",
            }}
          >
            Homy
          </h1>

          {/* Italic Bodoni subtitle */}
          <p
            className="font-serif italic font-normal mt-5 leading-[1.25]"
            style={{
              color: "rgba(10,10,10,0.65)",
              fontSize: "clamp(1.25rem, 1.7vw, 1.625rem)",
            }}
          >
            A startup we built end-to-end with three friends.
          </p>

          {/* Body */}
          <div className="mt-12 sm:mt-16 max-w-[36ch] flex flex-col gap-5 text-[14.5px] sm:text-[15px] leading-[1.65]">
            {BODY.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Hairline */}
          <div
            className="mt-16 sm:mt-20 max-w-md h-px"
            style={{ background: BLACK, opacity: 0.14 }}
          />

          {/* Stats grid */}
          <div className="mt-12 sm:mt-14 grid grid-cols-2 gap-y-12 gap-x-12 max-w-md">
            {STATS.map((s, i) => (
              <div key={i}>
                <div
                  className="font-serif font-medium leading-[0.9]"
                  style={{
                    color: BLACK,
                    fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-3 text-[10.5px] uppercase tracking-[0.18em] leading-[1.55]"
                  style={{ color: "rgba(10,10,10,0.7)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Footer tag */}
          <div className="mt-14 sm:mt-20 max-w-md">
            <span
              className="text-[10px] uppercase tracking-[0.24em]"
              style={{ color: "rgba(10,10,10,0.45)" }}
            >
              #1 weekly · App Store
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}

