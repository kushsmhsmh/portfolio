import { Lift } from "@/components/motion-primitives";
import { domainLabel } from "@/content/portfolio";
import type { ExperienceEntry } from "@/content/experience";

export function ExperienceTimeline({ items }: { items: ExperienceEntry[] }) {
  return (
    <div className="border-t border-border">
      {items.map((item, i) => (
        <Lift key={item.role + item.org} delay={i * 0.04}>
          <div className="grid gap-4 border-b border-border py-8 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-10">
            <span className="label pt-1">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="display text-2xl font-medium sm:text-3xl">
                  {item.role}
                  <span className="text-muted"> — {item.org}</span>
                </h3>
                <span className="font-mono text-sm text-muted">
                  {item.start} &ndash; {item.end}
                </span>
              </div>
              <p className="label mt-2 !text-[0.68rem]">
                {domainLabel[item.domain]}
              </p>
              <ul className="mt-4 space-y-2 text-foreground/85">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Lift>
      ))}
    </div>
  );
}
