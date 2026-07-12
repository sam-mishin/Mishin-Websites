export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-blue-tint/70">
        <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse" />
        <span>// {index}</span>
      </div>
      <h2 className="font-sans text-[clamp(28px,6vw,40px)] font-light text-white">{title}</h2>
      <span className="h-[2px] w-16 bg-gradient-to-r from-blue to-transparent" />
    </div>
  );
}
