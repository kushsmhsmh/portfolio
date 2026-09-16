import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <SectionHeader index="01" title="Writing" />
        <PostList posts={posts} />
      </section>
    </>
  );
}
