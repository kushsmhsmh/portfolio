import { Reveal } from "@/components/reveal";
import type { ExperienceEntry } from "@/content/experience";

export function ExperienceTimeline({ items }: { items: ExperienceEntry[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <Reveal key={item.role + item.org} delay={i * 0.05}>
          <div className="grid gap-2 border-t border-border py-8 sm:grid-cols-[160px_1fr] sm:gap-8">
            <p className="font-mono text-sm text-muted">
              {item.start} &ndash; {item.end}
            </p>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                {item.role} <span className="text-muted">&middot; {item.org}</span>
              </h3>
              <ul className="mt-3 space-y-2 text-foreground/85">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
