import { Lift } from "@/components/motion-primitives";
import { domainColor } from "@/content/portfolio";
import type { ExperienceEntry } from "@/content/experience";

export function ExperienceTimeline({ items }: { items: ExperienceEntry[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const color = domainColor[item.domain];
        return (
          <Lift key={item.role + item.org} delay={i * 0.04}>
            <div className="group relative grid gap-3 border-t border-border py-8 sm:grid-cols-[170px_1fr] sm:gap-8">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: color }}
                />
                <p className="font-mono text-sm text-muted">
                  {item.start} &ndash; {item.end}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.role}{" "}
                  <span className="text-muted">&middot; {item.org}</span>
                </h3>
                <ul className="mt-3 space-y-2 text-foreground/85">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ background: color }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Lift>
        );
      })}
    </div>
  );
}
