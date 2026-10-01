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
  issue: "Issue 009",
  publishedAt: "1 October 2026",
  period: "Expanded review window: 22 September–1 October 2026",
  headline:
    "Six new papers on AI delegation, investor governance, bank accounting, financial trust, non-tariff barriers, and fiscal constraints",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "This edition covers six CEPR Discussion Papers published or substantively revised from 28 September through 1 October 2026. The review window was expanded to 22 September–1 October because the scheduled 28 September issue was not published. Each title, complete author list, exact publication or revision date, discussion-paper number, method description, and result summary was checked against the paper's official CEPR record. All six selections come from one working-paper series and emphasize institutionally relevant research; the issue is not a comprehensive census of every paper released during the expanded window.",
  latestResearch: [
    {
      title: "Everyone Is a Manager: AI Use as an Act of Management",
      authors: "Benjamin Leyden and Daniela Scur",
      releaseDate: "1 October 2026 (revised; first published 30 September)",
      publicationStatus: "CEPR Discussion Paper 22002",
      field: "Organizational economics · AI governance",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22002",
      researchQuestion:
        "Why do workers and firms obtain heterogeneous returns from AI assistants, and how do delegation, verification, and error-cost allocation shape those returns?",
      method:
        "The paper develops a theoretical model in which AI use converts knowledge work into a managerial task. Returns depend on a worker's ability to direct the tool and verify its output, while reliability, learning-by-doing, job sorting, and the allocation of error costs determine equilibrium behavior.",
      contribution:
        "As AI becomes more reliable, the marginal value of skill shifts from verification toward direction. Verification can then collapse when checking is no longer privately worthwhile, especially where workers bear only part of the cost of errors; the strongest verifiers sort into jobs where verification failure is most costly.",
      caveat:
        "The mechanisms are theoretical and do not estimate how quickly verification skill decays or how large error externalities are in actual workplaces. Legal duties, auditability, organizational controls, and liability allocation may alter the private incentives assumed by the model.",
      tags: ["Artificial intelligence", "Delegation", "Verification", "Agency costs"]
    },
    {
      title: "Quantifying Non-Tariff Barriers: Brexit, Input Sourcing and Firm Performance",
      authors: "Thomas Sampson, Kalina Manova, Rebecca Freeman, and Gustaf Dillner",
      releaseDate: "29 September 2026",
      publicationStatus: "CEPR Discussion Paper 21997",
      field: "Trade institutions · Regulatory barriers",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21997",
      researchQuestion:
        "How did the post-Brexit Trade and Cooperation Agreement alter UK firms' sales, input sourcing, trade costs, and production costs?",
      method:
        "The authors compare firm outcomes by pre-Brexit exposure to EU trade, document changes in sales and sourcing after the agreement, and use a trade model to infer the implied non-tariff cost of EU inputs.",
      contribution:
        "More EU-exposed firms reduced sales and input expenditure and substituted toward domestic and non-EU inputs. The model implies that the agreement raised trade costs on EU imports by 21% and increased unit production costs by 3.1% for the average UK importer, quantifying the value of EU membership in reducing non-tariff barriers.",
      caveat:
        "Causal interpretation requires that other post-Brexit shocks did not differentially affect firms according to prior EU exposure. The 21% and 3.1% magnitudes are model-based translations of observed sourcing responses, not directly observed tariffs or accounting costs.",
      tags: ["Brexit", "Non-tariff barriers", "Input sourcing", "Firm costs"]
    },
    {
      title: "Fiscal Constraints on Monetary Policy: How Debt Limits Monetary Effectiveness",
      authors: "Christian Bayer, Zheng Gong, and Keith Kuester",
      releaseDate: "29 September 2026",
      publicationStatus: "CEPR Discussion Paper 21995",
      field: "Fiscal institutions · Monetary policy",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21995",
      researchQuestion:
        "How does the timing of fiscal adjustment to the government's debt burden change the output and inflation effects of monetary tightening?",
      method:
        "The paper derives closed-form results in a New Keynesian model where public debt supplies liquidity services, examines the predicted mechanism in data, and evaluates its quantitative importance in a richer heterogeneous-agent overlapping-generations model.",
      contribution:
        "Delaying fiscal adjustment can make outcomes resemble an active-fiscal-policy regime even when adjustment eventually occurs. With finite delays, a rate increase can become inflationary and potentially expansionary because the fiscal footprint and liquidity value of debt reshape monetary transmission.",
      caveat:
        "The sign reversal is conditional on the model's fiscal timing, debt-liquidity, and expectation mechanisms. Empirical consistency and quantitative calibration do not by themselves identify the fiscal-adjustment rule that would prevail after a particular policy decision.",
      tags: ["Public debt", "Monetary transmission", "Fiscal adjustment", "HANK-OLG"]
    },
    {
      title: "Governing Global Externalities: Investor Voice Amid Fragmented Policy",
      authors: "Robin Döttling, Doron Levit, Nadya Malenko, and Magdalena Rola-Janicka",
      releaseDate: "28 September 2026",
      publicationStatus: "CEPR Discussion Paper 21986",
      field: "Corporate governance · Regulatory coordination",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21986",
      researchQuestion:
        "When can corporate stewardship or investor policy advocacy reduce a multinational firm's cross-border externalities under fragmented national regulation?",
      method:
        "A theoretical model compares investor influence over a firm's global operations with advocacy directed at local regulation when political frictions, regulatory arbitrage, and production leakage vary across jurisdictions.",
      contribution:
        "When foreign political frictions prevent regulation, leakage weakens local advocacy but can strengthen the case for global stewardship. When foreign regulation is feasible, stewardship may crowd it out and worsen policy miscoordination, whereas local advocacy can crowd in foreign regulation and reduce externalities abroad.",
      caveat:
        "The results characterize strategic conditions rather than estimating the effects of observed stewardship campaigns. Investor objectives, fiduciary constraints, ownership concentration, regulator responsiveness, and the measurability of externalities determine whether either channel is implementable.",
      tags: ["Stewardship", "Policy advocacy", "Externalities", "Regulatory arbitrage"]
    },
    {
      title: "Forward-Looking Credit Loss Recognition and Banks’ Internal Risk Models",
      authors: "Jannis Bischof, Rainer Haselmann, Frederik Kohl, and Oliver Schlueter",
      releaseDate: "28 September 2026",
      publicationStatus: "CEPR Discussion Paper 21985",
      field: "Bank regulation · Accounting",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21985",
      researchQuestion:
        "Does IFRS 9 improve the timeliness of bank credit-loss recognition, or does the discretion embedded in forward-looking estimates distort internal ratings and lending?",
      method:
        "Using supervisory data on German banks' internal rating models, the authors compare IFRS 9 adopters with unaffected banks and examine rating updates, borrower-level ratings, rating precision, lending responses, and behavior around provisioning thresholds.",
      contribution:
        "Adopters update risk estimates more often but give more favorable and less precise ratings to otherwise identical borrowers. Banks shift lending away from borrowers likely to trigger future provisions, while expected losses are underreported near discrete thresholds, consistent with optimizing model inputs rather than portfolio risk alone.",
      caveat:
        "The comparison depends on unaffected banks providing a valid counterfactual and on supervisory measures capturing economically comparable risk. Strategic discretion is a supported interpretation, but concurrent regulatory changes or model redevelopment could also influence ratings and lending.",
      tags: ["IFRS 9", "Loan-loss provisions", "Internal ratings", "Regulatory discretion"]
    },
    {
      title: "Trust and Investment Loss: Evidence from UK Financial Corporate Failures",
      authors: "Renata Kosova and Alexander Michaelides",
      releaseDate: "28 September 2026",
      publicationStatus: "CEPR Discussion Paper 21984",
      field: "Investor protection · Financial trust",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21984",
      researchQuestion:
        "How does direct investment loss from prominent corporate failures affect trust in markets, regulators, auditors, compensation, and future risky-asset participation?",
      method:
        "The authors survey investors exposed to recent UK financial corporate failures and compare direct experience with a separate survey in which master's students read about the losses of others.",
      contribution:
        "Direct losses reduce trust in financial markets, regulators, and large audit firms and lower intended participation in risky assets. Potential compensation does not fully restore trust, and information about others' losses also reduces trust, though less than personal experience.",
      caveat:
        "Investors in failed firms are not randomly exposed, so differences may reflect selection, loss severity, or case-specific institutional responses as well as direct experience. Student information treatments are not a substitute for estimating behavior among representative market participants.",
      tags: ["Investor trust", "Corporate failure", "Audit", "Market participation"]
    }
  ],
  methodsInIssue: [
    {
      label: "Delegation and skill-investment theory",
      description:
        "A managerial model links AI reliability, direction, verification, learning, error externalities, and occupational sorting."
    },
    {
      label: "Exposure design with structural trade mapping",
      description:
        "Pre-Brexit EU exposure identifies differential firm responses before a trade model converts sourcing shifts into cost equivalents."
    },
    {
      label: "Closed-form theory plus quantitative macroeconomics",
      description:
        "Analytical New Keynesian results, empirical patterns, and a HANK-OLG model trace the fiscal boundary of monetary transmission."
    },
    {
      label: "Strategic governance modeling",
      description:
        "A multi-jurisdiction model compares firm-level stewardship and regulator-facing advocacy under leakage and political frictions."
    },
    {
      label: "Supervisory microdata and policy exposure",
      description:
        "Internal bank ratings reveal timeliness, discretion, lending shifts, and threshold behavior following forward-looking provisioning."
    },
    {
      label: "Exposed-investor and information surveys",
      description:
        "Surveys contrast trust after personal financial loss with responses to learning about comparable failures affecting others."
    }
  ],
  watchlist: [
    "Which audit, liability, and workflow controls preserve verification skill when AI reliability rises and error costs fall partly on others.",
    "How customs procedures, product standards, rules of origin, and services restrictions separately contribute to measured post-Brexit trade costs.",
    "Which fiscal rules and debt-management institutions keep monetary tightening effective when public debt supplies liquidity services.",
    "When investor stewardship complements rather than displaces public regulation across jurisdictions with unequal enforcement capacity.",
    "Whether supervisory validation and threshold redesign can retain timely IFRS 9 recognition while reducing strategic internal-rating discretion.",
    "Which compensation, audit, resolution, and disclosure institutions can rebuild investor trust after financial corporate failures."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "5 October 2026 · 08:00"
};
