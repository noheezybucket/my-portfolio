import { getTranslations, setRequestLocale } from "next-intl/server";

const Gallery = async ({ params }) => {
  setRequestLocale(params.locale);
  const t = await getTranslations("Gallery");

  return (
    <section className="site-section">
      <h1 className="text-center font-display text-xl">{t("soon")}</h1>
    </section>
  );
};

export default Gallery;
