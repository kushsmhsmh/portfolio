"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { domainLabel } from "@/content/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

export function WorkIndex({ projects }: { projects: Project[] }) {
  return (
    <div className="border-t border-border">
      {projects.map((project, i) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-[2rem_1fr] items-baseline gap-x-4 border-b border-border py-8 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-8 sm:py-10"
          >
            <span className="label pt-1">{String(i + 1).padStart(2, "0")}</span>

            <div>
              <h3 className="display text-3xl font-medium transition-colors group-hover:text-accent sm:text-5xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-xl text-muted">{project.blurb}</p>
            </div>

            <div className="col-start-2 mt-4 flex items-center gap-4 sm:col-start-3 sm:mt-0 sm:flex-col sm:items-end sm:gap-2 sm:pt-1">
              <span className="label !text-[0.68rem]">
                {domainLabel[project.domain]}
              </span>
              <span className="text-lg text-muted transition-all group-hover:translate-x-1 group-hover:text-accent">
                &#8594;
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
