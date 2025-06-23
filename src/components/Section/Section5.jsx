import React from "react";


const Section5 = () => {
  return (
    <section className="static w-full h-screen section5  ">
      <div className=" flex justify-center items-center w-full h-full">
        {" "}
        <div className="max-w-4xl h-full m-auto w-full relative" data-aos-duration="1000"   data-aos="slide-up">
          <div className="iframe-toplayer">
            {" "}
            <div className="iframe-wrapper">
              <iframe
            
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/asKDIFoi2es?playsinline=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;fs=0&amp;start=undefined&amp;autoplay=0&amp;enablejsapi=1&amp;widgetid=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
