import React, { useEffect } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-blue-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <h2 className="text-4xl inline border-b-4 border-gray-500">About</h2>
        </div>

        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-base mt-5 ease-in fade-in"
        >
          Hello, I'm Shubham, and I'm passionate about crafting exciting
          projects on the web using the MERN stack. Currently residing in
          Bangalore, I find immense joy in developing websites and applications
          that not only boast appealing designs but also deliver exceptional
          functionality. While I haven't had the opportunity to gain
          professional experience within a company, I have actively participated
          in group endeavors, particularly in open-source initiatives. My
          journey in the world of web development began with a deep fascination
          for technology and a desire to create impactful digital experiences.
          With the MERN stack—MongoDB, Express.js, React.js, and Node.js—as my
          toolkit, I've embarked on numerous projects, each one offering an
          opportunity to explore new concepts and refine my skills. Living in
          Bangalore, a vibrant hub of tech innovation, has further fueled my
          passion for web development. Being surrounded by like-minded
          individuals and a supportive community has been invaluable in my
          growth journey. From attending meetups and workshops to collaborating
          on projects, I've embraced every opportunity to learn and contribute.
          While my professional experience may be limited, my enthusiasm for web
          development knows no bounds. I thrive in collaborative environments,
          where I can brainstorm ideas, tackle challenges, and bring innovative
          concepts to life. Whether it's building a sleek website or developing
          a robust application, I'm always eager to dive into new projects and
          push the boundaries of what's possible on the web. In addition to
          technical skills, I place great emphasis on the user experience and
          interface design. I believe that a well-designed product not only
          looks visually appealing but also enhances the overall usability and
          satisfaction of the end user. By combining creativity with
          functionality, I strive to create digital solutions that leave a
          lasting impression.
        </p>
        <br />
        <p
          data-aos="slide-up"
          data-aos-duration="500"
          className="text-base mt-5 ease-in fade-in"
        >
          In addition to technical skills, I place great emphasis on the user
          experience and interface design. I believe that a well-designed
          product not only looks visually appealing but also enhances the
          overall usability and satisfaction of the end user. By combining
          creativity with functionality, I strive to create digital solutions
          that leave a lasting impression.
        </p>
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2"
        >
          <AiOutlineCloudDownload />
          <a  href="../assets/experience/resume.pdf" download='resume.pdf'>Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default About;
