import React from "react";
import JagPhoto from "../assets/jc_photo.jpg";

function About() {
  return (
    <div id="about" className="bg-secondary text-black p-5 md:p-12">
      <div className="flex flex-col lg:flex-row lg:space-x-12 max-w-[1180px] mx-auto">
        <div className="w-full lg:w-[60%]">
          <div className="text-[2rem] md:text-[2.5rem] font-semibold">
            About Me
          </div>
          <div className="text-[1.2rem] md:text-[1.8rem] mt-5">
              Hello! I'm Jagmit Cheema, a Fullstack Developer with a year of experience. 
              My expertise lies in both front-end and back-end development using languages 
              like HTML, JavaScript, CSS, React, and I'm comfortable working with databases 
              and am currently using the MERN stack. I have a passion for staying current with 
              the latest tech trends and am always looking to broaden my skill set. 
          </div>
        </div>
        <div className="w-full lg:w-[40%] mt-10 lg:mt-0">
          <img
            className="w-full lg:rounded-full object-fit"
            src={JagPhoto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
