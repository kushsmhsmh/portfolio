export const site = {
  // Set NEXT_PUBLIC_SITE_URL once this is deployed (e.g. in Vercel project settings)
  // so metadata, the sitemap, and the RSS feed point at the real domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  name: "Kushagra Agarwal",
  shortName: "Kushagra",
  role: "Quant researcher & ML engineer",
  tagline: "A diversified portfolio of uncorrelated bets.",
  thesis:
    "Diversification isn't only a trading strategy — it's how I've built a career. I spread my time across quant research, machine learning, systems, and people, treating each as an uncorrelated position in one hedged book.",
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
