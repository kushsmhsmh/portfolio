import { Lift } from "@/components/motion-primitives";
import { focus } from "@/content/portfolio";

export function FocusIndex() {
  return (
    <div className="border-t border-border">
      {focus.map((f, i) => (
        <Lift key={f.n} delay={i * 0.05}>
          <div className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-border py-6 sm:grid-cols-[3rem_1fr_1.4fr] sm:gap-8">
            <span className="label pt-1">{f.n}</span>
            <h3 className="display text-2xl font-medium sm:text-3xl">{f.title}</h3>
            <p className="col-start-2 mt-2 text-muted sm:col-start-3 sm:mt-0">
              {f.note}
            </p>
          </div>
        </Lift>
      ))}
    </div>
  );
}
