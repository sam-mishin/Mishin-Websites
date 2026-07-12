import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex w-full flex-1 items-center px-[5vw]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 py-24">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-blue-tint/70">
          <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse" />
          <span>// 404</span>
        </div>
        <h1 className="bg-gradient-to-r from-white via-blue-tint to-white bg-[length:200%_auto] bg-clip-text font-sans text-[clamp(56px,10vw,140px)] font-semibold leading-none text-transparent animate-[gradient-move_6s_ease_infinite]">
          404
        </h1>
        <p className="max-w-[600px] text-lg leading-relaxed text-ink-muted">
          This page doesn&apos;t exist. The route was moved, or the link is
          broken.
        </p>
        <Link
          href="/"
          className="rounded-md bg-blue px-6 py-3 font-sans text-base font-medium text-white transition hover:bg-[#0039a6] hover:shadow-[0_0_25px_-5px_rgba(0,71,204,0.9)]"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
