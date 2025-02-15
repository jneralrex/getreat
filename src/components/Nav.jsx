import React from "react";
import logo from "../assets/images/landingpage/logo.png";
import { NavLink, Link } from "react-router-dom";
import { IoChevronDownSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="sm:max-w-[100%] md:max-w-[100%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">
      <div className="flex items-center justify-between gap-5">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-[100px]" />
        </Link>

        <div className="flex justify-evenly gap-[5px] text-white lg:gap-0 items-center text-[7.7px] sm:text-[14px] italic font-semibold">
          <NavLink
            to="/provider"
            className={({ isActive }) =>
              ` ${
                isActive ? "underline decoration-green-700 underline-offset-4" : ""
              }`
            }
          >
            Become A Provider
          </NavLink>

          <div className="relative group inline-block">
            <button className="text-white text-[7.5px] sm:text-[14px] sm:w-[80px] flex justify-center items-center sm:gap-[4px] md:w-[150px] border-none rounded cursor-pointer italic font-semibold">
              About us <IoChevronDownSharp className="text-[#07b65b]" />
            </button>
            <div className="absolute left-0 hidden shadow-lg z-10 group-hover:block">
              <div className="rounded-lg md:w-[150px] bg-black/90 p-4 flex flex-col gap-2 text-white text-center">
                <Link
                  to="/about"
                  className="block text-[10px] md:text-[14px] hover:text-[#c3671a]"
                >
                  About us
                </Link>
                <Link
                  to="/safety"
                  className="block text-[10px] md:text-[14px] hover:text-[#c3671a]"
                >
                  Safety & Compliance
                </Link>
                <Link
                  to="/contact"
                  className="block text-[10px] md:text-[14px] hover:text-[#c3671a]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/sign-up"
            className="bg-[#408561] sm:h-10 flex items-center justify-center px-4 py-2 rounded-md hover:bg-green-700"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
