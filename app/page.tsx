import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import ProjectsSection from "./components/ProjectsSection";
import { projects, currentProjects } from "./data/projects";

const skills = [
  { name: "HTML", icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa945dd993880c814bff_html-108.png" },
  { name: "CSS", icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9441662fa6f43403f6_css-108.png" },
  { name: "JavaScript", icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa9485929da6db91353d_js-108.png" },
  { name: "Figma", icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afa94bb3e20271ac6542a_figma-108.png" },
  { name: "Webflow", icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afb9c23d782ae6f73fcc7_webflow-lower-108.png" },
  { name: "React", icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afc1a864f3e68ffc8bbfa_react-108.png" },
  { name: "Tailwind", icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afc1a465d472e31a023a8_tailwind-108.png" },
  { name: "TypeScript", icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696afc1af756295ba6fd7001_typescript-108.png" },
];

const services = [
  {
    title: "Webflow Development",
    desc: "Custom built, pixel perfect Webflow sites with no clunky templates. Advanced interactions, CMS structures, and Finsweet / Lumos powered components.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="8.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Conversion Focused Design",
    desc: "Every layout is designed around clear CTAs and user journeys that turn visitors into leads and customers, not just pretty pages.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "Custom Code & Integrations",
    desc: "When Webflow's native tools aren't enough, I write custom JS/React to add functionality: booking flows, calculators, API integrations, dashboards.",
    icon: (
      <>
        <polyline points="8 6 3 12 8 18" />
        <polyline points="16 6 21 12 16 18" />
      </>
    ),
  },
  {
    title: "Ongoing Care & Growth",
    desc: "After launch, I handle updates, performance monitoring, and iterative improvements so your site keeps working for your business.",
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <polyline points="21 3 21 9 15 9" />
      </>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Excellent to work with: quick, reliable, and knowledgeable. Sam solved problems fast and was a great asset to our team. I would definitely work with him again.",
    name: "Marli Creative",
    role: "Webflow & Automation Agency",
  },
  {
    quote:
      "Excellent communication and deep Webflow expertise. I would rehire him without a second thought, and plan to have him build and optimize more landing pages down the line.",
    name: "Guiding Light CR",
    role: "Local Therapy Center",
  },
  {
    quote: "Samuel is detail oriented and has great communication. I would work with him again.",
    name: "Matthew Matsuzaki",
    role: "Head of Brand, Ghost",
  },
];

function HeroGraphic() {
  return (
    <div className="relative flex h-[420px] w-full max-w-[480px] items-center justify-center">
      {/* glow blobs */}
      <div className="absolute h-64 w-64 rounded-full bg-blue/30 blur-3xl animate-pulse-glow" />
      <div className="absolute h-40 w-40 translate-x-24 translate-y-16 rounded-full bg-blue-tint/10 blur-3xl animate-pulse-glow [animation-delay:1.5s]" />

      {/* orbiting rings */}
      <div className="absolute h-80 w-80 rounded-full border border-dashed border-blue/30 animate-spin-slow" />
      <div className="absolute h-56 w-56 rounded-full border border-white/10 animate-spin-slow-reverse" />
      <div className="absolute h-80 w-80 animate-spin-slow">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue shadow-[0_0_12px_2px_rgba(0,71,204,0.9)]" />
      </div>
      <div className="absolute h-56 w-56 animate-spin-slow-reverse">
        <span className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-blue-tint shadow-[0_0_10px_2px_rgba(235,240,255,0.8)]" />
      </div>

      {/* terminal card */}
      <div className="relative w-full max-w-[380px] animate-float overflow-hidden rounded-xl border border-white/10 bg-black/70 p-5 font-mono text-sm shadow-[0_0_60px_-15px_rgba(0,71,204,0.6)] backdrop-blur">
        <div className="pointer-events-none absolute inset-x-0 h-16 animate-scan bg-gradient-to-b from-transparent via-blue/20 to-transparent" />
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex flex-col gap-1 text-blue-tint">
          <span><span className="text-ink-muted">const</span> dev = {"{"}</span>
          <span className="pl-4">name: <span className="text-white">&quot;Sam Mishin&quot;</span>,</span>
          <span className="pl-4">role: <span className="text-white">&quot;Webflow Developer&quot;</span>,</span>
          <span className="pl-4">stack: [<span className="text-white">&quot;Webflow&quot;, &quot;React&quot;, &quot;TS&quot;</span>],</span>
          <span className="pl-4">status: <span className="text-white">&quot;Building...&quot;</span><span className="typer-cursor">▍</span></span>
          <span>{"}"}</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden px-[5vw] pt-16 md:pt-0">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[7fr_5fr] md:gap-0 md:-mx-[50px]">
              <div className="flex flex-col gap-3 md:px-[50px]">
                <h1 className="bg-gradient-to-r from-white via-blue-tint to-white bg-[length:200%_auto] bg-clip-text font-sans text-[clamp(44px,7vw,86px)] font-semibold leading-[1.05] text-transparent animate-[gradient-move_6s_ease_infinite]">
                  Sam Mishin
                </h1>
                <h2 className="font-sans text-[clamp(24px,3vw,42px)] font-medium leading-[1.15] text-blue-tint">
                  Webflow Developer &amp; Designer
                </h2>
                <p className="mt-2 max-w-[600px] text-justify text-lg leading-relaxed text-ink-muted">
                  Webflow expert with 3+ years building fast, conversion focused
                  sites for small and medium businesses. I handle the full build
                  so you can focus on growth.
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-md bg-blue px-6 py-3 font-sans text-base font-medium text-white transition hover:bg-[#0039a6] hover:shadow-[0_0_25px_-5px_rgba(0,71,204,0.9)]"
                  >
                    Start a Project
                  </Link>
                  <a
                    href="#portfolio"
                    className="rounded-md border border-white/20 px-6 py-3 font-sans text-base font-medium text-white transition hover:border-white/50"
                  >
                    See My Work
                  </a>
                </div>
              </div>
              <div className="flex w-full items-center justify-center md:px-[50px]">
                <HeroGraphic />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="w-full px-[5vw]">
          <Reveal className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 pb-20 pt-0">
            <SectionHeading index="01" title="Skills" />
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="marquee-track flex w-max items-center gap-16">
                {[...skills, ...skills].map((s, i) => (
                  <div key={`${s.name}-${i}`} className="group flex w-[80px] flex-col items-center gap-2">
                    <Image
                      src={s.icon}
                      alt={`${s.name} logo`}
                      width={48}
                      height={48}
                      className="transition duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_10px_rgba(0,71,204,0.8)]"
                    />
                    <div className="text-sm font-light text-white">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section id="services" className="w-full scroll-mt-24 px-[5vw]">
          <Reveal className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 pb-20 pt-0">
            <SectionHeading index="02" title="Services" />
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-0 sm:-mx-4">
              {services.map((s, i) => (
                <div key={s.title} className="sm:px-4">
                  <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-white/5 bg-[#101f30] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_0_40px_-12px_rgba(0,71,204,0.6)]">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue/0 blur-2xl transition duration-500 group-hover:bg-blue/25" />
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10 text-blue-tint transition duration-300 group-hover:bg-blue group-hover:text-white">
                        <svg
                          viewBox="0 0 24 24"
                          width="22"
                          height="22"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {s.icon}
                        </svg>
                      </span>
                      <span className="font-mono text-xs text-ink-muted/50">0{i + 1}</span>
                    </div>
                    <h3 className="font-sans text-xl font-semibold text-white">{s.title}</h3>
                    <p className="text-justify text-base leading-relaxed text-ink-muted">{s.desc}</p>
                    <span className="mt-auto h-[2px] w-0 bg-gradient-to-r from-blue to-blue-tint transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full px-[5vw]">
          <Reveal className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 pb-20 pt-0">
            <SectionHeading index="03" title="Testimonials" />
            <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-0 md:-mx-4">
              {testimonials.map((t, i) => (
                <div key={i} className="md:px-4">
                  <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-white/5 bg-[#101f30] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_0_40px_-12px_rgba(0,71,204,0.6)]">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue/0 blur-2xl transition duration-500 group-hover:bg-blue/25" />
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-tint/60"
                    >
                      <path d="M7 8c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4 .3 1.7-1 3-3 3v1.5c3.3 0 5.5-2.2 5-5.5V8H7z" />
                      <path d="M17 8c-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4 .3 1.7-1 3-3 3v1.5c3.3 0 5.5-2.2 5-5.5V8h-2z" />
                    </svg>
                    <p className="flex-1 text-base italic leading-relaxed text-ink-muted">
                      &quot;{t.quote}&quot;
                    </p>
                    <div className="flex flex-col">
                      <span className="font-sans text-base font-semibold text-white">{t.name}</span>
                      <span className="font-mono text-xs text-ink-muted">{t.role}</span>
                    </div>
                    <span className="mt-auto h-[2px] w-0 bg-gradient-to-r from-blue to-blue-tint transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section className="w-full px-[5vw]">
          <Reveal id="portfolio" className="mx-auto flex w-full max-w-[1200px] scroll-mt-24 flex-col gap-12 pb-20 pt-0">
            <SectionHeading index="04" title="Projects" />
            <ProjectsSection projects={projects} />
          </Reveal>
        </section>

        {/* CURRENT PROJECTS */}
        <section className="w-full px-[5vw]">
          <Reveal className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 pb-20 pt-0">
            <SectionHeading index="05" title="Currently Building" />
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-0 sm:-mx-4">
              {currentProjects.map((p) => (
                <div key={p.title} className="sm:px-4">
                  <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-white/5 bg-[#101f30] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_0_40px_-12px_rgba(0,71,204,0.6)]">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue/0 blur-2xl transition duration-500 group-hover:bg-blue/25" />
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-blue-tint/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse" />
                      <span>In Progress</span>
                    </div>
                    <h3 className="font-sans text-xl font-semibold text-white">{p.title}</h3>
                    <p className="flex-1 text-justify text-base leading-relaxed text-ink-muted">{p.desc}</p>
                    {p.tags && p.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-ink-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="mt-auto h-[2px] w-0 bg-gradient-to-r from-blue to-blue-tint transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section className="w-full px-[5vw]">
          <Reveal id="contact" className="mx-auto flex w-full max-w-[1200px] scroll-mt-24 flex-col gap-12 pb-20 pt-0">
            <SectionHeading index="06" title="Contact" />
            <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-0 md:-mx-[50px]">
              <div className="flex flex-col gap-6 md:px-[50px]">
                <p className="max-w-[600px] text-justify text-lg leading-relaxed text-ink-muted">
                  Looking for someone who can own your website end to end, covering
                  design, build, and ongoing growth? I&apos;m always available to chat
                  about a potential project or an exciting opportunity.
                </p>
                <Link
                  href="/contact"
                  className="self-start rounded-md bg-blue px-6 py-3 font-sans text-base font-medium text-white transition hover:bg-[#0039a6] hover:shadow-[0_0_25px_-5px_rgba(0,71,204,0.9)]"
                >
                  Send a Message
                </Link>
              </div>
              <div className="flex flex-col gap-4 md:px-[50px]">
                {[
                  {
                    label: "Upwork",
                    handle: "Hire me on Upwork",
                    href: "https://www.upwork.com/freelancers/~0171207b7757914260?mp_source=share",
                    icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bf2afe646bb83452ddb91_upwork_1768682157006-all-icons.svg",
                  },
                  {
                    label: "LinkedIn",
                    handle: "Connect with me",
                    href: "https://www.linkedin.com/in/samuel-mishin-442779386/",
                    icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bf24457e8b062790c2868_linkedin_1768682045216-all-icons.svg",
                  },
                  {
                    label: "Email",
                    handle: "sammishin2@gmail.com",
                    href: "mailto:sammishin2@gmail.com",
                    icon: "https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/696bf28c600ee0f39c0984fe_email_1768682121619-all-icons.svg",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    aria-label={c.label}
                    href={c.href}
                    target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-lg border border-white/10 bg-[#101f30] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue/50 hover:shadow-[0_0_30px_-10px_rgba(0,71,204,0.7)]"
                  >
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-1 scale-y-0 bg-blue transition-transform duration-300 group-hover:scale-y-100" />
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 p-2.5 transition duration-300 group-hover:bg-blue/20">
                      <Image src={c.icon} alt="" width={22} height={22} />
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span className="font-sans text-base font-semibold text-white">{c.label}</span>
                      <span className="font-mono text-xs text-ink-muted">{c.handle}</span>
                    </span>
                    <span className="font-mono text-lg text-blue-tint transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
