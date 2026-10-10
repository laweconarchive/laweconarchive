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
  issue: "Issue 008",
  publishedAt: "21 September 2026",
  period: "Expanded review window: 8–21 September 2026",
  headline:
    "Six new papers on local public finance, transport pricing, industrial-policy politics, electricity-market design, infrastructure, and inheritance",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "This edition covers six CEPR Discussion Papers published from 16 through 20 September 2026. The review window was expanded to 8–21 September because the scheduled 14 September issue was not published. Each title, author list, exact publication date, paper number, method description, and result summary was checked against the paper's official CEPR record. All six selections come from one working-paper series and emphasize the most recent institutionally relevant research in the expanded window; the issue is not a comprehensive census of every paper released during those fourteen days.",
  latestResearch: [
    {
      title: "Do Immigrants Impact Local Public Finances? Evidence from Belgium",
      authors: "Anna Maria Mayda, Jerome Gonnot, and Simona Fiore",
      releaseDate: "20 September 2026",
      publicationStatus: "CEPR Discussion Paper 21957",
      field: "Local public finance · Migration",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21957",
      researchQuestion:
        "How does immigration affect municipal tax revenue and public spending, and do fiscal effects differ between immigrants from EU and non-EU countries?",
      method:
        "The authors combine Belgian municipal administrative data on revenues and expenditures from 2005–2018 with an instrumental-variable strategy based on historical immigrant settlement patterns.",
      contribution:
        "Immigration is associated on average with lower per-capita municipal expenditure and unchanged to slightly lower revenue, but the aggregate masks substantial heterogeneity. EU immigration slightly raises revenue without a significant spending effect, whereas non-EU immigration narrows the tax base and reduces both revenue and spending, including security and social assistance; the fall in social spending is concentrated more heavily on non-European immigrants than on Belgian residents.",
      caveat:
        "The causal interpretation depends on the historical-settlement instrument affecting current municipal finances only through immigration. The estimates concern Belgian local budgets, not the full national fiscal balance or the broader economic and social effects of immigration.",
      tags: ["Migration", "Local taxation", "Public spending", "Instrumental variables"]
    },
    {
      title: "Pricing Cars Off the Road: E-bike Substitution and Welfare Gains from Transport Pricing",
      authors:
        "Jakob Roth, Laura Schwab, Beat Hintermann, Thomas Götschi, Adrian Meister, Lucas Meyer de Freitas, and Kay Axhausen",
      releaseDate: "19 September 2026",
      publicationStatus: "CEPR Discussion Paper 21954",
      field: "Environmental regulation · Transport pricing",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21954",
      researchQuestion:
        "How strongly does Pigouvian transport pricing shift regular drivers toward cycling, and how much of the intervention's welfare gain can a per-distance driving tax reproduce?",
      method:
        "A randomized controlled trial follows 1,085 e-bike owners who also drive regularly through a GPS-based travel app. The authors then estimate a discrete-choice model to recover preference parameters and compare alternative pricing instruments.",
      contribution:
        "The pricing intervention reduces transport-related external costs by 7%, mainly by shifting travel from cars to e-bikes. The structural estimates imply that a volumetric tax on driving could capture 81% of the experimental intervention's welfare gains.",
      caveat:
        "Participants already owned e-bikes and regularly drove, so responses may be larger than in populations without a ready substitute. The welfare comparison additionally depends on the discrete-choice specification, external-cost measures, and implementation conditions outside the trial.",
      tags: ["Pigouvian pricing", "Randomized trial", "Transport", "Externalities"]
    },
    {
      title: "The Political Foundations of Industrial Policy: Emergence, Endurance, and Exhaustion",
      authors: "Lottie Field, Réka Juhász, and Michele Zampa",
      releaseDate: "19 September 2026",
      publicationStatus: "CEPR Discussion Paper 21953",
      field: "Industrial policy · Political economy",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21953",
      researchQuestion:
        "How do political visions shape the creation, endurance, and eventual exhaustion of large state-led industrial policies?",
      method:
        "The paper compares Italy's Cassa per il Mezzogiorno and the U.S. Moonshot using historical and primary political sources, decades of newspaper coverage, topic modeling, sentiment analysis, and systematic close reading.",
      contribution:
        "Both programs originated in broader political projects rather than narrow economic diagnoses, and their public visions framed what counted as success, failure, and an acceptable time horizon. The Moonshot's bounded objective was fulfilled on schedule; the Cassa's open-ended vision was gradually exhausted as failures accumulated.",
      caveat:
        "Two purposively selected historical cases illuminate a mechanism but cannot establish the average causal effect of policy visions. The analysis distinguishes political endurance from economic efficiency and should not be read as a general endorsement of either program.",
      tags: ["Industrial policy", "Political narratives", "Text analysis", "Comparative history"]
    },
    {
      title: "A Proposal for Enabling and Operating Power Systems with High Shares of Renewable Energy",
      authors: "Sebastian Fleitas, Igal E. Hendel, and Ramon Mendez Galain",
      releaseDate: "18 September 2026",
      publicationStatus: "CEPR Discussion Paper 21952",
      field: "Energy regulation · Market design",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21952",
      researchQuestion:
        "Which regulatory and procurement institutions can support reliable, investment-compatible electricity systems when variable renewable generation becomes dominant?",
      method:
        "The authors develop a market-design proposal centered on an open-source system-expansion model, periodic technology-specific auctions for long-term contracts, and remuneration tied to each technology's system value, drawing on Uruguay's electricity transition as an institutional case.",
      contribution:
        "The framework shifts competition from short-term spot dispatch toward competition for long-term contracts while preserving market entry. Uruguay's experience—99.1% renewable penetration within a decade and roughly halved generation costs—is presented as evidence that high-renewable systems can operate with long-term procurement and limited reliance on spot markets.",
      caveat:
        "This is a regulatory proposal supported by one prominent country experience, not a causal estimate that the same design will reproduce Uruguay's outcomes elsewhere. Grid structure, interconnection, financing costs, institutional capacity, and technology mix condition transferability.",
      tags: ["Electricity markets", "Renewable energy", "Auctions", "Long-term contracts"]
    },
    {
      title: "Politics-driven Market Access and Its Cost: Evidence from China’s Grand Canal",
      authors: "Ying Bai, Xiaoyu Bian, and Ruixue Jia",
      releaseDate: "17 September 2026",
      publicationStatus: "CEPR Discussion Paper 21951",
      field: "Infrastructure · Political economy",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21951",
      researchQuestion:
        "How much market access did China's Grand Canal create, and what was the economic cost of rerouting infrastructure toward the political capital rather than the commercial core?",
      method:
        "The authors construct a grid-year panel spanning five dynasties from the eighth through nineteenth centuries, show that the route best suited to reach the capital predicts the canal's realized path, and use counterfactual analysis to quantify population effects and redesign costs.",
      contribution:
        "The canal increased population by an estimated 2.5–6.1%, while its politically motivated redesign reduced the gain by 1.1–2.2%. The results quantify how political objectives can redirect infrastructure away from the market-access configuration that would otherwise generate larger settlement effects.",
      caveat:
        "The magnitudes depend on historical spatial measurement and the counterfactual model rather than a modern randomized comparison. Population is an important but incomplete welfare proxy, and servicing a political capital may generate benefits not captured by the market-access benchmark.",
      tags: ["Market access", "Infrastructure", "Political economy", "Economic history"]
    },
    {
      title: "Inheritance Customs and the European Marriage Pattern",
      authors: "Matthew Curtis, Paula Eugenia Gobbi, Marc Goñi, and Joanne Haddad",
      releaseDate: "16 September 2026",
      publicationStatus: "CEPR Discussion Paper 21950",
      field: "Inheritance law · Household institutions",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21950",
      researchQuestion:
        "Did late marriage and celibacy in early-modern Western Europe reflect women's economic opportunity or financial hardship, and how did inheritance rules mediate the difference?",
      method:
        "The paper links a new atlas of 2,486 rural and urban inheritance customs in France and Belgium to genealogical records for 75,000 women born from 1500–1750, then estimates a structural model connecting inheritance rules, earning opportunities, marriage, empowerment, and financial constraints.",
      contribution:
        "Where inheritance included women and younger siblings, earning opportunities strengthened the European Marriage Pattern; under inegalitarian inheritance, similar family outcomes more often reflected distress. The structural estimates attribute roughly 65% of celibacy to choice rather than constraint.",
      caveat:
        "Genealogical coverage, the classification of local customs, and the structural separation of choice from constraint may affect the quantitative share. Historical celibacy is not itself a direct measure of autonomy, and the results do not supply a complete normative evaluation of inheritance systems.",
      tags: ["Inheritance", "Marriage", "Property institutions", "Structural model"]
    }
  ],
  methodsInIssue: [
    {
      label: "Historical-settlement instrumental variables",
      description:
        "Belgian municipal accounts and historical settlement patterns estimate heterogeneous fiscal responses to EU and non-EU immigration."
    },
    {
      label: "Randomized pricing plus discrete choice",
      description:
        "GPS-tracked travel choices identify behavioral substitution before a structural model compares implementable transport taxes."
    },
    {
      label: "Comparative history and computational text analysis",
      description:
        "Primary sources, topic models, sentiment measures, and close reading trace how political visions structure industrial-policy evaluation."
    },
    {
      label: "Institutional market-design analysis",
      description:
        "A system-expansion model, procurement rules, and Uruguay's experience motivate a contract-based framework for renewable power."
    },
    {
      label: "Long-run spatial counterfactual",
      description:
        "A five-dynasty grid panel and modeled alternative routes quantify infrastructure gains and politically induced market-access losses."
    },
    {
      label: "Linked historical atlas and structural estimation",
      description:
        "Local inheritance customs and genealogies identify institutional heterogeneity before a structural model separates opportunity from constraint."
    }
  ],
  watchlist: [
    "Whether local fiscal responses to immigration persist after accounting for national transfers, labor-market effects, and residential mobility.",
    "How congestion, emissions, public-transit alternatives, privacy safeguards, and administrative costs change the design of distance-based road pricing.",
    "Which governance devices make industrial-policy objectives measurable without eliminating the political commitment needed for long-horizon investment.",
    "How long-term electricity contracts should allocate curtailment, balancing, transmission, and technology-change risk across consumers, investors, and the state.",
    "When politically targeted infrastructure creates security, administrative, or distributional benefits that compensate for lost market access.",
    "Whether reforms to inheritance equality alter marriage, fertility, and labor choices under contemporary property and family-law institutions."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "28 September 2026 · 08:00"
};
