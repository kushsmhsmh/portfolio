import { ticker } from "@/content/portfolio";

export function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="relative flex overflow-hidden border-y border-border py-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div className="marquee flex shrink-0 items-center gap-8 pr-8">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-mono text-sm text-muted">{item}</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
