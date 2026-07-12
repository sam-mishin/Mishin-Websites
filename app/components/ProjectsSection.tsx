"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../data/projects";

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Websites" },
  { key: "code", label: "Coding" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full w-full flex-col gap-6 rounded-lg border border-white/5 bg-[#101f30] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_0_40px_-12px_rgba(0,71,204,0.6)]">
      {project.image ? (
        <div className="overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-ink-muted/40 bg-black text-center">
          <span className="px-6 font-mono text-sm text-ink-muted">
            + Add project screenshot
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-sans text-xl font-semibold text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="text-base leading-relaxed text-ink-muted md:text-lg">
          {project.desc}
        </p>
      </div>
      {project.icons.length > 0 && (
        <div className="flex gap-2">
          {project.icons.map((icon, i) => (
            <div
              key={i}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1d1d1d] p-2"
            >
              <Image src={icon} alt="" width={24} height={24} />
            </div>
          ))}
        </div>
      )}
      <div className="mt-auto flex w-full items-center justify-between font-sans text-sm font-medium">
        {project.placeholder ? (
          <span className="text-ink-muted/50">Case Study</span>
        ) : (
          <Link href={`/projects/${project.slug}`} className="text-blue-tint hover:text-white">
            Case Study
          </Link>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-tint"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous projects" : "Next projects"}
      onClick={onClick}
      disabled={disabled}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur transition hover:border-blue/50 hover:text-blue-tint disabled:pointer-events-none disabled:opacity-30"
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "left" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterKey>("all");
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  function updateEdges() {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    updateEdges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function scrollByAmount(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full border px-5 py-2 font-mono text-sm transition ${
                active === f.key
                  ? "border-blue bg-blue text-white shadow-[0_0_20px_-4px_rgba(0,71,204,0.8)]"
                  : "border-white/15 text-ink-muted hover:border-white/40 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <ArrowButton direction="left" onClick={() => scrollByAmount(-1)} disabled={atStart} />
          <ArrowButton direction="right" onClick={() => scrollByAmount(1)} disabled={atEnd} />
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {visible.map((p, i) => (
          <div
            key={p.slug}
            className="w-full shrink-0 snap-start animate-fade-in-up sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
