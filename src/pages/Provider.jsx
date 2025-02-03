import React from "react";
import ProviderSlider from "../components/ProviderSlider";
import Nav from "../components/Nav";
import nurse from "../assets/images/landingpage/nurse.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import xray from "../assets/images/landingpage/xray.png";

const Provider = () => {
  return (
    <div>
      <ProviderSlider />
      <div className="absolute inset-0 px-4 font-open_sans tracking-[16%]">
        <Nav />
        <div className="flex flex-col gap-2 md:pl-12 md:pt-14 lg:pt-14">
          <p className="font-extrabold text-white text-[13px] sm:text-[20px] md:text-[45px] max-w-[300px] sm:max-w-[350px] md:max-w-[530px] md:leading-[61.28px] tracking-[3px]">
            Join the Geetreat Network of Health Providers
          </p>
          <p className="sm:tracking-[1px] text-[10px] md:text-[14px] text-white font-[600] max-w-[400px] md:max-w-[415px] leading-[20.51px]">
            Register with Getreat today and become part of a trusted network
            that connects health professionals with individuals seeking quality
            care. Gain access to a wide array of tools and resources designed to
            help you grow your practice and deliver exceptional patient
            experineces.
          </p>
          <p className="tracking-[1px] text-[10px] sm:text-[12px] md:text-[14px] text-white font-[600] max-w-[400px] sm:max-w-[350px] md:max-w-[415px] leading-[20.51px]">
            Sign up now and start making a difference in more lives
          </p>
          <Link to="/provider-reg">
          <div className="bg-[#408561] p-2 md:h-10  md:p-2 rounded-md max-w-[170px] text-center text-white text-[13px] italic">
            Register
          </div>
          </Link>
        </div>
      </div>
      <div className="sm:max-w-[70%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">
      <div className="flex w-full justify-center my-[20px] md:my-[30px]">
        <p className="font-[800] md:text-[36px] tracking-[3px] md:max-w-[400px] text-center">
          What you Stand to Gain as a Provider
        </p>
      </div>
      <div className="w-full flex sm:justify-center p-4">
        <ul className="grid grid-cols-1  sm:grid-cols-2  tracking-[16%] max-w-[980px] text-[14px] md:text-[18px] lg:text-[18px] gap-2 font-open_sans">
          <li className=" p-8 rounded-[8px] bg-[#f6efef] flex gap-3">
            <div className="h-[25px] mt-1 w-[60px] p-2 bg-[#408561] text-center flex items-center text-white rounded-[5px]">
              1
            </div>
            <div className="">
              You can "Expand Your Practice, Impact More Lives and Earn More" by
              connecting you with patients in need, offering secure telemedicine
              features, appointment scheduling set you to reach a braoder
              patient base and provide exceptional care beyond the confines of
              your office.
            </div>
          </li>
          <li className=" p-8 rounded-[8px] bg-[#F4FFF8] flex gap-3">
            <div className="h-[25px] mt-1 w-[60px] p-2 bg-[#408561] text-center flex items-center text-white rounded-[5px]">
              2
            </div>
            <div className="">
              Simplify Your Practice to improve effieciency. Through a
              sreamlined patient records for informed and better treatment
              outcome.
            </div>
          </li>
          <li className=" p-8 rounded-[8px] bg-[#EEF5FA] flex gap-3">
            <div className="h-[25px] mt-1 w-[60px] p-2 bg-[#408561] text-center flex items-center text-white rounded-[5px]">
              3
            </div>
            <div className="">
              You can "Boost Patient Engagement and Elevate Satisfaction and
              Loyalty" like never before. Our app offers personalized health
              plans, reminders, and educational content to keep patients
              informed and involved in their care journey.
            </div>
          </li>
          <li className=" p-8 rounded-[8px] bg-[#FEFFEB] flex gap-3">
            <div className="h-[25px] mt-1 w-[60px] p-2 bg-[#408561] text-center flex items-center text-white rounded-[5px]">
              4
            </div>
            <div className="">
              Join a Community of Experts "Become a part of Getreat's network of
              esteemed medical professionals. Collaborate, share insights, to
              build a community dedicated to delivering top-notch healthcare
              serice".
            </div>
          </li>
        </ul>
      </div>
      <div className="p-4 md:p-0 flex flex-row sm:items-center lg:mb-[150px] lg:mt-[150px] gap-5 justify-between font-open_sans max-w-[1200px]">
        <div className="hidden sm:block">
          <img src={xray} alt="" className=""/>
        </div>
        <div className="">
          <p className="font-extrabold text-[16px] sm:text-[15px] md:text-[20px] lg:text-[26px] xl:text-[36px] md:leading-[49.03px] tracking-[3px]">
            Registration Requirement
          </p>
          <p className="max-w-[600px] leading-[30px] md:leading-[35px]">To provide efficient service to our patients, we want our providers to possess the right skills and qualifications to achieve this. We want patients to have confidence in providers they interact with.</p>
        <p>Getreat requirements to becoming a provider are:</p>
        <ul className="text-[#4A4A4A] font-[400] sm:hidden  lg:block flex flex-col sm:max-w-[300px] md:max-w-[450px] lg:max-w-[530px] mt-4 text-[14px] md:text-[18px] lg:text-[18px] font-open_sans leading-[24.51px]">
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              Medical degree certificate.
            </li>
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
             Internship certiificate.
            </li>
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              Nysc certification.
            </li>
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              Registration and Practice license issue by MDCN medical and dental council of Nigeria.
            </li>
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              Evidence of fulfilling CPD requirements for license renewal.
            </li>
          </ul>
          <div className=" flex sm:hidden lg:block justify-center sm:justify-start">
            <Link to="/provider-reg">
            <div className="bg-[#408561] h-10  p-2 rounded-md w-[170px] text-center text-white text-[13px] italic mt-3">
              Register
            </div>
            </Link>
          </div>
        </div>
      </div>
      <ul className="text-[#4A4A4A]  font-[400] hidden sm:block lg:hidden text-[14px] md:text-[18px] lg:text-[18px] font-open_sans leading-[24.51px]">
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              Medical degree certificate.
            </li>
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
             Internship certiificate.
            </li>
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              Nysc certification.
            </li>
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              Registration and Practice license issue by MDCN medical and dental council of Nigeria.
            </li>
            <li className="m-3 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              Evidence of fulfilling CPD requirements for license renewal.
            </li>
          </ul>
          <div className="mb-[20px] p-4 flex hidden lg:hidden sm:block  justify-center sm:justify-start">
            <Link to="/provider-reg">
            <div className="bg-[#408561] h-10  p-2 rounded-md w-[170px] text-center text-white text-[13px] italic mt-3">
              Register
            </div>
            </Link>
          </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Provider;
