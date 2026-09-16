import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lift } from "@/components/motion-primitives";
import { projects } from "@/content/projects";
import { domainColor } from "@/content/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.blurb };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const color = domainColor[project.domain];

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Lift>
        <Link href="/projects" className="text-sm text-muted hover:text-accent">
          &larr; All projects
        </Link>
        <div className="mt-6 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ background: color }} />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {project.domain}
          </span>
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <ul className="mt-8 space-y-4 text-lg leading-relaxed text-foreground/85">
          {project.description.map((line) => (
            <li key={line} className="flex gap-3">
              <span
                className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: color }}
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
            style={{ background: color }}
          >
            View on GitHub &rarr;
          </a>
        )}
      </Lift>
    </section>
  );
}
