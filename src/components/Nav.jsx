import React from "react";
import logo from "../assets/images/landingpage/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex items-center justify-between gap-5">
            <div>
                <img src={logo} alt="Logo" className="w-20" />
            </div>
            <div className="flex justify-evenly gap-2 text-white md:gap-4 items-center text-[7.4px] sm:text-[14px] italic">
                <div>Become A Provider</div>
                <div className="relative group inline-block">
                    <button className=" text-white text-[7.4px] sm:text-[14px] sm:w-[80px]  md:w-[150px] font-medium border-none rounded cursor-pointer italic">
                        About us
                    </button>
                    <div className="absolute hidden shadow-lg z-10 group-hover:block">
                        <div className="mr-10 rounded-lg  md:w-[150px] bg-black/90 p-4 flex flex-col gap-2 text-white text-center">
                            <Link to="/about" className="block text-[10px] md:text-[14px] hover:text-[#c3671a]">
                                About us
                            </Link>
                            <Link to="/about" className="block text-[10px] md:text-[14px] hover:text-[#c3671a]">
                                Safety & Compliance
                            </Link>
                            <Link to="/about" className="block text-[10px] md:text-[14px] hover:text-[#c3671a]">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-[#408561] sm:h-10 text-center flex items-center p-1 sm:p-2 rounded-md">
                    Join Our Community
                </div>
            </div>
        </div>
    );
};

export default Nav;
