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
  issue: "Issue 015",
  publishedAt: "23 November 2026",
  period: "Review window: 18–23 November 2026",
  headline:
    "New research on adverse selection, procurement evidence, stakeholder governance, CEO incentives, bureaucratic rigidity, and taxpayer behavior",
  editorialNote:
    "Research Weekly tracks newly released law-and-economics scholarship. Each entry identifies the paper's status and source date, then separates its question, method, contribution, and interpretation boundary.",
  coverageNote:
    "This issue reviews research released after Issue 014, covering 18–23 November 2026. The final selection contains six papers from three independent research series: two CEPR Discussion Papers, two ECGI Finance Working Papers, and two NBER Working Papers, so each source supplies one-third of the issue. CEPR and ECGI provide exact publication dates from 19 to 23 November. NBER identifies both papers as November 2026 releases and lists them in its current working-paper collection reviewed on 23 November, but its public paper records do not state an exact day; those entries therefore report the month without substituting a retrieval date. The candidate search also reviewed IZA, CESifo, journal and publisher pages, author pages, and institutional repositories. Titles, complete author lists, series numbers, DOI information where supplied, dates as supplied, research designs, and abstract-level claims were checked against the institutional paper pages and, for the NBER entries, the papers' title pages and abstracts.",
  latestResearch: [
    {
      title: "Inference from Outcomes in the Market for Lemons",
      authors: "Francesc Dilme and Nenad Kos",
      releaseDate: "23 November 2026",
      publicationStatus: "CEPR Discussion Paper 22208",
      field: "Adverse selection · Partial identification",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22208",
      researchQuestion:
        "What can an analyst infer about hidden quality, welfare, and deadweight loss from the price and traded quantity observed in a market for lemons?",
      method:
        "The paper develops a theoretical partial-identification framework in which a monopsonist posts a price to sellers who privately observe quality. It combines the observed quantity with the price's optimality condition to characterize rationalizable outcomes and sharp bounds on the quality distribution and welfare objects.",
      contribution:
        "The framework derives sharp bounds for producer surplus, consumer surplus, total welfare, and deadweight loss. A pointwise increase in buyer valuation narrows the set of rationalizable outcomes but can widen the producer-surplus range, and the characterizations extend to settings where only price is observed.",
      caveat:
        "The results identify sets rather than point estimates and rely on the assumed preferences, market structure, and price-setting optimality. Applying the bounds to a legal or regulatory market would require evidence that the monopsony and information assumptions fit that institution.",
      tags: ["Adverse selection", "Market for lemons", "Partial identification", "Welfare"]
    },
    {
      title: "Cost Evidence and Welfare in Optimal Procurement",
      authors: "Patrick W. Schmitz",
      releaseDate: "19 November 2026",
      publicationStatus: "CEPR Discussion Paper 22195",
      field: "Public procurement · Verifiable evidence",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22195",
      researchQuestion:
        "How does admitting verifiable supplier-cost evidence change a buyer's optimal procurement mechanism, profit, supplier selection, and total surplus?",
      method:
        "The paper characterizes profit-maximizing mechanisms for a buyer choosing between two ex ante identical suppliers who privately know both their costs and whether they possess evidence that verifies those costs. It compares optimal mechanisms with and without admissible evidence.",
      contribution:
        "Allowing evidence weakly raises buyer profit but can reduce total surplus even when procurement becomes more frequent. The optimal mechanism favors evidence holders and can select a higher-cost supplier; evidence raises welfare when the procurement benefit is sufficiently small and lowers it when the benefit is sufficiently large.",
      caveat:
        "This is a theoretical benchmark with two symmetric suppliers and a specified evidence technology. Real procurement systems may include multidimensional quality, collusion, review costs, legal burdens of proof, and heterogeneous bidders that change the welfare comparison.",
      tags: ["Procurement", "Mechanism design", "Evidence", "Information asymmetry"]
    },
    {
      title: "The Political Consequences of Stakeholder Governance",
      authors: "Doron Y. Levit, Markus Parlasca, and Paul Voss",
      releaseDate: "19 November 2026",
      publicationStatus:
        "ECGI Finance Working Paper 1173/2026 · DOI 10.67929/ecgi-fin-1173-2026",
      field: "Stakeholder governance · Corporate lobbying",
      sourceLabel: "ECGI",
      sourceHref:
        "https://www.ecgi.global/publications/working-papers/the-political-consequences-of-stakeholder-governance",
      researchQuestion:
        "How do lobbying opacity, advocacy-group backlash, and delegated stakeholder governance interact to shape corporate profit, political polarization, and social welfare?",
      method:
        "The authors develop a political-economy model in which corporate lobbying moves policy toward the firm's preferred outcome while advocacy groups respond. The model compares direct profit-oriented lobbying with delegation to a manager who places greater weight on citizen welfare.",
      contribution:
        "Opaque lobbying can create a ratchet in which lobbying and backlash escalate with little or no policy gain for the firm. Delegating to a stakeholder-oriented manager can buy political quiet when conflict is small, but when firm-society conflict is large the same arrangement can benefit the firm while generating more extreme and socially harmful policies.",
      caveat:
        "The paper establishes a theoretical mechanism, not the average empirical effect of stakeholder governance. Conclusions depend on the modeled information environment, advocacy response, conflict magnitude, and manager preferences, so they do not imply that stakeholder governance is uniformly beneficial or harmful.",
      tags: ["Stakeholder governance", "Lobbying", "Transparency", "Political economy"]
    },
    {
      title: "The CEO Overhang Effect",
      authors: "Maria Cecilia Bustamante, Jakub Hajda, and Boris Nikolov",
      releaseDate: "19 November 2026",
      publicationStatus:
        "ECGI Finance Working Paper 1172/2026 · DOI 10.67929/ecgi-fin-1172-2026",
      field: "Executive incentives · Corporate finance",
      sourceLabel: "ECGI",
      sourceHref:
        "https://www.ecgi.global/publications/working-papers/the-ceo-overhang-effect",
      researchQuestion:
        "Why do investment, leverage, and share repurchases change over a CEO's tenure, and what agency cost arises when current and future CEOs both receive equity?",
      method:
        "The paper documents tenure-related corporate-policy patterns and develops a dynamic model of sequential CEOs with finite horizons, base salary, and equity pay. Each CEO chooses investment, financing, and payout, and the model is calibrated to quantify the proposed mechanism.",
      contribution:
        "As turnover approaches, a growing share of capital returns and debt costs shifts toward future executives, giving the incumbent incentives to underinvest, increase leverage, and repurchase more shares. The calibration attributes an agency cost equal to about 6% of shareholder value to this CEO-overhang mechanism.",
      caveat:
        "The 6% figure is model-based rather than a direct experimental estimate, and the public abstract does not detail every dataset, identifying assumption, or calibration target. Other tenure-correlated forces, succession rules, and compensation designs may alter the mechanism's quantitative importance.",
      tags: ["CEO tenure", "Executive compensation", "Investment", "Capital structure"]
    },
    {
      title: "Bureaucratic Rigidity and Battle Outcomes: Evidence from Military Logistics in the Ming Dynasty",
      authors: "Jingjing Chen, Jianlei Han, Shing-Yi Wang, and Yongxiang Wang",
      releaseDate: "November 2026 (exact day not stated by NBER)",
      publicationStatus: "NBER Working Paper 36049 · DOI 10.3386/w36049",
      field: "State capacity · Public organization",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w36049",
      researchQuestion:
        "Can administrative rules intended to improve accountability reduce state effectiveness by making military logistics less adaptable?",
      method:
        "The authors study a 1492 Ming reform that replaced merchant grain delivery with a state relay system using prefecture handovers and fixed routes. They combine court records on supply shortages with 406 defensive battles and compare outcomes around formerly merchant-supplied and state-supplied garrisons, including settings where resupply difficulty and procedural costs differed.",
      contribution:
        "After the reform, formerly merchant-supplied garrisons recorded more shortages relative to state-supplied garrisons, and victory rates fell near the affected garrisons. Declines were largest in longer wars, walled-city defenses, routes crossing more prefectures, and places exposed to floods, droughts, or rugged terrain.",
      caveat:
        "The evidence comes from a specific historical military system, and the public abstract does not resolve every concern about garrison placement, conflict selection, or contemporaneous change. Translating the magnitude to modern agencies requires care even if the rigidity mechanism is more general.",
      tags: ["State capacity", "Bureaucracy", "Public organization", "Historical evidence"]
    },
    {
      title: "Are Republicans and Democrats Different Taxpayers? Evidence From Property Tax Appeals",
      authors: "Brad C. Nathan, Ricardo Perez-Truglia, and Alejandro Zentner",
      releaseDate: "November 2026 (exact day not stated by NBER)",
      publicationStatus: "NBER Working Paper 36055 · DOI 10.3386/w36055",
      field: "Tax administration · Political economy",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w36055",
      researchQuestion:
        "Do partisan differences in stated tax preferences translate into different propensities or motives to appeal property-tax assessments?",
      method:
        "The study first surveys beliefs about partisan differences, then links Dallas County administrative property-tax records to voting records. It benchmarks the partisan appeal gap against demographic gaps and uses quasi-experimental and field-experimental evidence to compare the motives underlying appeals.",
      contribution:
        "Respondents expect Republican homeowners to appeal more often, but the observed partisan gap is only 0.29 percentage points and is small relative to several demographic benchmarks. The quasi-experimental and experimental evidence indicates that Democrats and Republicans appeal for broadly similar reasons.",
      caveat:
        "Property-tax appeals are a legal and locally specific form of tax avoidance, not a complete measure of compliance or tax attitudes. Dallas County institutions, voter-file linkage, party classification, and appeal access may limit generalization to other taxes and jurisdictions.",
      tags: ["Tax appeals", "Partisanship", "Administrative data", "Field experiment"]
    }
  ],
  methodsInIssue: [
    {
      label: "Partial identification from equilibrium restrictions",
      description:
        "The market-for-lemons paper shows how price optimality and traded quantity can bound hidden quality and welfare without pretending that the data point-identify them."
    },
    {
      label: "Mechanism and political-economy theory",
      description:
        "The procurement and stakeholder-governance papers use formal models to isolate how evidence rules, opacity, backlash, and delegation can reverse intuitive welfare conclusions."
    },
    {
      label: "Dynamic calibration of executive incentives",
      description:
        "The CEO-overhang paper links tenure patterns to a sequential-executive model and quantifies the mechanism through calibration; the resulting magnitude remains model-dependent."
    },
    {
      label: "Institutional history and linked administrative records",
      description:
        "The bureaucracy and taxpayer papers combine institutional detail with historical or modern administrative data, while using comparison groups, experiments, or mechanism checks to distinguish observed patterns from simple description."
    }
  ],
  watchlist: [
    "Whether partial-identification tools can be operationalized in regulated markets where quality and buyer preferences are only partly observed.",
    "How procurement law should trade off verifiable cost evidence against selection distortions and evidence-production costs.",
    "Which lobbying-disclosure and governance arrangements reduce political escalation without allowing delegation to obscure corporate influence.",
    "Whether compensation and succession design can mitigate CEO-overhang incentives without inducing new short-termism or retention costs.",
    "How procedural accountability can preserve flexibility in public organizations, and whether modern administrative data reproduce the historical rigidity mechanism.",
    "Whether the small partisan gap in property-tax appeals generalizes across jurisdictions, tax types, and more legally consequential compliance decisions."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "30 November 2026 · 08:00"
};
