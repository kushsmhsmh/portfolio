import Link from "next/link";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ActivitiesList } from "@/components/activities-list";
import { PostList } from "@/components/post-list";
import { site } from "@/content/site";
import { experience, activities, education } from "@/content/experience";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
            {site.intro}
          </p>
        </Reveal>
      </section>

      <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience
          </h2>
        </Reveal>
        <ExperienceTimeline items={experience} />
        <Reveal>
          <div className="flex flex-col gap-1 border-t border-border py-8 sm:flex-row sm:items-baseline sm:gap-8">
            <p className="w-[160px] shrink-0 font-mono text-sm text-muted">
              {education.start} &ndash; {education.end}
            </p>
            <p className="text-foreground/85">
              <span className="font-semibold">{education.degree}</span>{" "}
              &middot; {education.school} ({education.detail})
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Activities &amp; leadership
          </h2>
        </Reveal>
        <div className="mt-8">
          <ActivitiesList items={activities} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects
            </h2>
            <Link href="/projects" className="text-sm text-muted hover:text-accent">
              View all
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Writing
            </h2>
            <Link href="/blog" className="text-sm text-muted hover:text-accent">
              All posts
            </Link>
          </div>
        </Reveal>
        <div className="mt-4">
          <PostList posts={posts} />
        </div>
      </section>
    </>
  );
}
