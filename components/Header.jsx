"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLenis((lenis) => {
    setScrolled(lenis.scroll > 40);
  });

  return (
    <header
      className={`site-header sticky top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}
    >
      <div
        className={`box-center flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <h1 className="font-display font-bold text-xl tracking-tight">
          AG<span className="text-blue-500">.</span>
        </h1>
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
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
