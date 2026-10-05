export type LatestResearchItem = {
  title: string;
  authors: string;
  releaseDate: string;
  publicationStatus: string;
  field: string;
  sourceLabel: string;
  sourceHref: string;
  researchQuestion: string;
  method: string;
  contribution: string;
  caveat: string;
  tags: string[];
};

export type WeeklyReportIssue = {
  issue: string;
  publishedAt: string;
  period: string;
  headline: string;
  editorialNote: string;
  coverageNote: string;
  latestResearch: LatestResearchItem[];
  methodsInIssue: {
    label: string;
    description: string;
  }[];
  watchlist: string[];
};

export const WEEKLY_REPORT: WeeklyReportIssue = {
  issue: "Issue 010",
  publishedAt: "5 October 2026",
  period: "Review window: 2–5 October 2026",
  headline:
    "Three new papers on state authority, cross-border knowledge, and sorting under private information",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "This edition covers the three new CEPR Discussion Papers published after Issue 009, from 2 through 3 October 2026. No qualifying paper dated 4 or 5 October appeared in CEPR's official discussion-paper feed when this issue was prepared. Because Issue 009 was published on 1 October after an expanded review, this edition uses the shorter 2–5 October interval and does not repeat papers dated 1 October or earlier. Titles, author lists, dates, paper numbers, and abstract-level claims were checked against the official CEPR records. For DP22009, the public record does not describe the underlying datasets or identification design; that limitation is stated rather than supplemented with unverified detail.",
  latestResearch: [
    {
      title: "Gang Crackdowns",
      authors: "Nikita Melnikov, Carlos Schmidt-Padilla, and Maria Micaela Sviatschi",
      releaseDate: "3 October 2026",
      publicationStatus: "CEPR Discussion Paper 22010",
      field: "Public enforcement · Political economy",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22010",
      researchQuestion:
        "What happens to economic integration, investment, discrimination, and institutional trust when the state displaces criminal organizations that previously governed territory?",
      method:
        "The authors combine household surveys and administrative records with detailed maps of former gang-controlled areas to study El Salvador's 2022 State of Exception. The official record compares outcomes by prior gang exposure and separately relates reported police abuse to trust in state institutions.",
      contribution:
        "Removing gang control is associated with greater mobility, employment, household income, financial inclusion, business formation, and property investment in more exposed areas. Yet residence-based hiring discrimination persists, and people who witnessed police abuse report substantially lower trust in the police and national government.",
      caveat:
        "The public abstract does not fully describe the identifying assumptions or all administrative datasets. The intervention was nationwide and exposure was not randomly assigned, so concurrent changes and pre-existing neighborhood differences matter for causal interpretation; El Salvador's form of territorial gang governance also limits external validity.",
      tags: ["Law enforcement", "Criminal governance", "Labor markets", "Institutional trust"]
    },
    {
      title: "How Knowledge Crosses Borders: Evidence from Semiconductor Manufacturing",
      authors: "Pinelopi Koujianou Goldberg, Réka Juhász, Giulia Lo Forte, and Jeff Thurk",
      releaseDate: "2 October 2026",
      publicationStatus: "CEPR Discussion Paper 22009",
      field: "Innovation policy · International institutions",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22009",
      researchQuestion:
        "Through which economic relationships does frontier manufacturing knowledge cross national borders, and what does that imply for policies intended to build domestic semiconductor capability?",
      method:
        "The paper studies cross-border learning in semiconductor manufacturing and distinguishes knowledge sharing through global supply chains, engineer mobility within multinational firms, and foreign direct investment from anonymous technological spillovers. The public CEPR record does not identify the underlying datasets or empirical design, so no more specific method claim is made here.",
      contribution:
        "The evidence indicates that international learning is mediated by purposeful market relationships rather than arriving automatically. Domestic upgrading policies may therefore be more effective when firms retain access to global supply chains, multinational personnel networks, and foreign investment that carry frontier knowledge.",
      caveat:
        "Without the full paper's data and design, the relative importance and causal contribution of each channel cannot be assessed from the public record alone. The abstract's policy implication does not by itself resolve trade-offs involving export controls, national security, intellectual-property protection, or strategic dependence.",
      tags: ["Semiconductors", "Knowledge diffusion", "FDI", "Industrial policy"]
    },
    {
      title: "Sorting in a Market for Lemons",
      authors: "Pieter Gautier and Xiaoming Cai",
      releaseDate: "2 October 2026",
      publicationStatus: "CEPR Discussion Paper 22008",
      field: "Information economics · Labor markets",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22008",
      researchQuestion:
        "How does private information about worker productivity alter positive sorting between workers and firms when matching is already subject to search frictions?",
      method:
        "A theoretical search-and-matching model lets firms post wages without observing worker productivity, while more productive workers have better outside options. The model compares the sorting condition under private information with the stricter conditions generated by random or directed search under complete information.",
      contribution:
        "To attract productive workers without also attracting less productive workers, firms pair higher wages with lower job-finding probabilities, which makes vacancies fill faster. This ranking of vacancy-filling rates can restore Becker's supermodularity condition as sufficient for positive sorting, so private information can make sorting easier rather than harder to sustain.",
      caveat:
        "The result is theoretical and depends on the assumed relationship between productivity, outside options, wage posting, and complementarity. It does not establish that actual labor markets display the predicted vacancy-filling pattern or quantify welfare effects of disclosure, screening, or anti-discrimination rules.",
      tags: ["Adverse selection", "Search frictions", "Matching", "Wage posting"]
    }
  ],
  methodsInIssue: [
    {
      label: "Spatial exposure with linked microdata",
      description:
        "Surveys, administrative records, and mapped gang boundaries connect the restoration of state authority to household, firm, property, and trust outcomes."
    },
    {
      label: "Industry evidence on relational learning",
      description:
        "The semiconductor study separates supply-chain, multinational-worker, and investment channels from anonymous knowledge spillovers, while the public record leaves its exact data design unspecified."
    },
    {
      label: "Search-and-matching theory with private information",
      description:
        "A wage-posting model derives how outside options and vacancy-filling rates change the conditions for positive worker–firm sorting."
    }
  ],
  watchlist: [
    "Which institutional safeguards preserve the economic gains from restoring state authority without normalizing abuse, discriminatory screening, or durable distrust.",
    "How export controls, investment screening, intellectual-property rules, and supply-chain policy change the contractual channels through which semiconductor know-how travels.",
    "Whether matched employer–employee and vacancy-duration data support the model's predicted relationship among wage offers, worker quality, job-finding probabilities, and vacancy filling."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "12 October 2026 · 08:00"
};
