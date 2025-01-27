import React from "react";
import logo from "../assets/images/landingpage/logo.png";
import loginBanner from "../assets/images/landingpage/nurse.png";
import google from "../assets/images/auth/gogle.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-row w-full md:pl-20 px-5 md:pr-5 py-5 min-h-screen gap-10">
      <div className="flex flex-col gap-2 w-full ml-auto mr-auto max-w-[400px]  sm:max-w-[600px]">
        <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
          <img src={logo} alt="Logo" className="w-20" />
          <p className="font-semibold text-2xl text-[#4A4A4A]">Log in</p>
          <p className="font-semibold text-[14px] text-[#4A4A4A]">
            Sign in with
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-3 gap-2 ">
          <img src={google} alt="" />
          <p className="font-semibold text-sm text-[#4A4A4A]">
            Sign in with Google
          </p>
        </div>
        <div className="flex items-center gap-2 my-5 max-w-[400px] sm:max-w-[600px] w-full">
          <div className="flex-1 border-t border-[#4A4A4A]"></div>
          <p className="font-light text-sm text-[#4A4A4A]">OR</p>
          <div className="flex-1 border-t border-[#4A4A4A]"></div>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-semibold text-lg text-[#4A4A4A]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="max-w-[400px] sm:max-w-[600px] w-full bg-[#cbcfd6] p-3 placeholder:text-[#999999] placeholder:font-semibold"
            />
          </div>

          <div className="flex flex-row justify-between w-full sm:max-w-[600px] gap-4"></div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-semibold text-lg text-[#4A4A4A]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="max-w-[400px] sm:max-w-[600px] w-full bg-[#cbcfd6] p-3 placeholder:text-[#999999] placeholder:font-semibold"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rememberMe" />
              <label
                htmlFor="rememberMe"
                className="font-semibold text-sm text-[#4A4A4A]"
              >
                Remember me
              </label>
            </div>
          </div>
          <div className="w-full flex items-center">
            <button className="bg-[#408561] font-extrabold text-white rounded-lg p-2 hover:bg-[#356948] max-w-[400px] sm:max-w-[600px] w-full">
              <Link to="/landing">Log in</Link>
            </button>
          </div>
        </form>
        <div className="w-full flex justify-center items-center mt-3">
          <p className="font-semibold text-sm text-[#4A4A4A]">
            Dont have an account? <span className="text-[#f67813]">Sign Up</span>
          </p>
        </div>
      </div>
      <div className="w-full hidden md:block ">
        <img
          src={loginBanner}
          alt=""
          className="min-h-screen h-full w-full object-cover rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default Login;
