import React from "react";
import Title from "../components/Title";
import { main2 } from "../assets/index";

const About = () => {
  return (
    <div id="about" className="py-[150px] ss:py-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-start w-full gap-[150px] ss:gap-[50px] ss:flex-col ss:items-center">
          <div className="">
            <img className="rounded-[30px]" src={main2} alt="" />
          </div>
          <div className="w-1/2 ss:w-full ss:px-[40px]">
            <Title
              sectionHeading="ABOUT ME"
              sectionTitle="A dedicated Front-end Developer
based in Dhaka, Bangladesh 📍"
            />
            <p className="pt-[20px] text-[20px] text-fontColor leading-[1.7]">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
