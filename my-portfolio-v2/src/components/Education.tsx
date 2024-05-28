import React from 'react';

const Education = () => {
  const timelineElements = [
    {
      "school" : "Cornerstone International Community College of Canada / Vancouver Canada",
      "course" : "Web & Mobile App Development with CO-OP",
      "term" : "Sep 2023 ~ present"
    },
    {
      "school" : "Tokyo University of Science / Tokyo, Japan",
      "course" : "Bachelor of physics",
      "term" : "Apr 2019 ~ Mar 2023"
    }
  ]

  
   return (
    <div className="text-center px-2 py-2 my-6 mx-8 rounded-lg md:rounded-full bg-gradient-to-r from-indigo-800 via-blue-500 to-cyan-300 ">
      <div className="rounded-lg md:rounded-full h-full w-full px-2 py-2 bg-slate-200">
        <h3 className="text-3xl font-semibold pt-2">Career / Education</h3>
        <ul className="flex flex-wrap justify-center gap-2 py-3 px-3">
          {timelineElements.map((timelineElement, index) => (
            <div key={index} className="text-left bg-white border border-black/[0.1] rounded-md px-3 py-2 hover:scale-110">
              <li>{timelineElement.school}</li>
              <li >{timelineElement.course}</li>
              <li >{timelineElement.term}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )

}

export default Education;