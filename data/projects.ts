export interface ProjectStat {
  value: string;
  label: string;
}

export type CompositionSlot =
  | "hero"
  | "grid"
  | "splitTop"
  | "wide"
  | "iconPair"
  | "finale"
  | "videoStack";

export interface VideoStack {
  /** Path to a self-hosted video file (mp4). Leave empty to render placeholder. */
  video?: string;
  /**
   * CSS aspect-ratio string for the video container (matches the source file).
   * Defaults to "9 / 16" (portrait phone video).
   */
  videoAspect?: string;
  /** Up to 2 images stacked on the right of the video. */
  images: [string?, string?];
}

/** Two stacked images on the left + one tall image on the right (full-height). */
export interface SplitTop {
  left: [string?, string?];
  right?: string;
}

/**
 * Composition driving the left column of a project page.
 * Slots without content render a placeholder so the layout
 * stays visible while assets are still being prepared.
 */
export interface ProjectComposition {
  /** Order of sections to render. Defaults to hero → grid → wide → iconPair → finale. */
  slots?: CompositionSlot[];
  hero?: string;
  /** 2×2 grid — up to 4 images */
  grid?: string[];
  /** Full-width image after the grid */
  wide?: string;
  /** Two centered icons displayed side by side */
  iconPair?: [string, string];
  /** Full-width finale image */
  finale?: string;
  /** Optional background for the finale section (e.g. native canvas color of the asset) */
  finaleBg?: string;
  /** Asymmetric split: 2 stacked images left + 1 tall image right */
  splitTop?: SplitTop;
  /** Bottom split row: video on the left, two stacked photos on the right */
  videoStack?: VideoStack;
}

export interface Project {
  slug: string;
  title: string;
  /** Short hook shown after the dash on the homepage card */
  tagline: string;
  /** 1–2 sentence summary shown under the homepage card */
  summary: string;
  /** CSS background for the homepage card (color or gradient) */
  cardBg: string;
  /** When true, the card art has a dark background — used to flip text color inside the card if needed */
  cardDark?: boolean;
  category: string;
  year: string;
  description: string;
  bullets: string[];
  thumbnail: string;
  marquee?: string[];
  marqueeLabel?: string;
  stats?: ProjectStat[];
  images?: string[];
  externalUrl?: string;
  /** When true, the modal sticky bar renders dark (white text on dark surface) */
  dark?: boolean;
  /** Optional override for the modal card's background color */
  modalCardBg?: string;
  /** Composition for the project page left column */
  composition?: ProjectComposition;
}

export const projects: Project[] = [
  {
    slug: "homy",
    title: "Homy",
    tagline: "40K downloads in a week",
    summary:
      "A startup co-founded with three friends. UX/UI and full brand built from scratch — #1 weekly on the App Store.",
    cardBg: "#FFD9B8",
    category: "Startup / Product",
    year: "2023",
    dark: true,
    description:
      "Co-founded a mobile-first startup with three friends. We built the UX/UI from scratch — pulling reference from apps we already loved — designed a go-to-market strategy that started inside our own friend group, and ran the brand and content engine end-to-end.",
    bullets: [
      "Co-founded the company with three friends",
      "Designed UX/UI and the full brand identity from scratch",
      "Designed strategies to seed the app inside our own friend network for early testing",
      "Produced viral social content — #1 weekly on the App Store, 40K downloads in a week",
    ],
    thumbnail: "/projects/homy/Mockup homy.jpg",
    marqueeLabel: "Pitch deck",
    marquee: [
      "/projects/homy/slides/1.0 homy pitch_Page_1.jpg",
      "/projects/homy/slides/1.0 homy pitch_Page_2.jpg",
      "/projects/homy/slides/1.0 homy pitch_Page_3.jpg",
      "/projects/homy/slides/1.0 homy pitch_Page_4.jpg",
      "/projects/homy/slides/1.0 homy pitch_Page_5.jpg",
      "/projects/homy/slides/1.0 homy pitch_Page_6.jpg",
      "/projects/homy/slides/1.0 homy pitch_Page_7.jpg",
      "/projects/homy/slides/1.0 homy pitch_Page_8.jpg",
    ],
    stats: [
      { value: "1M+", label: "People reached across social" },
      { value: "40K", label: "Downloads in the first week" },
      { value: "#1", label: "Weekly ranking on the App Store" },
      { value: "30+", label: "Parties organized in the network" },
    ],
    composition: {
      hero: "/projects/homy/Mockup homy.jpg",
      grid: [
        "/projects/homy/slides/1.0 homy pitch_Page_1.jpg",
        "/projects/homy/slides/1.0 homy pitch_Page_2.jpg",
        "/projects/homy/slides/1.0 homy pitch_Page_3.jpg",
        "/projects/homy/slides/1.0 homy pitch_Page_4.jpg",
      ],
    },
  },
  {
    slug: "clubhouse",
    title: "Clubhouse",
    tagline: "Never go alone in a city",
    summary:
      "A real-estate pivot from matching service to community product. Brand repositioning and on-the-ground content.",
    cardBg: "#CFE0F0",
    category: "Brand / Strategy",
    year: "2024",
    description:
      "A real-estate startup matching students with high-quality homes. Together with the team I helped reshape the model — selling not just an apartment but a community of people doing the same thing in the same city. The brand promise became simple: with Clubhouse, you'll never go alone in a city.",
    bullets: [
      "Helped pivot the business model from student-landlord matching to a community product",
      "Repositioned the brand around belonging — “you’ll never go alone in a city”",
      "Shot brand and lifestyle content on the ground",
      "Planned and scoped website changes",
    ],
    thumbnail: "",
    modalCardBg: "#FAF3E5",
    composition: {},
  },
  {
    slug: "jugaad",
    title: "Jugaad",
    tagline: "Four years of independent nights",
    summary:
      "Independent music event series with three friends. Owned brand, lineup, social, and venue — sold out four years.",
    cardBg: "#0A0A0A",
    cardDark: true,
    category: "Event / Brand",
    year: "2021—2025",
    description:
      "Co-created an independent music event series with three friends because we wanted to choose the music we danced to. Built the structure where everyone owned a slice of responsibility, and built the brand from scratch — every detail curated, from the name and logo to the dresscode of each night to the lineup.",
    bullets: [
      "Co-founded the series with three friends — sold 350 tickets the first night",
      "Built the brand from scratch: name, logo, dresscode per night, lineup",
      "Owned artist selection and management, theme direction, social media and venue furniture",
      "Ran for 4 years, growing ticket sales ×3",
    ],
    thumbnail: "/projects/jugaad/JUGAAD 2 TIGRE.png",
    dark: true,
    modalCardBg: "#0A0A0A",
    stats: [
      { value: "350", label: "Tickets sold on opening night" },
      { value: "4", label: "Years running, fully independent" },
      { value: "×3", label: "Growth in ticket sales" },
    ],
    composition: {
      slots: ["splitTop", "wide", "videoStack"],
      splitTop: {
        left: [
          "/projects/jugaad/jugaad behance 1-02.png",
          "/projects/jugaad/jugaad behance 1-03.png",
        ],
        right: "/projects/jugaad/DSC01650.JPG",
      },
      wide: "/projects/jugaad/DSC01875.JPG",
      videoStack: {
        video: "/projects/jugaad/jugaadportfo.mp4",
        videoAspect: "9 / 16",
        images: [
          "/projects/jugaad/DSC01660.JPG",
          "/projects/jugaad/DSC01853.JPG",
        ],
      },
    },
  },
  {
    slug: "hypermind",
    title: "Hypermind",
    tagline: "Building local AI",
    summary:
      "Founder Associate at a local-AI startup. Mesh-network apps, IP research, and a deep dive on gen-AI tooling.",
    cardBg: "linear-gradient(135deg, #F0CCDC 0%, #C8D8F0 100%)",
    category: "AI / Founder Associate",
    year: "2025",
    description:
      "Founder Associate at a small local-AI startup. I sat close to the product, the team, and the customers — and got pulled into a wide range of work. Three streams stood out as the most intense and the most formative.",
    bullets: [
      "Built and helped sell an app that creates mesh networks across people's devices, so anyone can run the best open-source models locally and privately",
      "Led an IP and copyright research deep-dive for an AI-in-film project",
      "Hands-on study of every leading image and video generation model — closed and open source",
      "Mapped the new VFX toolset and how to actually use it in production",
    ],
    thumbnail:
      "/projects/hypermind/app icon -macOS-Default-1024x1024@1x 1.png",
    dark: true,
    modalCardBg: "#0A0E1F",
    composition: {
      hero: "/projects/hypermind/Visual 2 1.png",
      grid: [
        "/projects/hypermind/Group 22 1.png",
        "/projects/hypermind/Group 24 1.png",
        "/projects/hypermind/Group 25 1.png",
        "/projects/hypermind/Group 31 1.png",
      ],
      wide: "/projects/hypermind/A4 - 2 1.png",
      iconPair: [
        "/projects/hypermind/app icon -macOS-Default-1024x1024@1x 1.png",
        "/projects/hypermind/app icon -macOS-Dark-1024x1024@1x 1.png",
      ],
      finale: "/projects/hypermind/Backpack UBIQ 1.png",
      finaleBg: "#F5F1EC",
    },
  },
  {
    slug: "vaseline",
    title: "The Jolly Jelly",
    tagline: "Won Silver at The One Show",
    summary:
      "Communication campaign for Vaseline. Silver and Bronze Pencils at The One Club New York.",
    cardBg: "#FFE899",
    category: "Award / Vaseline · The One Show",
    year: "2024",
    description:
      "Communication campaign for Vaseline. Won a Young One Silver and a Bronze Pencil at The One Club for Creativity in New York.",
    bullets: [
      "Communication campaign built on a real Vaseline brief",
      "Young One Silver Pencil — The One Club, New York",
      "Young One Bronze Pencil — The One Club, New York",
    ],
    thumbnail: "",
    externalUrl:
      "https://www.behance.net/gallery/223117875/THE-JOLLY-JELLY-Vaseline-The-One-Show-Young-ones",
  },
  {
    slug: "depub",
    title: "DEPUB",
    tagline: "Won a Wooden Pencil at D&AD",
    summary:
      "Communication campaign for Depop. Wooden Pencil at D&AD New Blood London.",
    cardBg: "#FFD0CC",
    category: "Award / Depop · D&AD New Blood",
    year: "2024",
    description:
      "Communication campaign for Depop. Won a New Blood Wooden Pencil at D&AD in London.",
    bullets: [
      "Communication campaign built on a real Depop brief",
      "New Blood Wooden Pencil — D&AD, London",
    ],
    thumbnail: "",
    externalUrl:
      "https://www.behance.net/gallery/223145371/DEPUB-Depop-D-AD-New-Blood-Awards",
  },
];
