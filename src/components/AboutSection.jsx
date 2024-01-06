"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA= [
    {
        title:"Skills",
        id:"Skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>Spring</li>
                <li>Django</li>
                <li>AI/ML</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"Education",
        content:(
            <ul className='list-disc pl-2'>
                <li>B.E. Computer Science and Engineering (2018-2022)</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"Experience",
        content:(
            <ul className='list-disc pl-2'>
                <li>Associate Software Engineer - BNP Paribas</li>
                <li>Software Engineer  Intern - BNP Paribas</li>
                <li>Data Automation Intern - National Institute of Wind Energy</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
    return (
    <section id="about" className='text-white'>
        <br/>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} alt="avatar"/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base md:text-lg'>
                👋 Hello, I&apos;m a Software Engineer and Python Enthusiast. 
                🚀 My journey unfolds with a Bachelor&apos;s Degree in Computer Science and Engineering. 
                Proficient in working with Java, Spring, Python, Node.js, SQL, and Git, I balance real-world experience with a creative touch seen in my personal projects. 
                I am always looking for opportunities to expand my knowledge and skill set.
                Looking forward to work with others to create amazing applications and make an imapact in the digital world.🚀✨
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={()=> handleTabChange("Skills")} active={tab==="Skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={()=> handleTabChange("Education")} active={tab==="Education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton selectTab={()=> handleTabChange("Experience")} active={tab==="Experience"}>
                        {" "}
                        Experience{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection