import React, { useEffect } from "react";
import Button from "../Button/Button";
import bgVideo from "../../assets/Video/Dragon.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

const Section = ({ content }) => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="relative w-full section h-screen overflow-hidden"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-fit-cover md:object-fill"
        src={bgVideo}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      <div className="relative z-20 flex flex-col items-center justify-center tracking-widest bg-gradient-to-r from-[#5a0700] to-[#c4ae78] bg-clip-text text-transparent text-center max-w-[800px] m-auto h-full px-4">
        <h4 className="text-xl md:text-2xl font-semibold mb-2">
          Winter Is Here
        </h4>
        <h1 className="text-5xl md:text-8xl font-bold mb-4 tracking-widest text-transparent">
          Iron Doge
        </h1>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r bg-clip-text">
          The King of Memes
        </h3>
        <h2 className="text-lg md:text-xl font-extrabold mb-6 tracking-widest">
          Game of Bones Begins
        </h2>
        <div className="max-w-80">
          <Button content="START YOUR BATTLE" />
        </div>
      </div>
    </section>
  );
};

export default Section;
