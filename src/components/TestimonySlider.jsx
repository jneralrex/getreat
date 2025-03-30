import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import open from "../assets/images/open.png";
import close from "../assets/images/close.png";

const slides = [
  {
    name: "Babatude Ejiro",
    testimony:
      "I found this page and WhatsApp number on FB while i was going through pains then because i just lost my first pregnancy. So i joined and told a friend too to join when i saw the advice, talks and more that goes on in the group. I started battling with infections and i will talk to the doctor privately and he will respond with full attention which got me happy and with their advice on what to do, eat, drink and all the instructions which was given, i followed and here i am 8months gone😊😊 and even my friend has put to bed. I am still grateful for all their helps . I have even told my sister in law to join which she has😊😊. Thank you Getreat and God bless for the services you are given out to every women out there.",
  },
  {
    name: " Harikeh",
    testimony:
      "So few month back I messaged one of the doctor in this platform that I don't ovulate, cos I was looking forward to the mucus like discharge but I didn't see any. Just that I follow the tips of having sex regularly and especially during ovulation... and lo and behold I'm pregnant now... I don't know how it happen but God did it.",
  },
  {
    name: "Omosibo",
    testimony:
      " Congratulations to me l've been delivered of a bouncy baby boy! I sincerely want to thanks d admin and the gyna's in the house for ur support during this period.safe delivery to the expectant moms.",
  },
  {
    name: "Michael Brown",
    testimony:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, facilis modi in incidunt voluptas omnis, neque commodi beatae consectetur quaerat itaque tempore, earum sapiente corporis iure impedit non quia minus quae porro iste fugiat.",
  },
  {
    name:"Yarobi",
    testimony:
    "Am using this time to give thanks to God almight I think it was like before when I did the first one last week until I do this one today and it's real That's why I wish to give thanks to Allah by posting this testimony to you for let others know what God has done for me and inshallah bikudratullah rahaman all TTC mother will soon have this kind of joy and testimony inshallah 🙏🙏🙏🙏 Thanks so much doctor for been there for me since all this while may God almighty Allah bless you always and bless your hurtle inshallah 🙏🙏 You will not lack joy and happiness in your life Amin"
  }
];



const TestimonySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Slider Container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center text-center w-full h-[400px]">
                <div className="w-full flex justify-start">
                  <img src={open} className="size-10" alt="open quote" />
                </div>
                <p className="text-gray-600 text-[10px] lg:text-sm sm:text-base lg:max-w-[605px]">
                  {slide.testimony}
                </p>
                <div className="w-full flex justify-end">
                  <img src={close} className="size-10" alt="close quote" />
                </div>
                <h4 className="mt-4 text-lg font-semibold">{slide.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-2 sm:left-5 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
        onClick={prevSlide}
      >
        <AiOutlineArrowLeft size={30} />
      </button>
      <button
        className="absolute right-2 sm:right-5 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
        onClick={nextSlide}
      >
        <AiOutlineArrowRight size={30} />
      </button>
    </div>
  );
};

export default TestimonySlider;
