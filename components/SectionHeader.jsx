import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionHeader = ({
  icon,
  title,
  description,
  buttonLink,
  buttonName,
}) => {
  return (
    <div className="flex flex-row items-center justify-between mb-7">
      <div className="flex flex-row items-start gap-2">
        <div>
          <Image src={`/assets/${icon}.svg`} width={50} height={50} alt="" className="theme-icon-invert" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-xs text-muted">{description}</span>
        </div>
      </div>

      <div>
        {buttonLink && (
          <Link
            href={buttonLink}
            // target="_blank"
            className="flex items-end underline text-sm"
          >
            {buttonName}{" "}
            <img src="/assets/ext-link.svg" alt="" className="ext-link-icon theme-icon-invert" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
