import React from 'react';
import SelfIntroduction from "./SelfIntroduction";
import Skills from "./Skills";
import Education from "./Education";
import Hobby from "./Hobby";

const About = () => {
  return (
    <section id="about">
      <h2 className="text-white text-4xl text-center font-bold my-3">About Me</h2>
      <div className="about">
        <SelfIntroduction />
        <Skills />
        <Education />
        <Hobby />
      </div>
    </section>
  )
}

export default About;