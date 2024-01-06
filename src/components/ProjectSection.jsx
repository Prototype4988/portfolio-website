"use client";
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView} from "framer-motion";


const projectsData = [
    {
      id: 1,
      title: "NextJs Portfolio Website",
      description: "A responsive portfolio website. (NextJs, Tailwind) ",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl:"/",
      previewUrl:"/"
    },
    {
      id: 2,
      title: "Social Book",
      description: "A social media clone that contains features such as authentication, posts, users, likes, search, follows, user suggestions and more. (Python, Django)",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl:"https://github.com/Prototype4988/Social_Book",
      previewUrl:"/"
    },
    {
      id: 3,
      title: "Student Assessment and Analysis System",
      description: "Full Stack Web application that is built for my college to manage student assessment data. This was built as academic major project. (EJS, NodeJs)",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl:"https://github.com/Prototype4988/Student_Assesment_and_Analysis_System",
      previewUrl:"/"
    },
    {
      id: 4,
      title: "Street Fighter AI",
      description: "An AI that plays Capcom’s “Street Fighter II Special Champion Edition” using Reinforcement Learning techniques. (Python, Tensorflow)",
      image: "/images/projects/4.png",
      tag: ["All", "AI/ML"],
      gitUrl:"https://github.com/Prototype4988/StreetFighterAI",
      previewUrl:"/"
    },
    {
      id: 5,
      title: "Doom AI",
      description: "An AI that plays DOOM in normal and survival mode using Reinforcement Learning techniques. (Python, Tensorflow)",
      image: "/images/projects/5.png",
      tag: ["All", "AI/ML"],
      gitUrl:"https://github.com/Prototype4988/DoomAI",
      previewUrl:"/"
    },
    {
      id: 6,
      title: "Adventures of Jake (An open world 2D game)",
      description: "An Open world RPG 2D game as a part of MLH \"Hack-cade\" Hackathon held on May 28 – 30, 2021. (Unity, C#)",
      image: "/images/projects/6.png",
      tag: ["All", "Others"],
      gitUrl:"https://github.com/Prototype4988/Adventures-of-Jake",
      previewUrl:"/"
    },
];
const ProjectSection = () => {
    const [tag,setTag]=useState("All");

    const ref=useRef(null);
    const isInView=useInView(ref, {once:true});

    const handleTagChange =(newTag) => {
        setTag(newTag);
    };

    const filteredProjects =projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVarients={
      initial: {y:50, opacity:0},
      animate: {y:0, opacity:1},
    };
  
  return (
    <section id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag ==='All'} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag ==='Web'} />
            <ProjectTag onClick={handleTagChange} name="AI/ML" isSelected={tag ==='AI/ML'} />
            <ProjectTag onClick={handleTagChange} name="Others" isSelected={tag ==='Others'} />
        </div>
        <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
            <motion.li key={index} variants={cardVarients} inital="initial" animate={isInView? "animate":"initial"} transition={{duration:0.3, delay:index *0.4}}>
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              imgUrl={project.image} 
              tags={project} 
              gitUrl={project.gitUrl}/>
            </motion.li>
        ))}
        </ul>
    </section>
  )
}

export default ProjectSection