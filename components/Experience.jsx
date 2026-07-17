import Image from "next/image";
import { getTranslations } from "next-intl/server";

const ExperienceItem = ({ xp, showBorder }) => (
  <li
    className={showBorder ? "space-y-3 border-b pb-6" : "space-y-3"}
    style={showBorder ? { borderColor: "var(--border)" } : undefined}
  >
    <div className="flex items-center gap-3">
      <Image
        src={`/assets/${xp.image}`}
        width={48}
        height={48}
        className="max-h-[48px] rounded-xl"
        alt={xp.company}
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="font-display text-base font-semibold tracking-tight md:text-lg">
            {xp.role}
          </h3>
          <time className="shrink-0 text-xs text-muted">{xp.period}</time>
        </div>
        <p className="mt-0.5 text-sm text-muted">
          {xp.company}
          {xp.type ? ` · ${xp.type}` : ""}
        </p>
      </div>
    </div>
    <ul className="space-y-1 text-sm text-muted">
      {xp.highlights.map((item) => (
        <li key={item} className="list-none">
          — {item}
        </li>
      ))}
    </ul>
  </li>
);

const ExperienceGroup = ({ label, items }) => (
  <div>
    <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">
      {label}
    </p>
    <ul className="space-y-6">
      {items.map((xp, index) => (
        <ExperienceItem
          key={xp.id}
          xp={xp}
          showBorder={index !== items.length - 1}
        />
      ))}
    </ul>
  </div>
);

const Experience = async () => {
  const t = await getTranslations("Experience");

  const fullTime = [
    {
      id: "webikoo",
      role: t("jobs.webikoo.role"),
      company: "Webikoo",
      period: t("jobs.webikoo.period"),
      image: "webikoop.png",
      highlights: t.raw("jobs.webikoo.highlights"),
    },
    {
      id: "galsen",
      role: t("jobs.galsen.role"),
      company: "Galsen Digital",
      period: t("jobs.galsen.period"),
      image: "gda.png",
      highlights: t.raw("jobs.galsen.highlights"),
    },
  ];

  const collaborations = [
    {
      id: "dican",
      role: t("jobs.dican.role"),
      company: "Dican",
      type: t("collaborator"),
      period: t("jobs.dican.period"),
      image: "dican.png",
      highlights: t.raw("jobs.dican.highlights"),
    },
  ];

  return (
    <div className="space-y-10">
      <ExperienceGroup label={t("fullTime")} items={fullTime} />
      <ExperienceGroup label={t("collaborations")} items={collaborations} />
    </div>
  );
};

export default Experience;
