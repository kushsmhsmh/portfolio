import type { Metadata } from "next";
import { Lift } from "@/components/motion-primitives";
import { WorkIndex } from "@/components/work-index";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Research and engineering projects.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Lift>
        <p className="label">[ Index ]</p>
        <h1 className="display mt-6 text-5xl font-medium sm:text-7xl">Projects</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Research and engineering work — from flight software to language-model
          internals to computer vision.
        </p>
      </Lift>
      <div className="mt-16">
        <WorkIndex projects={projects} />
      </div>
    </section>
  );
}
