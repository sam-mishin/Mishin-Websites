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
    title: "Webflow Class Optimizer",
    desc: "Building a tool that analyzes a Webflow site and recommends class optimizations, following Finsweet's Client-First naming conventions.",
    tags: ["Webflow", "Client-First"],
  },
  {
    title: "Chess Variant Multiplayer",
    desc: "Adding WebSockets to the custom chess variant for real-time multiplayer matches.",
    tags: ["WebSockets", "JavaScript"],
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
    title: "Travel Enlightened",
    desc: "Maintain and grow Travel Enlightened's website, adding new content sections and updating CMS components to improve functionality and content management.",
    icons: [],
    liveUrl: "https://travel-enlightened.com",
    slug: "travel-enlightened",
    category: "web",
    role: "Ongoing Maintenance & Development",
    ...placeholderCaseStudy,
  },
  {
    title: "The Writing Agency",
    desc: "Maintain and enhance The Writing Agency's website, building new front-end sections and making targeted improvements to the CMS.",
    icons: [],
    liveUrl: "https://thewritingagency.co.uk",
    slug: "the-writing-agency",
    category: "web",
    role: "Ongoing Maintenance & Development",
    ...placeholderCaseStudy,
  },
  {
    title: "The Uniform Company",
    desc: "Add a short description here of the work done for The Uniform Company.",
    icons: [],
    slug: "the-uniform-company",
    category: "web",
    role: "Design & Development",
    ...placeholderCaseStudy,
  },
  {
    title: "Guiding Light CR",
    desc: "Optimized a Webflow site's mobile and desktop speed using a Cloudflare Worker to serve critical CSS while deferring render blocking scripts, taking PageSpeed from 55 to 90+. Also built three landing pages optimized for speed and conversion.",
    icons: [],
    liveUrl: "https://guidinglightcr.com",
    slug: "guiding-light-cr",
    category: "web",
    role: "Performance Optimization & Development",
    problem: [
      "Guiding Light CR's Webflow site was slow on both mobile and desktop. Render blocking scripts and unoptimized CSS delivery were dragging their PageSpeed score down to 55, hurting user experience and search visibility.",
    ],
    solution: [
      "I built a Cloudflare Worker to serve critical CSS directly to the frontend while deferring Webflow's render blocking scripts, cutting the time to first paint significantly. I also designed and built three new landing pages optimized specifically for speed and conversion.",
    ],
    result: [
      "PageSpeed score jumped from 55 to 90+ on both mobile and desktop. The new landing pages give the client dedicated, fast loading pages built to convert.",
    ],
  },
  {
    title: "14 Acres",
    desc: "Built a custom cash tracking web app for 14 Acres Winery, with an HTML, CSS, and JS frontend and a Supabase backend, letting staff count and register the till each night, log overages, and track cash across the whole property.",
    icons: [
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa945dd993880c814bff_html-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9441662fa6f43403f6_css-108.png",
      "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9485929da6db91353d_js-108.png",
    ],
    slug: "14-acres",
    category: "code",
    role: "Full-Stack Development",
    problem: [
      "14 Acres Winery needed a secure, simple way for employees and managers to count and register the cash till each night, log overages, and track cash across the whole property day to day.",
    ],
    solution: [
      "I built a custom web app with an HTML, CSS, and JS frontend backed by Supabase, including a custom API to handle counting, registering, and tracking cash entries securely.",
    ],
    result: [
      "Employees and managers now have an easy, secure daily workflow for registering and tracking cash across the whole winery.",
    ],
  },
];
