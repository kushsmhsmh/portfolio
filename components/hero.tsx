"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { site } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="label flex items-center gap-3"
      >
        <span className="h-px w-8 bg-accent" />
        {site.role} — {site.location}
      </motion.div>

      <h1 className="display mt-8 text-[clamp(2.75rem,9vw,7.5rem)] font-medium">
        <span className="reveal-mask">
          <motion.span
            initial={{ y: "108%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="inline-block"
          >
            {site.statementLead}
          </motion.span>
        </span>
        <br />
        <span className="reveal-mask">
          <motion.span
            initial={{ y: "108%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: EASE, delay: 0.22 }}
            className="inline-block italic text-accent"
          >
            {site.statementTail}
          </motion.span>
        </span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
        className="mt-12 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between"
      >
        <p className="max-w-md text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="#work"
            className="link-underline text-sm font-medium text-foreground"
          >
            Selected work
          </Link>
          <Link
            href="/blog"
            className="link-underline text-sm font-medium text-muted"
          >
            Writing
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
