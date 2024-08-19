import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="box-center flex justify-between items-center my-4 glassmorphism py-4">
      {/*<img src="/assets/mog.png" alt="" className="w-14" />*/}
      <h1>мохамед</h1>
      <nav>
        <ul className="flex gap-3 py-2">
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
    </header>
  );
};

export default Header;
