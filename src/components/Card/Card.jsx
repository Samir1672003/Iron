import React from "react";
import cardlogo from "../../assets/Images/cardlogo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Card = () => {
  const slicesettings = {
    arrows:false,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  const carddetails = [
    "IronDoge Unveils Game-Changing GameFi Innovations, Redefining the Future of Gaming and Finance!",
    "New Era of Play-To-Earn and NFT Trading Platform",
    "Innovative Immersive Play-To-Earn Games and NFT Trading Platform.",
    "Unmatchable GameFi & Play-To-Earn Experience",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="1700" >
      <Slider {...slicesettings}>
        {carddetails.map((text, i) => (
          <div key={i} className="px-2">
            <div className="bg-gradient-to-r from-[#560700] hover:bg-gradient-to-l  transition-all duration-700 flex flex-col justify-center items-center text-center w-full h-80 rounded-xl  border-2 shadow-md shadow-red-900  border-[#62351f] px-6 py-6 cursor-pointer ">
              <p className="leading-relaxed">
                {text}
              </p>
              <img
              
                src={cardlogo}
                className="h-10 w-auto mt-6 object-contain"
                alt="Card Logo"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
