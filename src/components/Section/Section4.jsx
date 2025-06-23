import React, { useEffect } from "react";
import blogseparator from "../../assets/Images/blog-separator.png";
import line from "../../assets/Images/lines.png";
import Aos from "aos";

const Section4 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 120,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section className=" relative py-24 ">
        <div
          data-
          className="container flex flex-col items-center justify-center "
        >
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-4xl md:text-5xl font-bold mb-10 tracking-wider"
          >
            About Us
          </h1>

          <div className="">
            <img
              data-aos="fade-up"
              src={line}
              data-aos-duration="1300"
              alt="IronDoge Logo"
              className="mb-8 w-32 md:w-50"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1600"
            className="text-sm md:text-base text-center font-light leading-loose tracking-wider space-y-5 "
          >
            <p>
              Welcome to <strong>IronDoge</strong>, where being the best isn’t
              just a goal—it’s our baseline. We create wonders out of thin air,
              changing the course of crypto history with ideas so fresh, they
              make mint condition look rusty.
            </p>
            <p>
              Ever seen a meme that made you rich? Stick with us, and you might.
              We combine the uncombinable, generating concepts the crypto scene
              has never dreamed of. We're the alchemists turning digital dust
              into gold.
            </p>
            <p>
              Ready to be a part of the revolution? Get in now and ride the wave
              with us. IronDoge isn’t just a meme—it’s the future, and you don't
              want to miss out on making history with us.
            </p>
            <p>
              At IronDoge, we don’t just set the bar—we launch it into the
              stratosphere. Our projects are legendary, blending innovation and
              hilarity in ways that will leave you both amazed and rolling on
              the floor laughing.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full section  bg-[#1d1111] ">
        <div className="container">
          <img
            src={blogseparator}
            alt="IronDoge Logo"
            className=" absolute w-full top-0 left-0  object-contain"
          />
          <div className="md:flex grid gap-20 justify-center items-center  ">
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="max-w-6xl m-auto md:-rotate-6  transition-all sm:w-[245px]"
            >
              <h3 className="text-2xl">582.65k+</h3>
              <p className="text-xl">People reached</p>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="max-w-6xl m-auto md:rotate-6  transition-all sm:w-[245px]"
            >
              <h3 className="text-2xl">627+</h3>
              <p className="text-xl">Number of media mention</p>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="max-w-6xl m-auto md:-rotate-6  transition-all sm:w-[245px]"
            >
              <h3 className="text-2xl">57k+</h3>
              <p className="text-xl">Social Media Engagement</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
