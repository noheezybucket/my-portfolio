import React from "react";
import Image from "next/image";
import Link from "@node_modules/next/link";
import SectionHeader from "@components/SectionHeader";

const Blog = () => {
  return (
    <section className="glassmorphism">
      <SectionHeader
          icon={"projects"}
          title={"Read my blog"}
          description={"I write articles... Well... Sometimes 😂"}
          // buttonLink={"/projects"}
          // buttonName={"See Everything"}
      />
      <div className={''}>
        <div
            className="flex flex-col md:flex-row  gap-5 rounded-xl hover:scale-[0.95] duration-300 glassmorphism"
        >
          <div className={'md:w-2/12'}>
            <img
                src={`https://cdn.prod.website-files.com/622b2fcc29fc56492b771cb8/65f98c957daeda28bfcbe86d_Layer_1%20(6).png`}
                className="object-cover rounded-xl border border-white border-opacity-20"
                alt={'proj'}/>
          </div>

          <div className="flex flex-col gap-2 md:w-10/12">
            <div className={'flex justify-between'}>
              <h3 className="text-xl">How to boost your productivity in 2024 🚀🤌🏾</h3>
            </div>
            <div className={'flex gap-5'}>
              <span>19 August 2024</span>
              <span>10 minutes read</span>
            </div>
            <Link
                href={'/article'}
                className="underline flex"
            >
              More details
              <img src="/assets/ext-link.svg" alt="" className="ext-link-icon"/>

            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
