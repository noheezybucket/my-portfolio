import Image from "next/image";
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
      <div className="flex flex-row items-start">
        <div>
          <Image
            src={`/assets/${icon}.svg`}
            width={50}
            height={50}
            alt="me"
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className="text-sm">{description}</span>
        </div>
      </div>

      <div>
        {buttonLink && <button className="btn-primary">{buttonName}</button>}
      </div>
    </div>
  );
};

export default SectionHeader;
