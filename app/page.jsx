import EducationBox from "@components/EducationBox";
import ProjectsBox from "@components/ProjectsBox";
import TechList from "@components/TechList";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section>
      <div className="glassmorphism flex justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl">Salam, I am Muhamad</h1>
          <span>Software Engineer</span> <br />
          <span>Open to work</span>
        </div>

        <div className="flex flex-col justify-center gap-2">
          <Image
            src={"/assets/me.jpg"}
            width={100}
            height={100}
            alt="me"
            className="rounded-full object-cover"
          />
          <div className="flex flex-row items-center justify-center gap-3">
            <Link href={"https://linkedin.com"}>
              <Image
                src={"/assets/linkedin.svg"}
                width={30}
                height={30}
                alt="me"
                className="object-cover"
              />
            </Link>
            <Link href={"https://linkedin.com"}>
              <Image
                src={"/assets/github.svg"}
                width={30}
                height={30}
                alt="me"
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="glassmorphism">
        <TechList />
      </div>

      <div className="glassmorphism">
        <ProjectsBox />
      </div>

      <div className="glassmorphism">
        <EducationBox />
      </div>
    </section>
  );
};

export default Home;
