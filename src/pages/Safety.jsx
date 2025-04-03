import React, { useEffect } from "react";
import Nav from "../components/Nav";
import SafetySlider from "../components/SafetySlider";
import Footer from "../components/Footer";

const Safety = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      useEffect(()=>{
        handleScroll("top")
      },[])
  return (
    <div id="top">
      <SafetySlider/>
      <div className="absolute inset-0 px-4">
        <Nav />
        <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">
          <div className="flex flex-col md:gap-8 lg:mt-[100px] md:pt-10 ">
            <p className=" tracking-[3px] font-extrabold text-white sm:text-[20px] md:text-[30px] xl:text-[30px] max-w-[360px] sm:max-w-[350px] md:max-w-[650px] font-open_sans">
            Ensuring Safety and Compliance Every Step of the Way            </p>
            <p className="tracking-[2px] text-[14px] text-white font-[400] max-w-[300px] sm:max-w-[350px] md:max-w-[480px] lg:max-w-[600px] leading-[24.51px] font-open_sans">
            We are dedicated to maintaining the highest standards of safety and compliance throughout all our operations, ensuring a secure environment for everyone involved. Every decision and action is guided by our commitment to industry regulations, best practices, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto p-2 lg:mt-[50px]  text-[14px] md:text-[18px] lg:text-[18px] mb-20">
        <p className="max-w-[650px] leading-[26px]">
        At our healthcare platform, the safety and privacy of our users' data are our top priorities. We rigorously adhere to the standards set by the Health Insurance Portability and Accountability Act (HIPAA) and the Nigeria Data Protection Regulation (NDPR), ensuring that your personal information is always secure.
        </p>
       

        <div className="border-[#D9D9D9] my-6 border-[2px]"></div>

        <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-4 justify-between w-full">
          <div className=" m-auto md:m-0 max-w-[400px] lg:m-0 md:h-[300px] bg-[#EEF5FA] rounded-[8px] p-5 flex flex-col justify-between">
            <div className="">
              <p className="w-full text-center mb-5 font-[700]">
                Table of Content
              </p>
              <ul className="flex flex-col gap-3 font-[500] cursor-pointer">
                <li onClick={() => handleScroll("section1")}>1.  HIPPA Compliance</li>
                <li onClick={() => handleScroll("section2")}>2. NDPR Compliance</li>
              </ul>
            </div>
            <div>
              <div className=" border-[2px] border-black mb-5 hidden md:block"/>
              {/* <div className="w-full hidden text-center text-[#408561] md:flex items-center gap-2 justify-center cursor-pointer" onClick={() => handleScroll("top")}>
                <div>Back to top</div> <FaArrowUp />{" "}
              </div> */}
            </div>
          </div>
          <div className="max-w-[720px] p-5 md:p-0">
            <p className="mb-[30px] font-bold tracking-[3px]" id="section1">
              HIPAA Compliance
            </p>
            <div className="text-[#4A4A4A] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              <p>HIPAA sets the benchmark for protecting sensitive patient data, and we meet these standards through:</p>
              <ul className=" font-open_sans flex flex-col gap-[10px] md:max-w-[450px] lg:max-w-[750px] mt-[20px] text-[14px] md:text-[18px] lg:text-[18px] leading-[30px] text-[#4A4A4A]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              <span className="text-black font-semibold">Advanced Data Encryption:</span> We use state-of-the-art encryption to secure patient data both during transmission and storage, protecting it from unauthorized access.              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              <span className="text-black font-semibold">Secure Communication Channels:</span>  Our platform utilizes encrypted video conferencing and chat functionalities, ensuring that all patient-provider interactions remain confidential.              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              <span className="text-black font-semibold">Role-Based Access Control:</span> We implement stringent access controls, allowing only authorized personnel to view or edit patient information.              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              <span className="text-black font-semibold">Comprehensive Audit Trails:</span> Every instance of data access or modification is recorded, providing transparency and accountability.              
              </li>
            </ul>
            </div>
            <p className="mt-[30px] mb-[1px] font-bold tracking-[3px]" id="section2">
            NDPR Compliance
            </p>
            <div className="text-[#4A4A4A] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              <p>The Nigeria Data Protection Regulation (NDPR) is designed to protect personal data and ensure responsible handling. Our platform complies with NDPR by:</p>
              <ul className=" font-open_sans flex flex-col gap-[10px] md:max-w-[450px] lg:max-w-[750px] mt-[20px] text-[14px] md:text-[18px] lg:text-[18px] leading-[30px] text-[#4A4A4A]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              <span className="text-black font-semibold">Robust Data Protection Measures:</span> We implement measures to prevent unauthorized access to personal data, aligning with Section 24 of the National Health Act.              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              <span className="text-black font-semibold">Explicit Consent Management:</span>  All data collection and processing are carried out with explicit consent from our users, as mandated by the NDPR.              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              <span className="text-black font-semibold">Prompt Breach Response Protocols:</span>  In the event of a data breach, we have established protocols to address the issue swiftly and minimize its impact on our users.   </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
              <span className="text-black font-semibold">Ongoing Compliance Monitoring:</span>We regularly review and update our data protection practices to stay in compliance with evolving regulations and standards.            
              </li>
            </ul>
            </div>
            <p className="mt-[30px] text-[#4A4A4A] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
            By adhering to these standards, our platform provides a secure and compliant environment for accessing healthcare services, giving our users peace of mind.
            </p>
            <p className="mt-[30px] text-[#4A4A4A] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
            Our commitment to safety and compliance ensures that you can trust us with your healthcare needs. With our secure platform, you have access to top-tier medical professionals, expert advice, and personalized care, all while knowing your data is protected. Welcome to the future of healthcare, where safety and privacy are paramount
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Safety;
