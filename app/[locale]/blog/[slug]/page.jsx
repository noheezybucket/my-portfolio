import { Link, routing } from "@i18n/routing";
import { notFound } from "next/navigation";
import MarkdownContent from "@components/MarkdownContent";
import { formatPostDate, getPostBySlug, getPostSlugs } from "@lib/blog";
import { getTranslations, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPostSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = params;
  const post = getPostBySlug(slug, locale);
  if (!post || post.draft) return {};
  return {
    title: `${post.title} — Muhammad Gueye`,
    description: post.description,
  };
}

const BlogPostPage = async ({ params }) => {
  const { locale, slug } = params;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");
  const post = getPostBySlug(slug, locale);

  if (!post || post.draft) notFound();

  return (
    <article className="site-section max-w-3xl">
      <Link href="/blog" className="mb-6 inline-flex text-sm text-muted underline">
        {t("back")}
      </Link>

      {post.cover && (
        <div
          className="blog-cover mb-8 flex min-h-[20vh] flex-col items-center justify-center gap-4 rounded-xl bg-cover bg-center p-6"
          style={{ backgroundImage: `url("${post.cover}")` }}
        >
          <h1 className="max-w-2xl rounded-lg bg-foreground px-3 py-2 text-center font-display text-2xl font-semibold tracking-tight text-background sm:text-3xl">
            {post.title}
          </h1>
          <div className="flex gap-5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-foreground">
            <span>{formatPostDate(post.date, locale)}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      )}

      {!post.cover && (
        <header className="mb-8 space-y-3">
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            {post.title}
          </h1>
          <div className="flex gap-5 text-xs text-muted">
            <span>{formatPostDate(post.date, locale)}</span>
            <span>{post.readingTime}</span>
          </div>
        </header>
      )}

      <MarkdownContent content={post.content} />
    </article>
  );
};

export default BlogPostPage;
