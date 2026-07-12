"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
      {project.placeholder ? (
        <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-ink-muted/40 bg-black text-center">
          <span className="px-6 font-mono text-sm text-ink-muted">
            + Add project screenshot
          </span>
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg">
          <Image
            src={project.image!}
            alt={project.title}
            width={800}
            height={450}
            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="font-sans text-xl font-semibold text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="text-justify text-base leading-relaxed text-ink-muted md:text-lg">
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

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterKey>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-8">
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
      <div className="grid grid-cols-1 items-stretch gap-y-6 md:grid-cols-2 md:gap-x-0 md:-mx-4 lg:grid-cols-3">
        {visible.map((p, i) => (
          <div key={p.slug} className="md:px-4">
            <div
              className="h-full animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
            >
              <ProjectCard project={p} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
