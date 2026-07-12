"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex w-full flex-1 items-center px-[5vw]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 py-24">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-blue-tint/70">
          <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse" />
          <span>// error</span>
        </div>
        <h1 className="font-sans text-[clamp(32px,6vw,64px)] font-semibold text-white">
          Something broke.
        </h1>
        <p className="max-w-[600px] text-lg leading-relaxed text-ink-muted">
          An unexpected error occurred loading this page. Try again, or head
          back home.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={reset}
            className="rounded-md bg-blue px-6 py-3 font-sans text-base font-medium text-white transition hover:bg-[#0039a6] hover:shadow-[0_0_25px_-5px_rgba(0,71,204,0.9)]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-md border border-white/20 px-6 py-3 font-sans text-base font-medium text-white transition hover:border-white/50"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
