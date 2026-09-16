export const site = {
  // Set NEXT_PUBLIC_SITE_URL once this is deployed (e.g. in Vercel project settings)
  // so metadata, the sitemap, and the RSS feed point at the real domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  name: "Kushagra Agarwal",
  shortName: "Kushagra",
  role: "Quant Research · Machine Learning",
  // Editorial hero statement, set as two serif lines.
  statementLead: "Research, models,",
  statementTail: "and systems worth building.",
  tagline:
    "Quantitative research, machine learning, and the systems that carry them.",
  intro:
    "I'm a Chemical Engineering student at BITS Pilani who spends most of my time on quantitative research and applied ML — building alpha models, training and dissecting language models, and shipping the occasional 3D reconstruction pipeline. I also run a student AI/ML and XR research lab and a board games club, because building things works better with people around.",
  location: "BITS Pilani, India",
  email: "f20240304@pilani.bits-pilani.ac.in",
  github: "https://github.com/kushsmhsmh",
  linkedin: "https://www.linkedin.com/in/kushagra-agarwal-aug2006",
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
] as const;
