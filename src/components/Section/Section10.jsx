import React, { useState, useRef, useEffect } from "react";
import line from "../../assets/Images/lines.png";

const Section10 = () => {
  const [showIndex, setShowIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleFaqs = (index) => {
    setShowIndex((prev) => (prev === index ? null : index));
  };

  const faqdata = [
    {
      title: "How can I ensure I don't miss out on the next sale phase?",
      description:
        "To secure your spot, make sure to follow our social media channels and get whitelisted. Don't miss out on your chance to join the IronDoge revolution!",
    },
    {
      title: "How does IronDoge plan to sustain its growth and innovation?",
      description:
        "IronDoge’s strategy is nothing short of legendary. We forge strategic alliances with key players in both crypto and traditional markets. Our marketing is dynamic, leveraging viral trends and engaging content to captivate new audiences. IronDoge is not just riding the wave of change; it’s creating it.",
    },
    {
      title:
        "Is there a limit on how many tokens I can purchase during the IronDoge ICO?",
      description:
        "Yes, there is a cap on the maximum number of tokens each participant can purchase to ensure fair distribution. The specific limits will be announced closer to the sale date, so stay tuned.",
    },
    {
      title: "How do I participate in the IronDoge Private sale?",
      description:
        "Follow these steps: 1. Get Whitelisted: Follow our social media channels. 2. Set Up a Wallet. 3. Fund Your Wallet. 4. Access the Portal on launch date.",
    },
  ];

  return (
    <section className="relative">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center flex-col md:p-10">
            <div className="mb-7 flex justify-center items-center flex-col">
              <h1   data-aos="fade-up" data-aos-duration="1200" className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
                FAQS
              </h1>
              <img   data-aos="fade-up" data-aos-duration="1300" src={line} className="mb-8 w-32 md:w-50" alt="" />
            </div>

            {faqdata.map((val, i) => (
              <div
                key={i}
                className="bg-[#1d1111] mt-4 transition-all cursor-pointer accordion w-full p-3 rounded-md"
                onClick={() => handleFaqs(i)}
                  data-aos="fade-up" data-aos-duration="1400"
              >
                <div data-aos-anchor-placement="top-center"  className="flex justify-between items-center">
                  <h4 className="pb-2 pt-2">{val.title}</h4>
                  <button className="cursor-pointer">
                    {showIndex === i ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-minus"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                      </svg>
                    )}
                  </button>
                </div>

                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  style={{
                    overflow: "hidden",
                    transition: "height 0.4s ease, opacity 0.4s ease",
                    height:
                      showIndex === i
                        ? `${contentRefs.current[i]?.scrollHeight}px`
                        : "0px",
                    opacity: showIndex === i ? 1 : 0,
                  }}
                  className=" border-t border-[#62351f]"
                >
                  <p className="pb-2 mt-2">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
