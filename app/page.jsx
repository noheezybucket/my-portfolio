"use client";
import PathBox from "@components/PathBox";
import ProjectsBox from "@components/ProjectsBox";
import TechList from "@components/TechList";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Frontend Engineer",
    "+30 web projects shipped",
    "UX/UI Design Enthusiast",
    "WordPress Expert",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 10 : 50);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 100);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <section>
      <div className="glassmorphism flex justify-between items-center">
        <div className="flex flex-col gap-1">
           <span className="text-green-500 flex items-center gap-1 text-xs">
            <span className="relative flex h-2 w-2">
              <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Let's work together</span>
          </span>
          <h1 className="font-semibold text-2xl">
            Salam, I am Muhammad 👋🏾
          </h1>
          <span className="text-sm">
            {text}
            <span className="blinking-cursor">|</span>
          </span>

        </div>

        <div className="flex flex-col justify-center gap-2 border-op rounded-xl p-2 bg-surface">
          <img
              src={"/assets/me.webp"}
              width={170}
              height={170}
              alt="me"
              className="rounded-xl object-cover"
          />
          <div className="flex flex-row items-center justify-center gap-3  left-1/2">
            <Link
                href={"https://www.linkedin.com/in/muhammadguey"}
              target={"_blank"}
            >
              <Image
                src={"/assets/linkedin.svg"}
                width={30}
                height={30}
                alt="LinkedIn"
                className="object-cover theme-icon-invert"
              />
            </Link>
            <Link href={"https://github.com/ahmadgueye"} target={"_blank"}>
              <Image
                src={"/assets/github.svg"}
                width={30}
                height={30}
                alt="GitHub"
                className="object-cover theme-icon-invert"
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
