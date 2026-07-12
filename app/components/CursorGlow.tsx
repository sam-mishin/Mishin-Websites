"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = (e: MouseEvent) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 20%), rgba(0,71,204,0.10), transparent 40%)",
      }}
    />
  );
}
