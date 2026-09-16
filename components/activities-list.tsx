import { Lift } from "@/components/motion-primitives";
import type { ActivityEntry } from "@/content/experience";

export function ActivitiesList({ items }: { items: ActivityEntry[] }) {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
      {items.map((item, i) => (
        <Lift key={item.title} delay={i * 0.05}>
          <div className="border-t border-border pt-5">
            <h4 className="display text-xl font-medium">{item.title}</h4>
            <p className="label mt-1 !text-[0.68rem]">{item.org}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
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
