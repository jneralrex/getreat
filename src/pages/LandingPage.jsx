import React from "react";
import Slider from "../components/Slider";
import logo from "../assets/images/landingpage/logo.png";
import babyscanclock from "../assets/images/landingpage/babyscanclock.png";
import dr from "../assets/images/landingpage/dr.png";
import group1 from "../assets/images/landingpage/group1.png";
import healthy from "../assets/images/landingpage/healthy.png";
import pastor from "../assets/images/landingpage/pastor.png";
import nurse from "../assets/images/landingpage/nurse.png";
import TestimonySlider from "../components/TestimonySlider";


const LandingPage = () => {
  return (
    <div>
      <Slider />
      <div className="absolute inset-0 px-4">
        <div className="flex items-center justify-between gap-5">
          <div>
            <img src={logo} alt="Logo" className="w-20" />
          </div>
          <div className="flex justify-evenly gap-2 text-white md:gap-4 items-center text-[7.4px] sm:text-[14px] italic">
            <div>Become A Provider</div>
            <div>About Us</div>
            <div className="bg-[#408561] sm:h-10 text-center flex items-center p-1 sm:p-2 rounded-md">
              Join Our Community
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 md:pl-12 md:pt-14 lg:pt-14">
          <p className="font-extrabold text-white sm:text-[30px] md:text-[45px] max-w-[200px] sm:max-w-[350px] md:max-w-[500px] md:leading-[61.28px]">
            Your Partner in Pregnancy, Parenting, and Beyond
          </p>
          <p className="text-[14px] text-white font-[600] max-w-[400px] sm:max-w-[350px] md:max-w-[450px] leading-[24.51px]">
            Advancing the Motherhood Experience: Pregnancy Care, Baby Support,
            and Fertility Enhancement
          </p>
          <div className="bg-[#408561] h-10  p-2 rounded-md max-w-[170px] text-center text-white text-[13px] italic">
            Join Our Community
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-evenly gap-10 lg:gap-5 p-5 lg:p-10">
        <div className="flex flex-row items-center  mt-6 justify-between">
          <div>
            <img src={babyscanclock} alt="" />
          </div>
          <div className="">
            <p className="font-extrabold text-[18px] md:text-[36px] md:leading-[49.03px] md:max-w-[450px] lg:max-w-[400px]">
              What We Provide For Expecting Mothers
            </p>
            <ul className="flex flex-col gap-3 sm:max-w-[300px] md:max-w-[450px] lg:max-w-[380px] mt-4 text-[14px] md:text-[18px] lg:text-[18px]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Get Daily tips, motivation and advice tailored for every stage,
                to monitor your baby development and keep track of your health.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Stay informed on what is next, through our medical expert
                articles with spirit lifting and exciting videos.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                "Nurturing you" and "Nurturing your baby" with healthy
                nutritional recommendation and fitness to keep you active and
                in-charge.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Connect with other trusted and experience expecting moms for
                support and advice.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row items-center lg:mt-[30px] justify-between ">
          <div className="lg:max-w-[390px] lg:mt-36 flex flex-col gap-3">
            <p className="font-extrabold text-[18px] md:text-[36px] md:leading-[49.03px] max-w-[280px] md:max-w-[450px] lg:max-w-[400px]">
              Our Access Is Timeless: Anytime, Anywhere
            </p>
            <p className="text-[14px] md:text-[18px] lg:text-[17px]">
              The modern day demands an empowered freedom to stay connected to
              continous healthcare support. With our platform, you can access
              high-quality healthcare services anywhere and anytime-whether
              you're at home, on the go, or at work. No more waiting in long
              lines or dealing with time-consuming appointments. Our conveninet
              online tools bring healthcare professonals to you, offering
              virtual consultations, prescription services, and medical advice
              right at your fingertips
            </p>
          </div>
          <div className="flex flex-row items-center justify-between gap-6">
            <div className="h-[250px] hidden lg:block">
              <img src={group1} alt="" className="" />
            </div>
            <div className="flex flex-col items-center hidden lg:block">
              <div className="">
                <img src={healthy} alt="" />
              </div>
              <div className=" h-[220px]">
                <img src={dr} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center lg:mt-[100px] justify-between ">
          <div className="flex flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center hidden lg:block">
              <div className="">
                <img src={healthy} alt="" />
              </div>
              <div className=" h-[220px]">
                <img src={pastor} alt="" />
              </div>
            </div>
            <div className="h-[250px] hidden lg:block">
              <img src={group1} alt="" className="" />
            </div>
          </div>
          <div className="lg:max-w-[390px] lg:mt-20 flex flex-col gap-3">
            <p className="font-extrabold text-[18px] md:text-[30px] md:leading-[49.03px] max-w-[280px] md:max-w-[450px] lg:max-w-[500px]">
              We Connect, We Build: Trusted Communities
            </p>
            <p className="text-[14px] md:text-[18px] lg:text-[17px]">
              Be part of trusted individuals that provides share knowledge and
              provide the best support your health journey is supported by more
              than just healthcare professionals-it's about connecting with a
              community that understands, care, and empowers you. Our platform
              offers the oppurnity to connect with a trusted network of medical
              experts, wellness advocates, and like-minded individuals who share
              the same comiitment to better health.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center lg:mt-[100px] justify-between ">
          <div className="lg:max-w-[390px] lg:mt-36 flex flex-col gap-3">
            <p className="font-extrabold text-[18px] md:text-[36px] md:leading-[49.03px] max-w-[280px] md:max-w-[450px] lg:max-w-[400px]">
              Easy To Reach Your Best Healthcare Provider
            </p>
            <p className="text-[14px] md:text-[18px] lg:text-[17px]">
              Treat with your preffered provider available anytime.
            </p>
          </div>
          <div className="flex flex-row items-center justify-between gap-6">
            <div className="h-[250px] hidden lg:block">
              <img src={group1} alt="" className="" />
            </div>
            <div className="flex flex-col items-center hidden lg:block">
              <div className="">
                <img src={healthy} alt="" />
              </div>
              <div className=" h-[220px]">
                <img src={dr} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center lg:mt-[150px] gap-5 justify-between">
          <div className="hidden sm:block">
            <img src={nurse} alt="" />
          </div>
          <div className="">
            <p className="font-extrabold text-[18px] md:text-[36px] md:leading-[49.03px] md:max-w-[450px] lg:max-w-[400px]">
              What We Provide For Expecting Mothers
            </p>
            <ul className="flex flex-col gap-3 sm:max-w-[300px] md:max-w-[450px] lg:max-w-[380px] mt-4 text-[14px] md:text-[18px] lg:text-[18px]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Gain presence online.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Create attractive contents to increase patients traffics. partners benefits.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Create you community and earn.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
               Get paid attneding to patients' needs anywhere in the world.
              </li>
            </ul>
            <div className="flex justify-center sm:justify-start">
            <div className="bg-[#408561] h-10  p-2 rounded-md max-w-[170px] text-center text-white text-[13px] italic mt-3">
            Join Our Community
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-10 font-extrabold text-[18px] lg:text-[36px] leading-[49.03px]">Testimony From Great Users</div>
      <div className="w-full bg-gray-500/20 p-4">
     <TestimonySlider/>
      </div>
    </div>
  );
};

export default LandingPage;
