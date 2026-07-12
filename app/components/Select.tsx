"use client";

import { useEffect, useRef, useState } from "react";

export default function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-left font-sans text-base text-white outline-none transition focus:border-blue focus:shadow-[0_0_0_3px_rgba(0,71,204,0.25)]"
      >
        <span>{value}</span>
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-blue-tint transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`absolute left-0 right-0 top-[calc(100%+8px)] z-20 origin-top overflow-hidden rounded-lg border border-white/10 bg-[#0a1420] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] transition-all duration-200 ${
          open
            ? "visible scale-y-100 opacity-100"
            : "invisible scale-y-95 opacity-0"
        }`}
        role="listbox"
      >
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            role="option"
            aria-selected={opt === value}
            onClick={() => {
              onChange(opt);
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 border-l-2 px-4 py-2.5 text-left font-sans text-base transition ${
              opt === value
                ? "border-blue bg-blue/10 text-blue-tint"
                : "border-transparent text-white hover:border-blue/50 hover:bg-white/5"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
