import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="box-center flex justify-between items-center my-4 glassmorphism ">
      {/*<img src="/assets/mog.png" alt="" className="w-14" />*/}
      <h1 className="font-bold text-xl">MG<span className="text-blue-500">.</span></h1>
      {/*<h1>мохамед</h1>*/}
      <div className="flex items-center gap-3">
        <nav>
          <ul className="flex gap-3 text-sm">
            <li>
              <Link href={"/"}>home</Link>
            </li>
            <li>
              <Link href={"/projects"}>projects</Link>
            </li>
            <li>
              <Link href={"/blog"}>blog</Link>
            </li>
            {/* <li>
              <Link href={"/gallery"}>gallery</Link>
            </li> */}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
