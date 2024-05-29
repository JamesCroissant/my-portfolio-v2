import React from 'react';
import Image from "next/image";

const Works = () => {
  const worksData = [
    {
      title : "my-wordbooks",
      description : "This application is for memorizing your own English words especially you don't understand. You can create your own vocabulary book by writing the word and meaning down in this app.",
      tags : ["React", "Node.js", "Express", "MongoDB"],
      imageUrl : "/my-portfolio-v2/images/image_work1.png" 
    }
  ]

  return (
    <section id="works" className=''>
      <div className="my-14">
        <h2 className="text-white text-4xl text-center font-bold my-3">Works</h2>
        <div className="text-center px-2 py-2 my-4 mx-8 rounded-lg bg-gradient-to-r from-indigo-800 via-blue-500 to-cyan-300">
          {worksData.map((work, index) => (
            <div key ={index} className="flex flex-col md:flex-row rounded-lg h-full w-full px-2 py-2 bg-slate-200 hover:bg-opacity-80">
              <div className="w-full">
                <h3 className="text-2xl font-semibold py-2">{work.title}</h3>
                <p className="text-left py-3 px-2">{work.description}</p>
                <ul className="flex flex-wrap justify-center gap-1.5 py-3 px-3">
                  {work.tags.map((tag, index) => (
                    <li key={index} className="bg-white border border-black/[0.1] rounded-md px-3 py-2 hover:scale-110">{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={work.imageUrl}
                  alt="working now"
                  className="rounded-md shadow-2xl mt-6 mb-4"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default Works;