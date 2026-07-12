export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black">
      <div className="flex items-center gap-3 font-mono text-sm text-blue-tint">
        <span className="h-2 w-2 rounded-full bg-blue animate-pulse" />
        <span>loading</span>
        <span className="typer-cursor">▍</span>
      </div>
    </div>
  );
}
