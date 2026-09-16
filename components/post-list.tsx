import Link from "next/link";
import { Lift } from "@/components/motion-primitives";
import type { PostMeta } from "@/lib/posts";

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-muted">No posts yet — check back soon.</p>;
  }

  return (
    <div className="border-t border-border">
      {posts.map((post, i) => (
        <Lift key={post.slug} delay={i * 0.05}>
          <Link
            href={`/blog/${post.slug}`}
            className="group grid gap-2 border-b border-border py-7 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
          >
            <div>
              <h3 className="display text-2xl font-medium transition-colors group-hover:text-accent sm:text-3xl">
                {post.title}
              </h3>
              <p className="mt-2 max-w-xl text-muted">{post.summary}</p>
            </div>
            <p className="font-mono text-sm text-muted">{formatDate(post.date)}</p>
          </Link>
        </Lift>
      ))}
    </div>
  );
}
