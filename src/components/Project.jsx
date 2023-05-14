import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = ({ img, title, desc, tech1, tech2, code, demo, reverse }) => {
  return (
    <div className="bg-white rounded-[20px] w-full mb-[50px]">
      <div className="projects ss:flex ss:flex-col ss:items-center">
        <div className="rounded-[10px] h-[500px] w-[500px] ss:h-[400px] ss:w-[450px] overflow-hidden group relative">
          <div className="overflow-hidden relative">
            <img
              className="w-full h-[1300px] object-cover object-top cursor-pointer top-0 -translate-y-[0] group-hover:-translate-y-[950px] transition-translate transition-ease-in duration-[5s]"
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="ss:pt-[30px] items-center w-[550px] flex flex-col justify-center gap-y-10 px-[50px] text-center">
          <h3 className="font-bold text-[22px]">{title}</h3>
          <p className="text-[#767676] text-[18px] font-semibold ">{desc}</p>
          <div className="flex justify-center items-center gap-8">
            <p className="py-[10px] px-[15px] cursor-pointer text-semibold text-[20px] drop-shadow-lg bg-white">
              {tech1}
            </p>
            <p className="py-[10px] px-[15px] cursor-pointer text-semibold text-[20px] drop-shadow-lg bg-white ss:">
              {tech2}
            </p>
          </div>
          <div className="flex justify-center items-center text-[24px] font-medium gap-12">
            <a className="flex justify-center items-center gap-2" href={code}>
              Code{" "}
              <i className="text-[40px]">
                <AiFillGithub />
              </i>
            </a>
            <a className="flex justify-center items-center gap-2" href={demo}>
              {" "}
              Live Demo{" "}
              <i className="text-[30px]">
                <BsBoxArrowUpRight />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
