"use client";

import { motion } from "framer-motion";

// Four drifting color fields — one per domain. Diversity of light,
// literally. Low opacity so it reads as atmosphere, not decoration.
const blobs = [
  { color: "var(--quant)", x: "8%", y: "12%", size: 460, dur: 22 },
  { color: "var(--ml)", x: "72%", y: "4%", size: 520, dur: 27 },
  { color: "var(--systems)", x: "58%", y: "48%", size: 420, dur: 24 },
  { color: "var(--people)", x: "20%", y: "44%", size: 480, dur: 30 },
];

export function AmbientField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute rounded-full opacity-[0.16] blur-[80px] dark:opacity-[0.22]"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            background: b.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -24, 18, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
