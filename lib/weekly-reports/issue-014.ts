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
  issue: "Issue 014",
  publishedAt: "18 November 2026",
  period: "Extended review window: 27 October–17 November 2026",
  headline:
    "New research on antitrust enforcement, consumer inattention, bank liability, shareholder voting, eminent domain, and police discretion",
  editorialNote:
    "Research Weekly tracks newly released law-and-economics scholarship. Each entry identifies the paper's status and source date, then separates its question, method, contribution, and interpretation boundary.",
  coverageNote:
    "This catch-up issue reviews the full period since Issue 013 and therefore uses an extended 27 October–17 November window; the scheduled 2, 9, and 16 November editions were not published, and the gap is disclosed rather than recast as a standard seven-day issue. The final selection emphasizes six recent papers from three independent research series: two CEPR Discussion Papers, two ECGI Finance Working Papers, and two NBER Working Papers. CEPR and ECGI provide exact publication dates from 13 to 17 November. NBER labels both papers as November 2026 releases and placed them in its current working-paper listings reviewed on 18 November, but the public paper records do not state an exact day; those entries therefore report the month without inventing a date. The candidate search also reviewed earlier records in the extended window and checked IZA, CESifo, journal and publisher pages, author pages, and institutional repositories. Titles, complete author lists, series numbers, DOI information where supplied, dates as supplied, methods, and abstract-level claims were checked against the institutional paper pages. Each source supplies one-third of the issue.",
  latestResearch: [
    {
      title: "Antitrust, Market Power, and U.S. Economic Outcomes",
      authors: "Brian Amorim Cabaco and Morten Ravn",
      releaseDate: "16 November 2026",
      publicationStatus: "CEPR Discussion Paper 22186",
      field: "Antitrust enforcement · Market power",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22186",
      researchQuestion:
        "How have the composition and intensity of federal antitrust enforcement changed, and what effects do different case types have on firm markups, output, innovation, and allocative efficiency?",
      method:
        "The authors assemble a narrative record of all federal antitrust filings by the U.S. Department of Justice and Federal Trade Commission since the mid-1950s. They use defendants' stock-market reactions to construct sector-level enforcement proxies and relate enforcement changes to markups, sales, inputs, R&D capital, patenting, and resource allocation.",
      contribution:
        "The record documents a shift in the early 1980s from civil non-merger and criminal enforcement toward civil merger cases. Stronger enforcement is associated with lower defendant markups and higher output, R&D capital, patenting, and allocative efficiency; the input response differs across non-merger, criminal, and merger cases.",
      caveat:
        "The public abstract does not report every identification assumption or robustness test behind the sector-level proxies. Stock-price reactions can reflect expectations beyond enforcement intensity, and historical associations should not be read as proving that every additional case produces the same welfare effect.",
      tags: ["Antitrust", "Market power", "Enforcement", "Innovation"]
    },
    {
      title: "Does Peter Piper Pick Pepper Inattentively? Consumer Inattention to Package Content",
      authors: "Laura Grigolon, Ian Meeker, and Jakob von Ditfurth",
      releaseDate: "14 November 2026",
      publicationStatus: "CEPR Discussion Paper 22181",
      field: "Consumer protection · Product disclosure",
      sourceLabel: "CEPR",
      sourceHref: "https://cepr.org/publications/dp22181",
      researchQuestion:
        "Do consumers notice product downsizing, and how do disclosure-based salience and a ban on downsizing compare as consumer-protection responses?",
      method:
        "The paper develops a method for recovering inattention within a random-coefficient discrete-choice model and applies it to the pepper category. The empirical setting contains 30 downsizing episodes affecting about one-third of category sales.",
      contribution:
        "The estimates imply that almost no consumers notice downsizing and that demand responds more strongly to the package price than to net weight. Making downsizing salient produces larger estimated consumer-surplus gains than banning it, because restoring package content raises marginal costs and prices.",
      caveat:
        "The findings come from one product category and depend on the structural demand and inattention model. Consumer-surplus comparisons do not settle separate legal questions about deception, fairness, disclosure comprehension, or distributional effects.",
      tags: ["Consumer inattention", "Shrinkflation", "Disclosure", "Structural demand"]
    },
    {
      title: "Enhanced Liability and Bank Failure",
      authors:
        "Felipe Aldunate, Haelim Anderson, Daniel Barth, Dong Beom Choi, Dirk Jenter, Arthur G. Korteweg, and Peter Koudijs",
      releaseDate: "13 November 2026",
      publicationStatus:
        "ECGI Finance Working Paper 1169/2026 · DOI 10.67929/ecgi-fin-1169-2026",
      field: "Bank governance · Shareholder liability",
      sourceLabel: "ECGI",
      sourceHref:
        "https://www.ecgi.global/publications/working-papers/enhanced-liability-and-bank-failure",
      researchQuestion:
        "Does exposing bank shareholders and managers to losses beyond limited liability reduce bank distress and failure?",
      method:
        "The study compares roughly 4,200 similarly sized state-regulated banks in neighboring U.S. states with different liability regimes during the Great Depression. A difference-in-differences analysis adds nationally regulated banks, which faced the same liability rules across states, and tests alternative regulatory, local, and selection explanations.",
      contribution:
        "Limited-liability banks experienced a distress rate 29% higher than banks subject to enhanced liability. The authors interpret the cross-border comparisons and difference-in-differences results as evidence that greater downside exposure can materially reduce bank failure.",
      caveat:
        "The setting is the Great Depression and historically specific bank-liability regimes. Applying the estimate to modern diversified ownership, deposit insurance, resolution rules, or systemically important banks requires additional institutional analysis.",
      tags: ["Bank failure", "Limited liability", "Risk taking", "Great Depression"]
    },
    {
      title: "Stock Lending and Pass-Through Voting",
      authors: "Doron Y. Levit and George Nurisso",
      releaseDate: "17 November 2026",
      publicationStatus:
        "ECGI Finance Working Paper 1170/2026 · DOI 10.67929/ecgi-fin-1170-2026",
      field: "Shareholder voting · Securities lending",
      sourceLabel: "ECGI",
      sourceHref:
        "https://www.ecgi.global/publications/working-papers/stock-lending-and-pass-through-voting",
      researchQuestion:
        "Does allowing fund investors to cast portfolio-company votes directly necessarily align voting outcomes with their preferences when the fund manager still controls share lending?",
      method:
        "The paper develops a theoretical model in which investors, fund managers, and traders have heterogeneous preferences and can lend shares, trade, and vote. It analyzes how pass-through voting changes the manager's lending decision and the allocation of votes attached to lent shares.",
      contribution:
        "Pass-through voting can move outcomes farther from fund investors' preferences because managers may lend more shares once they no longer cast the votes. Traders with different preferences then acquire the voting rights, potentially leaving fund investors worse off even after lending revenue.",
      caveat:
        "This is a theoretical mechanism rather than an estimate of average real-world effects. Its practical force depends on lending volumes, recall rules, investor participation, preference differences, and how a particular pass-through system is designed.",
      tags: ["Pass-through voting", "Stock lending", "Institutional investors", "Governance"]
    },
    {
      title: "Federal Eminent Domain and Interstate Energy Infrastructure: Evidence from History",
      authors: "Zachary Liscow, Joseph S. Shapiro, and Heidi L. Williams",
      releaseDate: "November 2026 (exact day not stated by NBER)",
      publicationStatus: "NBER Working Paper 36027 · DOI 10.3386/w36027",
      field: "Property rights · Energy infrastructure",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w36027",
      researchQuestion:
        "How did federal eminent-domain authority affect construction of interstate energy-transportation infrastructure?",
      method:
        "Using newly digitized government records and trade-press listings, the authors study the 1947 Natural Gas Act amendment that authorized federally approved interstate gas pipelines to acquire rights of way when bargaining failed. They compare interstate gas-pipeline construction with oil pipelines and intrastate gas pipelines, neither directly affected by the reform.",
      contribution:
        "After 1947, annual additions to interstate gas-pipeline mileage rose nearly sixfold while oil-pipeline growth remained stable; the increase was also nearly five times the gain for intrastate gas pipelines. The comparisons support a substantial construction response to federal eminent-domain authority.",
      caveat:
        "Historical comparisons may still capture contemporaneous differences across pipeline types, and construction volume does not measure the full welfare balance. Current electricity-transmission projects differ in technology, siting conflicts, environmental review, federalism, and distributional consequences.",
      tags: ["Eminent domain", "Property rights", "Infrastructure", "Energy"]
    },
    {
      title: "Crime on ICE: Local Police Behavior and Immigration Enforcement in the United States",
      authors: "John J. Donohue, Tai Markman, and Eric A. Baldwin",
      releaseDate: "November 2026 (exact day not stated by NBER)",
      publicationStatus: "NBER Working Paper 36026 · DOI 10.3386/w36026",
      field: "Police discretion · Immigration enforcement",
      sourceLabel: "NBER",
      sourceHref: "https://www.nber.org/papers/w36026",
      researchQuestion:
        "How does delegating federal immigration-enforcement authority to local police departments change arrest priorities and public-safety outcomes?",
      method:
        "The study uses FBI Uniform Crime Report data from 2000–2024 and staggered adoption of local immigration-enforcement authority across U.S. jurisdictions to estimate effects on arrests and reported offenses.",
      contribution:
        "Delegated authority increases arrests for low-level discretionary offenses by about 7%, without corresponding reductions in offense rates or serious crime. The authors interpret the pattern as a reallocation of police effort toward discretionary enforcement rather than a measurable public-safety gain.",
      caveat:
        "Staggered-adoption estimates depend on timing and comparison-group assumptions, and the public abstract does not report every pre-trend or heterogeneity check. Arrest and reported-crime data do not capture all community, reporting, deterrence, or legitimacy effects.",
      tags: ["Police discretion", "Immigration enforcement", "Arrests", "Public safety"]
    }
  ],
  methodsInIssue: [
    {
      label: "Narrative enforcement records and market reactions",
      description:
        "The antitrust paper combines a long-run filing record with stock-price responses to build enforcement exposure; the design expands institutional coverage but requires careful interpretation of what market reactions capture."
    },
    {
      label: "Structural recovery of consumer inattention",
      description:
        "The downsizing paper embeds attention in a random-coefficient demand model, enabling policy counterfactuals while making the welfare conclusions dependent on structural assumptions."
    },
    {
      label: "Historical borders, comparison groups, and staggered adoption",
      description:
        "The bank-liability, eminent-domain, and local-policing papers use institutional discontinuities or timing variation; each design gains leverage from legal change but remains bounded by comparability and implementation assumptions."
    },
    {
      label: "Governance theory with endogenous share lending",
      description:
        "The pass-through-voting model highlights an indirect response: reallocating formal voting authority can change lending behavior and therefore who ultimately holds the vote."
    }
  ],
  watchlist: [
    "Whether renewed antitrust enforcement produces durable productivity and innovation gains across case types and industries.",
    "Which disclosure formats make package-size changes salient without creating excessive information or compliance costs.",
    "How modern bank-resolution and deposit-insurance systems would alter the incentive effects of enhanced shareholder or manager liability.",
    "Whether pass-through voting rules account for securities lending, recalls, participation costs, and preference heterogeneity.",
    "How eminent-domain authority and delegated police powers should be evaluated when output measures omit distribution, legitimacy, and procedural protections."
  ]
};

export const WEEKLY_REPORT_SCHEDULE = {
  label: "Every Monday · 08:00",
  timezone: "China Standard Time (UTC+8)",
  nextUpdate: "23 November 2026 · 08:00"
};
