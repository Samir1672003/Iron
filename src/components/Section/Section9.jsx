import React, { useContext, useEffect, useState } from "react";
import line from "../../assets/Images/lines.png";
import Button from "../Button/Button";
import blogimg1 from "../../assets/Images/blogimg1.jpeg";
import blogimg2 from "../../assets/Images/blogimg2.png";
import blogimg3 from "../../assets/Images/blogimg3.png";
import { datacontext } from "../../Context/Context";
import Popup from "../Popup";
import Aos from "aos";

const Section9 = ({ content }) => {
  const { popup, setpopup, carddata, setpoupindex } =
    useContext(datacontext);

  function handlereadmore(i) {
    setpopup(!popup);
    setpoupindex(i);
  }

  return (
    <>
      {" "}
      <section className="py-16  relative" id="section9">
        <div className="container ">
          <div className="text-center mb-12">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-4xl md:text-5xl font-bold mb-4 tracking-wider"
            >
              Our Blogs
            </h1>
            <img
              src={line}
              alt=""
              data-aos="fade-up"
              data-aos-duration="1200"
              className="mb-8 w-32 md:w-60 mx-auto"
            />
            <p data-aos="fade-up" data-aos-duration="1400" className=" text-lg">
              Read our latest insights, stories, and updates.
            </p>
          </div>
          <div className="grid grid-cols-1 justify-center transition-all md:grid-cols-2 md:p-0 xl:grid-cols-3 gap-8">
            {carddata.map((val, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1600"
                className="w-full  bg-gradient-to-r to-[#1d1111] from-[#5b4327] rounded-xl group transition-all border-1  overflow-hidden hover:rotate-y-12 hover:shadow-md hover:border-1 border-yellow-400  shadow-yellow-600 duration-500 "
              >
                <div className="h-64 transition-all">
                  <img
                    src={val.image}
                    alt={val.title}
                    className=" transition-all h-full  w-full object-cover object-center"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-60 w-full">
                  <h4 className="text-xl font-semibold  mb-2 opacity-100 ">
                    {val.title}
                  </h4>
                  <p className=" mb-4 opacity-100 ">{val.description}</p>

                  <div
                    className="flex flex-wrap  mb-1 max-w-40"
                    onClick={() => {
                      handlereadmore(index);
                    }}
                  >
                    <Button content="READ MORE" />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1700"
          className=" max-w-60 mt-4 m-auto"
        >
          <Button content="VIEW ALL" />
        </div>
        {popup && <Popup />}
      </section>
    </>
  );
};

export default Section9;
