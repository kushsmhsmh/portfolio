export type ExperienceEntry = {
  role: string;
  org: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Research Consultant",
    org: "WorldQuant",
    start: "Mar 2025",
    end: "Present",
    bullets: [
      "Ranked in the top 2% of 8,000 consultants (300K+ applicants), earning a Research Consultant offer.",
      "Built 66 production alpha models using factor modeling, time-series analysis, and statistical arbitrage for equity markets.",
      "Reduced alpha-research time by 96% by automating BRAIN API workflows with Python and Ollama.",
      "Achieved a 3.54 Sharpe ratio with 21.42% returns and 2% drawdown through a proprietary alpha for China's equity market.",
    ],
  },
  {
    role: "Intern",
    org: "MD Enterprises Global",
    start: "May 2026",
    end: "Jul 2026",
    bullets: [
      "Established the company's first institutional fundraising pipeline and led a team targeting INR 10 lakh in funding.",
      "Wrote zero-cost PPP rollout go-to-market reports for securing a contract with the Ministry of Road Transport and Highways.",
      "Developed ML-based face and voice authentication for 1.1 million NSDL Jiffy users, replacing Aadhaar OTP verification.",
    ],
  },
  {
    role: "President",
    org: "Kalipatnapu AR-VR Lab, BITS Pilani",
    start: "May 2026",
    end: "Present",
    bullets: [
      "Founded the lab's AI/ML and XR research vertical, defining its technical roadmap and scaling the team from the ground up.",
      "Led computer-vision and 3D Gaussian Splatting research, directing project scope and mentoring associates.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "International Programmes & Collaboration Division, BITS Pilani",
    start: "Jan 2026",
    end: "Present",
    bullets: [
      "Organized a DAAD information session with Indian diplomats from Germany.",
      "Managed applications and documentation for international scholarships for five students pursuing overseas programmes.",
    ],
  },
  {
    role: "Founder & President",
    org: "Board Games Club, BITS Pilani",
    start: "Jul 2025",
    end: "Present",
    bullets: [
      "Organized a two-day, three-stage tournament with 50+ registrations and INR 55K+ in cash sponsorship.",
      "Hosted 10+ open sessions reaching 500+ participants and managed INR 30K+ in inventory.",
    ],
  },
];

export type ActivityEntry = {
  title: string;
  org: string;
  bullets: string[];
};

export const activities: ActivityEntry[] = [
  {
    title: "Student Team",
    org: "Pilani Innovation and Entrepreneurship Development Society",
    bullets: [
      "Secured 50+ partnerships and INR 30 lakh in cash sponsorships for Ignite '25, a six-day accelerator programme.",
      "Led 30 volunteers to organize Solve for Pilani, generating INR 70K for five local businesses and attracting 3,000+ visitors.",
      "Built a full-stack event platform used by 600+ students, sustaining ~1,000 daily visits through gamification.",
    ],
  },
  {
    title: "Debating Society",
    org: "BITS Pilani",
    bullets: [
      "Best Speaker and fourth-best team at Gambit, India's largest APD Freshers' Tournament, hosted by SRCC.",
      "Novice Grand Finalist and fourth-best team at IIT Roorkee's annual BPD Tournament.",
    ],
  },
  {
    title: "Tutor & Research Mentor",
    org: "RISE",
    bullets: [
      "Improved a student's TMUA score from 2/9 to 7/9, supporting their admission to Imperial College London.",
      "Designed 10+ full-length TMUA mock exams with typeset LaTeX material and targeted feedback.",
      "Mentored a student across 30+ research sessions to a publication in the International Journal for Multidisciplinary Research.",
    ],
  },
];

export const education = {
  school: "Birla Institute of Technology and Science, Pilani",
  degree: "B.E. Chemical Engineering",
  start: "Aug 2024",
  end: "Present",
  detail: "CGPA 7.04",
};
