import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { WeeklyReportIssueView } from "@/components/weekly-report-issue";
import { WEEKLY_REPORT } from "@/lib/weekly-report";
import { WEEKLY_REPORT_ARCHIVE } from "@/lib/weekly-report-archive";

export const metadata: Metadata = {
  title: "Law and Economics Research Weekly",
  description:
    "New law-and-economics articles and working papers, with source dates, methods, findings, and direct links, updated every Monday at 08:00 China Standard Time."
};

export default function WeeklyReportPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <SectionTitle
          title="Law & Economics Research Weekly"
          subtitle="A weekly feed of newly published, posted, or revised scholarship—not a general news digest."
        />
        <Link
          href="/weekly-report/archive"
          className="inline-flex w-fit items-center border border-border/80 bg-paper/50 px-4 py-3 text-sm text-institute transition-colors hover:border-institute hover:bg-white hover:text-accent"
        >
          Browse {WEEKLY_REPORT_ARCHIVE.length} issues →
        </Link>
      </div>

      <WeeklyReportIssueView report={WEEKLY_REPORT} current />
    </div>
  );
}
