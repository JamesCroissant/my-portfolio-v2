import React from 'react';

const Skills = () => {
  const skillsData = [
    "HTML", "CSS", "TailwindCSS", "JavaScript", "React", "Next.js", "Node.js", "Express",
    "Python", "Flask", "Django", "Git", "Docker", "MongoDB", "Wordpress"
  ]
  return (
    <div className="text-center px-2 py-2 mx-8 rounded-lg md:rounded-full bg-gradient-to-r from-indigo-800 via-blue-500 to-cyan-300 ">
      <div className="rounded-lg md:rounded-full h-full w-full px-2 py-2 bg-slate-200">
        <h3 className="text-3xl font-semibold pt-2">What I can do</h3>
        <ul className="flex flex-wrap justify-center gap-1.5 py-3 px-3">
          {skillsData.map((skill, index) => (
            <li key={index} className="bg-white border border-black/[0.1] rounded-md px-3 py-2 hover:scale-110">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills;