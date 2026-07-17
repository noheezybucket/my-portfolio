import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const EMAIL = "seydinag023@gmail.com";

const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <section className="hero site-section">
      <div className="flex flex-col-reverse items-center justify-between gap-10 sm:flex-row sm:items-end">
        <div className="hero-copy flex w-full flex-col gap-4 sm:max-w-[58%]">
          <p className="hero-available flex items-center gap-2 text-sm tracking-wide">
            <span className="hero-available-dot" aria-hidden />
            {t("available")}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Ahmad Gueye
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted">
            {t("bio")}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href={`mailto:${EMAIL}`} className="btn-cta">
              {t("emailMe")}
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammadguey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-op transition-colors hover:bg-surface"
              aria-label="LinkedIn"
            >
              <Image
                src="/assets/linkedin.svg"
                width={20}
                height={20}
                alt=""
                className="theme-icon-invert"
              />
            </Link>
            <Link
              href="https://github.com/ahmadgueye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-op transition-colors hover:bg-surface"
              aria-label="GitHub"
            >
              <Image
                src="/assets/github.svg"
                width={20}
                height={20}
                alt=""
                className="theme-icon-invert"
              />
            </Link>
          </div>
        </div>

        <div className="hero-photo shrink-0">
          <img
            src="/assets/me.webp"
            width={200}
            height={200}
            alt="Muhammad Gueye"
            className="h-44 w-44 rounded-2xl object-cover md:h-52 md:w-52"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
