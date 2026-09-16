"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import type { MouseEvent } from "react";
import type { Project } from "@/content/projects";
import { domainColor } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const color = domainColor[project.domain];

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(sry, [-0.5, 0.5], ["-6deg", "6deg"]);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
  }
  function reset() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
      style={{ perspective: 900 }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur transition-colors"
        >
          {/* domain accent glow */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
            style={{ background: color }}
            aria-hidden
          />
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: color }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {project.domain}
            </span>
          </div>
          <h3 className="mt-4 text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-3 text-muted">{project.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1"
            style={{ color }}
          >
            Open position &rarr;
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
