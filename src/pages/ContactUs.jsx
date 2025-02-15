import React from "react";
import ContactSlider from "../components/ContactSlider";
import Nav from "../components/Nav";
import loc from "../assets/images/landingpage/location.png";
import mobile from "../assets/images/landingpage/mobile.png";
import time from "../assets/images/landingpage/time.png";
import email from "../assets/images/landingpage/email.png";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <ContactSlider />
      <div className="absolute inset-0 px-4">
        <Nav />
        <div className="sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">

        <div className="flex flex-col gap-2 md:pl-12 md:pt-14 lg:pt-24">
          <p className=" tracking-[3px] font-extrabold text-white sm:text-[30px] md:text-[45px] max-w-[200px] sm:max-w-[350px] md:max-w-[400px] md:leading-[61.28px] font-open_sans">
            Contact us at Getreat
          </p>
          <p className="tracking-[2px] text-[14px] text-white font-[400] max-w-[400px] sm:max-w-[350px] md:max-w-[520px] leading-[24.51px] font-open_sans">
            Have questions or need assistance? We're here to help! Whether
            you're looking for more information, support, or simply want to say
            hello, our team is ready to assist. Reach out to us today, and let's
            make your experience with Getreat even better!
          </p>
        </div>
        </div>
      </div>

      <div className="sm:max-w-[90%] md:max-w-[90%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">
      <div className="flex flex-col items-center mb-[50px]">
        <div className=" w-full sm:max-w-[980px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 font-spartan  items-center p-8 rounded-[20px] lg:shadow-[7px_7px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(0,0,0,0.1)] my-[50px] tracking-[2px] gap-2 lg:gap-0">
          <div className="flex flex-col justify-center items-center lg:rounded-none rounded-lg lg:shadow-none shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(0,0,0,0.1)] p-3 lg:p-0 w-full">
            <img src={loc} alt="" />
            <p className="text-[18px] font-[400] leading-[16.85px] tracking-[16%] mt-[10px] mb-[20px]">
              Location
            </p>
            <p className="leading-[12.88px] tracking-[16%] text-[14px] font-semibold font-[#4A4A4A]">
              9, Samoa streat, Maitama Abuja, Nigeria
            </p>
            <p className="text-[#F67813] text-[18px] font-[600] leading-[16.85px] mt-[20px]">
              FIND US ON MAP
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:rounded-none  rounded-lg lg:shadow-none shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(0,0,0,0.1)] p-2 lg:p-0 w-full">
            <img src={time} alt="" />
            <p className="text-[18px] font-[400] leading-[16.85px] mt-[10px] mb-[20px]">
              Office Hour
            </p>
            <p className="leading-[12.88px] tracking-[16%] text-[14px] font-semibold font-[#4A4A4A]">
              Mondays-Fridays
            </p>
            <p className="leading-[12.88px] tracking-[16%] text-[14px] font-semibold font-[#4A4A4A]">
              08:00 - 20:00
            </p>
            <p className="text-[#F67813] text-[18px] font-[600] leading-[16.85px] mt-[15px]">
              GET DIRECTION
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:rounded-none rounded-lg lg:shadow-none shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(0,0,0,0.1)] p-3 lg:p-0 w-full">
            <img src={mobile} alt="" />
            <p className="text-[18px] font-[400] leading-[16.85px] mt-[10px] mb-[20px]">
              Phone Number
            </p>
            <p className="leading-[12.88px] tracking-[16%] text-[14px] font-semibold font-[#4A4A4A]">
              +234-5643-454
            </p>
            <p className="leading-[12.88px] tracking-[16%] text-[14px] font-semibold font-[#4A4A4A]">
              +44-5644-56435
            </p>
            <p className="text-[#F67813] text-[18px] font-[600] leading-[16.85px] mt-[20px]">
              CALL NOW
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:rounded-none  rounded-lg lg:shadow-none shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(0,0,0,0.1)] p-3 lg:p-0 w-full">
            <img src={email} alt="" />
            <p className="text-[18px] font-[400] leading-[16.85px] mt-[10px] mb-[20px]">
              E-mail Address
            </p>
            <p className="leading-[12.88px] tracking-[16%] text-[14px] font-semibold font-[#4A4A4A]">
              info@getreat.com
            </p>
            <p className="leading-[12.88px] tracking-[16%] text-[14px] font-semibold font-[#4A4A4A]">
              getreat@gmail.com
            </p>
            <p className="text-[#F67813] text-[18px] font-[600] leading-[16.85px] mt-[20px]">
              MAIL US
            </p>
          </div>
        </div>
        <div className="w-full lg:max-w-[980px] md:w-[90%]">
          <div className="flex mr-auto ml-auto items-center flex-col-reverse sm:flex-row justify-between gap-5 md:p-0 sm:p-2">
            <div className="max-h-[539px] w-[90%]  sm:max-w-[406px] bg-[#efefef] p-[10px] sm:px-[20px] sm:py-[30px] mr-auto ml-auto sm:mr-0 sm:ml-0 rounded-[20px] shadow-[5px_5px_10px_rgba(0,0,0,0.3),-5px_-5px_10px_rgba(0,0,0,0.1)]">
              <div className="w-full">
                <p className="font-[700] text-[20px] leading-[24.38px] text-[#408561] mb-[20px] font-montserrat">
                  Contact us
                </p>
                <form action="" className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="font-[400] text-[18px] leading-[21.94px] font-montserrat"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className=" h-[34px] placeholder:font-montserrat placeholder:font-[300] placeholder:text-[#878181] placeholder:text-[12px] leading-[14.63px] rounded-[8px] max-w-[980px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="font-[400] text-[18px] leading-[21.94px] font-montserrat"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className=" h-[34px] placeholder:font-montserrat placeholder:font-[300] placeholder:text-[#878181] placeholder:text-[12px] leading-[14.63px] rounded-[8px] max-w-[980px] "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="font-[400] text-[18px] leading-[21.94px] font-montserrat"
                    >
                      Message
                    </label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Type your message here"
                      className="rounded-[8px] h-[136px] placeholder:font-montserrat placeholder:font-[300] placeholder:text-[#878181] placeholder:text-[12px] leading-[14.63px] max-w-[980px]"
                    ></textarea>
                  </div>
                  <div className="flex justify-center sm:justify-end mt-[10px]">
                    <div className="bg-[#408561]  font-[500] p-2 rounded-md w-[180px] text-center text-white text-[14px]  md:text-[20px] italic font-open_sans items-end">
                      Submit
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center font-montserrat ">
                <p className="font-[600] text-[18 px] sm:text-[21px] lg:text-[30px] leading-[36.57px] text-[#f67813]">
                  Have Some Questions?
                </p>
                <p className="font-[500] text-[12px] md:text-[16.5px] leading-[30px] max-w-[550px]">
                  Thank you for your interest in our service. Please fill out
                  the form or email us at getreat@gmail.com and we will get back
                  to you promptly regarding your request.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <p className="font-poppins font-[600] text-[15px] sm:text-[30px] mt-[50px]  mb-[50px]  text-center max-w-[650px] ">
              Subscribe to our newsletter to get latest news and updates
            </p>
            <div className="flex justify-center items-center">
              <form action="">
                <div className="h-10 flex lg:w-[500px]  bg-[#4085615C] rounded-lg items-center p-2">
                  <input
                    type="text"
                    placeholder="Type your email"
                    className="outline-none lg:w-[400px] placeholder:bg-[#4085615C] placeholder:h-[45px] placeholder:pt-[20px] placeholder:text-[#408561]"
                  />
                  <div className="">
                    <button className=" h-[30px] max-w-[200px] bg-[#408561] rounded-lg sm:text-[10px] md:text-[15px] italic text-white font-[700] p-1">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default ContactUs;
