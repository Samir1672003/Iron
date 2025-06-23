import React from "react";
import bgfire from "../../assets/Images/Firebg.jpg";
import Card from "../Card/Card";
import line from "../../assets/Images/lines.png";

const Section2 = () => {
  return (
    <section className="relative h-screen w-full bg-fixed bg-cover  bg-center">
      <div className="relative z-20 flex flex-col justify-center items-center h-full max-w-7xl m-auto px-4 text-center">
        <h2
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1000"
          className="text-4xl md:text-5xl font-extrabold tracking-wide  mb-4"
        >
          IronDoge in the News
        </h2>
        <img
          data-aos="fade-up"
          data-aos-duration="1500"
          src={line}
          alt="Section decoration"
          className="mb-8 w-32 md:w-50"
        />
        <Card />
      </div>
    </section>
  );
};

export default Section2;
