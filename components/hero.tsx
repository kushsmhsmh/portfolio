"use client";

import { motion } from "framer-motion";
import { site, links } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const words = site.name.split(" ");

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="label flex items-center gap-3"
      >
        <span className="h-px w-8 bg-accent" />
        Portfolio &amp; writing
      </motion.p>

      <h1 className="display mt-8 text-[clamp(3rem,11vw,9rem)] font-medium">
        {words.map((word, i) => (
          <span key={word + i} className="reveal-mask mr-[0.25em] last:mr-0">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.12 }}
              className={i === words.length - 1 ? "inline-block italic text-accent" : "inline-block"}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
        className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="link-underline text-lg font-medium text-foreground"
          >
            {link.label}
            <span className="ml-1 text-muted">{link.external ? "↗" : "→"}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
