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
  issue: "Issue 011",
  publishedAt: "12 October 2026",
  period: "Review window: 6–12 October 2026",
  headline:
    "New research on digital rights, personalized pricing, mergers, licensing, and judicial expectations",
  editorialNote:
    "Research Weekly tracks newly released law-and-economics scholarship. Each entry identifies the paper's status and source date, then separates its question, method, contribution, and interpretation boundary.",
  coverageNote:
    "This issue selects seven CEPR Discussion Papers first published between 7 and 12 October 2026. The hospital-merger paper was also revised on 12 October; its date is shown separately. The review window begins on 6 October, immediately after Issue 010. Titles, full author lists, dates, paper numbers, and abstract-level claims were checked against CEPR's individual publication records. These notes rely on the public records; where the full paper's data, identification, or model details are unavailable, the limitation is stated. The selection is thematic rather than a complete census of every paper released during the window.",
  latestResearch: [
    {
      title: "Personalized Pricing and the Value of Past Purchase Histories: An Empirical Perspective",
      authors: "Isis Durrmeyer, Jean-François Fournel, and Mario Samano",
      releaseDate: "12 October 2026",
      publicationStatus: "CEPR Discussion Paper 22038",
      field: "Consumer data · Competition policy",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22038",
      researchQuestion:
        "What do retailers gain from pricing based on customers' purchase histories, and how are the gains and losses distributed among consumers?",
      method:
        "A structural demand-and-pricing model lets a Bayesian seller learn consumer preferences from past grocery purchases and set personalized prices. The public CEPR abstract does not specify the underlying transaction dataset or all estimation assumptions.",
      contribution:
        "With one year of purchase histories, the model estimates a 7.1% profit increase. Although 84.1% of consumers gain, the losses borne by the remainder outweigh those gains, reducing aggregate consumer surplus. The model also shows why opting out of a fee-charging loyalty program may itself reveal price sensitivity.",
      caveat:
        "These are model-based estimates for the studied grocery setting, not an observed effect of an enacted data or competition rule. Welfare and distributional estimates depend on demand estimation, seller learning, and the assumed option to opt out.",
      tags: ["Personalized pricing", "Consumer data", "Price discrimination", "Competition"]
    },
    {
      title: "Beyond Digital Rights: An Institutional Architecture for Consumer Empowerment",
      authors: "Dennis Snower, Paul Twomey, and Vicente Arias",
      releaseDate: "11 October 2026",
      publicationStatus: "CEPR Discussion Paper 22036",
      field: "Digital governance · Institutional design",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22036",
      researchQuestion:
        "Why do formal personal-data rights often fail to give consumers effective bargaining power in digital markets, and what institutional arrangement could close that gap?",
      method:
        "The authors develop a conceptual institutional architecture, IDEA, combining verified key personal data, accredited expert representation, fiduciary governance of delegated authority, and collective negotiation. The public record presents a design argument rather than a causal evaluation or new dataset.",
      contribution:
        "The paper's claim is that the four mechanisms reinforce one another: control permits authorization, representation supplies expertise, fiduciary duties constrain agents, and collective bargaining turns dispersed rights into continuing market participation.",
      caveat:
        "The architecture is a proposal, not evidence that it improves welfare in operation. Implementation would depend on enforceable fiduciary duties, trusted verification, representative accountability, and the cost of collective governance.",
      tags: ["Data rights", "Fiduciary duties", "Collective bargaining", "Digital markets"]
    },
    {
      title: "Divisive by Design: Shaping Values in Optimal Mechanisms",
      authors: "Anja Prummer and Francesco Nava",
      releaseDate: "10 October 2026",
      publicationStatus: "CEPR Discussion Paper 22035",
      field: "Mechanism design · Information rents",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22035",
      researchQuestion:
        "When a principal can change a good's features, is it optimal to design it to appeal broadly or to create stronger differences in agents' valuations?",
      method:
        "A theoretical optimal-mechanism model has agents with private, independently distributed values; the principal chooses features that shift those value distributions before allocating the good.",
      contribution:
        "The model finds that designs appealing strongly to some agent types can reduce information rents and raise total surplus despite weakening competition. Some divisiveness remains optimal even when total surplus is constrained.",
      caveat:
        "This is a model result under particular information and distributional assumptions. It does not show that exclusionary product design is lawful, desirable in every market, or empirically welfare-improving.",
      tags: ["Mechanism design", "Private information", "Product design", "Information rents"]
    },
    {
      title: "Who Benefits from Market Concentration? The Effects of Hospital Mergers on Physician Income.",
      authors: "Jan Boone, Martin Salm, and Sofia Santin",
      releaseDate: "8 October 2026; revised 12 October 2026",
      publicationStatus: "CEPR Discussion Paper 22025 · revised version",
      field: "Merger policy · Health-care markets",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22025",
      researchQuestion:
        "How do hospital mergers affect physicians' income under self-employment versus salaried contracts?",
      method:
        "The authors examine 17 Dutch hospital mergers from 2011 to 2018 using administrative data, a difference-in-differences design, and a theoretical model that distinguishes physician contract types.",
      contribution:
        "The study reports a 3.86% income increase for self-employed medical specialists and no income effect for salaried specialists. It also reports fewer admissions and physicians, without significant effects on hospital expenditure or 30-day mortality.",
      caveat:
        "Causal interpretation depends on the difference-in-differences comparison and merger selection. Effects on physician income do not alone establish overall patient welfare or transfer to health systems with different contracting arrangements.",
      tags: ["Hospital mergers", "Market power", "Physician contracts", "Difference-in-differences"]
    },
    {
      title: "Do Judges Move Markets? Ideological Shifts in the Supreme Court and Macroeconomic Expectations",
      authors: "Thomas Drechsel and Naixin Zhang",
      releaseDate: "8 October 2026",
      publicationStatus: "CEPR Discussion Paper 22024",
      field: "Judicial institutions · Financial markets",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22024",
      researchQuestion:
        "Do unexpected changes in the U.S. Supreme Court's ideological balance alter financial markets' expectations about inflation, activity, and fiscal policy?",
      method:
        "Unexpected deaths of justices serve as quasi-experimental shifts in the Court's composition. The authors study high-frequency asset-price responses and compare yield patterns with fiscal-news estimates, using sectoral stock responses as a validation exercise.",
      contribution:
        "The paper reports that a more conservative Court is associated with lower inflation and activity expectations and lower bond yields; a more liberal shift has the opposite pattern. The authors interpret the joint response as news about future aggregate demand and fiscal policy.",
      caveat:
        "Asset-price changes measure market beliefs around rare events, not realized macroeconomic effects of subsequent court decisions. Other news around each event and the small set of ideological shifts constrain causal and external interpretation.",
      tags: ["Courts", "Judicial ideology", "Asset prices", "Expectations"]
    },
    {
      title: "At-Risk or Responsive? Targeting in Unemployment Policy",
      authors: "Sebastian Ernst, Andreas I. Mueller, Johannes Spinnewijn, and Joost Bollens",
      releaseDate: "8 October 2026",
      publicationStatus: "CEPR Discussion Paper 22028",
      field: "Public program design · Algorithmic targeting",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22028",
      researchQuestion:
        "Should job-search assistance prioritize people at greatest risk of long-term unemployment or those most likely to benefit from counseling?",
      method:
        "Three regression-discontinuity designs use administrative records from Belgium's Flemish Public Employment Service. The authors combine estimated treatment responsiveness with predicted job-finding probabilities in a calibrated targeting framework.",
      contribution:
        "Counseling increases employment on average, but effects decline with predicted risk. In the authors' calibrated framework, rules using both responsiveness and baseline job-finding probability yield welfare gains nearly three times those from random assignment, while targeting risk alone performs worse.",
      caveat:
        "Regression-discontinuity estimates apply most directly near the relevant assignment cutoffs; the broader welfare ranking depends on the calibrated framework. The result does not by itself settle fairness, transparency, or legal constraints on algorithmic allocation.",
      tags: ["Unemployment policy", "Algorithmic targeting", "Regression discontinuity", "Welfare"]
    },
    {
      title: "Occupational Licensing Without Learning",
      authors: "Pablo Blanchard, Sebastian Fleitas, and Nicolas Malfetano",
      releaseDate: "7 October 2026",
      publicationStatus: "CEPR Discussion Paper 22018",
      field: "Occupational regulation · Entry barriers",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22018",
      researchQuestion:
        "How much of accountants' licensing-related earnings reflects scarce entry rights rather than the skills acquired in training?",
      method:
        "The authors use a reform at Uruguay's main university that shortened the accounting degree and licensed students already working alongside incumbents without additional learning requirements. They compare incumbent accountants' earnings with those of comparable professionals.",
      contribution:
        "Following entry by newly licensed accountants, incumbent earnings fell by about 9% relative to comparable professionals while employment did not change, a pattern consistent with licensing rents.",
      caveat:
        "The comparison relies on the reform isolating new licensing access from other contemporaneous changes. The estimated earnings effect concerns this profession and reform; it does not measure all quality or consumer-protection effects of licensing.",
      tags: ["Occupational licensing", "Accountants", "Entry", "Scarcity rents"]
    }
  ],
  methodsInIssue: [
    {
      label: "Structural pricing and demand",
      description:
        "The personalized-pricing study models how purchase histories update a seller's beliefs; its welfare estimates depend on model assumptions rather than an observed legal change."
    },
    {
      label: "Institutional and mechanism design",
      description:
        "The digital-rights proposal specifies complementary governance mechanisms, while the divisive-design model derives allocations under private information."
    },
    {
      label: "Difference-in-differences and local discontinuities",
      description:
        "Dutch hospital-merger comparisons and Belgian counseling assignment cutoffs estimate different treatment effects with different identifying assumptions."
    },
    {
      label: "High-frequency event evidence",
      description:
        "The Supreme Court study reads asset-price responses to unexpected judicial vacancies as revisions in market expectations, not realized policy outcomes."
    }
  ],
  watchlist: [
    "How data-protection and competition rules alter the distributional effects of personalized pricing when opting out conveys information.",
    "Whether fiduciary representation and collective data negotiation can be implemented with measurable gains in consumer agency.",
    "How merger review should account for contractual distribution of gains among hospitals, physicians, and patients.",
    "Whether occupational entry reforms and algorithmic public-service targeting retain their estimated effects in other professions and jurisdictions."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "19 October 2026 · 08:00"
};
