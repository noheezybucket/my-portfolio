'use client'
import PathBox from "@components/PathBox";
import ProjectsBox from "@components/ProjectsBox";
import TechList from "@components/TechList";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const Home = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Frontend Engineer", "UX/UI Design Enthusiast", "Athlete", "Music Producer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

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
          <h1 className="font-semibold text-2xl lg:text-3xl">
            Salam, I'm Mouhamad 👋🏾
          </h1>
          <span className="text-sm lg:text-lg">{text}<span className="blinking-cursor">|</span></span>
            <span className="text-green-500 flex items-center gap-1 text-sm">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>Let's work together</span>
          </span>
        </div>

          <div className="flex flex-col justify-center gap-2 border border-op rounded-xl p-2  bg-background ">
              <img
                  src={"/assets/mebw.png"}
                  width={170}
                  height={170}
            alt="me"
            className="rounded-xl object-cover"
          />
          <div className="flex flex-row items-center justify-center gap-3  left-1/2">
            <Link href={"https://www.linkedin.com/in/mouhamad-gueye-b00b31229/"} target={'_blank'}>
              <Image
                src={"/assets/linkedin.svg"}
                width={30}
                height={30}
                alt="me"
                className="object-cover"
              />
            </Link>
            <Link href={"https://github.com/noheezybucket"} target={'_blank'}>
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
