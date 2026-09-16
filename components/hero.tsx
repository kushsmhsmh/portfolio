"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const words = site.name.split(" ");

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p
          variants={word}
          className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent"
        >
          {site.location}
        </motion.p>
        <h1 className="flex flex-wrap text-5xl font-semibold tracking-tight sm:text-7xl">
          {words.map((w, i) => (
            <motion.span key={w + i} variants={word} className="mr-4">
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.p
          variants={word}
          className="mt-6 max-w-2xl text-xl text-muted sm:text-2xl"
        >
          {site.tagline}
        </motion.p>
        <motion.div variants={word} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-105"
          >
            See my work
          </a>
          <a
            href="/blog"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Read the blog
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
