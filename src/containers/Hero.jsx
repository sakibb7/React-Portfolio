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
      <div className="mx-auto max-w-screen-xl py-44 ">
        <div className="flex justify-between items-center">
          <div className="w-1/2 flex flex-col">
            <div className="flex relative">
              <h1 className="text-5xl font-semibold leading-tight">
                Front-End React Developer{" "}
              </h1>
              <img
                className="absolute top-c3.5 left-c17"
                src={wavehand}
                alt=""
              />
            </div>
            <p className="pt-8 text-xl text-fontColor">
              Hi, Im Sakib. A Passionate Front-End Developer Based in Dhaka,
              Bangladesh.📍
            </p>
            <div className="flex justify-start items-center gap-4 pt-8">
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

        <div className="flex gap-16 text-2xl">
          <p className="text-bold pt-8">Tech Stack </p>
          <p className="text-4xl pt-7">|</p>
          <div className="flex gap-8">
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
