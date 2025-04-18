import React from "react";
import AboutSlider from "../components/AboutSlider";
import provider from "../assets/images/landingpage/provider.jpg";
import family from "../assets/images/aboutus/family.png";
import home from "../assets/images/aboutus/home.png";
import office from "../assets/images/aboutus/office.png";
import TestimonySlider from "../components/TestimonySlider";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const AboutUs = () => {
  return (
    <div className="">
      <AboutSlider />
      <div className="absolute inset-0 px-4 font-open_sans tracking-[16%]">
        <Nav />
        <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">

        <div className="flex flex-col gap-2 md:gap-5 md:pt-14 lg:pt-14">
          <p className="font-extrabold text-white sm:text-[25px] md:text-[45px] max-w-[200px] sm:max-w-[350px] md:max-w-[800px] md:leading-[50.28px] md:tracking-[3px]">
            Healthcare Service is Faster and Convenient with Getreat{" "}
          </p>
          <p className=" md:tracking-[2px] text-[14px] text-white font-[400] max-w-[400px] sm:max-w-[350px] md:max-w-[550px] leading-[20.51px]">
            Getreat is a platform that allows patients access to healthcare
            services anytime, anywhere, faster and tailored to particular needs
            on pregnancy, fertility, and newborn health.
          </p>
          <div className="bg-[#408561] h-10  p-2 rounded-md max-w-[170px] text-center text-white text-[13px] italic">
            Join Our Community
          </div>
        </div>
        </div>

      </div>

      <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">
      <div className="px-[20px] md:px-20 font-open_sans tracking-[16%]">
          <div className="w-full text-center my-5 md:mt-[50px]">
            <p className="font-[800] leading-[49.03px] sm:text-[18px] md:text-[20px] lg:text-[36px]">
              Our Story
            </p>
            <div className="flex justify-center">
              <p className=" text-[12px] sm:text-[15px] md:max-w-[740px] md:text-left leading-[24.51px] tracking-[3px]">
                Getreat emerged from the growing beed for accessible health
                management tools, especially amid increasing of mental and
                physical health.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 lg:mt-[100px]">
            <div>
                  <div className="font-[800] leading-[49.03px] md:text-[18px] lg:text-[36px]">
                    Mission
                  </div>
                  <div className="border border-spacing-1 border-gray-700 "></div>
                  
                  <div className="flex flex-col lg:flex-row gap-5 items-center justify-between my-5 ">
                    <div className="">
                      <img src={provider} alt="" className="w-[500px] rounded-md h-[300px]"/>
                    </div>
                    <div>
                      <p className="text-[9.5px] sm:text-[15px] md:text-[14px] lg:text-[18px] lg:max-w-[550px]  tracking-[3px]">
                        Healthcare is the basic of life, and Transforming lives
                        through compassionate health service and innovative solutions
                        make us bring simplicity to patients' access to healthcare
                        services for convenience and faster delivery for all. As well
                        nuturing every satge of new life, promoting physical and
                        mental health, and enhancing quality of life.
                      </p>
                    </div>
                  </div>
            </div>

            <div>
            <div className="font-[800] leading-[49.03px] sm:text-[18px] md:text-[20px] lg:text-[36px] text-right">
              Vision
            </div>
            <div className="border border-spacing-1 border-gray-700"></div>
            <div className="flex flex-col lg:flex-row gap-5 items-center justify-evenly my-5 ">
              <div>
                <p className="text-[9.5px] sm:text-[15px] md:text-[14px] lg:text-[18px] lg:max-w-[600px] tracking-[2px]">
                  Getreat's vision is to create a healthier world by empowering
                  individuals to take charge of their wellness through
                  innovative technology and community support.The app aims to be
                  a leading platform that transforms the way people manage their
                  health, focusing on personalized experiences and fostering
                  connections among users.
                </p>
              </div>
              <div>
                <img src={family} alt="" className="" />
              </div>
            </div>
            </div>

           <div>
           <div className="flex flex-col gap-3 items-center justify-between my-5">
              <div className="w-full flex flex-col justify-center  text-center md:text-start ">
                <p className="font-[800] leading-[49.03px] md:text-[18px] lg:text-[36px]">
                  We Build Bridges Between
                </p>
                <p className="font-[800] text-[#408561]  leading-[49.03px] md:text-[18px] lg:text-[36px]">
                  Patients & Providers
                </p>
              </div>
              <div className=" w-full flex justify-end lg:ml-[200px]">
                <p className="text-[9.5px] sm:text-[15px] md:text-[14px] lg:text-[18px] lg:max-w-[850px]  tracking-[3px]">
                  We believe that effective and continous communication is
                  crucial for delivering high-quality healthcare, through open
                  and honest communication that would build trust. Improve
                  treatment outcome. Increase patients's satisfaction, empower
                  follow-up and reduce possible errors, the aspect of providing
                  emtional support would be achieved greatly when there is
                  patients empowered communication setuup that helps patients to
                  cope with stress and axiety of illness and treatment.
                </p>
              </div>
              <div className=" w-full flex justify-end lg:ml-[200px]">
                <p className="text-[9.5px] sm:text-[15px] md:text-[14px] lg:text-[18px]  lg:max-w-[850px]  tracking-[3px]">
                  To us we undertand the importance of the roles human providers
                  plays and cannot be replaced, which drive us to innovate on
                  how healthcare service is passed with effective communication
                  that enable patients and provisers work together to improve
                  health outcome.
                </p>
              </div>
            </div>
           </div>

          </div>
        </div>
        <div className="">
          <img src={home} alt="" className="rounded-md" />
        </div>
        <div className="px-[20px] md:px-20 md:mt-[50px] font-open_sans tracking-[16%]">
          <div className="flex flex-col gap-3 items-center justify-between my-5 ">
            <div className="w-full flex flex-col justify-center  text-center lg:text-start ">
              <p className="font-[800] md:leading-[49.03px] md:text-[18px] lg:text-[36px]">
                We Believe In Mutual
              </p>
              <p className="font-[800] leading-[49.03px] md:text-[18px] lg:text-[36px] text-center lg:text-left">
                Collaboration
              </p>
            </div>
            <div className="xl:ml-[300px]">

            <div className=" w-full flex justify-end">
              <p className="text-[9.5px] sm:text-[15px] md:text-[14px] lg:text-[18px]  lg:max-w-[820px]  tracking-[3px]">
                Achieving an innovative healthcare service delivery involves
                proper collaboration among partners, we are focus to collaborate
                to ensure we achieve the vision of Getreat.
              </p>
            </div>
            <div className=" w-full flex justify-end">
              <p className="text-[9.5px] sm:text-[15px] md:text-[14px] lg:text-[18px] lg:max-w-[820px] tracking-[3px]">
                We belive this approach not only enhances the quality of care,
                increases patient satisfaction and adherence to treatment plans.
                Also create enabling ground for income and business matters.
              </p>
            </div>
            <div className=" w-full flex justify-end">
              <p className="text-[9.5px] sm:text-[15px] md:text-[14px] lg:text-[18px] lg:max-w-[820px]  tracking-[3px]">
                Our system is open for all care givers, and healthcare players
                to communicate their values and collaborate.
              </p>
            </div>
            <div className="flex my-5 w-full justify-end lg:max-w-[600px]">
              <div className=" w-full flex sm:max-w-[480px] md:max-w-[480px] lg:max-w-[635px] max-w-[317px]">
                <button className="text-[10px] sm:text-[15px] md:text-[14px] lg:text-[20px] p-2 bg-[#408561] text-white italic rounded-md w-[150px] font-[700] leading-[27.24px]">
                  Join us
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">
      <img src={office} alt="" className="rounded-lg" />
      </div>
      <div className="w-full bg-gray-500/20 p-10 pl-0 font-open_sans tracking-[16%]">
        <div className="w-full flex justify-center mb-[50px] mt-[50px] font-extrabold text-[18px] lg:text-[36px] font-open_sans tracking-[16%] leading-[49.03px]">
          Testimony From Great Users
        </div>
        <TestimonySlider />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
