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
  issue: "Issue 006",
  publishedAt: "31 August 2026",
  period: "Review window: 25–31 August 2026",
  headline:
    "Six new papers on company-law transplants, private-market access, AI regulation, household beliefs, international cooperation, and environmental taxation",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "This edition covers six CEPR Discussion Papers published from 25 through 31 August 2026. Each title, author list, exact publication date, paper number, method description, and result summary was checked against the paper's official CEPR record. The standard seven-day review window was not expanded. All six selections come from one working-paper series, so the issue is a curated recent-research snapshot rather than a comprehensive census of the field.",
  latestResearch: [
    {
      title: "Transplanting Company Law: Shareholder Protection in the Cape Colony",
      authors: "Philip Fliers, John Turner, and Lloyd Maphosa",
      releaseDate: "31 August 2026",
      publicationStatus: "CEPR Discussion Paper 21890",
      field: "Company law · Legal transplants",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21890",
      researchQuestion:
        "How did companies use private ordering when minimally protective British company law was transplanted into the Cape Colony?",
      method:
        "The authors examine shareholder safeguards in the articles of association of Cape Colony companies formed during the decade after the Companies Act of 1892 and compare their choices with British practice.",
      contribution:
        "Cape companies offered more shareholder protection and adopted the statute's blueprint articles more often than British companies. Blueprint adopters had more diffuse ownership but lower survival rates, revealing a historical association between standardized safeguards, ownership dispersion, and corporate longevity.",
      caveat:
        "The ownership and survival patterns are historical associations rather than causal estimates. Firms selected their own articles, and the Cape Colony's legal, market, and colonial institutions limit direct extrapolation to modern company-law transplants.",
      tags: ["Company law", "Legal transplants", "Shareholder protection", "Private ordering"]
    },
    {
      title: "Democratizing Private Markets: Equilibrium Predictions",
      authors: "Luboš Pástor, Robert F. Stambaugh, and Lucian Taylor",
      releaseDate: "31 August 2026",
      publicationStatus: "CEPR Discussion Paper 21892",
      field: "Securities regulation · Private markets",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21892",
      researchQuestion:
        "What happens to retail investors and private firms when access to private markets is broadened beyond institutional investors?",
      method:
        "The paper calibrates a production-based asset-pricing model and compares equilibria before and after retail investors gain private-market access.",
      contribution:
        "Retail welfare rises only slightly because private markets are small, even when retail investors face no additional disadvantage. Access reform nevertheless changes private-firm ownership, lowers firms' cost of capital, supports growth, and reduces private equity's positive CAPM alpha.",
      caveat:
        "These are model-based equilibrium predictions, not observed effects of a completed regulatory reform. Results depend on the calibration and do not by themselves resolve disclosure, liquidity, fraud, suitability, or investor-protection concerns.",
      tags: ["Private markets", "Retail access", "Cost of capital", "Investor protection"]
    },
    {
      title: "When the Middle Class Undermines Progress: The Political Economy of AI Regulation",
      authors: "Konstantin Sonin",
      releaseDate: "29 August 2026",
      publicationStatus: "CEPR Discussion Paper 21888",
      field: "AI governance · Political economy",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21888",
      researchQuestion:
        "How do uncertainty, distributional exposure, and new information affect political support for AI-friendly regulation?",
      method:
        "A political-economy model studies voting over AI reform, compensatory redistribution, and regulatory sandboxes when citizens face uncertain labor-market consequences.",
      contribution:
        "The model predicts that a larger middle class can impede reform, that compensation may be most politically effective when its welfare rationale is weakest, and that information produced by regulatory sandboxes can dissolve rather than strengthen reform coalitions.",
      caveat:
        "The results are theoretical and conditional on the model's information and distributional structure. Political support for AI-friendly rules is not equivalent to social optimality, and the paper does not estimate the effects of an actual sandbox or compensation program.",
      tags: ["AI regulation", "Political coalitions", "Regulatory sandboxes", "Redistribution"]
    },
    {
      title: "Subjective Expectations of Husbands and Wives and Couples’ Decision-Making Under Uncertainty",
      authors: "Aureo de Paula and Christine Valente",
      releaseDate: "29 August 2026",
      publicationStatus: "CEPR Discussion Paper 21887",
      field: "Household governance · Information",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21887",
      researchQuestion:
        "How much influence do each spouse's beliefs have over joint choices when husbands and wives hold different expectations about uncertain outcomes?",
      method:
        "The authors develop an empirical framework that does not impose Pareto optimality when beliefs differ and apply it to couples' contraceptive choices in Nigeria.",
      contribution:
        "Spouses hold different subjective expectations, and the weight attached to each spouse's beliefs varies across domains. Information interventions therefore cannot assume that targeting husbands or wives will have the same effect for every decision margin.",
      caveat:
        "The application concerns contraceptive decisions in Nigeria and does not establish a universal bargaining weight for either spouse. Policy design must also account for autonomy, rights, and implementation constraints that are not summarized by informational influence alone.",
      tags: ["Household decisions", "Subjective beliefs", "Information interventions", "Nigeria"]
    },
    {
      title: "A Deep Case for Shallow Integration",
      authors: "John Becko and Arnaud Costinot",
      releaseDate: "27 August 2026",
      publicationStatus: "CEPR Discussion Paper 21880",
      field: "International cooperation · Externalities",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21880",
      researchQuestion:
        "Can limited market-access commitments implement globally efficient policies even when countries create pecuniary and non-pecuniary cross-border externalities?",
      method:
        "The paper develops a general theoretical environment and proves two implementation results, first for pecuniary externalities and then for extended commitments covering non-pecuniary externalities.",
      contribution:
        "Properly designed market-access commitments are sufficient in the model to sustain globally efficient policies. The extension treats cross-border externalities as additional goods priced at their social values, with applications to climate and geopolitical cooperation.",
      caveat:
        "The theorems establish sufficiency under the model's conditions; they do not demonstrate that governments can observe social values, negotiate complete commitments, or enforce them in practice. Institutional and distributional feasibility remain separate questions.",
      tags: ["International cooperation", "Market access", "Externalities", "Institutional design"]
    },
    {
      title: "Differing Environmental Preferences, Fiscal Competition, and Taxation of Goods and Pollution",
      authors: "Chiara Canta, Helmuth Cremer, and Firouz Gahvari",
      releaseDate: "25 August 2026",
      publicationStatus: "CEPR Discussion Paper 21879",
      field: "Environmental regulation · Tax design",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21879",
      researchQuestion:
        "How does trade alter corrective tax design when countries value environmental quality differently and compete over production?",
      method:
        "A two-country model compares non-cooperative emissions and commodity taxation under autarky and free trade when one country values environmental quality and the other does not.",
      contribution:
        "Trade can make the environmentally concerned country subsidize the polluting good to shift production toward its cleaner firms, violating the usual targeting principle even when emissions are taxed. Above a threshold, trade reduces global emissions, while welfare effects remain asymmetric.",
      caveat:
        "The result is driven by a stylized two-country model and threshold conditions involving environmental preferences and production costs. It is not a direct policy prescription without empirical calibration and analysis of trade-law, administrative, and strategic constraints.",
      tags: ["Environmental tax", "Fiscal competition", "Trade", "Pollution"]
    }
  ],
  methodsInIssue: [
    {
      label: "Historical institutional comparison",
      description:
        "Company articles under a transplanted statute connect private ordering to ownership structure and corporate survival."
    },
    {
      label: "Calibrated equilibrium analysis",
      description:
        "A production-based asset-pricing model separates small retail risk-sharing gains from larger firm-financing effects."
    },
    {
      label: "Political-economy mechanism design",
      description:
        "A voting model traces how uncertainty, compensation, and sandbox-generated information reshape regulatory coalitions."
    },
    {
      label: "Belief-weight identification",
      description:
        "A new empirical framework measures the relative influence of joint decision-makers' expectations without imposing common beliefs or Pareto efficiency."
    },
    {
      label: "Implementation and corrective-tax theory",
      description:
        "Formal models characterize efficient international commitments and tax instruments under cross-border externalities and heterogeneous environmental preferences."
    }
  ],
  watchlist: [
    "Whether standardized company-law defaults causally affect ownership dispersion, financing, and survival in modern legal transplants.",
    "How disclosure, eligibility, liquidity, and suitability rules change the limited retail-welfare gains predicted from private-market access.",
    "Which compensation and experimentation designs preserve useful learning about AI while maintaining politically and legally durable coalitions.",
    "How household information interventions should respond to domain-specific influence while protecting individual autonomy and procedural fairness.",
    "Whether international institutions can measure, price, monitor, and enforce the extended market-access commitments required by the theory.",
    "When production-shifting environmental subsidies remain welfare improving after administrative costs, strategic retaliation, and trade-law constraints are included."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "7 September 2026 · 08:00"
};
