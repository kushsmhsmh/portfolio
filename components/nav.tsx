import Link from "next/link";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="display text-lg font-medium tracking-tight">
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
