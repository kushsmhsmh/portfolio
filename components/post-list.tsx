import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { PostMeta } from "@/lib/posts";

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-muted">No posts yet &mdash; check back soon.</p>;
  }

  return (
    <div className="flex flex-col">
      {posts.map((post, i) => (
        <Reveal key={post.slug} delay={i * 0.05}>
          <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 border-t border-border py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-1 text-muted">{post.summary}</p>
            </div>
            <p className="shrink-0 font-mono text-sm text-muted">
              {formatDate(post.date)}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
