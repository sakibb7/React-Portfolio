import React from "react";
import Title from "../components/Title";
import Project from "../components/Project";
import { project1, project2, project3 } from "../assets/index";

const Portfolio = () => {
  return (
    <div id="projects" className="bg-slate-50 py-[150px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="pb-[100px]">
          <Title
            sectionHeading="PORTFOLIO"
            sectionTitle="Each project is a unique piece of development 🧩"
          />
        </div>
        <div>
          <Project
            img={project1}
            title="CAR RENTAL 🚗"
            desc="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            tech1="React"
            tech2="SCSS"
            reverse="grid-template-column:reverse"
          />
          <Project
            img={project2}
            title="CAR RENTAL 🚗"
            desc="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            tech1="React"
            tech2="SCSS"
          />
          <Project
            img={project3}
            title="CAR RENTAL 🚗"
            desc="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            tech1="React"
            tech2="SCSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
