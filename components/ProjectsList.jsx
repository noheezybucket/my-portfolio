"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@i18n/routing";

const projects = [
  {
    id: "pacta",
    title: "PACTA",
    image: "pacta.jpg",
    link: "https://pacta.africa/",
    type: "client",
  },
  {
    id: "ominis",
    title: "Ominis",
    image: "ominis.jpg",
    link: "https://ominis.store",
    type: "client",
  },
  {
    id: "bayan",
    title: "Bayān",
    image: "bayan.jpg",
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
    image: "jaba/jaba.png",
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
  {
    id: "helium",
    title: "Helium",
    image: "helium/helium.webp",
    link: "https://ahmadgueye.github.io/mouse-effect/",
    type: "practice",
  },
  {
    id: "gaming",
    title: "Gaming Campus",
    image: "gaming-campus/gaming-campus.webp",
    link: "https://ahmadgueye.github.io/gaming-campus-page/",
    type: "practice",
  },
  {
    id: "bookmark",
    title: "Bookmark",
    image: "bookmark/bookmark.png",
    link: "https://ahmadgueye.github.io/bookmark-landing-page/",
    type: "practice",
  },
  {
    id: "manage",
    title: "Manage",
    image: "manage.png",
    link: "https://ahmadgueye.github.io/manage-landing-page/",
    type: "practice",
  },
  {
    id: "chatapp",
    title: "Chat app landing page",
    image: "chat-app.png",
    link: "https://ahmadgueye.github.io/chat-app-pure-css/",
    type: "practice",
  },
  {
    id: "fylo",
    title: "Fylo",
    image: "fylo.png",
    link: "https://ahmadgueye.github.io/fylo-dark-theme-landing-page/",
    type: "practice",
  },
];

const typeIds = ["all", "client", "personal", "practice"];

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
            const external = isExternal(project.link);
            const linkProps = external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            const tagline = t(`items.${project.id}`);

            const card = (
              <>
                <img
                  src={`/assets/projects/${project.image}`}
                  alt={project.title}
                  className="project-card__image"
                />
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
              <article key={project.id} className="project-card">
                {external ? (
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
