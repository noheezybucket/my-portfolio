import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="box-center flex justify-between items-center my-4 glassmorphism">
      <h1 className="font-bold">muhamad</h1>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link href={"/"}>home</Link>
          </li>
          <li>
            <Link href={"/blog"}>blog</Link>
          </li>
          <li>
            <Link href={"/gallery"}>gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
