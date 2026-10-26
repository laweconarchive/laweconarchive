import { WEEKLY_REPORT } from "@/lib/weekly-report";
import type { WeeklyReportIssue } from "@/lib/weekly-report";
import { WEEKLY_REPORT as ISSUE_002 } from "@/lib/weekly-reports/issue-002";
import { WEEKLY_REPORT as ISSUE_003 } from "@/lib/weekly-reports/issue-003";
import { WEEKLY_REPORT as ISSUE_004 } from "@/lib/weekly-reports/issue-004";
import { WEEKLY_REPORT as ISSUE_005 } from "@/lib/weekly-reports/issue-005";
import { WEEKLY_REPORT as ISSUE_006 } from "@/lib/weekly-reports/issue-006";
import { WEEKLY_REPORT as ISSUE_007 } from "@/lib/weekly-reports/issue-007";
import { WEEKLY_REPORT as ISSUE_008 } from "@/lib/weekly-reports/issue-008";
import { WEEKLY_REPORT as ISSUE_009 } from "@/lib/weekly-reports/issue-009";
import { WEEKLY_REPORT as ISSUE_010 } from "@/lib/weekly-reports/issue-010";
import { WEEKLY_REPORT as ISSUE_011 } from "@/lib/weekly-reports/issue-011";
import { WEEKLY_REPORT as ISSUE_012 } from "@/lib/weekly-reports/issue-012";

export type WeeklyReportArchiveEntry = {
  slug: string;
  report: WeeklyReportIssue;
  current: boolean;
};

export const WEEKLY_REPORT_ARCHIVE: WeeklyReportArchiveEntry[] = [
  { slug: "issue-013", report: WEEKLY_REPORT, current: true },
  { slug: "issue-012", report: ISSUE_012, current: false },
  { slug: "issue-011", report: ISSUE_011, current: false },
  { slug: "issue-010", report: ISSUE_010, current: false },
  { slug: "issue-009", report: ISSUE_009, current: false },
  { slug: "issue-008", report: ISSUE_008, current: false },
  { slug: "issue-007", report: ISSUE_007, current: false },
  { slug: "issue-006", report: ISSUE_006, current: false },
  { slug: "issue-005", report: ISSUE_005, current: false },
  { slug: "issue-004", report: ISSUE_004, current: false },
  { slug: "issue-003", report: ISSUE_003, current: false },
  { slug: "issue-002", report: ISSUE_002, current: false }
];

export function getWeeklyReportBySlug(slug: string) {
  return WEEKLY_REPORT_ARCHIVE.find((entry) => entry.slug === slug);
}
