import React from 'react';
import Link from "next/link";
import Image from "next/image";
const projects = [
    {
        title: "Jaba",
        description: "Jaba is an online platform for selling agricultural crops. It is an initiative to connect local farmers with consumers, providing a convenient and efficient solution for buying and selling fresh, quality produce.",
        image: "jabac.jpeg",
        link: "#",
        tools: [
            { name: "React", icon: "react" },
            { name: "NodeJS", icon: "node" },
            { name: "MongoDB", icon: "mongo" },
            { name: "ExpressJS", icon: "express" },
        ],
    },
    {
        title: "CBurger",
        description: "CBurger is a online burger ordering & fast-food managemenent platform. It allows the customer to order a burger and the manager is able to treat the order and change the status and notify the customer via email.",
        image: "cburger.jpeg",
        link: "#",
        tools: [
            { name: "Angular", icon: "angular" },
            { name: "Laravel", icon: "laravel" },
        ],
    },
    {
        title: "Waxtu Joob",
        description: "Waxtu joob is a pomodoro app for helping you focus on your work time. It sets a time for work and a time for pause e.g:25/5 (25 mins of work and 5mins of pause)",
        image: "pomodoro.jpeg",
        link: "#",
        tools: [
            { name: "React", icon: "react" },
        ],
    }

];

const ProjectsList = ({limit}) => {
    return (
        <div className="gap-5 border-op p-2">
            {projects.length < 1 && (
                <p className="text-center">Projects will be updated very soon 👏</p>
            )}
            {projects.slice(0,limit).map((project, index) => {
                return (
                    <div
                        key={index}
                    >
                        <div
                            className="flex flex-col md:flex-row  gap-5 rounded-xl hover:scale-[0.95] duration-300 "
                        >
                            <div className={'md:w-6/12'}>
                                <img
                                    src={`/assets/projects/${project.image}`}
                                    className="object-cover rounded-xl border border-white border-opacity-20"
                                    alt={'proj'}/>
                            </div>

                            <div className="flex flex-col gap-2 md:w-6/12">
                                <div className={'flex justify-between'}>
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <Link
                                        href={project.link}
                                        className="underline flex justify-center"
                                        key={project.id}
                                    >
                                        More details
                                        <img src="/assets/ext-link.svg" alt="" className="ext-link-icon"/>

                                    </Link>
                                </div>
                                <p className="text-sm text-justify">{project.description}</p>
                                <div className="flex gap-3 flex-wrap">
                                    {project.tools.map((tool,index) => {
                                        return (
                                            <span key={index} className="tools">
                          <Image
                              src={`/assets/tools/${tool.icon}.svg`}
                              width={25}
                              height={25}
                              alt="me"
                          />
                          <span className="tool-name">{tool.name}</span>
                        </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {projects.length != index && <hr className="my-5"/>}
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectsList;