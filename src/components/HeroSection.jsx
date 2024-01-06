"use client"
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-3'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div initial={{opacity: 0, scale:0.5 }} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I'm  {" "}</span>
                    <br></br>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Solomon Emmanuel Thompson I',
                        4000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Software Engineer',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                🚀 Welcome to my Tech Odyssey! I am a Software Engineer and a Python Enthusiast. Let's explore the realms of code together! 💻✨ #CodeCraftsman #InnovationJourney
                </p>
                <div>
                  <a href='/#contact'>
                  <button className='px-6 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>Connect</button>
                  </a>
                  <a href='/resume/Solomon_Emmanuel_Thompson_Resume.pdf' target="_blank" download>
                  <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                  </button>
                  </a>
                </div>
            </motion.div>
            <motion.div initial={{opacity: 0, scale:0.5 }} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className='col-span-5 place-self-center mt-4 lg:mt-0'>
                  <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                      src="/images/header-img.svg" alt=" hero image" className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={600} height={600}/>
                  </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection