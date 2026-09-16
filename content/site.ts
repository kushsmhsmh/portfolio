const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  // Set NEXT_PUBLIC_SITE_URL at build/deploy time so metadata, the sitemap,
  // and the RSS feed point at the real domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  basePath,
  name: "Kushagra Agarwal",
  shortName: "Kushagra",
  email: "f20240304@pilani.bits-pilani.ac.in",
  github: "https://github.com/kushsmhsmh",
  linkedin: "https://www.linkedin.com/in/kushagra-agarwal-aug2006",
} as const;

// Links shown in the hero and footer.
export const links = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: "CV", href: `${basePath}/cv.pdf`, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
] as const;

export const nav = [{ label: "Writing", href: "/blog" }] as const;
