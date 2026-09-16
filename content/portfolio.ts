export type DomainKey = "quant" | "ml" | "systems" | "people";

// Domains are editorial category labels now — text, not colour.
export const domainLabel: Record<DomainKey, string> = {
  quant: "Quantitative Research",
  ml: "Machine Learning",
  systems: "Systems & Software",
  people: "Leadership",
};

// A short, honest list of what I work on — shown as an editorial index.
export const focus: { n: string; title: string; note: string }[] = [
  { n: "01", title: "Quantitative Research", note: "Alpha modeling, factor research, and statistical arbitrage." },
  { n: "02", title: "Machine Learning", note: "Transformers, computer vision, and applied ML systems." },
  { n: "03", title: "Systems & Software", note: "Event-driven architecture and real-time software." },
  { n: "04", title: "Leadership", note: "Founding labs and teams; mentoring; competitive debate." },
];
