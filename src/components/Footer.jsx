import React from "react";
import footerlogo from "../assets/images/landingpage/footerlogo.png";
import x from "../assets/images/landingpage/x.png";
import facebook from "../assets/images/landingpage/facebook.png";
import whatsapp from "../assets/images/landingpage/whatsapp.png";
import insta from "../assets/images/landingpage/insta.png";
import flag from "../assets/images/landingpage/flag.png";
const Footer = () => {
  return (
    <footer className="w-full bg-[#408561] px-7 md:px-32 py-3 flex flex-col gap-3 overflow-hidden">
      <div className="grid grid-cols-3 md:flex w-full md:justify-between items-center text-[12px]">
        <img src={footerlogo} alt="" className=" w-[80px]" />
        <div className="text-white text-[10px] sm:text-[12px] md:text-[14px]">
          <p>Have a problem?</p>
          <p>Reach Out to Us</p>
        </div>
        <div className="text-white text-[10px] sm:text-[12px] md:text-[14px]">
          <p>Subscribe to newletters</p>
          <p>from Getreat</p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:flex md:justify-between items-center w-full">
        <div className="flex h-[25px] gap-2 sm:gap-3">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={x} alt="" />
          <img src={whatsapp} alt="" />
        </div>
        <div className="flex items-center text-center">
          <p className="text-[13px] sm:text-[12px] md:text-[14px] text-white ml-[2px] sm:mr-5 ">
            +234-5005-34343
          </p>
        </div>
        <div className="h-20  w-[264px] sm:w-[200px] flex justify-center items-center">
          <form action="">
            <div className="flex w-full max-w-[260px] gap-1 sm:mr-10 bg-white rounded-lg p-1">
              <input
                type="text"
                placeholder="Type your email"
                className="outline-none"
              />
              <button className="border bg-[#408561] rounded-lg text-[12px] italic p-2 text-white">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-white flex justify-between text-[10px] sm:text-[14px] w-full">
        <ul className="flex gap-3">
          <li>About Us</li>
          <li>Safety & Compliance</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="flex gap-3">
          <li>Copyright @ 2024.</li>
          <li>All rights reserved</li>
        </ul>
      </div>
      <div className="text-white flex justify-between text-[10px] sm:text-[14px] w-full">
        <ul className="flex gap-3">
          <li>Blog</li>
          <li>Cookie Policy</li>
          <li>Terms of Use</li>
        </ul>
        <ul className="flex items-center sm:mr-[66px] md:mr-[66px] sm:w-[175px] md:max-w-[240px]">
          <li>Web in Nigeria</li>
          <li>
            <img src={flag} alt="" className="w-[20px]" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
