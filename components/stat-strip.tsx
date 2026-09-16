import { CountUp, Lift } from "@/components/motion-primitives";
import { stats, domainColor } from "@/content/portfolio";

export function StatStrip() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
      {stats.map((s, i) => (
        <Lift key={s.label} delay={i * 0.08} className="bg-background">
          <div className="flex h-full flex-col gap-2 p-6">
            <span
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ color: domainColor[s.domain] }}
            >
              <CountUp
                value={s.value}
                decimals={s.decimals}
                prefix={s.prefix}
                suffix={s.suffix}
              />
            </span>
            <span className="text-sm text-muted">{s.label}</span>
          </div>
        </Lift>
      ))}
    </div>
  );
}
