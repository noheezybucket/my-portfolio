import PathBox from "@components/PathBox";
import ProjectsBox from "@components/ProjectsBox";
import TechList from "@components/TechList";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section>
      <div className="glassmorphism flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-3xl">Salam, I am Mouhamad</h1>
          <span className="text-xl">Software Engineer</span>
          <span className="text-green-500 flex items-center gap-1">
            <span className="w-3 h-3 bg-green-500 block rounded-full"></span>
            Available to work
          </span>
        </div>

        <div className="flex flex-col justify-center gap-2 border border-white border-opacity-20 rounded-xl p-2">
          <Image
            src={"/assets/me.jpg"}
            width={130}
            height={130}
            alt="me"
            className="rounded-xl object-cover"
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
        <PathBox />
      </div>
    </section>
  );
};

export default Home;
