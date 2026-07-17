import { Link } from "@i18n/routing";
import ProfileSummary from "@components/ProfileSummary";
import SectionHeader from "@components/SectionHeader";
import { formatPostDate, getAllPosts } from "@lib/blog";
import { getTranslations, setRequestLocale } from "next-intl/server";

const Blog = async ({ params }) => {
  const { locale } = params;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");
  const posts = getAllPosts({ locale });

  return (
    <>
      <ProfileSummary />
      <section className="site-section">
        <SectionHeader title={t("title")} description={t("description")} />

        {posts.length === 0 ? (
          <p className="text-sm text-muted">{t("empty")}</p>
        ) : (
          <div className="blog-list">
            {posts.map((post) => (
              <article key={post.slug} className="blog-list-item">
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  {post.cover && (
                    <div className="md:w-2/12">
                      <img
                        src={post.cover}
                        className="aspect-square w-full rounded-xl object-cover"
                        alt=""
                      />
                    </div>
                  )}

                  <div className="flex flex-col gap-2 md:w-10/12">
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-sm leading-relaxed text-muted">
                        {post.description}
                      </p>
                    )}
                    <div className="flex gap-5 text-xs text-muted">
                      <span>{formatPostDate(post.date, locale)}</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex text-sm underline"
                    >
                      {t("more")}
                      <img
                        src="/assets/ext-link.svg"
                        alt=""
                        className="ext-link-icon theme-icon-invert"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Blog;
