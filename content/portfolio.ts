export type DomainKey = "quant" | "ml" | "systems" | "people";

export type Domain = {
  key: DomainKey;
  label: string;
  weight: number; // "allocation" — sums to 100 across domains
  note: string;
};

// The site framed as a diversified book: uncorrelated bets across domains.
export const domains: Domain[] = [
  { key: "quant", label: "Quant Research", weight: 30, note: "Alpha modeling & statistical arbitrage" },
  { key: "ml", label: "Machine Learning", weight: 28, note: "Transformers, vision, applied ML" },
  { key: "systems", label: "Systems & Software", weight: 22, note: "Flight software, event-driven design" },
  { key: "people", label: "Leadership & People", weight: 20, note: "Labs, teams, mentoring, debate" },
];

export const domainColor: Record<DomainKey, string> = {
  quant: "var(--quant)",
  ml: "var(--ml)",
  systems: "var(--systems)",
  people: "var(--people)",
};

export type Stat = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  domain: DomainKey;
};

export const stats: Stat[] = [
  { value: 2, prefix: "Top ", suffix: "%", label: "of 8,000 WorldQuant consultants", domain: "quant" },
  { value: 66, label: "production alpha models shipped", domain: "quant" },
  { value: 3.54, decimals: 2, label: "Sharpe ratio on a China-equity alpha", domain: "quant" },
  { value: 1.1, decimals: 1, suffix: "M", label: "users on ML face & voice auth", domain: "ml" },
];

// Rotating "ticker" of positions held across the book.
export const ticker: string[] = [
  "Statistical Arbitrage",
  "Decoder-only Transformers",
  "Actor-based Flight Software",
  "3D Reconstruction",
  "Factor Modeling",
  "Gaussian Splatting",
  "Ablation Studies",
  "Competitive Debate",
  "Board Games",
  "Fundraising",
];
