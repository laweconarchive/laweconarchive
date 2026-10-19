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
  issue: "Issue 012",
  publishedAt: "19 October 2026",
  period: "Review window: 13–19 October 2026",
  headline:
    "New research on state control, common ownership, IPOs, road pricing, platform work, and police discretion",
  editorialNote:
    "Research Weekly tracks newly released law-and-economics scholarship. Each entry identifies the paper's status and source date, then separates its question, method, contribution, and interpretation boundary.",
  coverageNote:
    "This issue selects six papers from three independent research series: two CEPR Discussion Papers, two NBER Working Papers, and two IZA Discussion Papers. The review began on 13 October, immediately after Issue 011. CEPR supplies exact publication dates of 17 October. NBER and IZA identify the selected papers as October 2026 releases but do not state an exact day on their public records; those entries therefore report the month without inventing a date. The papers appeared in the institutions' current listings during this review. The candidate search also checked ECGI and CESifo working-paper listings, alongside journal and repository searches, but found no additional record that combined this window's timing, direct law-and-economics relevance, and a sufficiently verifiable public abstract. Titles, author lists, paper numbers, dates as supplied, and abstract-level claims were checked against the institutional paper pages. No source supplies more than one-third of the issue.",
  latestResearch: [
    {
      title: "Who Controls the Defence Industry?",
      authors: "Marco Becht, Juan Mejino-López, and Guntram B. Wolff",
      releaseDate: "17 October 2026",
      publicationStatus: "CEPR Discussion Paper 22051",
      field: "Corporate governance · State control",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22051",
      researchQuestion:
        "How do states exercise control over strategically important defence firms when equity ownership and formal governance authority do not coincide?",
      method:
        "The authors use large-language-model extraction from annual reports, supplemented by hand coding, to build a leximetric dataset for 107 large defence companies in 24 countries from the SIPRI Top 100 for 2022–2024. Their State Influence Index combines voting power, voting enhancements, board appointment rights, and veto rights.",
      contribution:
        "The paper shows that ownership alone does not measure state control: minority stakes can be amplified by legal devices, while states without equity can rely on security agreements, revenue dependence, or personnel ties. The cross-country patterns are consistent with transaction-cost and property-rights reasoning about asset specificity and bilateral dependence.",
      caveat:
        "The index measures documented formal mechanisms and selected institutional proxies, not every channel of informal influence. LLM extraction and hand coding require validation, and the descriptive cross-country patterns do not by themselves identify the causal effects of state control.",
      tags: ["State ownership", "Corporate control", "Transaction costs", "Defence industry"]
    },
    {
      title: "Measuring Common Ownership: An Axiomatic Approach",
      authors: "Thomas Gehrig and Klaus Ritzberger",
      releaseDate: "17 October 2026",
      publicationStatus: "CEPR Discussion Paper 22057",
      field: "Common ownership · Competition measurement",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22057",
      researchQuestion:
        "What properties should a measure of common ownership satisfy, and can those properties identify a unique measure?",
      method:
        "The paper develops an axiomatic framework based on ownership distributions. It studies symmetry, normalization, and orthogonality, then adds a structural axiom to characterize admissible measures.",
      contribution:
        "Together with normalization, the structural axiom singles out cosine similarity as the unique measure satisfying all stated axioms. The framework also clarifies how widely used empirical common-ownership measures relate to the proposed desiderata.",
      caveat:
        "Axiomatic uniqueness is conditional on accepting the selected axioms. The paper does not establish that cosine similarity is the best predictor of conduct, competition, or welfare in every ownership setting.",
      tags: ["Common ownership", "Competition", "Measurement", "Axioms"]
    },
    {
      title: "Access to Capital and the IPO Decision: An Analysis of US Private Firms",
      authors: "Andres Almazan, Nathan Swem, Sheridan Titman, and Gregory Weitzner",
      releaseDate: "October 2026 (exact day not stated by NBER)",
      publicationStatus: "NBER Working Paper 35888 · DOI 10.3386/w35888",
      field: "Corporate finance · Securities markets",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35888",
      researchQuestion:
        "Do firms go public principally to obtain equity, or does listing improve access to debt and external finance more broadly?",
      method:
        "The authors analyze detailed financial data on U.S. private firms, relating external capital needs to IPO decisions and tracking investment, debt issuance, lender pools, borrowing terms, and banks' private risk assessments after listing. The public abstract does not describe the full sample construction or identification design.",
      contribution:
        "Firms with greater external capital needs are more likely to go public. After an IPO, investment and debt issuance increase without a comparable change in leverage ratios; lender pools expand, terms improve, and disagreement in banks' private risk assessments narrows. The authors interpret this as evidence that reduced information asymmetry broadens access to capital beyond the equity issue itself.",
      caveat:
        "The public record does not show how the analysis separates the effect of listing from selection into IPOs or concurrent firm growth. The findings describe U.S. private firms represented in the underlying data and should not be read as a universal causal effect of going public.",
      tags: ["IPO", "Capital access", "Debt markets", "Information asymmetry"]
    },
    {
      title: "Road Pricing under Heterogeneity",
      authors: "Itai Ater, Brad Ross, Adi Shany, and Shoshana Vasserman",
      releaseDate: "October 2026 (exact day not stated by NBER)",
      publicationStatus: "NBER Working Paper 35887 · DOI 10.3386/w35887",
      field: "Public economics · Congestion pricing",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35887",
      researchQuestion:
        "How do differences in drivers' preferences and exposure to congested roads affect the efficiency and distribution of congestion pricing?",
      method:
        "The study combines a two-year field experiment tracking nearly 10,000 drivers under usage-based pricing incentives with a model of time-varying traffic equilibrium on a granular road network. It evaluates welfare and compensation under alternative pricing and revenue-recycling arrangements.",
      contribution:
        "The model estimates that the experiment's price schedule could generate welfare gains comparable to adding a lane to every highway and enough revenue to compensate losers. Heterogeneity matters: optimal prices can improve net welfare even when only a small share of toll revenue is counted.",
      caveat:
        "The welfare magnitudes are model-based and depend on the road network, behavioral responses, equilibrium assumptions, and feasible revenue recycling. Compensation being available in aggregate does not mean that an implemented policy would actually identify and compensate every loser.",
      tags: ["Congestion pricing", "Heterogeneity", "Field experiment", "Revenue recycling"]
    },
    {
      title: "Deliver Us from Crime? Gig Jobs, Labor-Market Opportunities, and Offending",
      authors: "Hugo Allouard, Grazia Cecere, Jose De Sousa, Olivier Marie, and Ines Picard",
      releaseDate: "October 2026 (exact day not stated by IZA)",
      publicationStatus: "IZA Discussion Paper 19006",
      field: "Economics of crime · Platform work",
      sourceLabel: "IZA",
      sourceHref:
        "https://www.iza.org/publications/dp/19006/deliver-us-from-crime-gig-jobs-labor-market-opportunities-and-offending",
      researchQuestion:
        "Does access to low-barrier platform work change legal employment opportunities and criminal offending?",
      method:
        "The authors exploit the staggered rollout of food-delivery platforms across France, combining labor-market outcomes with national criminal records. They also compare offending around the legal minimum age of 18 for delivery work and examine reoffending by whether prior records permit platform work.",
      contribution:
        "Platform entry increases delivery-worker registrations, reduces unemployment among men and inactivity among male migrants, and is associated with lower vandalism, petty theft, and drug offending. Crime falls just above, but not just below, the eligibility age; reoffending also declines among people whose records allow platform work.",
      caveat:
        "The staggered-entry design depends on rollout timing being conditionally unrelated to other local changes. Age and record-based contrasts strengthen the mechanism evidence but do not eliminate every source of selection, and the results may not generalize beyond French platform rules and labor markets.",
      tags: ["Crime", "Gig work", "Platform entry", "Labor-market opportunity"]
    },
    {
      title: "Debiasing Law Enforcement Officers: Evidence from an Expressive Arts Intervention in India",
      authors: "Sofia Amaral, Girija Borker, Nishith Prakash, and Maria Micaela Sviatschi",
      releaseDate: "October 2026 (exact day not stated by IZA)",
      publicationStatus: "IZA Discussion Paper 19005",
      field: "Law enforcement · Bureaucratic discretion",
      sourceLabel: "IZA",
      sourceHref:
        "https://www.iza.org/publications/dp/19005/debiasing-law-enforcement-officers-evidence-from-an-expressive-arts-intervention-in-india",
      researchQuestion:
        "Can a short expressive-arts intervention change incumbent police officers' attitudes and discretionary responses to gender-based violence?",
      method:
        "In partnership with the Bihar Police, the researchers run a cluster-randomized trial across 417 police stations and about 2,500 senior officers. They measure attitudes and legal knowledge, conduct victim audits roughly a year later, examine administrative registration delays and citizen reporting, and use officer transfers to study possible diffusion.",
      contribution:
        "Treated officers show more favorable attitudes, empathy, and legal knowledge. Treated stations are 15 percentage points less likely to blame victims in audits, dismiss fewer complaints, provide more referrals, and show a 41% decline in registration delays; longer-run reporting rises, with suggestive evidence of spillovers through transfers.",
      caveat:
        "The intervention is institution- and context-specific, and some outcomes rely on audits or administrative records. Transfer-based spillovers are described as suggestive, while multiple outcomes and longer-run reporting changes require care in distinguishing treatment effects from measurement and reporting responses.",
      tags: ["Police", "Bureaucratic discretion", "Randomized trial", "Gender-based violence"]
    }
  ],
  methodsInIssue: [
    {
      label: "Leximetric institutional measurement",
      description:
        "The defence-industry paper converts governance documents into comparable control indicators, combining automated extraction with human coding; interpretation depends on both construct validity and source coverage."
    },
    {
      label: "Axiomatic characterization",
      description:
        "The common-ownership paper asks which measure follows from stated mathematical properties, so its conclusion is a conditional theorem rather than an empirical welfare estimate."
    },
    {
      label: "Field experiments and equilibrium models",
      description:
        "The road-pricing study combines observed behavioral responses with a network model, while the police study randomizes an organizational intervention and follows both attitudes and conduct."
    },
    {
      label: "Staggered adoption and institutional thresholds",
      description:
        "The platform-crime paper triangulates rollout timing with legal-age and criminal-record eligibility contrasts; each comparison addresses a different part of the opportunity-cost mechanism."
    }
  ],
  watchlist: [
    "Whether state-influence indices predict procurement, investment, disclosure, or performance after accounting for national security regulation.",
    "How competing common-ownership measures change empirical estimates used in merger and competition analysis.",
    "Whether post-IPO improvements in lending terms survive research designs that more fully address selection into public markets.",
    "Whether low-barrier work opportunities and police-training interventions retain their effects under different platform rules, enforcement institutions, and legal cultures."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "26 October 2026 · 08:00"
};
