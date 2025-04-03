import React from "react";
import cancel from "../assets/images/auth/cancel.png";
import success from "../assets/images/auth/success.png";


const SignUpModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
       <div className="bg-white flex flex-col p-4 rounded-lg shadow-lg w-[90%] max-w-[666px]">
             <div className="w-full flex justify-end">
               <img src={cancel} alt="" onClick={closeModal}
                className="h-[40px]"/>
             </div>
        <div className="flex flex-col items-center justify-center gap-5 max-w-[652px] mx-auto">
          <img src={success} alt="" className="h-[150px]"/>
          <p className="font-semibold">Account Created!</p>
          <p className="text-center font-montserrat max-w-[560px] leading-[30px]">We’re excited to have you join us. You’ll receive personalized feedback shortly, guiding you on how to fully engage with our platform, and make the most of all the features designed to support your needs. 
          Welcome aboard, and we look forward to helping you every step of the way!</p>
          
          </div>
      </div>
    </div>
  );
};

export default SignUpModal;
