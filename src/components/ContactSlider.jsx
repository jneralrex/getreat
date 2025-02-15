import React, { useState } from "react";
import banner from "../assets/images/landingpage/banner.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import phone from "../assets/images/landingpage/phone.png";
import bluepreggo from "../assets/images/aboutus/bluepreggo.png";

const ContactSlider = () => {
  const slides = [
    {
      images: phone,
      title: "Image One",
    },
    {
      images: bluepreggo,
      title: "Image Two",
    },
    {
      images: banner,
      title: "Image Three",
    },
    {
      images: banner,
      title: "Image Four",
    },
    {
      images: banner,
      title: "Image Five",
    },
  ];

  const [currenIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currenIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currenIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currenIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currenIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlides = (slidesIndex) => {
    setCurrentIndex(slidesIndex);
  };

  return (
    <div className="h-[350px] md:h-screen w-full relative group">
      <div
        className="w-full h-full bg-center bg-cover duration-500 relative"
        style={{
          backgroundImage: `url(${slides[currenIndex].images})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> 
      </div>

    </div>
  );
};

export default ContactSlider;
