import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    link: "",
    icon: "icon.svg",
  },
  {
    id: 2,
    name: "Email",
    link: "",
    icon: "icon.svg",
  },
  {
    id: 3,
    name: "Instagram",
    link: "",
    icon: "icon.svg",
  },
];
const Footer = () => {
  return (
    <footer className="box-center glassmorphism flex flex-col md:flex-row justify-between gap-2">
      <div className="w-full">
        <SectionHeader
          icon={"contact"}
          title={"Contacts"}
          description={"Hit me up so we can discuss"}
        />
        <div>
          <ul className="space-y-2">
            {socials.map((social) => {
              return (
                <li key={social.id} className="flex gap-2 border-op py-1">
                  <Image
                    src={`/assets/${social.icon}`}
                    width={30}
                    height={30}
                    alt={social.name}
                    className="rounded-full object-cover"
                  />
                  <span>{social.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Link
        href={"https://calendly.com/mouhamadg404/discuter-de-mon-projet"}
        className="border-op w-full flex flex-col justify-center items-center bg-white hover:bg-transparent ease-in-out duration-150 text-background hover:text-white"
      >
        <Image
          src={`/assets/calendly.svg`}
          width={200}
          height={100}
          alt={"calendly"}
          className="rounded-full object-cover"
        />
        <span className="font-semibold">Let's make a call</span>
      </Link>
    </footer>
  );
};

export default Footer;
