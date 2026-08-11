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
  issue: "Issue 003",
  publishedAt: "11 August 2026",
  period: "Expanded review window: 29 July–10 August 2026",
  headline: "Six new papers on political selection, union support, European firm scale, AI liability, housing taxation, and empirical coding",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "Because the scheduled 3 August issue was not published, this edition explicitly expands the review window beyond seven days to cover 29 July–10 August 2026. The six papers below appear in NBER's 10 August 2026 weekly release; their official pages and citation metadata identify the papers, authors, working-paper numbers, DOIs, and publication date.",
  latestResearch: [
    {
      title: "Fortunate Sons: Elite Political Selection in American History",
      authors: "James J. Feigenbaum, Andrew B. Hall, Daniel M. Thompson, and Jesse Yoder",
      releaseDate: "10 August 2026",
      publicationStatus: "NBER Working Paper 35569 · DOI 10.3386/w35569",
      field: "Political economy · Institutional selection",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35569",
      researchQuestion:
        "How economically selected have members of the U.S. Congress been across historical cohorts, and did major Progressive-Era electoral reforms change who reached office?",
      method:
        "The authors link members of Congress born from 1830 to 1950, their parents, and their brothers to complete-count censuses, then study women's suffrage, the secret ballot, direct primaries, and direct senatorial elections in triple-difference designs.",
      contribution:
        "Future legislators consistently came from unusually advantaged families, and roughly half of their adult socioeconomic premium was shared with brothers. The four reforms produced no detectable shift in the socioeconomic profile of congressional entrants.",
      caveat:
        "Census linkages and historical occupation or wealth measures do not capture every dimension of elite selection. A null estimate for the four reforms does not establish that electoral institutions never affect candidate entry or representation.",
      tags: ["Political selection", "Historical census", "Triple difference", "Institutions"]
    },
    {
      title: "Winning is Contagious: Social Learning and the Dynamics of Union Support",
      authors: "Ellora Derenoncourt, Arindrajit Dube, Suresh Naidu, Heather Sarsons, and Niharika Singh",
      releaseDate: "10 August 2026",
      publicationStatus: "NBER Working Paper 35571 · DOI 10.3386/w35571",
      field: "Labor law · Collective action",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35571",
      researchQuestion:
        "Can information about nearby union victories generate further support for unionization through social learning?",
      method:
        "Union-election records from 1961–2025 are combined with close-election comparisons and a randomized information experiment involving 9,000 low-wage workers.",
      contribution:
        "Close union wins predict subsequent wins within the same state-industry, while experimental information about recent victories raises union support and perceived coworker support, especially where baseline information is weak.",
      caveat:
        "The experiment measures support and beliefs rather than completed organizing drives. Spillovers around close elections require the identifying assumptions of the underlying design and may vary across legal and industrial-relations regimes.",
      tags: ["Unions", "Social learning", "Close elections", "Information experiment"]
    },
    {
      title: "The Value Gap: Europe Cannot Scale",
      authors: "Bo Becker, Efraim Benmelech, and Joao Monteiro",
      releaseDate: "10 August 2026",
      publicationStatus: "NBER Working Paper 35577 · DOI 10.3386/w35577",
      field: "Corporate finance · European capital markets",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35577",
      researchQuestion:
        "Why did the aggregate market-value gap between U.S.-listed and European-listed firms widen so sharply after 2008?",
      method:
        "The paper compares listed-firm values from 2008–2023 across countries and sectors, then relates the gap to research intensity, returns to scale, home-market size, cost of capital, and access to equity, debt, and venture financing.",
      contribution:
        "The gap is broad-based and reflects firm value rather than listing counts. It is larger where scale and research intensity matter, while smaller European firms face especially large financing disadvantages and remain tied to home-country market size.",
      caveat:
        "The evidence identifies a collection of financial and product-market frictions but does not by itself isolate one causal legal or regulatory mechanism. Market-value comparisons are also sensitive to sector composition and valuation conditions.",
      tags: ["Firm scale", "Capital markets", "Cost of capital", "Europe"]
    },
    {
      title: "Staged Access and Liability for Dual-Use Artificial Intelligence",
      authors: "Joshua S. Gans",
      releaseDate: "10 August 2026",
      publicationStatus: "NBER Working Paper 35586 · DOI 10.3386/w35586",
      field: "AI governance · Liability",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35586",
      researchQuestion:
        "How should regulators combine temporary exclusive access to dual-use AI models, developer liability, and release-timing mandates?",
      method:
        "A formal model places a defender and an adversary in parallel searches for software flaws and compares post-release liability with staged access before public release.",
      contribution:
        "Staged access and liability are complements because exclusivity removes the adversary's strategic response to stronger defensive search. Efficient liability may remain below full harm internalization, and a separate timing mandate may still be needed.",
      caveat:
        "This is a theoretical mechanism result. Its regulatory implications depend on how well actual flaw discovery, adversary response, developer effort, and harm can be observed and mapped to the model.",
      tags: ["Dual-use AI", "Developer liability", "Staged release", "Formal model"]
    },
    {
      title: "Property Taxes and Housing Allocation Under Financial Constraints",
      authors: "Joshua Coven, Sebastian Golder, Arpit Gupta, and Abdoulaye Ndiaye",
      releaseDate: "10 August 2026",
      publicationStatus: "NBER Working Paper 35587 · DOI 10.3386/w35587",
      field: "Property tax · Housing law and finance",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35587",
      researchQuestion:
        "How do recurrent property taxes and stepped-up tax basis affect intergenerational housing allocation when younger buyers face down-payment constraints?",
      method:
        "An overlapping-generations model separates the price-capitalization and owner holding-cost channels and evaluates counterfactual California property-tax and basis rules.",
      contribution:
        "Higher recurrent property taxes can lower prices and required down payments for constrained young buyers while raising holding costs for older owners; removing step-up basis also reduces modeled elderly homeownership.",
      caveat:
        "The reported reallocations are model-based counterfactuals, not direct estimates of a completed reform. Welfare assessment must also account for revenue use, liquidity burdens, mobility, and distribution within age groups.",
      tags: ["Property tax", "Housing lock-in", "Down payments", "Overlapping generations"]
    },
    {
      title: "AI Agents and Prompt Engineering in Econometric Coding",
      authors: "Sebastian Galiani, Federico Ariel López, and Raul A. Sosa",
      releaseDate: "10 August 2026",
      publicationStatus: "NBER Working Paper 35588 · DOI 10.3386/w35588",
      field: "Research methods · Reproducible econometrics",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35588",
      researchQuestion:
        "How do statistical software, prompting strategy, and agentic execution affect the reliability and cost of AI-generated econometric code?",
      method:
        "A benchmark of applied econometric and statistical tasks compares Stata, R, and Python; zero-shot and few-shot prompts; and a single-script chatbot with an agent that executes and revises code.",
      contribution:
        "For the tested systems, moving from chatbot to constrained agent raises task success from 74% to 96% at modest additional run cost, while few-shot prompting helps chatbots more than agents and software gaps narrow under agentic execution.",
      caveat:
        "Results are benchmark- and model-version-specific and do not establish validity on confidential, messy, or substantively misspecified research projects. Successful execution is not a substitute for design review and result verification.",
      tags: ["Econometric coding", "AI agents", "Benchmarking", "Reproducibility"]
    }
  ],
  methodsInIssue: [
    {
      label: "Linked historical census analysis",
      description: "Used with family linkages and triple differences to study long-run elite political selection and institutional reform."
    },
    {
      label: "Close-election design plus information experiment",
      description: "Used to connect union victories with later organizing outcomes and separately test social-learning mechanisms."
    },
    {
      label: "Cross-market firm comparison",
      description: "Used to map the U.S.–Europe valuation gap across sectors, firm sizes, home markets, and financing conditions."
    },
    {
      label: "Formal regulatory and overlapping-generations models",
      description: "Used to study AI release rules and the intergenerational housing effects of property-tax design."
    },
    {
      label: "Executable econometric benchmark",
      description: "Used to compare software, prompting, and agentic code revision on a common set of applied statistical tasks."
    }
  ],
  watchlist: [
    "Which candidate-selection institutions, beyond the four Progressive-Era reforms studied, measurably broaden access to legislative office.",
    "Whether information about union victories changes completed organizing, employer response, bargaining coverage, or durable worker beliefs.",
    "Which specific legal, capital-market, and product-market frictions causally explain Europe's firm-scale gap.",
    "How observable proxies for defensive effort, adversary response, and release risk could support administrable AI liability and timing rules.",
    "Whether property-tax reform can reduce housing lock-in without creating severe liquidity burdens for cash-poor owners.",
    "How AI coding benchmarks perform when research designs are ambiguous, data are messy, and replication requires substantive judgment."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "17 August 2026 · 08:00"
};
