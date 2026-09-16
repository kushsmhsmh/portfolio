import { site, links } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label">[ Get in touch ]</p>
            <a
              href={`mailto:${site.email}`}
              className="display link-underline mt-4 inline-block text-3xl font-medium sm:text-5xl"
            >
              Let&apos;s talk.
            </a>
          </div>
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="link-underline text-sm text-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-16 font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
