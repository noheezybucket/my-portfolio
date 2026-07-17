import { Link } from "@i18n/routing";

const SectionHeader = ({ title, description, buttonLink, buttonName }) => {
  return (
    <div className="mb-6 flex flex-row items-end justify-between gap-4">
      <div>
        <h2 className="font-display text-xl font-semibold tracking-tight">
          {title}
        </h2>
        {description && (
          <span className="mt-1 block max-w-xl text-sm leading-relaxed text-muted">
            {description}
          </span>
        )}
      </div>

      {buttonLink && (
        <Link
          href={buttonLink}
          className="mb-0.5 flex shrink-0 items-end text-sm underline"
        >
          {buttonName}{" "}
          <img
            src="/assets/ext-link.svg"
            alt=""
            className="ext-link-icon theme-icon-invert"
          />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
