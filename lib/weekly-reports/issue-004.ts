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
  issue: "Issue 004",
  publishedAt: "17 August 2026",
  period: "Review window: 11–17 August 2026",
  headline: "Six new papers on creditor rights, bank supervision, offshoring, common ownership, legal institutions, and systemic risk",
  editorialNote:
    "Research Weekly is a discovery feed for newly released law-and-economics scholarship. Each entry identifies the publication status, source date, research question, method, principal contribution, and an interpretive caution before linking to the primary repository record.",
  coverageNote:
    "This edition covers six CEPR Discussion Papers published from 11 through 17 August 2026. Each date, title, author list, paper number, method description, and result summary was checked against the paper's official CEPR record. The review window was not expanded.",
  latestResearch: [
    {
      title: "Credit Cycles and Creditor Rights",
      authors: "Martin Kornejew, Shohini Kundu, and Karsten Müller",
      releaseDate: "17 August 2026",
      publicationStatus: "CEPR Discussion Paper 21848",
      field: "Creditor rights · Credit cycles",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21848",
      researchQuestion:
        "Do stronger creditor rights amplify credit-cycle losses by accelerating enforcement, or dampen them by reallocating credit toward more productive firms?",
      method:
        "The paper combines a panel of 39 countries from 1978–2019 with firm-level evidence around Delaware's adoption of antirecharacterization laws.",
      contribution:
        "Credit expansions under stronger creditor protection are followed by smaller output losses, fewer non-performing loans, and more credit reallocation away from unproductive sectors. In the Delaware setting, protected creditors cut credit to low-productivity firms while easing constraints for productive firms.",
      caveat:
        "The cross-country component is not by itself a causal design, and the Delaware reform evidence may not generalize to every insolvency or secured-credit regime.",
      tags: ["Creditor rights", "Credit booms", "Capital allocation", "Delaware"]
    },
    {
      title: "Subordinates in Charge: Does Delegation Improve Bank Supervision?",
      authors: "Wouter Dessein, Di Gong, Thomas Lambert, and Wolf Wagner",
      releaseDate: "16 August 2026",
      publicationStatus: "CEPR Discussion Paper 21846",
      field: "Bank regulation · Organizational design",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21846",
      researchQuestion:
        "Can delegating supervisory authority to a lower organizational level reduce information loss and improve detection of banking misconduct?",
      method:
        "A model of bias and information loss in supervisory communication is paired with evidence from a reform that delegated decisions over a subset of bank branches.",
      contribution:
        "Affected branches became 57–80% more likely to face supervisory intervention. The authors interpret the increase as improved misconduct detection and severity assessment, and report evidence inconsistent with greater general stringency or greater bank risk-taking.",
      caveat:
        "An intervention is not identical to a final adjudication of misconduct, and the magnitude depends on the institutional setting and scope of this delegation reform.",
      tags: ["Bank supervision", "Delegation", "Fraud detection", "Information loss"]
    },
    {
      title: "Offshoring and Voting Patterns in the US",
      authors: "Anna Maria Mayda, Lindsay Oldenski, and Walter Steingress",
      releaseDate: "14 August 2026",
      publicationStatus: "CEPR Discussion Paper 21844",
      field: "Political economy · International production",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21844",
      researchQuestion:
        "How is offshoring by U.S. multinational firms associated with voting for incumbent-party candidates across counties with different workforce characteristics?",
      method:
        "County-level presidential, House, and Senate voting data are combined with industry-level offshoring measures from 2000–2020, focusing on foreign-affiliate employment in vertically oriented industries.",
      contribution:
        "Greater offshoring is associated with higher incumbent vote shares in counties with more college-educated workers and lower shares in counties with more manufacturing or more easily relocated occupations, matching heterogeneous employment effects.",
      caveat:
        "The heterogeneity is consistent with a labor-market channel, but it does not establish that every voter responds through personal offshoring exposure rather than correlated local conditions.",
      tags: ["Offshoring", "Voting", "Local labor markets", "Political economy"]
    },
    {
      title: "Common Ownership and Collusion",
      authors: "Vincent Abraham, Florian Ederer, and Catarina Marvão",
      releaseDate: "11 August 2026",
      publicationStatus: "CEPR Discussion Paper 21841",
      field: "Competition policy · Corporate ownership",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21841",
      researchQuestion:
        "Can common ownership facilitate explicit collusion, and how is a firm's internalization of a rival's profits related to cartel entry and durability?",
      method:
        "Hand-collected ownership data are linked to the universe of registered legal cartels in Sweden, with firm-pair profit weights measuring how much one firm internalizes a rival's profits.",
      contribution:
        "Higher profit weights are associated with cartel participation, predict future participation, and correspond to longer cartel duration. The relation is concentrated where the internalizing firm colludes and the rival does not, indicating an asymmetric complement-substitute pattern.",
      caveat:
        "The legal-cartel setting avoids selection based only on detected illegal cartels, but its transparency and historical institutions may limit generalization to secret cartels or current ownership structures.",
      tags: ["Common ownership", "Cartels", "Competition policy", "Sweden"]
    },
    {
      title: "Trust, Rule of Law, and the Size Premium: Evidence from a Meta-Analysis",
      authors: "Jiri Schwarz, Tomas Havranek, Zuzana Irsova, and Jiri Novak",
      releaseDate: "11 August 2026",
      publicationStatus: "CEPR Discussion Paper 21840",
      field: "Legal institutions · Asset pricing",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21840",
      researchQuestion:
        "Can cross-country differences in generalized trust and rule of law explain why reported estimates of the small-firm return premium vary so widely?",
      method:
        "The authors synthesize 1,613 size-slope estimates from 105 studies across 31 countries using meta-regressions and Bayesian model averaging over alternative control sets.",
      contribution:
        "Rule of law provides the more stable institutional association: stronger rule of law corresponds to more negative reported size slopes and thus larger conventional size premia. The trust association is conditional and less precisely estimated.",
      caveat:
        "The study organizes heterogeneity in reported estimates; it does not identify causal effects of trust or legal institutions on asset returns.",
      tags: ["Rule of law", "Trust", "Size premium", "Meta-analysis"]
    },
    {
      title: "The Evolving Nexus: Sovereigns, Banks and NBFIs",
      authors: "Stefan Avdjiev, Bryan Hardy, and Maximilian Jager",
      releaseDate: "11 August 2026",
      publicationStatus: "CEPR Discussion Paper 21839",
      field: "Financial regulation · Systemic risk",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp21839",
      researchQuestion:
        "Has the traditional sovereign-bank risk nexus expanded to include non-bank financial institutions as their sovereign-bond footprint has grown?",
      method:
        "The paper studies risk transmission with European bank-level data and global country-level data on sovereigns, banks, and non-bank financial institutions.",
      contribution:
        "Direct sovereign exposures have recently become less important for bank-sovereign risk co-movement, while banks' NBFI exposures have become significant. NBFIs' sovereign holdings also increasingly track NBFI-sovereign risk co-movement.",
      caveat:
        "Co-movement evidence identifies relevant exposure channels but does not establish that every exposure is causal or isolate the effect of a specific legal rule.",
      tags: ["Sovereign risk", "Banks", "NBFIs", "Financial stability"]
    }
  ],
  methodsInIssue: [
    {
      label: "Cross-country panel plus legal reform evidence",
      description: "Combines macro credit cycles with firm-level responses to Delaware creditor-protection reform."
    },
    {
      label: "Organizational model plus supervisory reform",
      description: "Connects communication frictions inside a regulator to changes in delegated intervention authority."
    },
    {
      label: "Linked political-economy panel",
      description: "Combines county voting, workforce composition, and industry offshoring over two decades."
    },
    {
      label: "Ownership-cartel linkage",
      description: "Matches firm-pair profit weights to a complete registry of legal cartels rather than detected illegal cartels alone."
    },
    {
      label: "Meta-analysis and financial-network evidence",
      description: "Uses cross-study synthesis for legal institutions and multi-level exposure data for sovereign-bank-NBFI risk."
    }
  ],
  watchlist: [
    "Which components of creditor-protection law drive productive reallocation without imposing excessive liquidation or renegotiation costs.",
    "Whether supervisory delegation improves final enforcement accuracy, deterrence, and bank outcomes beyond intervention rates.",
    "How local adjustment policy changes the electoral consequences of offshoring across worker groups and regions.",
    "Whether common-ownership measures predict tacit or illegal collusion in settings without a complete cartel registry.",
    "Why stronger rule of law is associated with a larger reported size premium and which mechanisms survive causal designs.",
    "Which disclosure, liquidity, and prudential rules best address the expanding sovereign-bank-NBFI nexus."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "24 August 2026 · 08:00"
};
