import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-28 sm:py-40">
      <p className="label">[ 404 ]</p>
      <h1 className="display mt-6 text-6xl font-medium sm:text-8xl">
        Nothing <span className="italic text-accent">here.</span>
      </h1>
      <p className="mt-6 text-lg text-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="link-underline mt-10 text-sm font-medium text-foreground"
      >
        &larr; Back home
      </Link>
    </section>
  );
}
