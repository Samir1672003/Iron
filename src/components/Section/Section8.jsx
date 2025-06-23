import React from "react";
import line from "../../assets/Images/lines.png";
import cardimg from "../../assets/Images/card.jpeg";
import card2img from "../../assets/Images/card2.png";


const Section8 = () => {
  return (
    <section className="min-h-screen w-full relative  py-10 section8">
      <div className="container">
        <div className="text-center">
          <h1 data-aos="fade-up" data-aos-duration="1000"  className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
            Our top threads
          </h1>
          <img        className="mb-8 w-32 md:w-60 mx-auto" src={line} alt="decoration" />
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start">
     
          <div  data-aos="fade-up" data-aos-duration="1300" className="bg-secondary-dark cursor-pointer border-2 shadow-sm shadow-yellow-400  w-full p-4 rounded-xl md:rounded-2xl text-center">
            <div  className="h-64 md:h-72 overflow-hidden rounded-lg">
              <img
                src={cardimg}
                alt="First cash rewards winner"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-xl md:text-2xl  mt-4">
              First cash rewards winner!!!
            </h3>
          </div>

          <div  data-aos="fade-up" data-aos-duration="1600" className="bg-secondary-dark cursor-pointer border-2 shadow-sm shadow-yellow-400  w-full p-4 rounded-xl md:rounded-2xl text-center">
            <div className="h-64 md:h-72 overflow-hidden rounded-lg">
              <img
                src={card2img}
                alt="IronDoge in making"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h3 className="text-xl md:text-2xl  mt-4">
              IronDoge in making
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
