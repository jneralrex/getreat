import React, { useEffect } from "react";
import Nav from "../components/Nav";
import PrivacySlider from "../components/PrivacySlider";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const Privacy = () => {
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
      <PrivacySlider />
      <div className="absolute inset-0 px-4">
        <Nav />
        <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto">
          <div className="flex flex-col md:gap-8 lg:mt-[100px] md:pt-10 ">
            <p className=" tracking-[3px] font-extrabold text-white sm:text-[20px] md:text-[30px] xl:text-[30px] max-w-[200px] sm:max-w-[350px] md:max-w-[650px] lg:max-w-full md:leading-[20.28px] font-open_sans">
              Your Privacy, Our Priority
            </p>
            <p className="tracking-[2px] text-[14px] text-white font-[400] max-w-[400px] sm:max-w-[350px] md:max-w-[480px] lg:max-w-[600px] leading-[24.51px] font-open_sans">
              We are committed to safeguarding your personal health information.
              Our Privacy Policy outlines the steps we take to ensure your data
              is protected and used responsibly. we value your trust and are
              dedicated to maintaining the highest standars of privacy and
              security.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:max-w-[90%] md:max-w-[80%] lg:max-w-[90%] xl:w-[100%] 2xl:max-w-[70%] m-auto p-2 lg:mt-[50px]  text-[14px] md:text-[18px] lg:text-[18px]">
        <div className="max-w-[650px] leading-[26px]">
          This privacy notice for Getreat Technology Limited ( doing business as{" "}
          <span className="font-[600] text-black">Getreat </span> ) (
          <span className="font-[600] text-black">
            "we," "us," <span className="font-[400]">or</span> "our"
          </span>
          ), describes how and why we might collect, store, use. and/or share{" "}
          <span className="font-[600] text-black">("Porcess")</span> your
          information when you use our services{" "}
          <span className="font-[600] text-black">("Services")</span>, such as
          when you:{" "}
        </div>
        <ul className=" font-open_sans flex flex-col gap-[10px] md:max-w-[450px] lg:max-w-[700px] mt-4 text-[14px] md:text-[18px] lg:text-[18px] tracking-[16%]">
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
            Visit our website at{" "}
            <span className="text-[#408561]">getreat.com</span>, or any website
            of ours that links to this privacy notice.
          </li>
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
            Download and use our applications(s), such as our mobile application
            - <span className="text-[#408561]">Getreat</span>, or any other
            application of ours that links to privacy notice
          </li>
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
            Engage with us in other related ways including any sales, marketing,
            or events.
          </li>
        </ul>

        <div className="max-w-[660px] mt-[20px]">
          <strong>Questions or concerns?</strong> Reading this privacy notice
          will help you understand your privacy rights and choices. If you do
          not agree with our services. If you do not agree with our policies and
          practices, please do not use our services. If you still have any
          questions or concerns, please contact us at{" "}
          <span className="text-[#408561]">getreatreachout@gmail.com</span>.
        </div>

        <div className="border-[#D9D9D9] my-6 border-[2px]"></div>

        <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-4 justify-between w-full">
          <div className=" m-auto md:m-0 max-w-[436px] lg:m-0 md:h-screen bg-[#EEF5FA] rounded-[8px] p-5 flex flex-col justify-between">
            <div className="">
              <p className="w-full text-center mb-5 font-[700]">
                Table of Content
              </p>
              <ul className="flex flex-col gap-3 font-[500] cursor-pointer">
                <li onClick={() => handleScroll("section1")}>1. WHAT INFORMATION DO WE COLLECT?</li>
                <li onClick={() => handleScroll("section2")}>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
                <li onClick={() => handleScroll("section3")}>
                  3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                  INFORMATION
                </li>
                <li onClick={() => handleScroll("section4")}>
                  4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION
                </li>
              </ul>
            </div>
            <div>
              <div className="border border-[2px] border-black mb-5 hidden md:block"></div>
              <div className="w-full hidden text-center text-[#408561] md:flex items-center gap-2 justify-center cursor-pointer" onClick={() => handleScroll("top")}>
                <div>Back to top</div> <FaArrowUp />{" "}
              </div>
            </div>
          </div>
          <div className="max-w-[720px] p-5 md:p-0">
            <p className="mb-[30px] font-bold tracking-[3px]" id="section1">
              1. WHAT INFORMATION DO WE COLLECT?
            </p>
            <div className="text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              <p>We collect personal information that you provide to us.</p>
              <p>
                We collect personal information that you volutarily provide to
                us when you register on the service, express an interest in
                obtaining information about us or our products and Services,
                when you participate in activities on the Services, or otherwise
                when you contact us.
              </p>
              <p>We collect personal information that you provide to us.</p>
            </div>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              <span className="text-black font-bold">
                Personal Information Provided by You (As Patients or Healthcare
                Provider)
              </span>
              , The personal information that we collect depends on the context
              of your interactions with us and the Services, the choices you
              make and the products and features you use. The personal
              information we collect can include the following:
            </p>
            <ul className=" font-open_sans flex flex-col gap-[10px] md:max-w-[450px] lg:max-w-[700px] mt-[20px] text-[14px] md:text-[18px] lg:text-[18px] leading-[30px] text-[#6F7787]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Name{" "}
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Date of Birth
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Email address
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Phone number
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Location
              </li>
            </ul>
            <p className="mt-[30px] font-bold">Sensitive Information</p>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              <span className="text-black font-bold">For Patients: </span>
              We do not collect any sensitive information. When necessary, with
              your consent or as otherwise permitted applicable by law, we
              process the following categories of sensitive information:
            </p>
            <ul className=" font-open_sans flex flex-col gap-[10px] md:max-w-[450px] lg:max-w-[700px] mt-[20px] text-[14px] md:text-[18px] lg:text-[18px] leading-[30px] text-[#6F7787]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Medical data
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Mental health
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Healthcare related personal information
              </li>
            </ul>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              <span className="text-black font-bold">
                For Healthcare providers:{" "}
              </span>
              We do not collect any sensitive information. When necessary, with
              your consent or as otherwise permitted applicable by law, we
              process the following categories of sensitive information:
            </p>
            <ul className=" font-open_sans flex flex-col gap-[10px] md:max-w-[450px] lg:max-w-[700px] mt-[20px] text-[14px] md:text-[18px] lg:text-[18px] leading-[30px] text-[#6F7787]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Professional credentials
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Practice certificate
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Other related information
              </li>
            </ul>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              <span className="text-black font-bold">Payment Data: </span>
              We may collect data necessary to process your payment if you make
              purchases, such as your payment instrument number (such as a
              credit card number), and the security code associated with your
              payment instrument. All payment data is stored by{" "}
              <span className="text-[#408561]">Paystack</span> you may find
              their privacy notice link(s) here:{" "}
              <span className="text-[#408561]">Paystack Privacy Policy.</span>
            </p>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              <span className="text-black font-bold">Appilcation Data: </span>
              If you use our application(s), we also may collect the following
              information if you choose to provide us with access or permission:
            </p>
            <ul className=" font-open_sans flex flex-col gap-[10px] md:max-w-[450px] lg:max-w-[770px] mt-[20px] text-[14px] md:text-[18px] lg:text-[18px] leading-[30px] text-[#6F7787]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Geolocation Information: We may request access or permission to
                track location-based information from your mobile device, either
                continuously or while you are using our mobile application(s),
                to provide certain location-based services. If you wish to
                change our access or permissions, you may do so in your device's
                settings.{" "}
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Mobile Device Access: We may request access or permission to
                certain features from your mobile device, including your mobile
                device's Bluetooth, calendar, camera, own, and other features.
                If you wish to change our access or permissions, you may do so
                in your device's settings.{" "}
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Mobile Device Data: We automatically collect device information
                (such as your mobile device ID, model, and manufacturer),
                operating system, version information and system configuration
                information, device and application identification numbers,
                browser type and version, hardware model Internet service
                provider and/or mobile carrier, and Internet Protocol (IP)
                address (or proxy server). If you are using our application(s),
                we may also collect information about the phone network
                associated with your mobile device, your mobile device’s
                operating system or platform, the type of mobile device you use,
                your mobile device’s unique device ID, and information about the
                features of our application(s) you accessed.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Push Notifications: We may request to send you push
                notifications regarding your account or certain features of the
                application(s). If you wish to opt out from receiving these
                types of communications, you may turn them off in your device's
                settings.{" "}
              </li>
            </ul>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              This information is primarily needed to maintain the security and
              operation of our application(s), for troubleshooting, and for our
              internal analytics and reporting purposes. All personal
              information that you provide to us must be true, complete, and
              accurate, and you must notify us of any changes to such personal
              information.
            </p>
            <p className="mt-[30px] font-bold">
              Information automatically collected
            </p>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              Information — such as your Internet Protocol (IP) address and/or
              browser and device characteristics — is collected automatically
              when you visit our Services.
            </p>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p className="mt-[15px] text-[#6F7787]">
              The information we collect includes:
            </p>
            <ul className=" font-open_sans flex flex-col gap-[10px] md:max-w-[450px] lg:max-w-[770px] mt-[10px] text-[14px] md:text-[18px] lg:text-[18px] leading-[30px] text-[#6F7787]">
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Log and Usage Data. Log and usage data is service-related,
                diagnostic, usage, and performance information our servers
                automatically collect when you access or use our Services and
                which we record in log files. Depending on how you interact with
                us, this log data may include your IP address, device
                information, browser type, and settings and information about
                your activity in the Services (such as the date/time stamps
                associated with your usage, pages and files viewed, searches,
                and other actions you take such as which features you use),
                device event information (such as system activity, error reports
                (sometimes called "crash dumps"), and hardware settings).
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Device Data. We collect device data such as information about
                your computer, phone, tablet, or other device you use to access
                the Services. Depending on the device used, this device data may
                include information such as your IP address (or proxy server),
                device and application identification numbers, location, browser
                type, hardware model, Internet service provider and/or mobile
                carrier, operating system, and system configuration information.
              </li>
              <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/4 md:before:top-[14px] before:-translate-y-1/2 before:w-4 before:h-4 before:bg-orange-500 before:rounded-sm">
                Location Data. We collect location data such as information
                about your device's location, which can be either precise or
                imprecise. How much information we collect depends on the type
                and settings of the device you use to access the Services. For
                example, we may use GPS and other technologies to collect
                geolocation data that tells us your current location (based on
                your IP address). You can opt out of allowing us to collect this
                information either by refusing access to the information or by
                disabling your Location setting on your device. However, if you
                choose to opt out, you may not be able to use certain aspects of
                the Services.
              </li>
            </ul>
            <p className="mt-[30px] font-bold">
              Information automatically collected
            </p>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              We may collect limited data from public databases, marketing
              partners, social media platforms, and other outside sources.
            </p>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              In order to enhance our ability to provide relevant marketing,
              offers, and services to you and update our records, we may obtain
              information about you from other sources, such as public
              databases, joint marketing partners, affiliate programs, data
              providers, social media platforms, and from other third parties.
              This information includes mailing addresses, job titles, email
              addresses, phone numbers, intent data (or user behavior data),
              Internet Protocol (IP) addresses, social media profiles, social
              media URLs, and custom profiles, for purposes of targeted
              advertising and event promotion. If you interact with us on a
              social media platform using your social media account (e.g.,
              Facebook or Twitter), we receive personal information about you
              such as your name, email address, and gender. Any personal
              information that we collect from your social media account depends
              on your social media account's privacy settings.{" "}
            </p>
            <p className="mb-[30px] mt-[30px] font-bold" id="section2">
              2. HOW DO WE PROCESS YOUR INFORMATION?{" "}
            </p>
            <p className="mt-[30px] text-[#6F7787] text-[14px] lg:text-[18px] font-[400] leading-[30px]">
              We process your information to provide tailored recommendations as
              Patients, improve our Services, communicate with you, for security
              and fraud prevention, and to comply with law. We may also process
              your information for other purposes with your consent for
              (Patients and Healthcare providers).{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
