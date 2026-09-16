"use client";

import { motion } from "framer-motion";
import { AmbientField } from "@/components/ambient-field";
import { Magnetic, staggerContainer, riseItem } from "@/components/motion-primitives";
import { site } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const words = site.name.split(" ");

  return (
    <section className="relative isolate overflow-hidden">
      <AmbientField />
      <div className="grid-texture absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {site.role} &middot; {site.location}
          </span>
        </motion.div>

        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl"
        >
          {words.map((w, i) => (
            <span key={i} className="reveal-mask mr-4">
              <motion.span variants={riseItem} className="inline-block">
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          className="mt-8 max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {site.thesis}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Magnetic strength={0.4}>
            <a
              href="#work"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
            >
              See the book
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a
              href="/blog"
              className="inline-flex rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              Read the blog
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
