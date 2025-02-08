import React from "react";
import logo from "../assets/images/landingpage/logo.png";
import { Link } from "react-router-dom";
import { IoChevronDownSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <div className="sm:max-w-[100%] md:max-w-[100%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">

    <div className="flex items-center justify-between gap-5">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-20" />
      </Link>
      <div className="flex justify-evenly gap-[5px] text-white md:gap-4 items-center text-[7.7px] sm:text-[14px] italic">
        <Link to="/provider">Become A Provider</Link>
        <div className="relative group inline-block">
          <button className=" text-white text-[7.5px] sm:text-[14px] sm:w-[80px] flex justify-center items-center sm:gap-[4px] md:w-[150px] font-medium border-none rounded cursor-pointer italic">
            About us <IoChevronDownSharp className="text-[#07b65b]" />
          </button>
          <div className="absolute hidden shadow-lg z-10 group-hover:block">
            <div className="mr-10 rounded-lg  md:w-[150px] bg-black/90 p-4 flex flex-col gap-2 text-white text-center">
              <Link
                to="/about"
                className="block text-[10px] md:text-[14px] hover:text-[#c3671a]"
              >
                About us
              </Link>
              <Link
                to="/about"
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
          className="bg-[#408561] sm:h-10 text-center flex items-center p-1 sm:p-2 rounded-md"
        >
          Join Our Community
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Nav;
