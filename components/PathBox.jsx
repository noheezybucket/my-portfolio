import React from "react";
import SectionHeader from "./SectionHeader";
import Education from "./Education";
import Experience from "./Experience";

const PathBox = () => {
  return (
    <div>
      <SectionHeader
        icon={"education"}
        title={"Education"}
        description={""}
        buttonLink={"#"}
        buttonName={"Get Resume"}
      />
      <Education />

      <br />

      <SectionHeader
        icon={"experience"}
        title={"Experience"}
        description={"Latest news on top 😃 "}
      />

      <Experience />
    </div>
  );
};

export default PathBox;
