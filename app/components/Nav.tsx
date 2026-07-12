"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/resume.pdf", label: "Resume", external: true },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-30 w-full bg-black/60 px-[5vw] backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="https://cdn.prod.website-files.com/68794d08eac9dea323b52b8e/68b1fa0a54b29db0e51d3dca_1.avif"
            alt="Mishin Websites logo"
            width={48}
            height={48}
            className="max-w-[4.5rem]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = !l.external && pathname === l.href;
            return l.external ? (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1.5 font-mono text-sm uppercase tracking-[0.1em] text-white transition hover:text-blue-tint"
              >
                {l.label}
                <span className="h-[2px] w-0 bg-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className={`group relative flex items-center gap-1.5 font-mono text-sm uppercase tracking-[0.1em] transition ${
                  active ? "text-blue-tint" : "text-white hover:text-blue-tint"
                }`}
              >
                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-blue shadow-[0_0_8px_2px_rgba(0,71,204,0.8)]" />
                )}
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[1.5px] w-6 bg-white transition duration-300 ${open ? "translate-y-[3.5px] rotate-45 bg-blue-tint" : ""}`}
          />
          <span
            className={`h-[1.5px] w-6 bg-white transition duration-300 ${open ? "-translate-y-[3.5px] -rotate-45 bg-blue-tint" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`flex flex-col gap-1 border-t border-white/5 pb-6 pt-4 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {links.map((l, i) => {
              const active = !l.external && pathname === l.href;
              const index = `0${i + 1}`;
              return l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-md px-2 py-3 font-sans text-base text-white transition hover:bg-white/5 hover:text-blue-tint"
                >
                  <span className="font-mono text-xs text-blue-tint/60">{index}</span>
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-md px-2 py-3 font-sans text-base transition hover:bg-white/5 hover:text-blue-tint ${
                    active ? "text-blue-tint" : "text-white"
                  }`}
                >
                  <span className="font-mono text-xs text-blue-tint/60">{index}</span>
                  {l.label}
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue shadow-[0_0_8px_2px_rgba(0,71,204,0.8)]" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue/40 to-transparent" />
    </div>
  );
}
