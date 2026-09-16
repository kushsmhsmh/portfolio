import type { Metadata } from "next";
import Link from "next/link";
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
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Lift>
        <Link
          href="/"
          className="link-underline text-sm text-muted hover:text-foreground"
        >
          &larr; Home
        </Link>
        <p className="label mt-8">[ Writing ]</p>
        <h1 className="display mt-6 text-5xl font-medium sm:text-7xl">Blog</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Notes on research, machine learning, and whatever I&apos;m building.
        </p>
      </Lift>
      <div className="mt-16">
        <PostList posts={posts} />
      </div>
    </section>
  );
}
