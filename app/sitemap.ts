import type { MetadataRoute } from "next";
import { getAllCases } from "@/lib/cases";
import { getAllArticles } from "@/lib/content";
import { getAllConcepts, getConceptSlug } from "@/lib/concepts";
import { getAllScholars } from "@/lib/field-history";
import { COMPARATIVE_DIMENSIONS } from "@/lib/research-guides";
import { getSiteUrl } from "@/lib/site-url";
import { getAllReadings, getAllTopics } from "@/lib/topics";
import { WEEKLY_REPORT_ARCHIVE } from "@/lib/weekly-report-archive";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const staticPages = ["", "/start-here", "/concepts", "/cases", "/debates", "/comparative-law", "/weekly-report", "/weekly-report/archive", "/topics", "/history", "/scholars", "/scholar-match", "/literature", "/methods", "/about", "/source-policy", "/citation"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const topicPages = getAllTopics().map((topic) => ({
    url: `${baseUrl}/topics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  const articlePages = getAllArticles().map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const scholarPages = getAllScholars().map((scholar) => ({
    url: `${baseUrl}/scholars/${scholar.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  const conceptPages = getAllConcepts().map((concept) => ({
    url: `${baseUrl}/concepts/${getConceptSlug(concept.term)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  const readingPages = getAllReadings().map((reading) => ({
    url: `${baseUrl}/readings/${reading.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const casePages = getAllCases().map((caseRecord) => ({
    url: `${baseUrl}/cases/${caseRecord.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  const comparativePages = COMPARATIVE_DIMENSIONS.map((dimension) => ({
    url: `${baseUrl}/comparative-law/${dimension.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  const weeklyReportPages = WEEKLY_REPORT_ARCHIVE.map(({ slug, report }) => ({
    url: `${baseUrl}/weekly-report/archive/${slug}`,
    lastModified: new Date(report.publishedAt),
    changeFrequency: "never" as const,
    priority: 0.55
  }));

  return [
    ...staticPages,
    ...topicPages,
    ...articlePages,
    ...scholarPages,
    ...conceptPages,
    ...readingPages,
    ...casePages,
    ...comparativePages,
    ...weeklyReportPages
  ];
}
