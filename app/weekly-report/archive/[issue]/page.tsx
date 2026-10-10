import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/section-title";
import { WeeklyReportIssueView } from "@/components/weekly-report-issue";
import { getWeeklyReportBySlug, WEEKLY_REPORT_ARCHIVE } from "@/lib/weekly-report-archive";

type PageProps = {
  params: Promise<{ issue: string }>;
};

export function generateStaticParams() {
  return WEEKLY_REPORT_ARCHIVE.map(({ slug }) => ({ issue: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { issue } = await params;
  const entry = getWeeklyReportBySlug(issue);

  if (!entry) {
    return { title: "Research Weekly Issue Not Found" };
  }

  return {
    title: `${entry.report.issue} · Research Weekly`,
    description: entry.report.headline
  };
}

export default async function WeeklyReportArchiveIssuePage({ params }: PageProps) {
  const { issue } = await params;
  const entry = getWeeklyReportBySlug(issue);

  if (!entry) {
    notFound();
  }

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <SectionTitle
          title={`${entry.report.issue} · Research Weekly`}
          subtitle="A preserved issue of the weekly academic research feed."
        />
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link href="/weekly-report/archive" className="text-institute underline underline-offset-4 hover:text-accent">
            All issues
          </Link>
          {entry.current ? (
            <Link href="/weekly-report" className="text-institute underline underline-offset-4 hover:text-accent">
              Latest issue
            </Link>
          ) : null}
        </div>
      </div>

      <WeeklyReportIssueView report={entry.report} current={entry.current} />
    </div>
  );
}
