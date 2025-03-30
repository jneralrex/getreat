import React from "react";
import logo from "../assets/images/landingpage/logo.png";
import signUpBanner from "../assets/images/auth/group.png";
import google from "../assets/images/auth/gogle.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="w-full flex justify-center inset-0 py-5 min-h-screen"
      style={{
        backgroundImage: `url(${signUpBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%] bg-white gap-10 font-spartan rounded-lg pb-[60px] p-5">
        <div className="flex flex-col gap-2 w-full ml-auto mr-auto max-w-[400px]  lg:max-w-full lg:ml-0 lg:mr-0 lg:px-20 lg:py-5">
          <div className="flex flex-col items-center lg:justify-start lg:items-start">
            <img src={logo} alt="Logo" className="size-20" />
            <p className="font-semibold text-2xl text-[#4A4A4A]">
              Create account
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-2 ">
            <img src={google} alt="" />
            <p className="font-semibold text-sm text-[#4A4A4A]">
              Sign Up with Google
            </p>
          </div>
          <div className="w-full justify-center items-center flex">
            <div className="lg:w-[400px] flex items-center gap-2 lg:gap-5 w-[400px]">
              <div className="flex-1 border-t border-[#4A4A4A]" />
              <p className="font-light text-sm text-[#4A4A4A]">OR</p>
              <div className="flex-1 border-t border-[#4A4A4A]" />
            </div>
          </div>
          <form className="flex flex-col gap-1">
           
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
                className="max-w-[400px] sm:max-w-full bg-[#cbcfd6] p-2 placeholder:text-[#999999] placeholder:font-semibold"
              />
            </div>

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
                className="max-w-[400px] sm:max-w-full bg-[#cbcfd6] p-2 placeholder:text-[#999999] placeholder:font-semibold"
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
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" />
                <label
                  htmlFor="terms"
                  className="font-semibold text-sm text-[#4A4A4A]"
                >
                  I agree to the{" "}
                  <span className="text-[#f67813]">Terms & Conditions</span>
                </label>
              </div>
            </div>
            <div className="w-full">
              <Link to="/login">
                <button className="bg-[#408561] w-full font-extrabold text-white rounded-lg p-2 hover:bg-[#356948] max-w-[400px] sm:max-w-full">
                  Create
                </button>
              </Link>
            </div>
          </form>
          <div className="w-full flex justify-center items-center mt-3">
            <p className="font-semibold text-sm text-[#4A4A4A]">
              Don't have an account?{" "}
              <Link to="/sign-up">
                <span className="text-[#f67813]">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
