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
  issue: "Issue 013",
  publishedAt: "26 October 2026",
  period: "Review window: 20–26 October 2026",
  headline:
    "New research on merger conduct, digital consent, common ownership, financial accountability, and mortgage pricing",
  editorialNote:
    "Research Weekly tracks newly released law-and-economics scholarship. Each entry identifies the paper's status and source date, then separates its question, method, contribution, and interpretation boundary.",
  coverageNote:
    "This issue selects five papers from three independent research series: two CEPR Discussion Papers, one ECGI Working Paper, and two NBER Working Papers. The review began on 20 October, immediately after Issue 012. CEPR and ECGI supply exact publication dates between 22 and 25 October. NBER identifies the selected papers as October 2026 releases and placed them in its New This Week listing reviewed on 26 October, but its public paper records do not state an exact day; those entries therefore report the month without inventing a date. The candidate search also checked IZA, CESifo, journal and publisher pages, author pages, and institutional repositories. IZA's public index showed no paper newer than those already reviewed, while no additional CESifo or journal record combined this window's timing, direct law-and-economics relevance, and a sufficiently verifiable public abstract. Titles, complete author lists, series numbers, DOI information where supplied, dates as supplied, methods, and abstract-level claims were checked against the institutional paper pages. No source supplies more than two-fifths of the issue.",
  latestResearch: [
    {
      title: "Separating Cost Recovery from Conduct",
      authors: "Martin Pesendorfer and Taisuke Otsu",
      releaseDate: "25 October 2026",
      publicationStatus: "CEPR Discussion Paper 22082",
      field: "Merger analysis · Industrial organization",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22082",
      researchQuestion:
        "Can marginal costs be recovered without imposing a particular model of post-merger conduct, and what would that imply for diagnosis and remedies?",
      method:
        "The paper derives marginal costs from incentive-compatibility first-order conditions while allowing firms to hold private cost information. It applies the approach to the MillerCoors joint venture and constructs bounds on welfare outcomes across incentive-compatible market mechanisms.",
      contribution:
        "In the application, post-merger price increases can largely be rationalized by firm-specific cost heterogeneity and unilateral pricing incentives rather than large coordinated effects. The welfare bounds provide a way to compare merger remedies without selecting a single conduct model in advance.",
      caveat:
        "The method still relies on incentive-compatibility and equilibrium restrictions, and the empirical conclusions are tied to the information and market structure in the MillerCoors setting. The abstract does not report all data construction or counterfactual implementation details.",
      tags: ["Merger review", "Marginal costs", "Private information", "Remedies"]
    },
    {
      title: "Consent and Choice: Experimental Evidence on User Behavior at Consent Banners",
      authors: "Cristiana Firullo, Francesco Decarolis, Cristobal Cheyre, and Alessandro Acquisti",
      releaseDate: "23 October 2026",
      publicationStatus: "CEPR Discussion Paper 22078",
      field: "Privacy regulation · Consumer choice",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22078",
      researchQuestion:
        "How do people respond to consent banners across repeated real-world encounters, and how do interface rules alter engagement, exit, and expressed tracking preferences?",
      method:
        "A browser extension followed a panel of 789 U.S. Chrome users for up to three months across the websites they visited. The study compares engagement and exit across banner designs and evaluates whether early choices predict later responses.",
      contribution:
        "Users engage with about one-third of encountered banners. Sites that force a response obtain roughly three times more engagement but lose more than twice as many visitors after the encounter; a one-click rejection option materially changes stated choices. An early-choice signal predicts about two-thirds of later encounters, and the authors estimate that removing forced responses would reduce time spent on banners by 58%.",
      caveat:
        "The panel covers U.S. Chrome users who kept the extension installed, so selection and external validity require care. Observed clicks do not by themselves establish informed or legally valid consent, and time savings do not capture every privacy or welfare consequence.",
      tags: ["Consent banners", "Privacy", "Interface design", "Consumer behavior"]
    },
    {
      title: "Common Ownership around the World",
      authors:
        "Miguel Antón, Florian Ederer, Mireia Giné, Guillermo Ramirez-Chiang, and Kenneth Khoo",
      releaseDate: "22 October 2026",
      publicationStatus: "ECGI Finance Working Paper 1161/2026",
      field: "Corporate ownership · Competition policy",
      sourceLabel: "ECGI",
      sourceHref:
        "https://www.ecgi.global/publications/working-papers/common-ownership-around-the-world",
      researchQuestion:
        "How prevalent is common ownership across countries, which investors drive it, and how does it relate to legal and market institutions?",
      method:
        "The authors measure common ownership in 49 countries from 2005 to 2023, covering economies responsible for 86% of global GDP. They examine pairwise implied profit weights across firm-size groups and relate the measures to investor protection, competition law, ESG disclosure, and labor-market frictions, with robustness checks for dual-class shares and ownership chains.",
      contribution:
        "Common ownership rises markedly across the sample: the median country's average pairwise implied profit weight more than doubles, while the U.S. measure more than triples. Growth is steepest among large firms and is linked to increasing concentration of institutional investment, especially among BlackRock, Vanguard, and State Street.",
      caveat:
        "The paper documents ownership patterns and institutional correlations; it does not by itself identify effects on prices, competition, or welfare. Results depend on the construction of implied profit weights, although the authors report robustness beyond a one-share-one-vote assumption.",
      tags: ["Common ownership", "Institutional investors", "Competition law", "Global markets"]
    },
    {
      title: "Upgrading Financial Markets",
      authors: "Francis Annan and Seth Garz",
      releaseDate: "October 2026 (exact day not stated by NBER)",
      publicationStatus: "NBER Working Paper 35912 · DOI 10.3386/w35912",
      field: "Financial inclusion · Consumer protection",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35912",
      researchQuestion:
        "Is expanded financial infrastructure sufficient to improve market development, or must provider accountability change at the same time?",
      method:
        "A field experiment across 195 rural communities in Sierra Leone upgrades Village Savings and Loan Associations into mobile-money and bank agents, cross-randomized with a monthly consumer-feedback mechanism. The study tracks operational quality, privacy and consumer protection, usage, revenue, savings digitization, and income.",
      contribution:
        "Infrastructure upgrades expand access, while feedback raises operational performance by 20.5 percentage points, an 85% improvement, particularly in privacy and consumer protection. Feedback also raises usage and revenue; upgraded associations show greater savings digitization and higher income, consistent with accountability aligning agents' incentives with consumer and principal interests.",
      caveat:
        "The results arise from a specific delegated-intermediation arrangement in rural Sierra Leone. Scaling the feedback mechanism may change monitoring quality or costs, and the public record does not establish that every reported outcome will persist beyond the experimental period.",
      tags: ["Financial inclusion", "Consumer protection", "Accountability", "Field experiment"]
    },
    {
      title: "Pricing Power in the Mortgage Market: Evidence from GSE Fee Waivers",
      authors: "Neil Bhutta, Benjamin J. Keys, and Adithya Raajkumar",
      releaseDate: "October 2026 (exact day not stated by NBER)",
      publicationStatus: "NBER Working Paper 35907 · DOI 10.3386/w35907",
      field: "Mortgage regulation · Intermediary incentives",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w35907",
      researchQuestion:
        "How much of a targeted mortgage fee waiver reaches eligible borrowers, and can individual loan officers exercise pricing power despite steering restrictions?",
      method:
        "The study examines a Fannie Mae and Freddie Mac fee waiver for lower-income first-time homebuyers during 2023–2024. It estimates pass-through to borrowers and compares loan officers using their prior tendency to originate expensive mortgages independently of lender-level pricing.",
      contribution:
        "Mortgage intermediaries capture more than 60% of the estimated $1.5 billion in fee waivers rather than passing the full savings to borrowers. Loan officers with a history of expensive originations pass through less than 20%, which the authors interpret as evidence of individual-level pricing power and continued steering incentives.",
      caveat:
        "The public abstract does not disclose the full identification strategy or every pricing control. Partial pass-through is not itself proof of unlawful conduct, and the estimates concern a specific waiver, borrower group, and institutional setting.",
      tags: ["Mortgages", "Fee waivers", "Pass-through", "Sales incentives"]
    }
  ],
  methodsInIssue: [
    {
      label: "Partial identification in merger analysis",
      description:
        "The merger paper recovers costs and bounds welfare without committing to one conduct model, trading a strong point prediction for conclusions that remain valid across incentive-compatible mechanisms."
    },
    {
      label: "Behavior observed across repeated digital choices",
      description:
        "The consent study follows users across sites and time, allowing it to distinguish one-off clicks from persistent response patterns while retaining the selection limits of an extension-based panel."
    },
    {
      label: "Cross-country ownership measurement",
      description:
        "The ECGI paper builds comparable common-ownership measures across 49 countries and tests alternative control-right assumptions; its institutional relationships remain descriptive rather than causal."
    },
    {
      label: "Randomized accountability and policy pass-through",
      description:
        "The Sierra Leone experiment separates infrastructure from feedback, while the mortgage study examines how an upstream subsidy is divided between intermediaries and intended beneficiaries."
    }
  ],
  watchlist: [
    "Whether conduct-robust cost recovery changes merger-remedy choices in markets beyond beer.",
    "How privacy law should distinguish formal banner interaction from informed, voluntary, and stable consent.",
    "Whether global common-ownership measures predict firm conduct after accounting for investor engagement, voting rights, and local competition rules.",
    "Which monitoring, compensation, and disclosure rules improve pass-through and accountability among financial intermediaries without reducing access."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "2 November 2026 · 08:00"
};
