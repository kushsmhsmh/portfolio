import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lift } from "@/components/motion-primitives";
import { projects } from "@/content/projects";
import { domainLabel } from "@/content/portfolio";

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

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Lift>
        <Link
          href="/projects"
          className="link-underline text-sm text-muted hover:text-foreground"
        >
          &larr; All projects
        </Link>
        <p className="label mt-8">[ {domainLabel[project.domain]} ]</p>
        <h1 className="display mt-4 text-5xl font-medium sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted">{project.blurb}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="mt-12 space-y-5 border-t border-border pt-8 text-lg leading-relaxed text-foreground/85">
          {project.description.map((line) => (
            <li key={line} className="flex gap-4">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-12 inline-block text-sm font-medium text-accent"
          >
            View on GitHub &nbsp;&#8594;
          </a>
        )}
      </Lift>
    </section>
  );
}
