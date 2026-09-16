import Link from "next/link";
import { Hero } from "@/components/hero";
import { Lift, MaskReveal } from "@/components/motion-primitives";
import { StatStrip } from "@/components/stat-strip";
import { Ticker } from "@/components/ticker";
import { AllocationBar } from "@/components/allocation-bar";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ActivitiesList } from "@/components/activities-list";
import { PostList } from "@/components/post-list";
import { experience, activities, education } from "@/content/experience";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/posts";

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
      {children}
    </span>
  );
}

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      <Ticker />

      {/* Track record — the numbers */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Lift className="mb-8">
          <SectionLabel>Track record</SectionLabel>
        </Lift>
        <StatStrip />
      </section>

      {/* The thesis, visualized */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Lift className="mb-4">
              <SectionLabel>The book</SectionLabel>
            </Lift>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              <MaskReveal>Uncorrelated bets,</MaskReveal>
              <br />
              <MaskReveal delay={0.08}>one hedged career.</MaskReveal>
            </h2>
            <Lift delay={0.15}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                No single position dominates. Quant research pays for the risk
                I take on research bets; people work compounds all of it. Hover
                the bar to inspect each holding.
              </p>
            </Lift>
          </div>
          <Lift delay={0.1}>
            <div className="rounded-3xl border border-border bg-surface/50 p-6 backdrop-blur sm:p-8">
              <AllocationBar />
            </div>
          </Lift>
        </div>
      </section>

      {/* Intro prose */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Lift className="mb-2">
          <SectionLabel>Prospectus</SectionLabel>
        </Lift>
        <Lift>
          <p className="max-w-3xl text-xl leading-relaxed text-foreground/85 sm:text-2xl">
            {site.intro}
          </p>
        </Lift>
      </section>

      {/* Experience */}
      <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
        <Lift className="mb-2">
          <SectionLabel>Positions held</SectionLabel>
        </Lift>
        <Lift>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience
          </h2>
        </Lift>
        <ExperienceTimeline items={experience} />
        <Lift>
          <div className="flex flex-col gap-1 border-t border-border py-8 sm:flex-row sm:items-baseline sm:gap-8">
            <p className="w-[170px] shrink-0 font-mono text-sm text-muted">
              {education.start} &ndash; {education.end}
            </p>
            <p className="text-foreground/85">
              <span className="font-semibold">{education.degree}</span> &middot;{" "}
              {education.school} ({education.detail})
            </p>
          </div>
        </Lift>
      </section>

      {/* Activities */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Lift className="mb-2">
          <SectionLabel>Off-book</SectionLabel>
        </Lift>
        <Lift>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Activities &amp; leadership
          </h2>
        </Lift>
        <div className="mt-8">
          <ActivitiesList items={activities} />
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Lift className="mb-2">
          <SectionLabel>Open positions</SectionLabel>
        </Lift>
        <Lift>
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects
            </h2>
            <Link href="/projects" className="text-sm text-muted hover:text-accent">
              View all
            </Link>
          </div>
        </Lift>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Lift className="mb-2">
          <SectionLabel>Research notes</SectionLabel>
        </Lift>
        <Lift>
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Writing
            </h2>
            <Link href="/blog" className="text-sm text-muted hover:text-accent">
              All posts
            </Link>
          </div>
        </Lift>
        <div className="mt-4">
          <PostList posts={posts} />
        </div>
      </section>
    </>
  );
}
