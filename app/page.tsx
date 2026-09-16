import { Hero } from "@/components/hero";
import { Lift } from "@/components/motion-primitives";
import { SectionHeader } from "@/components/section-header";
import { FocusIndex } from "@/components/focus-index";
import { WorkIndex } from "@/components/work-index";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ActivitiesList } from "@/components/activities-list";
import { PostList } from "@/components/post-list";
import { experience, activities, education } from "@/content/experience";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-8 sm:grid-cols-[3rem_1fr] sm:gap-8">
          <span className="label pt-2">[ 00 ]</span>
          <Lift>
            <p className="display max-w-4xl text-2xl font-medium leading-[1.25] sm:text-4xl">
              {site.intro}
            </p>
          </Lift>
        </div>
      </section>

      {/* Focus areas */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader index="01" title="Focus" />
        <FocusIndex />
      </section>

      {/* Experience */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16">
        <SectionHeader index="02" title="Experience" />
        <ExperienceTimeline items={experience} />
        <div className="grid gap-4 border-b border-border py-8 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-10">
          <span className="label pt-1">{String(experience.length + 1).padStart(2, "0")}</span>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="display text-2xl font-medium sm:text-3xl">
              {education.degree}
              <span className="text-muted"> — {education.school}</span>
            </h3>
            <span className="font-mono text-sm text-muted">
              {education.start} &ndash; {education.end} · {education.detail}
            </span>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          index="03"
          title="Selected work"
          link={{ href: "/projects", label: "All projects" }}
        />
        <WorkIndex projects={projects} />
      </section>

      {/* Activities */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader index="04" title="Beyond work" />
        <ActivitiesList items={activities} />
      </section>

      {/* Writing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader
          index="05"
          title="Writing"
          link={{ href: "/blog", label: "All posts" }}
        />
        <PostList posts={posts} />
      </section>
    </>
  );
}
