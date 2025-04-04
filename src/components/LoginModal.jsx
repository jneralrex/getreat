import React from "react";
import cancel from "../assets/images/auth/cancel.png";
import hourGlass from "../assets/images/auth/hourGlass.png";


const LoginModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white flex flex-col p-4 rounded-lg shadow-lg w-[90%] max-w-[666px]">
        <div className="w-full flex justify-end">
          <img src={cancel} alt="" onClick={closeModal}
           className="h-[40px]"/>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 max-w-[652px] mx-auto">
          <img src={hourGlass} alt="" className="h-[150px]"/>
          <p className="font-semibold md:text-[25px]">Account Pending Approval!</p>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] text-center font-montserrat max-w-[560px] leading-[30px]">Thank you for signing up! We are currently reviewing your account.
          Your account is still under review and has not been approved yet. We would respond to you as soon as possible.
          Thank you for your patience!</p>
          
          </div>

      </div>
    </div>
  );
};

export default LoginModal;
