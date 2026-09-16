import type { Metadata } from "next";
import { Lift } from "@/components/motion-primitives";
import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on research, ML systems, and things worth building.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Lift>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-muted">
          Notes on research, ML systems, and whatever I&apos;m building.
        </p>
      </Lift>
      <div className="mt-12">
        <PostList posts={posts} />
      </div>
    </section>
  );
}
