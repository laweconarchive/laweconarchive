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
  issue: "Issue 005",
  publishedAt: "24 August 2026",
  period: "Review window: 18–24 August 2026",
  headline:
    "Six new papers on automation, internal labor markets, digital news, energy reliability, paternity leave, and financial literacy",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "This edition covers six CEPR Discussion Papers published from 21 through 23 August 2026. Each date, title, author list, paper number, method description, and result summary was checked against the paper's official CEPR record. The standard seven-day review window was not expanded. Because all qualifying selections in this issue come from one working-paper series, readers should treat the list as a curated recent-research snapshot rather than a field-wide census.",
  latestResearch: [
    {
      title: "Immiserizing Automation",
      authors: "Vladimir Asriyan, Hugo Reichardt, and Sandro Shelegia",
      releaseDate: "23 August 2026",
      publicationStatus: "CEPR Discussion Paper 21872",
      field: "Automation · Human capital",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21872",
      researchQuestion:
        "Can automating entry-level tasks lower long-run output by disrupting the skill accumulation embedded in career ladders?",
      method:
        "The authors build an overlapping-generations model with junior and senior tasks, then examine the model's key predictions in the context of U.S. robot automation.",
      contribution:
        "When cost savings are small, automating junior tasks can shift earnings later in life, reduce the present value of experience-intensive careers, and shrink the future supply of experienced workers enough to lower long-run output. Incumbent senior workers may nevertheless benefit.",
      caveat:
        "The immiserizing result is conditional on the model's career-ladder structure and the size of automation cost savings. The reported empirical evidence supports key predictions but does not establish that every form of automation has the same aggregate effect.",
      tags: ["Automation", "Career ladders", "Human capital", "Distribution"]
    },
    {
      title: "Firm Productivity and the Internal-Versus-External Hiring Decision",
      authors: "Ricardo Alonso, Jed DeVaro, Antti Kauhanen, and Nelli Valmari",
      releaseDate: "23 August 2026",
      publicationStatus: "CEPR Discussion Paper 21871",
      field: "Organizational economics · Internal labor markets",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21871",
      researchQuestion:
        "Why are more productive firms more likely to fill vacancies with internal rather than external candidates?",
      method:
        "Finnish employer-employee matched panel data are paired with a model in which management quality affects how accurately firms screen internal candidates across applicant pools.",
      contribution:
        "More productive firms hire internally more often. The proposed information mechanism also predicts higher internal hiring when applicant pools are larger, internal candidates are more educated, and managers perform better or have more education; the data support these patterns.",
      caveat:
        "The evidence comes from Finland, and the observed productivity and management measures cannot rule out every alternative explanation for internal hiring. The screening mechanism should therefore be read as a supported interpretation rather than the only possible channel.",
      tags: ["Internal hiring", "Productivity", "Management", "Screening"]
    },
    {
      title: "News Consumption in the Digital Age",
      authors: "Francesco Capozza, Ingar Haaland, Christopher Roth, and Johannes Wohlfart",
      releaseDate: "22 August 2026",
      publicationStatus: "CEPR Discussion Paper 21868 · Review",
      field: "Digital platforms · Media economics",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21868",
      researchQuestion:
        "How do reader data, personalization, social-media acquisition, and generative AI reshape the supply of and demand for news and the resulting consumer-welfare trade-offs?",
      method:
        "This is a review and synthesis of research on online news markets, including personalization, targeted advertising, engagement incentives, sensationalism, and consumer demand.",
      contribution:
        "The review organizes the digital-news problem around the alignment between platform or publisher objectives and readers' underlying preferences: cheaper production and finer personalization can improve or reduce welfare depending on that alignment.",
      caveat:
        "This is not a new causal estimate. Its welfare conclusions are conditional, and the discussion of generative AI concerns likely future changes rather than measured effects from a completed policy intervention.",
      tags: ["Digital news", "Personalization", "Consumer welfare", "Generative AI"]
    },
    {
      title: "Coal Supply Chains and Electricity Reliability",
      authors: "Imelda Imelda and Suchita Srinivasan",
      releaseDate: "21 August 2026",
      publicationStatus: "CEPR Discussion Paper 21865",
      field: "Energy regulation · Supply contracts",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21865",
      researchQuestion:
        "Can localized shocks to contracted fuel suppliers propagate through coal logistics and reduce electricity-system reliability?",
      method:
        "The study links South African power plants to contracted coal mines from 2015–2024, combining plant operations, mining-firm revenue, and route-level traffic sensors and exploiting within-plant variation in supplier-mine rainfall.",
      contribution:
        "Rainfall shocks reduce mine output, coal deliveries, and plant availability, and the disruptions propagate to rolling blackouts. The findings place the resilience of supply contracts and logistics alongside generating-plant resilience in electricity-security analysis.",
      caveat:
        "The design is tied to South Africa's coal system and its rainfall exposure. It establishes a supply-chain reliability channel but does not identify which contractual or regulatory reform would be optimal or whether the magnitude carries to other grids and fuels.",
      tags: ["Energy regulation", "Supply contracts", "Electricity reliability", "South Africa"]
    },
    {
      title: "Changing Gender Norms across Generations: Evidence from a Paternity Leave Reform",
      authors: "Lidia Farré, Christina Felfe, Libertad Gonzalez, and Patrick Schneider",
      releaseDate: "21 August 2026",
      publicationStatus: "CEPR Discussion Paper 21863",
      field: "Family policy · Gender norms",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21863",
      researchQuestion:
        "Can a non-transferable paid-paternity-leave entitlement change the gender attitudes and behavior of the next generation?",
      method:
        "The authors use Spain's 2007 introduction of 13 days of paid paternity leave, original surveys of adolescents, and a within-school difference-in-differences design comparing children born just before and after the eligibility cutoff while using adjacent cohorts as controls.",
      contribution:
        "Children exposed to leave eligibility report more egalitarian attitudes in early adolescence, undertake more counter-stereotypical household chores, and express less gender-stereotypical expectations about work and family roles.",
      caveat:
        "The effects largely disappear by late adolescence. The estimates concern a short Spanish leave reform and attitudinal or behavioral outcomes among children, not a demonstrated permanent change in adult labor-market outcomes.",
      tags: ["Paternity leave", "Gender norms", "Difference-in-differences", "Spain"]
    },
    {
      title: "Survival and Financial Literacy in Investment Decisions Later in Life",
      authors: "Chiara Dal Bianco, Francesco Maura, Francesca Parodi, and Guglielmo Weber",
      releaseDate: "21 August 2026",
      publicationStatus: "CEPR Discussion Paper 21862",
      field: "Household finance · Financial capability",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21862",
      researchQuestion:
        "How do subjective survival beliefs and financial literacy jointly affect saving, risky-asset participation, and welfare later in life?",
      method:
        "English Longitudinal Study of Ageing data are combined with a randomized survey experiment that cross-randomizes survival- and financial-literacy interventions, independently varies participation costs, and informs a heterogeneous-agent life-cycle model.",
      contribution:
        "Financial literacy primarily drives entry into risky markets by weakening the deterrent effect of participation costs, while survival literacy complements it in portfolio allocation. In the model's revenue-neutral counterfactuals, only survival literacy produces positive welfare gains after financing costs.",
      caveat:
        "The welfare ranking is model-based and depends on survey-informed parameters, intervention costs, and the assumed financing design. Greater risky-asset participation should not by itself be interpreted as a universal welfare improvement.",
      tags: ["Financial literacy", "Longevity beliefs", "Portfolio choice", "Survey experiment"]
    }
  ],
  methodsInIssue: [
    {
      label: "Structural theory with empirical predictions",
      description:
        "Career-ladder and managerial-screening models connect institutional mechanisms to observable automation and hiring patterns."
    },
    {
      label: "Within-unit quasi-experimental variation",
      description:
        "Rainfall at contracted supplier mines identifies supply-chain disruptions within power plants, while a policy cutoff supports a within-school difference-in-differences design."
    },
    {
      label: "Randomized information interventions",
      description:
        "Cross-randomized survival- and financial-literacy treatments separate belief updating from the role of participation costs."
    },
    {
      label: "Matched administrative and longitudinal data",
      description:
        "Employer-employee panels, power-system records, traffic sensors, and ageing-study data connect organizational choices to individual and system outcomes."
    },
    {
      label: "Evidence synthesis",
      description:
        "A review of digital news markets distinguishes established evidence from conditional welfare implications and prospective AI effects."
    }
  ],
  watchlist: [
    "Which labor-market and training institutions preserve entry-level skill accumulation when firms automate junior tasks.",
    "Whether internal hiring improves match quality and worker mobility outside Finland, and how employment law or collective bargaining affects that choice.",
    "Which transparency, competition, privacy, or platform-governance rules better align personalized news with readers' welfare.",
    "How fuel-supply contracts, inventories, transport redundancy, and regulatory incentives should allocate electricity-reliability risk.",
    "Whether paternity-leave-induced changes in early-adolescent norms persist into adult household and labor-market decisions under longer leave entitlements.",
    "How financial-capability interventions perform when real participation costs, heterogeneous risk tolerance, and program financing are measured directly."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "31 August 2026 · 08:00"
};
