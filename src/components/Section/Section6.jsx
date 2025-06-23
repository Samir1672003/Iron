import React from "react";
import line from "../../assets/Images/lines.png";
const Section6 = () => {
  return (
    <section className=" py-24 h-screen  relative ">
      <div className="container flex flex-col justify-center items-center h-full ">
        <div className="mb-4 flex justify-center items-center flex-col">
        <h1   data-aos="fade-up" data-aos-duration="1000"   className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">TOKENOMICS</h1>
        <img src={line} alt=""  data-aos="fade-up"  data-aos-duration="1200"       className="mb-8 w-32 md:w-60" />
</div>
        <div data-aos="fade-up" data-aos-duration="1500"  className="max-w-[500px] w-full p-8 md:mt-10 transition-all border rounded-lg hover:rotate-y-12 hover:shadow-lg   hover:rotate-x-12 group   bg-gradient-to-r to-[#1d1111] from-[#5b4327]">
          <div className="flex justify-between">
            <h4>Name</h4>
            <h4>IronDoge</h4>
          </div>
          <div className="bg-[#c4ae78] h-[2px] w-full my-4"></div>
          <div className="flex justify-between">
            <h4>Symbol</h4>
            <h4>IDOGE</h4>
          </div>
          <div className="bg-[#c4ae78] h-[2px] w-full my-4"></div>
          <div className="flex justify-between">
            <h4>Total Supply</h4>
            <h4>99,999,999,999 IDOGE</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
