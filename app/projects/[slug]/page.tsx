import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

const caseStudies = projects.filter((p) => !p.placeholder);

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const index = caseStudies.findIndex((p) => p.slug === params.slug);
  const project = caseStudies[index];

  if (!project) notFound();

  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  const sections = [
    { label: "The Problem", index: "01", paragraphs: project.problem },
    { label: "The Solution", index: "02", paragraphs: project.solution },
    { label: "The Result", index: "03", paragraphs: project.result },
  ].filter((s) => s.paragraphs && s.paragraphs.length > 0);

  return (
    <main className="w-full px-[5vw]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 pb-24 pt-8">
          <Link
            href="/#portfolio"
            className="font-mono text-sm text-blue-tint hover:text-white"
          >
            ← Back to portfolio
          </Link>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-blue-tint/70">
              <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse" />
              <span>// {project.category === "web" ? "Websites" : "Coding"}</span>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h1 className="font-sans text-[clamp(32px,5vw,56px)] font-semibold leading-[1.1] text-white">
                  {project.title}
                </h1>
                {project.role && (
                  <p className="font-mono text-sm text-ink-muted">{project.role}</p>
                )}
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 font-sans text-sm font-medium text-white transition hover:border-blue/50 hover:shadow-[0_0_25px_-8px_rgba(0,71,204,0.7)]"
                >
                  Visit Live Site
                  <span className="font-mono">→</span>
                </a>
              )}
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
          </div>

          {project.image && (
            <div className="overflow-hidden rounded-lg border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={675}
                priority
                className="aspect-video w-full object-cover"
              />
            </div>
          )}

          <p className="max-w-[700px] text-justify text-lg leading-relaxed text-ink-muted">
            {project.desc}
          </p>

          {sections.length > 0 && (
            <div className="flex max-w-[700px] flex-col gap-14">
              {sections.map((s) => (
                <div key={s.label} className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-blue-tint/70">
                    <span>// {s.index}</span>
                    <span className="text-white">{s.label}</span>
                  </div>
                  <span className="h-[2px] w-16 bg-gradient-to-r from-blue to-transparent" />
                  <div className="flex flex-col gap-4">
                    {s.paragraphs!.map((para, i) => (
                      <p key={i} className="text-justify text-lg leading-relaxed text-ink-muted">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-1 rounded-lg border border-white/5 bg-[#101f30] p-5 transition duration-300 hover:border-blue/40 hover:shadow-[0_0_30px_-12px_rgba(0,71,204,0.6)]"
            >
              <span className="font-mono text-xs text-ink-muted">← Previous</span>
              <span className="font-sans text-lg text-white transition group-hover:text-blue-tint">
                {prev.title}
              </span>
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col gap-1 rounded-lg border border-white/5 bg-[#101f30] p-5 text-right transition duration-300 hover:border-blue/40 hover:shadow-[0_0_30px_-12px_rgba(0,71,204,0.6)]"
            >
              <span className="font-mono text-xs text-ink-muted">Next →</span>
              <span className="font-sans text-lg text-white transition group-hover:text-blue-tint">
                {next.title}
              </span>
            </Link>
          </div>
        </div>
    </main>
  );
}

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}
