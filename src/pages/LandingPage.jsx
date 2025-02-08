import React from "react";
import Slider from "../components/Slider";
import babyscanclock from "../assets/images/landingpage/babyscanclock.png";
import dr from "../assets/images/landingpage/dr.png";
import group1 from "../assets/images/landingpage/group1.png";
import healthy from "../assets/images/landingpage/healthy.png";
import pastor from "../assets/images/landingpage/pastor.png";
import nurse from "../assets/images/landingpage/nurse.png";
import TestimonySlider from "../components/TestimonySlider";
import phone1 from "../assets/images/landingpage/phone1.png";
import phone2 from "../assets/images/landingpage/phone2.png";
import appstore from "../assets/images/landingpage/appstore.png";
import googleplay from "../assets/images/landingpage/googleplay.png";
import preggo from "../assets/images/landingpage/preggo.png";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <Slider />
      <div className="absolute inset-0 px-4">
       <Nav/>
       <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">

        <div className="flex flex-col gap-2 pt-6 md:pl-12 md:pt-14 lg:pt-14">
          <p className=" tracking-[3px] font-extrabold text-white sm:text-[20px] md:text-[30px] xl:text-[30px] max-w-[200px] sm:max-w-[350px] md:max-w-[650px] md:leading-[61.28px] font-open_sans">
            Your Partner in Pregnancy, Parenting, and Beyond
          </p>
          <p className="tracking-[1px] text-[14px] text-white font-[600] max-w-[400px] sm:max-w-[350px] md:max-w-[480px] leading-[24.51px] font-open_sans">
            Advancing the Motherhood Experience: Pregnancy Care, Baby Support,
            and Fertility Enhancement
          </p>
         <Link to="/sign-up">
         <div className="bg-[#408561] h-10  p-2 rounded-md max-w-[170px] text-center text-white text-[13px] italic font-open_sans">
            Join Our Community
          </div>
         </Link>
        </div>
        </div>
      </div>
    
    <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto p-2">
    <div className="flex flex-col justify-evenly  lg:gap-5">
        <div className="flex flex-row items-center mt-6 justify-evenly">
          <div className="">
            <img src={babyscanclock} alt="" className="hidden md:block"/>
          </div>
          <div className="">
            <p className="font-extrabold text-[18px] md:text-[36px] md:leading-[49.03px] md:max-w-[450px] lg:max-w-[400px] font-open_sans tracking-[16%]">
              What We Provide For Expecting Mothers
            </p>
            <ul className=" font-open_sans flex flex-col gap-3 md:max-w-[450px] lg:max-w-[380px] mt-4 text-[14px] md:text-[18px] lg:text-[18px] tracking-[16%]">
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

        <div className="flex flex-row items-center lg:mt-[30px] justify-evenly gap-3 ">
          <div className="lg:max-w-[390px] lg:mt-36 flex flex-col gap-3">
            <p className="font-extrabold text-[18px] md:text-[36px] md:leading-[49.03px] md:max-w-[450px] lg:max-w-[400px] font-open_sans tracking-[16%]">
              Our Access Is Timeless: Anytime, Anywhere
            </p>
            <p className="text-[14px] md:text-[18px] lg:text-[15px] font-open_sans leading-[24.51px] tracking-[1px]">
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
          <div className="flex flex-row items-center justify-between gap-2">
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

        <div className="flex flex-row items-center lg:mt-[100px] justify-evenly  gap-3">
          <div className="flex flex-row items-center justify-between gap-1">
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
          <div className="lg:max-w-[390px] lg:mt-20 flex flex-col gap-3 font-open_sans">
            <p className="tracking-[16%] font-extrabold text-[18px] md:text-[30px] md:leading-[49.03px] md:max-w-[450px] lg:max-w-[500px]">
              We Connect, We Build: Trusted Communities
            </p>
            <p className="tracking-[16%] text-[14px] md:text-[18px] lg:text-[17px]">
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

        <div className="flex flex-row items-center lg:mt-[100px] justify-evenly font-open_sans gap-3">
          <div className="lg:max-w-[390px] lg:mt-36 flex flex-col">
            <p className="tracking-[16%] font-extrabold text-[18px] md:text-[36px] md:leading-[49.03px] md:max-w-[450px] lg:max-w-[400px]">
              Easy To Reach Your Best Healthcare Provider
            </p>
            <p className="tracking-[16%] text-[14px] md:text-[18px] lg:text-[17px]">
              Treat with your preffered provider available anytime.
            </p>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
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

        <div className="flex flex-row items-center lg:mt-[150px] justify-evenly font-open_sans">
          <div className="hidden sm:block">
            <img src={nurse} alt="" />
          </div>
          <div className="">
            <p className="font-extrabold text-[18px] md:text-[36px] md:leading-[49.03px] md:max-w-[450px] lg:max-w-[400px] tracking-[16%]">
              What We Provide For Expecting Mothers
            </p>
            <ul className=" tracking-[16%] flex flex-col gap-3 sm:max-w-[300px] md:max-w-[450px] lg:max-w-[380px] mt-4 text-[14px] md:text-[18px] lg:text-[18px]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Gain presence online.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Create attractive contents to increase patients traffics.
                partners benefits.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Create you community and earn.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Get paid attneding to patients' needs anywhere in the world.
              </li>
            </ul>
            <div className="flex justify-center sm:justify-start">
            <Link to="/sign-up">
            <div className="bg-[#408561] h-10  p-2 rounded-md max-w-[170px] text-center text-white text-[13px] italic mt-3">
                Join Our Community
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:tracking-[3px] lg:mt-[150px] w-full flex justify-center mb-10 font-extrabold text-[18px] lg:text-[36px] leading-[49.03px] font-open_sans">
        Testimony From Great Users
      </div>
    </div>
    
      <div className="w-full bg-gray-500/20 p-4 pl-0 tracking-[16%] font-open_sans">
        <TestimonySlider />
      </div>

      <div className=" font-open_sans flex flex-row w-full">
        <div className="max-w-[700px] flex flex-col p-5 md:pl-10 md:w-full justify-center gap-2 md:ml-[50px]">
          <p className="font-[600] text-[18px] w-full md:font-[800] md:text-[30px] lg:text-[36px] md:text-start md:max-w-[400px] text-center">
            GET THE APP FOR PATIENTS ACCESS
          </p>
          <p
            className="font-[300] md:max-w-[200px] 
           text-center md:text-start"
          >
            Download the app on Play Store and Apple Store
          </p>
          <div className="flex flex-row gap-5 lg:gap-10 w-full justify-center md:justify-normal mb-[40px]">
            <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
              <img src={phone1} alt="Phone 1" />
              <img
                src={googleplay}
                alt="Google Play"
                className="lg:ml-8 w-[100px] sm:w-[120px] md:w-[110px] lg:w-[150px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
              <img src={phone2} alt="Phone 2" />
              <img
                src={appstore}
                alt="Apple Store"
                className="lg:mr-12 w-[100px] sm:w-[120px] md:w-[110px] lg:w-[150px]"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={preggo}
            alt="Pregnant Woman"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
