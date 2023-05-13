import React from "react";
import { Link } from "react-scroll";
import { navLinksData } from "../constants";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-10 h-20 bg-white drop-shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto pt-5">
        <div>
          <p className="font-titleFont font-bold text-3xl cursor-pointer">
            SA KIB
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            {navLinksData.map(({ _id, title, link }) => (
              <li
                className=" text-[20px] cursor-pointer font-semibold hover:text-linkColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
