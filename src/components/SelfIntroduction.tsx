import React from 'react';
import Image from "next/image";

const SelfIntroduction = () => {
  return (
    <div className="flex flex-col items-center my-8 mx-10 md:flex-row justify-around ld:flex-row">
      <div className="px-3">
        <p className="text-white">
          I&apos;m a web developer with a passion for creating interactive web applications and coaching.
          With a solid background in developing software by online
          and teaching programming languages,
          I thrive in guiding others toward success. 
          And also with 4 years of coaching experience, 
          I&apos;ve developed effective communication skills 
          and an ability to simplify complex concepts. 
          My passion for problem-solving and continuous learning 
          keeps me engaged with the latest trends in the field.
          I&apos;m excited to bring my coding skills, coaching experience,
          and enthusiasm for learning to collaborative projects.
        </p>  
      </div>
      <div className="text-center my-6">
        <div className="profile-image">
          <Image
            src="/my-portfolio-v2/images/yuhamada.jpg"
            alt="my profile icon"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <button type="button" className="text-white my-6 hover:opacity-75">
          <a href="./images/yuhamada_webdeveloper.pdf" className="my-5 mx-0 px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-indigo-800 via-blue-500 to-cyan-300 hover:bg-slate-200 text-white">Resume</a>
        </button>
      </div>
    </div>
  )
}

export default SelfIntroduction;