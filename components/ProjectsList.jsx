import Link from "next/link";
import Image from "next/image";
import { projects } from "@lib/projects";
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

const ProjectCard = ({ project }) => {
  const linkProps = project.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <article className="project-card">
      <Link href={project.link} className="project-card__cover" {...linkProps}>
        <img
          src={`/assets/projects/${project.image}`}
          alt={project.title}
        />
      </Link>

      <div className="project-card__meta">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="mt-1 text-sm leading-relaxed text-muted">
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

const ProjectsList = ({ limit }) => {
  const list = limit ? projects.slice(0, limit) : projects;

  if (list.length < 1) {
    return <p className="text-center text-muted">Projects will be updated soon.</p>;
  }

  return (
    <div className="project-grid">
      {list.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
