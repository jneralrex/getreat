import React, { useState } from "react";
import banner from "../assets/images/landingpage/banner.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import nurse from "../assets/images/landingpage/nurse.png";

const Slider = () => {
  const slides = [
    {
      images: banner,
      title: "Image One",
    },
    {
      images: nurse,
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
    <div className="max-w-[1400px] h-[350px] md:h-[580px] w-full relative group">
      {/* Slide with Black Inset */}
      <div
        className="w-full h-full bg-center bg-cover duration-500 relative"
        style={{
          backgroundImage: `url(${slides[currenIndex].images})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Black Inset */}
      </div>

      {/* Left Arrow */}
      {/* <div
        className="absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/50 hover:bg-black/70 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <AiOutlineArrowLeft size={30} />
      </div> */}

      {/* Right Arrow */}
      {/* <div
        className="absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/50 hover:bg-black/70 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <AiOutlineArrowRight size={30} />
      </div> */}

      {/* Dots */}
      <div className="flex justify-center py-2 gap-2">
        {slides.map((_, slidesIndex) => (
          <div
            key={slidesIndex}
            onClick={() => goToSlides(slidesIndex)}
            className={`text-2xl cursor-pointer ${
              currenIndex === slidesIndex ? "text-green-500" : "text-gray-300"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
