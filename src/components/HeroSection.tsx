"use client";
import React, { ReactNode } from 'react';
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";


interface IconWrapperProps {
  className?: string;
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ className, children }) => (
  <span className={className}>
    {children}
  </span>
);

const HeroSection = () => {

  return (
    <section id="home">
      <div className="text-center flex flex-col md:text-left md:flex-row justify-around items-center my-10 mx-10">
        <div className="flex-shrink-0">
          <Image 
            src="/my-portfolio-v2/images/yuhamada.jpg" 
            alt="my profile icon"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <div className="mx-8 my-8 md:max-w-[300px] lg:max-w-[700px]">
          <h2 className="text-white text-5xl sm:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300">
              Hello! I&apos;m {" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Yu Hamada',
                1000,
                'Web Developer',
                1000,
                'Teacher',
                1000,
                'Web3 Researcher',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center md:justify-start">
            <button className="my-5 px-5 py-3 rounded-full mr-4 bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300 hover:bg-slate-200 text-white hover:opacity-80">
              <Link href="https://forms.gle/QGK7ZK13CBKMtZSp8" target="_blank" rel="noopener noreferrer">Hire Me</Link>
            </button>
            <Link href="https://github.com/JamesCroissant" className="flex items-center px-1" target="_blank" rel="noopener noreferrer">
              <IconWrapper className="text-white text-3xl hover:text-blue-400">
                <FaGithub />
              </IconWrapper>
            </Link>
            <Link href="https://www.linkedin.com/in/yu-hamada-308893256/" className="flex items-center px-1" target="_blank" rel="noopener noreferrer">
              <IconWrapper className="text-white text-3xl hover:text-blue-400">
                <FaLinkedin />
              </IconWrapper>
            </Link>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default HeroSection;