import React from 'react';

const Hobby = () => {
  const hobbiesData = [
   "snow boarding 🏂 ",
   "running 🏃 ",
   "sauna ♨️ ",
   "driving 🚗 ",
   "reading academic books 📕 ",
   "traveling ✈️ ",
  ]
  return (
    <div className="text-center px-2 py-2 mx-8 rounded-lg md:rounded-full bg-gradient-to-r from-indigo-800 via-blue-500 to-cyan-300 ">
      <div className="rounded-lg md:rounded-full h-full w-full px-2 py-2 bg-slate-200">
        <h3 className="text-3xl font-semibold pt-2">What I like</h3>
        <ul className="flex flex-wrap justify-center gap-1.5 py-3 px-3">
          {hobbiesData.map((hobby, index) => (
            <li key={index} className="bg-white border border-black/[0.1] rounded-md px-3 py-2 hover:scale-110">{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hobby;