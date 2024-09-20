import React from 'react';
import Link from "next/link";
import Image from "next/image";

const project = {
    title: "Jaba",
    description: "Jaba is an online platform for selling agricultural crops. It is an initiative to connect local farmers with consumers, providing a convenient and efficient solution for buying and selling fresh, quality produce.",
    image: "jaba/logo.svg",
    link: "projects/jaba",
    tools: [
        { name: "React", icon: "react" },
        { name: "NodeJS", icon: "node" },
        { name: "MongoDB", icon: "mongo" },
        { name: "ExpressJS", icon: "express" },
        { name: "Figma", icon: "figma" },
    ],
}

const Page = () => {
    return (
        <div className={'glassmorphism'}>
            <div>
                <div className="flex flex-col md:flex-row  gap-5 rounded-xl ">
                    <div className={'md:w-6/12 flex justify-center items-center border border-white border-opacity-20 rounded-xl'} style={{backgroundColor:'#F37608'}}>
                        <img
                            src={`/assets/projects/${project.image}`}
                            className="object-cover rounded-xl "
                            alt={'proj'}/>
                    </div>

                    <div className="flex flex-col gap-2 md:w-6/12">
                        <div className={'flex justify-between'}>
                            <h3 className="text-2xl font-semibold">{project.title}</h3>
                            <Link
                                href={'#'}
                                className="underline flex justify-center items-center gap-1 text-red-500"
                                key={project.id}>
                                <span className="relative flex h-3 w-3">
                                    <span
                                        className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                Live site not avalaible yet
                                {/*<img src="/assets/ext-link.svg" alt="" className="ext-link-icon text-red-500"/>*/}

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
                {/*<Link href={'https://www.youtube.com/watch?v=ikis7AUYQn0'} target={'_blank'}>Link to the video</Link>*/}
                <iframe width="100%" height="571" src="https://www.youtube.com/embed/ikis7AUYQn0"
                        title="Présentation app Jaba" frameBorder="0"
                        className={'rounded-xl border border-white border-opacity-20'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default Page;