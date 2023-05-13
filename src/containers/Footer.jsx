import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-slate-800">
      <div className="mx-auto max-w-screen-xl py-[50px] ">
        <div className="flex justify-between items-center text-white font-bold text-[20px]">
          <p>Copyright © 2023. All rights are reserved</p>
          <div className="flex justify-start items-center gap-4">
            <a className="cursor-pointer" href="">
              <AiFillGithub size="40px" />
            </a>
            <a className="cursor-pointer" href="">
              <AiFillLinkedin size="40px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
