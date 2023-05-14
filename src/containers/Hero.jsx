import React from "react";
import {
  css,
  html,
  js,
  main,
  mainpic,
  sass,
  tailwind,
  wavehand,
} from "../assets/index";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="home" className="bg-slate-50">
      <div className="mx-auto max-w-screen-xl py-44 ss:py-20">
        <div className="flex justify-between items-center ss:flex-col ss:flex-col-reverse">
          <div className="w-1/2 ss:w-full flex flex-col ss:px-[40px]">
            <div className="flex relative">
              <h1 className="text-5xl ss:py-[50px] font-semibold leading-tight ss:text-center ">
                Front-End React Developer 👋
              </h1>
            </div>
            <p className="pt-8 ss:pt-4 text-[25px] text-fontColor ss:text-center">
              Hi, Im Sakib. A Passionate Front-End Developer Based in Dhaka,
              Bangladesh.📍
            </p>
            <div className="flex justify-start items-center ss:justify-center gap-4 pt-8">
              <a className="cursor-pointer hover:text-linkColor" href="">
                <AiFillGithub size="45px" />
              </a>
              <a className="cursor-pointer hover:text-linkColor" href="">
                <AiFillLinkedin size="45px" />
              </a>
            </div>
          </div>

          <div className="avatar" data-type="wave">
            <div
              className="image"
              style={{ backgroundImage: `url(${mainpic})` }}
            ></div>
          </div>
        </div>

        <div className="flex gap-16 text-2xl mt-12 ss:flex-col">
          <p className="text-bold pt-8 border-r-4 ss:border-r-0 ss:border-b-4 pr-[70px] ss:pr-0 border-gray-500 ss:text-center ss:mx-[150px] font-medium ss:pb-4">
            Tech Stack
          </p>
          <div className="flex gap-8 ss:px-[60px] flex-wrap ss:place-content-center">
            <span className="circleBackground">
              <img src={html} alt="" />
            </span>
            <span className="circleBackground">
              <img src={css} alt="" />
            </span>
            <span className="circleBackground">
              <img src={js} alt="" />
            </span>
            <span className="circleBackground">
              <img src={tailwind} alt="" />
            </span>
            <span className="circleBackground">
              <img src={sass} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
