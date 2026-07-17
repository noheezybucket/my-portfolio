import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const EMAIL = "seydinag023@gmail.com";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadguey",
    icon: "/assets/linkedin.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/ahmadgueye",
    icon: "/assets/github.svg",
  },
];

const Footer = async () => {
  const t = await getTranslations("Footer");

  return (
    <footer className="box-center site-section">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 sm:max-w-lg">
          <p className="text-sm tracking-wide text-muted">{t("contact")}</p>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            {t("title")}
          </h2>
          <p className="text-sm leading-relaxed text-muted">{t("subtitle")}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link href={`mailto:${EMAIL}`} className="btn-cta">
              {t("emailMe")}
            </Link>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-op transition-colors hover:bg-surface"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  width={20}
                  height={20}
                  alt=""
                  className="theme-icon-invert"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[color:var(--border)] pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Muhammad Gueye
          </p>
          <p className="text-xs text-muted">{t("role")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
