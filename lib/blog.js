import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function getMarkdownFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
}

function parsePost(filename) {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    cover: data.cover ?? "",
    draft: Boolean(data.draft),
    readingTime: data.readingTime ?? stats.text,
    content,
  };
}

export function getAllPosts({ includeDrafts = false } = {}) {
  return getMarkdownFiles()
    .map(parsePost)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const filename = `${slug}.md`;
  const filepath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(filepath)) return null;
  return parsePost(filename);
}

export function getPostSlugs() {
  return getAllPosts().map((post) => post.slug);
}

export function formatPostDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
