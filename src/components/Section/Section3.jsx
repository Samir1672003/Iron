import React from "react";
import bgdesign from "../../assets/Images/bgdesign.png";
import line from "../../assets/Images/lines.png";

const Section3 = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgdesign})` }}
    >
      <div className="container flex flex-col items-center justify-center text-center">
        <h1 data-aos="flip-up"data-aos-duration="1000"   className="text-4xl md:text-5xl font-bold mb-4 tracking-widest text-[#f7d07a] drop-shadow-[0_2px_10px_rgba(255,204,0,0.4)] uppercase">
          Statistics
        </h1>

        <img
          src={line}
          alt="Decoration"
               className="mb-8 w-32 md:w-50"  
        />

        <div data-aos="zoom-out" data-aos-duration="1000"  className="w-full max-w-md  bg-gradient-to-r to-[#1d1111] from-[#5b4327] border border-[#ffb347] p-6 rounded-xl shadow-[0_0_20px_#ffb34750] transition-all duration-700">
          <h2 className="text-2xl md:text-3xl text-[#ecd19a] mb-3 font-semibold uppercase">
            Total Supply
          </h2>
          <p className="text-2xl md:text-3xl text-white tracking-wider font-bold">
            99,99,99,999
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
