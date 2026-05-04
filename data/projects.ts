export interface ProjectStat {
  value: string;
  label: string;
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
    thumbnail: "/projects/clubhouse/thumbnail.jpg",
    modalCardBg: "#FAF3E5",
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
    thumbnail: "/projects/hypermind/UBIQ 4.png",
    dark: true,
    modalCardBg: "#0A0E1F",
    marqueeLabel: "Product visuals",
    marquee: [
      "/projects/hypermind/Group 250.png",
      "/projects/hypermind/Group 251.png",
      "/projects/hypermind/Group 252.png",
      "/projects/hypermind/Group 253.png",
    ],
    images: [
      "/projects/hypermind/Frame 20.png",
      "/projects/hypermind/Visual 2.1.png",
      "/projects/hypermind/City visual.png",
    ],
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
    thumbnail: "/projects/design-awards/vaseline.jpg",
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
    thumbnail: "/projects/design-awards/depub.jpg",
    externalUrl:
      "https://www.behance.net/gallery/223145371/DEPUB-Depop-D-AD-New-Blood-Awards",
  },
];
