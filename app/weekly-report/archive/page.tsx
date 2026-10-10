import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { WEEKLY_REPORT_ARCHIVE } from "@/lib/weekly-report-archive";

export const metadata: Metadata = {
  title: "Research Weekly Archive",
  description:
    "Browse past issues of Law and Economics Research Weekly, including their source windows, methods, findings, and interpretation cautions."
};

export default function WeeklyReportArchivePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <SectionTitle
          title="Research Weekly Archive"
          subtitle="Complete back issues, preserved with their original source windows, methods, findings, and reading cautions."
        />
        <Link href="/weekly-report" className="w-fit text-sm text-institute underline underline-offset-4 hover:text-accent">
          Return to the latest issue →
        </Link>
      </div>

      <section aria-labelledby="archive-list">
        <div className="border-b border-border/70 pb-4">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">Issue index</p>
          <h2 id="archive-list" className="mt-2 font-serifCn text-3xl text-accent">
            {WEEKLY_REPORT_ARCHIVE.length} preserved issues
          </h2>
        </div>

        <div className="divide-y divide-border/70">
          {WEEKLY_REPORT_ARCHIVE.map(({ slug, report, current }) => (
            <article key={slug} className="grid gap-5 py-7 md:grid-cols-[150px_minmax(0,1fr)_auto] md:items-start">
              <div>
                <p className="font-serifCn text-3xl text-signal">{report.issue}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{report.publishedAt}</p>
                {current ? (
                  <span className="mt-3 inline-block border border-stanford-light px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-signal">
                    Current
                  </span>
                ) : null}
              </div>
              <div>
                <h3 className="max-w-3xl font-serifCn text-2xl leading-tight text-accent">{report.headline}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted">{report.period}</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-ink">
                  {report.latestResearch.length} research {report.latestResearch.length === 1 ? "item" : "items"}, {" "}
                  {report.methodsInIssue.length} method {report.methodsInIssue.length === 1 ? "note" : "notes"}, and {" "}
                  {report.watchlist.length} questions to track.
                </p>
              </div>
              <Link
                href={`/weekly-report/archive/${slug}`}
                className="inline-flex w-fit items-center border border-border/80 px-3 py-2 text-sm text-institute hover:border-institute hover:text-accent"
              >
                Read issue →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
