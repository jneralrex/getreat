import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import smile from "../assets/images/landingpage/smile.png";
import jack from "../assets/images/landingpage/jack.png";
import logo from "../assets/images/landingpage/logo.png";

const slides = [
  {
    image: smile,
    name: "Esther Adekunle Iyoha",
    location: "London, UK",
    logo: logo,
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, facilis modi in incidunt voluptas omnis, neque commodi beatae consectetur quaerat itaque tempore, earum sapiente corporis iure impedit non quia minus quae porro iste fugiat.",
  },
  {
    image: smile,
    name: "John Doe",
    location: "New York, USA",
    logo: logo,
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, facilis modi in incidunt voluptas omnis, neque commodi beatae consectetur quaerat itaque tempore, earum sapiente corporis iure impedit non quia minus quae porro iste fugiat.",
  },
  {
    image: smile,
    name: "Jane Smith",
    location: "Toronto, Canada",
    logo: logo,
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, facilis modi in incidunt voluptas omnis, neque commodi beatae consectetur quaerat itaque tempore, earum sapiente corporis iure impedit non quia minus quae porro iste fugiat.",
  },
  {
    image: smile,
    name: "Michael Brown",
    location: "Sydney, Australia",
    logo: logo,
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, facilis modi in incidunt voluptas omnis, neque commodi beatae consectetur quaerat itaque tempore, earum sapiente corporis iure impedit non quia minus quae porro iste fugiat.",
  },
];

const TestimonySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
  
    const updateVisibleSlides = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else if (window.innerWidth >= 640) {
        setVisibleSlides(1.5);
      } else {
        setVisibleSlides(1);
      }
    };
  
    useEffect(() => {
      updateVisibleSlides(); 
      window.addEventListener("resize", updateVisibleSlides);
  
      return () => {
        window.removeEventListener("resize", updateVisibleSlides);
      };
    }, []);
  
    const prevSlide = () => {
      const isAtStart = currentIndex === 0;
      const newIndex = isAtStart
        ? slides.length - visibleSlides
        : currentIndex - visibleSlides;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isAtEnd = currentIndex >= slides.length - visibleSlides;
      const newIndex = isAtEnd ? 0 : currentIndex + visibleSlides;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="w-full relative group">
        <div className="flex overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{
              transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  visibleSlides === 1
                    ? "w-full"
                    : visibleSlides === 1.5
                    ? "w-[calc(100%/1.5)]"
                    : visibleSlides === 3
                    ? "w-[calc(100%/2)]"
                    : "w-[calc(100%/3)]"
                }`}
              >
                <div className="bg-white p-5 shadow-md rounded-lg flex flex-col gap-5">
                  <div className="flex gap-3">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-[150px] md:w-[200px] object-contain"
                    />
                    <div className="flex flex-col w-full">
                      <div className="flex flex-col justify-between h-full gap-2">
                        <div className="flex justify-center items-center">
                          <img
                            src={slide.logo}
                            alt="logo"
                            className="w-[80px]"
                          />
                        </div>
                        <div className="flex flex-col justify-start w-full">
                          <h4 className="text-lg font-semibold">{slide.name}</h4>
                          <p className="text-sm text-gray-500">
                            {slide.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-justify"><span className="text-[20px]">"</span>{slide.testimony}<span className="text-[20px]">"</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div
          className="absolute top-[50%] -translate-y-1/2 left-5 text-2xl p-2 bg-orange-500 hover:bg-orange-500/70 text-white cursor-pointer rounded-full"
          onClick={prevSlide}
        >
          <AiOutlineArrowLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] -translate-y-1/2 right-5 text-2xl p-2 bg-orange-500 hover:bg-orange-500/70 text-white cursor-pointer rounded-full"
          onClick={nextSlide}
        >
          <AiOutlineArrowRight size={30} />
        </div>
      </div>
    );
  };
  
  export default TestimonySlider;
