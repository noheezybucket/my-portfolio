"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { toolIconClassName } from "@lib/toolIcons";

const skills = [
  { name: "React", key: "React", icon: "react", category: "frontend" },
  { name: "Angular", key: "Angular", icon: "angular", category: "frontend" },
  { name: "NestJS", key: "NestJS", icon: "nest", category: "backend" },
  { name: "Next.js", key: "Nextjs", icon: "next", category: "fullstack" },
  { name: "Tailwind", key: "Tailwind", icon: "tailwind", category: "frontend" },
  { name: "Laravel", key: "Laravel", icon: "laravel", category: "fullstack" },
  { name: "MongoDB", key: "MongoDB", icon: "mongo", category: "backend" },
  { name: "WordPress", key: "WordPress", icon: "wordpress", category: "cms" },
  { name: "PostgreSQL", key: "PostgreSQL", icon: "postgres", category: "backend" },
  { name: "Figma", key: "Figma", icon: "figma", category: "tools" },
  { name: "Cursor", key: "Cursor", icon: "cursor", category: "tools" },
  
];

const categoryIds = [
  "all",
  "fullstack",
  "frontend",
  "backend",
  // "design",
  "tools",
  "cms",
  // "ai",
];

const TechList = () => {
  const t = useTranslations("Tech");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section>
      <SectionHeader title={t("title")} description={t("description")} />

      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          {categoryIds.map((id) => (
            <button
              key={id}
              type="button"
              className={`filter-button ${
                selectedCategory === id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(id)}
            >
              {t(`categories.${id}`)}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap">
          {filteredSkills.map((skill) => {
            const description = t(`skills.${skill.key}`);
            return (
              <span
                className="tools"
                key={skill.name}
                tabIndex={0}
                aria-label={`${skill.name}. ${description}`}
              >
                <Image
                  src={`/assets/tools/${skill.icon}.svg`}
                  width={24}
                  height={24}
                  alt=""
                  className={toolIconClassName(skill.icon)}
                />
                <span className="tool-tooltip" aria-hidden="true">
                  <Image
                    src={`/assets/tools/${skill.icon}.svg`}
                    width={40}
                    height={40}
                    alt=""
                    className={toolIconClassName(skill.icon)}
                  />
                  <span className="tool-tooltip__name">{skill.name}</span>
                  <span className="tool-tooltip__desc">{description}</span>
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechList;
