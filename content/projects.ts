import type { DomainKey } from "./portfolio";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string[];
  href?: string;
  tags: string[];
  domain: DomainKey;
};

export const projects: Project[] = [
  {
    slug: "stratos",
    title: "STRATOS",
    blurb: "Actor-based flight software with deterministic, event-driven execution.",
    description: [
      "Architected an actor-based flight-software framework that decouples control logic from real-time sensor pipelines.",
      "Designed an event-driven message-passing system supporting 1B+ states with deterministic execution across flight modes.",
      "Implemented an inheritance-based subscription model enabling 10+ reader modules to dynamically subscribe to sensor streams.",
    ],
    href: "https://github.com/team-anant/stratos",
    tags: ["Systems", "Actor model", "Flight software"],
    domain: "systems",
  },
  {
    slug: "transformer-lm-lab",
    title: "Transformer Language Model Ablation Lab",
    blurb: "A controlled single-axis ablation framework for decoder-only Transformer LMs.",
    description: [
      "Built a decoder-only Transformer LM (6 layers, 512d, 8 heads) with a controlled single-axis ablation framework on WikiText-2.",
      "Engineered a registry to swap attention, positional-encoding, and architecture variants, isolating each design change.",
      "Benchmarked BPE-level perplexity, loss, throughput, and memory via config-hashed, append-only experiment records.",
    ],
    href: "https://github.com/kushsmhsmh/transformer-lm-lab",
    tags: ["ML research", "Transformers", "PyTorch"],
    domain: "ml",
  },
  {
    slug: "single-image-3d-reconstruction",
    title: "Single-Image 3D Reconstruction",
    blurb: "Reconstructing 3D meshes from a single RGB image, deployed as a web app.",
    description: [
      "Built a pipeline that reconstructs 3D meshes from a single RGB image using GLPN monocular depth estimation.",
      "Converted depth maps to RGBD point clouds via Open3D camera projection, with outlier removal and normal estimation.",
      "Generated surface meshes through Poisson reconstruction and deployed the pipeline behind an interactive web app.",
    ],
    href: "https://github.com/kushsmhsmh/Neurangelo",
    tags: ["Computer vision", "3D", "Open3D"],
    domain: "ml",
  },
];
