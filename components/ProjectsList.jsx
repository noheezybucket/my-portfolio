import React from 'react';
import Link from "next/link";
import Image from "next/image";
const projects = [
    {
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
    },
    {
        title: "Galsen Digital Projects",
        description: "You will find all the projects I have worked on at Galsen Digital, a digital agency based in Senegal. The projects include websites, web applications, and other digital solutions that showcase my skills and contributions.",
        image: "gda/gda.png",
        link: "https://gda.sn",
        tools: [
            { name: "React", icon: "react" },
            { name: "Angular", icon: "angular" },
            { name: "NodeJS", icon: "node" },
            { name: "WordPress", icon: "wordpress" },
        ],
    },
    // {
    //     title: "CBurger",
    //     description: "CBurger is an online burger ordering & fast-food management platform. It allows the customer to order a burger and the manager is able to treat the order and change the status and notify the customer via email.",
    //     image: "cburger/cbg.png",
    //     color:'#FFA800',
    //     link: "projects/cburger",
    //     tools: [
    //         { name: "Angular", icon: "angular" },
    //         { name: "Laravel", icon: "laravel" },
    //     ],
    // },
    // {
    //     title: "RRTACU",
    //     description: "A website for the Residence of the Artistic, Cultural and University Tourist Meetings",
    //     image: "rrtacu/rrtacu.png",
    //     // color: '#084BBB',
    //     link: "https://rrtacu.com",
    //     tools: [
    //         { name: "WordPress", icon: "wordpress" },
    //         { name: "Elementor", icon: "elementor" },
    //     ],
    //     target : '_blank'
    // },
    // {
    //     title: "MyButleg",
    //     description: "A website for a street clothing brand",
    //     image: "mybutleg/mybutleg.png",
    //     // color: '#4F28EA',
    //     link: "https://dev-mybutleg.pantheonsite.io/",
    //     tools: [
    //         { name: "WordPress", icon: "wordpress" },
    //         { name: "Elementor", icon: "elementor" },
    //     ],
    //     target : '_blank'
    //
    // },
    // {
    //     title: "Waxtu Joob",
    //     description: "Waxtu joob is a pomodoro app for helping you focus on your work time. It sets a time for work and a time for pause e.g:25/5 (25 mins of work and 5mins of pause)",
    //     image: "waxtu.png",
    //     link: "#",
    //     tools: [
    //         { name: "React", icon: "react" },
    //     ],
    // },
    {
        title: "Bookmark",
        description: "",
        image: "bookmark/bookmark.png",
        link: "https://noheezybucket.github.io/bookmark-landing-page/",
        tools: [
            { name: "React", icon: "react" },
            { name: "Tailwind", icon: "tailwind" },
        ],
        target : '_blank'
    },
    {
        title: "Manage",
        description: "",
        image: "manage.png",
        link: "https://noheezybucket.github.io/manage-landing-page/",
        tools: [
            { name: "React", icon: "react" },
            { name: "Tailwind", icon: "tailwind" },
        ],
        target : '_blank'
    },
    {
        title: "Chat app landing page",
        description: "A frontend made with html and css only",
        image: "chat-app.png",
        link: "https://noheezybucket.github.io/chat-app-pure-css/",
        tools: [
            { name: "Sass", icon: "sass" },
        ],
        target : '_blank'
    },
    {
        title: "Fylo",
        description: "",
        image: "fylo.png",
        link: "https://noheezybucket.github.io/fylo-dark-theme-landing-page/",
        tools: [
            { name: "React", icon: "react" },
            { name: "Tailwind", icon: "tailwind" },
        ],
        target : '_blank'
    },


];

const ProjectsList = ({limit}) => {
    return (
        <div className="gap-5 grid md:grid-cols-2 ">
            {projects.length < 1 && (
                <p className="text-center">Projects will be updated very soon 👏</p>
            )}
            {projects.slice(0,limit).map((project, index) => {
                return (
                    <div key={index}>
                        <div className="flex flex-col p-1 border border-white border-opacity-10 gap-5 rounded-xl hover:scale-[0.98] duration-300 ">
                            <div className={'rounded-lg  flex justify-center items-center'}>
                                <img
                                    src={`/assets/projects/${project.image}`}
                                    className="object-cover rounded-lg    border-opacity-20"
                                    alt={'proj'}/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className={'flex justify-between'}>
                                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                                    <Link
                                        href={project.link}
                                        className="underline flex justify-center"
                                        key={project.id} target={project.target}>
                                        See more
                                        <img src="/assets/ext-link.svg" alt="" className="ext-link-icon"/>
                                    </Link>
                                </div>
                                {/*<p className={'truncate'}>{project.description}</p>*/}
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
                        {/*{projects.length != index && <hr className="my-5"/>}*/}
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectsList;