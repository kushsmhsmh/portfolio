"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { domains, domainColor } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AllocationBar() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Allocation
        </span>
        <span className="font-mono text-xs text-muted">100% deployed</span>
      </div>

      {/* The book, as a single hedged bar */}
      <div
        className="flex h-16 w-full gap-1 overflow-hidden rounded-xl"
        onMouseLeave={() => setActive(null)}
      >
        {domains.map((d, i) => (
          <motion.button
            key={d.key}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            initial={{ flexGrow: 0, opacity: 0 }}
            whileInView={{ flexGrow: d.weight, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE, delay: i * 0.12 }}
            style={{ background: domainColor[d.key], flexBasis: 0 }}
            className="group relative flex items-end p-3 text-left outline-none"
            aria-label={`${d.label}: ${d.weight}%`}
          >
            <span
              className="font-mono text-xs font-semibold text-black/70 transition-opacity"
              style={{ opacity: active === null || active === i ? 1 : 0.35 }}
            >
              {d.weight}%
            </span>
          </motion.button>
        ))}
      </div>

      {/* Legend / active detail */}
      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
        {domains.map((d, i) => (
          <button
            key={d.key}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="flex flex-col gap-1 text-left transition-opacity"
            style={{ opacity: active === null || active === i ? 1 : 0.4 }}
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: domainColor[d.key] }}
              />
              {d.label}
            </span>
            <span className="pl-[18px] text-xs text-muted">{d.note}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
