import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const LOCALES = ["en", "fr"];

function getBlogDir(locale) {
  const safeLocale = LOCALES.includes(locale) ? locale : "en";
  return path.join(process.cwd(), "content/blog", safeLocale);
}

function getMarkdownFiles(locale) {
  const dir = getBlogDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

function parsePost(filename, locale) {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(getBlogDir(locale), filename), "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  const minutes = Math.max(1, Math.round(stats.minutes));

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    cover: data.cover ?? "",
    draft: Boolean(data.draft),
    readingTimeMinutes: minutes,
    readingTime: formatReadingTime(minutes, locale),
    content,
  };
}

export function formatReadingTime(minutes, locale = "en") {
  const mins = Math.max(1, Math.round(minutes));
  return locale === "fr" ? `${mins} min de lecture` : `${mins} min read`;
}

export function getAllPosts({ locale = "en", includeDrafts = false } = {}) {
  return getMarkdownFiles(locale)
    .map((filename) => parsePost(filename, locale))
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug, locale = "en") {
  const filename = `${slug}.md`;
  const filepath = path.join(getBlogDir(locale), filename);
  if (!fs.existsSync(filepath)) return null;
  return parsePost(filename, locale);
}

export function getPostSlugs(locale = "en") {
  return getAllPosts({ locale }).map((post) => post.slug);
}

export function formatPostDate(dateString, locale = "en") {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  const dateLocale = locale === "fr" ? "fr-FR" : "en-GB";
  return date.toLocaleDateString(dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
