import React from "react";
import Title from "../components/Title";
import { TbMap2 } from "react-icons/tb";
import { GoMailRead } from "react-icons/go";

const Contact = () => {
  return (
    <div id="contact" className=" py-[150px] ss:py-[100px]">
      <div className="max-w-screen-xl mx-auto ss:px-[40px]">
        <div>
          <Title
            sectionHeading="CONTACT"
            sectionTitle="Don't be shy! Hit me up! 👇"
          />
        </div>

        <div className="flex justify-start ss:flex-col ss:justify-center items-center gap-[200px] ss:gap-[10px]">
          <div className="flex justify-start items-center text-[20px] pt-[50px]">
            <i className="mr-[40px] bg-white drop-shadow-lg p-[30px] text-[30px] rounded-full">
              <TbMap2 color="#0088EB" size="35px" />
            </i>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-slate-400">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex justify-start items-center text-[20px] pt-[50px]">
            <i className="mr-[40px] bg-white drop-shadow-lg p-[30px] text-[30px] rounded-full">
              <GoMailRead size="35px" color="#0088EB" />
            </i>
            <div>
              <p className="font-semibold">Mail</p>
              <p className="text-slate-400">hello@sakibb.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
