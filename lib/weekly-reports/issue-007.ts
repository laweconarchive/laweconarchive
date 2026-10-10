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
  issue: "Issue 007",
  publishedAt: "7 September 2026",
  period: "Review window: 1–7 September 2026",
  headline:
    "Six new papers on property-rights access, verifiable disclosure, hidden debt, political socialization, voting, and retail pricing",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "This edition covers six CEPR Discussion Papers published from 2 through 6 September 2026. Each title, author list, exact publication date, paper number, method description, and result summary was checked against the paper's official CEPR record. The standard seven-day review window of 1–7 September was not expanded. All six selections come from one working-paper series, so the issue is a curated recent-research snapshot rather than a comprehensive census of the field.",
  latestResearch: [
    {
      title: "Hey, Governors, Leave Them Kids Alone: Political Influence During Childhood",
      authors: "Gianmarco Daniele, Sergio Galletta, Marco Le Moglie, and Federico Masera",
      releaseDate: "6 September 2026",
      publicationStatus: "CEPR Discussion Paper 21907",
      field: "Political economy · Institutional influence",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21907",
      researchQuestion:
        "Can exposure to a state governor during childhood durably shift adult partisan alignment and political participation?",
      method:
        "The authors combine records for 200 million registered U.S. voters with a regression-discontinuity design based on close gubernatorial elections, then compare exposure by age and by governors' institutional authority and popularity.",
      contribution:
        "Exposure between ages 6 and 17 shifts adult party registration toward the governor's party. Each additional childhood year under a Republican governor raises Republican registration by 0.45 percentage point, with related effects on primary participation and survey attitudes and larger effects where governors hold greater authority.",
      caveat:
        "Regression-discontinuity estimates are most credible around close elections and need not describe landslide elections or other political systems. Party registration is an observable proxy for preferences, and the institutional channels identified in U.S. states do not by themselves establish which particular policies caused the shift.",
      tags: ["Political socialization", "Regression discontinuity", "Institutions", "Voting"]
    },
    {
      title: "An Empirically-Grounded Theory of Voting Based on Prosocial Motives",
      authors: "Laurent Bouton, Stefan Krasa, and Francesco Squintani",
      releaseDate: "6 September 2026",
      publicationStatus: "CEPR Discussion Paper 21908",
      field: "Public choice · Voting",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21908",
      researchQuestion:
        "Can prosocial motives explain observed turnout, winning margins, and comparative statics that standard costly-voting models struggle to match?",
      method:
        "The paper builds a costly-voting model in a spatial electoral setting, establishes Nash-equilibrium existence under a finite-electorate consistency condition, derives comparative statics, and compares predictions with prior evidence and original empirical work.",
      contribution:
        "A motive that depends jointly on expected participation by fellow supporters, the collective effect of those votes, and the value placed on the electoral outcome can qualitatively and quantitatively reconcile several empirical turnout regularities in one framework.",
      caveat:
        "Model fit does not uniquely identify prosocial motives or rule out expressive, informational, or institutional explanations. Equilibrium predictions remain conditional on the specified preference and voting-cost structure.",
      tags: ["Public choice", "Turnout", "Prosocial motives", "Nash equilibrium"]
    },
    {
      title: "Decomposing Cyclical Grocery Prices: Store and Household Responses",
      authors: "Richard Friberg, Thor Andreas Aursland, Frode Steen, and Simen Ulsaker",
      releaseDate: "6 September 2026",
      publicationStatus: "CEPR Discussion Paper 21909",
      field: "Industrial organization · Consumer behavior",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21909",
      researchQuestion:
        "When local economic conditions worsen, how much of the fall in grocery prices paid comes from retailer pricing rather than changes in household shopping behavior?",
      method:
        "Using the 2014 oil-price collapse as a regional unemployment shock in Norway, the authors combine transaction histories for 100,000 households with weekly store-level prices and derive an exact regression decomposition of retailer and household-response channels.",
      contribution:
        "Prices paid are procyclical. Retailer price changes explain about one tenth of the decline, while households' timing of purchases around temporary sales accounts for more than half, showing that unit-value price indexes increasingly mix retailer pricing with consumer substitution in downturns.",
      caveat:
        "The estimates arise from a particular Norwegian shock and grocery market. The decomposition clarifies mechanisms in prices paid, but it does not alone establish changes in household welfare or the general cost of living.",
      tags: ["Retail pricing", "Consumer substitution", "Price indexes", "Natural experiment"]
    },
    {
      title: "Hidden Debt Revelations",
      authors: "Sebastian Horn, David Mihalyi, Philipp Nickol, and Cesar Sosa-Padilla",
      releaseDate: "3 September 2026",
      publicationStatus: "CEPR Discussion Paper 21902",
      field: "Sovereign finance · Fiscal transparency",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21902",
      researchQuestion:
        "How large and systematic is hidden sovereign debt, when is it revealed, and how does unreliable reporting affect default risk and borrowing capacity?",
      method:
        "The authors assemble 119 historical vintages of League of Nations, United Nations, IMF, and World Bank debt statistics covering as many as 187 countries over more than a century, then incorporate revision patterns into a quantitative sovereign-default model.",
      contribution:
        "Debt is systematically revised upward by about one percent of GDP on average; hidden debt tends to accumulate in good times and emerge during IMF programs and defaults. The model attributes roughly 20% of the debt-capacity gap between low- and high-income economies to cross-country differences in data reliability.",
      caveat:
        "Ex post revisions may reflect measurement improvements, coverage changes, or reclassification as well as strategic concealment. The reported contribution to debt intolerance is model-based and should not be read as a causal share identified from the historical data alone.",
      tags: ["Sovereign debt", "Fiscal transparency", "Data revisions", "Default risk"]
    },
    {
      title: "The Limits of Verifiability: Credibility and Flexibility in Communication",
      authors: "Alessandro Lizzeri, Yichuan Lou, and Jacopo Perego",
      releaseDate: "2 September 2026",
      publicationStatus: "CEPR Discussion Paper 21900",
      field: "Disclosure · Information design",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21900",
      researchQuestion:
        "When does tying claims to verifiable evidence improve communication, and when does it prevent an informed sender from conveying useful context?",
      method:
        "A sender–receiver model compares verifiable and unverifiable communication when preferences are only partially aligned and the sender's private information is richer than the evidence she can prove.",
      contribution:
        "Verifiability creates a credibility–flexibility trade-off: it helps when preferences are sufficiently misaligned but can hinder communication when interests are more closely aligned. Unverifiable messages can complement evidence by contextualizing observations that would otherwise mislead.",
      caveat:
        "The thresholds and welfare comparisons are theoretical and depend on the model's evidence and preference structure. The result does not imply that legal verification requirements are generally undesirable, especially where fraud, enforcement, or third-party reliance matters.",
      tags: ["Disclosure", "Verifiability", "Credibility", "Information design"]
    },
    {
      title: "Financing Property Rights: Fee-Financed Registration and Unequal Formalisation in Spain, 1845–1935",
      authors: "Juan Carmona and Joan R. Rosés",
      releaseDate: "2 September 2026",
      publicationStatus: "CEPR Discussion Paper 21898",
      field: "Property law · Legal institutions",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21898",
      researchQuestion:
        "How did user fees and transfer taxes shape access to Spain's formally universal land registry and the distributional effects of property-rights formalization?",
      method:
        "The authors reconstruct the registry's cost structure from fee schedules, fiscal series, and provincial evidence for 1845–1935 and relate the incidence of formalization costs to patterns of registry participation.",
      contribution:
        "Fixed notarial fees, registry charges, and taxes reduced the state's administrative burden but imposed the highest proportional cost on low-value and fragmented properties. A legally universal registry therefore remained economically unequal, and wider territorial coverage did not automatically remove exclusion created by pricing.",
      caveat:
        "The evidence establishes a historically grounded distributional mechanism rather than a modern causal estimate. Institutional capacity, cadastral quality, landholding structure, and available financing technologies differ across countries and periods.",
      tags: ["Property rights", "Land registry", "User fees", "Distribution"]
    }
  ],
  methodsInIssue: [
    {
      label: "Administrative-data regression discontinuity",
      description:
        "Close gubernatorial elections and 200 million voter records identify persistent political effects of childhood exposure near the electoral cutoff."
    },
    {
      label: "Empirically disciplined equilibrium theory",
      description:
        "A costly-voting model derives equilibrium comparative statics and evaluates whether one motive structure can reproduce observed electoral patterns."
    },
    {
      label: "Shock-based price decomposition",
      description:
        "Household transactions and store prices separate retailer adjustments from purchase timing and other consumer responses to a regional downturn."
    },
    {
      label: "Vintage reconstruction and quantitative modeling",
      description:
        "Successive international debt datasets reveal reporting revisions that are then disciplined through a sovereign-default model."
    },
    {
      label: "Communication theory",
      description:
        "A sender–receiver model identifies when proof requirements improve credibility and when they suppress informative flexibility."
    },
    {
      label: "Historical institutional incidence",
      description:
        "Fee schedules, fiscal accounts, and provincial participation connect the financing of a legal institution to unequal practical access."
    }
  ],
  watchlist: [
    "Which education, budget, appointment, or agenda-setting powers transmit governors' partisan influence during childhood.",
    "Whether prosocial-voting predictions remain distinct from expressive and informational explanations in new field evidence.",
    "How household purchase timing changes measured inflation, distributional incidence, and competition-policy assessments across retail markets.",
    "Which audit, disclosure, and lender-verification institutions reduce debt revisions without inducing off-balance-sheet substitution.",
    "When legal verification rules should permit contextual statements while preserving sanctions for deception and third-party protection.",
    "How alternative fee schedules, exemptions, or public financing can widen registry participation without weakening record quality or fiscal capacity."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "14 September 2026 · 08:00"
};
