import { Lift } from "@/components/motion-primitives";
import type { ActivityEntry } from "@/content/experience";

export function ActivitiesList({ items }: { items: ActivityEntry[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {items.map((item, i) => (
        <Lift key={item.title} delay={i * 0.05}>
          <div className="h-full rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur transition-colors hover:border-accent/60">
            <h4 className="font-semibold tracking-tight">{item.title}</h4>
            <p className="mt-1 text-sm text-muted">{item.org}</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </Lift>
      ))}
    </div>
  );
}
