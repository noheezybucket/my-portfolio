import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    link: "",
    icon: "linkedin.svg",
  },
  {
    id: 2,
    name: "Email",
    link: "",
    icon: "mailme.svg",
  },
];
const Footer = () => {
  return (
    <footer className="box-center glassmorphism flex flex-col md:flex-row justify-between gap-2">
      <div className="w-full">
        <SectionHeader
          icon={"contact"}
          title={"Contact Me"}
          description={"Hit me up so we can discuss"}
        />
        <div className="border-op p-2">
          <ul className="space-y-2">
            {socials.map((social) => {
              return (
                <>
                  <li key={social.id}>
                    <Link
                      href={social.link}
                      className="flex gap-2  py-1 items-center hover:translate-x-5 duration-200 "
                    >
                      <Image
                        src={`/assets/socials/${social.icon}`}
                        width={30}
                        height={30}
                        alt={social.name}
                      />
                      <span>{social.name}</span>
                    </Link>
                  </li>
                  {socials.length != social.id && <hr className="my-5" />}
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <Link
        href={"https://calendly.com/mouhamadg404/discuter-de-mon-projet"}
        className="border-op w-full flex flex-col justify-center items-center hover:bg-white bg-transparent ease-in-out duration-150 hover:text-background text-white"
      >
        <Image
          src={`/assets/calendly.svg`}
          width={200}
          height={10}
          alt={"calendly"}
          className="rounded-full object-cover"
        />
      </Link>
    </footer>
  );
};

export default Footer;
