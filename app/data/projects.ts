export type Project = {
  title: string;
  desc: string;
  image?: string;
  icons: string[];
  liveUrl?: string;
  slug: string;
  category: "web" | "code";
  placeholder?: boolean;
  role?: string;
  problem?: string[];
  solution?: string[];
  result?: string[];
};

export type CurrentProject = {
  title: string;
  desc: string;
  tags?: string[];
};

export const currentProjects: CurrentProject[] = [
  {
    title: "Add a project you're building",
    desc: "Swap this for something you're currently working on, a client project, personal build, or experiment. Placeholder ready to go.",
    tags: ["Webflow"],
  },
  {
    title: "Add another active project",
    desc: "Another slot for current work. Add a title, short description, and the tools/stack you're using.",
    tags: ["React", "TypeScript"],
  },
];

const placeholderCaseStudy = {
  problem: [
    "Add 1 to 3 paragraphs here describing the problem, who the client was, what wasn't working before, and what they came to you needing solved.",
  ],
  solution: [
    "Add 1 to 3 paragraphs here describing how you solved it: your approach, key decisions, tools used, and anything that made the build tricky or interesting.",
  ],
  result: [
    "Add 1 to 3 paragraphs here describing the measurable result. Numbers if you have them (conversion lift, load time, bookings), plus any client feedback.",
  ],
};

export const projects: Project[] = [
  {
    title: "AirBnB Website",
    desc: "Designed a website for an Airbnb in Relume and Figma, developing the final build in Webflow. Clear CTAs on the site boosted bookings.",
    image: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68bc7ab875351f8186049991_Screenshot%202025-09-06%20141417.jpg",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bc911f363a8a547158ebf_relume-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa94bb3e20271ac6542a_figma-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    liveUrl: "https://blueoasishome.com",
    slug: "airbnb-website",
    category: "web",
    role: "Design & Development",
    ...placeholderCaseStudy,
  },
  {
    title: "Portfolio Website",
    desc: "Designed in Figma before moving to Webflow for the final build. Focus was a clean, minimalist page with excellent responsive design.",
    image: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/6970441ccbf71e66815e0e66_Screenshot%202026-01-20%20221159.avif",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa94bb3e20271ac6542a_figma-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    liveUrl: "https://mishinwebsites.com",
    slug: "portfolio-website",
    category: "web",
    role: "Design & Development",
    ...placeholderCaseStudy,
  },
  {
    title: "Mail Service Website",
    desc: "Designed and developed a clean, functional site for a mail and package service business, simplifying the user journey while reinforcing trust.",
    image: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/697811caca970b42dc972dec_Screenshot%202026-01-26%20201503.avif",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bc911f363a8a547158ebf_relume-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa94bb3e20271ac6542a_figma-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    slug: "mail-service-website",
    category: "web",
    role: "Design & Development",
    ...placeholderCaseStudy,
  },
  {
    title: "Add your next project",
    desc: "Swap this card for your latest client work: a local business, online store, or SaaS landing page. Placeholder ready to go.",
    icons: [],
    slug: "project-four",
    category: "web",
    placeholder: true,
  },
  {
    title: "Crypto Telegram Bot",
    desc: "Built a Telegram bot that tracks crypto prices and alerts users on custom thresholds in real time.",
    image: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68bc7ab875351f8186049991_Screenshot%202025-09-06%20141417.jpg",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa94bb3e20271ac6542a_figma-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68fd46461596d44ee42b1926_Mark_Logo_Blue.svg",
    ],
    slug: "crypto-telegram-bot",
    category: "code",
    role: "Development",
    ...placeholderCaseStudy,
  },
  {
    title: "Chess Variant",
    desc: "A custom chess variant built from scratch with vanilla HTML, CSS, and JavaScript, including custom rule logic.",
    image: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/69704868a1e2096f6df40cfc_chess%20variant%20thumb.avif",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa945dd993880c814bff_html-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9441662fa6f43403f6_css-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9485929da6db91353d_js-108.png",
    ],
    slug: "chess-variant",
    category: "code",
    role: "Development",
    ...placeholderCaseStudy,
  },
  {
    title: "Mouse Moving Bot",
    desc: "A lightweight Python automation script for simulating mouse activity, built to solve a real workflow problem.",
    image: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68bc7ab875351f8186049991_Screenshot%202025-09-06%20141417.jpg",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bc998208f8692500f5c0d_python-108.png",
    ],
    slug: "mouse-moving-bot",
    category: "code",
    role: "Development",
    ...placeholderCaseStudy,
  },
];
