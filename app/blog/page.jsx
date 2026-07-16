import React from "react";
import Link from "next/link";
import SectionHeader from "@components/SectionHeader";

const Blog = () => {
  return (
    <section className="site-section">
      <SectionHeader
        title={"Read my blog"}
        description={"I write articles... Well... Sometimes 😂"}
      />
      <div className="section-panel">
        <div className="flex flex-col gap-5 md:flex-row md:items-center">
          <div className="md:w-2/12">
            <img
              src={`https://cdn.prod.website-files.com/622b2fcc29fc56492b771cb8/65f98c957daeda28bfcbe86d_Layer_1%20(6).png`}
              className="rounded-xl object-cover"
              alt=""
            />
          </div>

          <div className="flex flex-col gap-2 md:w-10/12">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              How to boost your productivity in 2024 🚀🤌🏾
            </h3>
            <div className="flex gap-5 text-xs text-muted">
              <span>19 August 2024</span>
              <span>10 minutes read</span>
            </div>
            <Link href={"/article"} className="flex text-sm underline">
              More details
              <img
                src="/assets/ext-link.svg"
                alt=""
                className="ext-link-icon theme-icon-invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
