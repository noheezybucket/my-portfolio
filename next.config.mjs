import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/article",
        destination: "/en/blog/boost-productivity-2024",
        permanent: true,
      },
      {
        source: "/:locale(en|fr)/article",
        destination: "/:locale/blog/boost-productivity-2024",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
