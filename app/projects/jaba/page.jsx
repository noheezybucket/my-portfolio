import React from 'react';
import Link from "next/link";
import Image from "next/image";

const project = {
    title: "Jaba",
    description: "Jaba is an online platform for selling agricultural crops. It is an initiative to connect local farmers with consumers, providing a convenient and efficient solution for buying and selling fresh, quality produce.",
    image: "jaba/jaba.png",
    link: "projects/jaba",
    tools: [
        { name: "React", icon: "react" },
        { name: "NodeJS", icon: "node" },
        { name: "MongoDB", icon: "mongo" },
        { name: "ExpressJS", icon: "express" },
    ],
}

const Page = () => {
    return (
        <div className={'glassmorphism'}>
            <div>
                <div className="flex flex-col md:flex-row  gap-5 rounded-xl ">
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
                                key={project.id}>
                                Live site
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
                <hr className="my-5"/>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Page;