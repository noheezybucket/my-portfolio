"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@i18n/routing";

const projects = [
  {
    id: "amnafi",
    title: "Amnafi",
    image: "amnafi.jpg",
    link: null,
    type: "client",
    status: "inProgress",
  },
  {
    id: "pacta",
    title: "PACTA",
    image: "pacta/pacta.jpg",
    hoverImage: "pacta/pacta2.jpg",
    link: "https://pacta.africa/",
    type: "client",
  },
  {
    id: "ominis",
    title: "Ominis",
    image: "ominis/ominis.jpg",
    hoverImage: "ominis/ominis2.jpg",
    link: "https://ominis.store",
    type: "client",
  },
  {
    id: "bayan",
    title: "Bayān",
    image: "bayan/bayan.jpg",
    hoverImage: "bayan/bayan2.jpg",
    link: "https://bayanun.com",
    type: "client",
  },
  {
    id: "transition",
    title: "Transition Quality",
    image: "transition/transition.webp",
    link: "https://transitionquality.com",
    type: "client",
  },
  {
    id: "stek",
    title: "STEK Talkshow",
    image: "stek/stek.png",
    link: "https://stektalkshow.com",
    type: "client",
  },
  {
    id: "jaba",
    title: "Jaba",
    image: "jaba/jaba.jpg",
    hoverImage: "jaba/jaba2.png",
    link: "/projects/jaba",
    type: "personal",
  },
  {
    id: "dna",
    title: "DNA",
    image: "dna/dna.png",
    link: "https://dakarnetworkangels.com",
    type: "client",
  },
  {
    id: "webikoo",
    title: "Webikoo",
    image: "webikoo/webikoo.webp",
    link: "https://webikoo.pro",
    type: "client",
  },
  {
    id: "takku",
    title: "Takku",
    image: "waxtu.png",
    link: "https://takku.vercel.app/",
    type: "personal",
  },
];

const typeIds = ["all", "client", "personal"];

const isExternal = (link) => /^https?:\/\//.test(link);

const ProjectsList = ({ limit }) => {
  const t = useTranslations("Projects");
  const [selectedType, setSelectedType] = useState("all");
  const showFilters = !limit;

  const filtered =
    selectedType === "all"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  const list = limit ? projects.slice(0, limit) : filtered;

  return (
    <div>
      {showFilters && (
        <div className="mb-5 flex flex-wrap gap-2">
          {typeIds.map((id) => (
            <button
              key={id}
              type="button"
              className={`filter-button ${
                selectedType === id ? "active" : ""
              }`}
              onClick={() => setSelectedType(id)}
            >
              {t(`types.${id}`)}
            </button>
          ))}
        </div>
      )}

      {list.length < 1 ? (
        <p className="text-center text-muted">
          {showFilters ? t("emptyFiltered") : t("emptySoon")}
        </p>
      ) : (
        <div className="project-grid">
          {list.map((project) => {
            const hasLink = Boolean(project.link);
            const external = hasLink && isExternal(project.link);
            const linkProps = external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            const tagline = t(`items.${project.id}`);
            const hasPreview = Boolean(project.hoverImage);

            const card = (
              <>
                <div className="project-card__media">
                  <img
                    src={`/assets/projects/${project.image}`}
                    alt={project.title}
                    className="project-card__image project-card__image--primary"
                  />
                  {hasPreview && (
                    <img
                      src={`/assets/projects/${project.hoverImage}`}
                      alt=""
                      aria-hidden
                      className="project-card__image project-card__image--hover"
                    />
                  )}
                </div>
                {project.status === "inProgress" && (
                  <span className="project-card__status">
                    <span className="hero-available-dot" aria-hidden />
                    {t("status.inProgress")}
                  </span>
                )}
                <div className="project-card__overlay">
                  <div className="project-card__meta">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-white/75">{tagline}</p>
                    </div>
                  </div>
                </div>
              </>
            );

            return (
              <article
                key={project.id}
                className={`project-card${hasPreview ? " project-card--has-preview" : ""}`}
              >
                {!hasLink ? (
                  <div className="project-card__link">{card}</div>
                ) : external ? (
                  <a
                    href={project.link}
                    className="project-card__link"
                    {...linkProps}
                  >
                    {card}
                  </a>
                ) : (
                  <Link
                    href={project.link}
                    className="project-card__link"
                    {...linkProps}
                  >
                    {card}
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
