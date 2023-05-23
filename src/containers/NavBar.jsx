import { useState } from "react";
import { Link } from "react-scroll";
import { navLinksData } from "../constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="sticky top-0 z-10 h-[75px] bg-white drop-shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto pt-5 p-5">
        <div>
          <p className="font-titleFont font-bold text-[25px] cursor-pointer">
            SA KIB
          </p>
        </div>
        <div>
          <ul className="sm:flex hidden items-center gap-10">
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

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div
              className="text-[25px] cursor-pointer"
              onClick={() => settoggle((prev) => !prev)}
            >
              {toggle ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </div>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
            >
              <ul className="sm:flex  items-center gap-10">
                {navLinksData.map(({ _id, title, link }) => (
                  <li
                    className=" text-[20px] cursor-pointer py-[20px] px-[40px] font-semibold hover:text-linkColor duration-300"
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
      </div>
    </div>
  );
};

export default NavBar;
