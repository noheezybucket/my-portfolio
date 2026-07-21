import Link from "next/link";
import { getTranslations } from "next-intl/server";

const degreeKeys = ["master", "bachelor", "technical"];

const certificates = [
  {
    id: "js",
    issuer: "freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/koda_/javascript-algorithms-and-data-structures",
  },
  {
    id: "responsive",
    issuer: "freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/koda_/responsive-web-design",
  },
];

const Education = async () => {
  const t = await getTranslations("Education");

  return (
    <div className="space-y-10">
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">
          {t("degreesLabel")}
        </p>
        <ul className="space-y-6">
          {degreeKeys.map((key, index) => (
            <li
              key={key}
              className={index !== degreeKeys.length - 1 ? "border-b pb-6" : ""}
              style={
                index !== degreeKeys.length - 1
                  ? { borderColor: "var(--border)" }
                  : undefined
              }
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-display text-base font-semibold tracking-tight md:text-lg">
                  {t(`degrees.${key}.degree`)}
                </h3>
                <time className="shrink-0 text-xs text-muted">
                  {t(`degrees.${key}.period`)}
                </time>
              </div>
              <p className="mt-1 text-sm tracking-tight">
                {t(`degrees.${key}.field`)}
              </p>
              <p className="mt-0.5 text-sm text-muted">
                {t(`degrees.${key}.school`)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">
          {t("certificatesLabel")}
        </p>
        <ul className="space-y-3">
          {certificates.map((cert) => (
            <li key={cert.id}>
              <Link
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-0.5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="text-sm font-medium tracking-tight group-hover:text-accent">
                  {t(`certificates.${cert.id}`)}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-xs text-muted">
                  {cert.issuer}
                  <img
                    src="/assets/ext-link.svg"
                    alt=""
                    className="ext-link-icon theme-icon-invert opacity-50 transition-opacity group-hover:opacity-100"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
