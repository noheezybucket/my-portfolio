import Link from "next/link";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { getProjectsByIds, homeProjectIds } from "@lib/projects";
import { toolIconClassName } from "@lib/toolIcons";

const ProjectTools = ({ tools }) => (
  <div className="flex flex-wrap gap-1.5">
    {tools.map((tool) => (
      <span key={tool.name || tool.icon} className="project-tool" title={tool.name}>
        <Image
          src={`/assets/tools/${tool.icon}.svg`}
          width={18}
          height={18}
          alt={tool.name || tool.icon}
          className={toolIconClassName(tool.icon)}
        />
      </span>
    ))}
  </div>
);

const FeaturedProject = ({ project }) => {
  const linkProps = project.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <article className="project-featured">
      <Link href={project.link} className="project-featured__cover" {...linkProps}>
        <img
          src={`/assets/projects/${project.image}`}
          alt={project.title}
        />
      </Link>
      <div className="project-featured__meta">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                {project.tagline}
              </p>
            )}
          </div>
          <Link
            href={project.link}
            className="flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
            {...linkProps}
          >
            {project.external ? "Visit" : "View"}
            <img
              src="/assets/ext-link.svg"
              alt=""
              width={16}
              height={16}
              className="ext-link-icon theme-icon-invert"
            />
          </Link>
        </div>
        <ProjectTools tools={project.tools} />
      </div>
    </article>
  );
};

const SideProject = ({ project }) => {
  const linkProps = project.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <article className="project-card project-card--compact">
      <Link href={project.link} className="project-card__cover" {...linkProps}>
        <img
          src={`/assets/projects/${project.image}`}
          alt={project.title}
        />
      </Link>
      <div className="project-card__meta">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-base font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-muted">
                {project.tagline}
              </p>
            )}
          </div>
          <Link
            href={project.link}
            className="flex shrink-0 items-center gap-1 text-xs text-muted transition-colors hover:text-foreground"
            {...linkProps}
            aria-label={`${project.external ? "Visit" : "View"} ${project.title}`}
          >
            <img
              src="/assets/ext-link.svg"
              alt=""
              width={14}
              height={14}
              className="ext-link-icon theme-icon-invert"
            />
          </Link>
        </div>
        <ProjectTools tools={project.tools} />
      </div>
    </article>
  );
};

const ProjectsBox = () => {
  const [featured, ...sideProjects] = getProjectsByIds(homeProjectIds);

  return (
    <section>
      <SectionHeader
        title="Projects"
        description="Selected work across product and client sites."
        buttonLink="/projects"
        buttonName="All projects"
      />

      <div className="project-showcase">
        {featured && <FeaturedProject project={featured} />}
        <div className="project-showcase__side">
          {sideProjects.map((project) => (
            <SideProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
