import React from "react";
import line from "../../assets/Images/lines.png";
import character1 from "../../assets/Images/character1.png";
import character2 from "../../assets/Images/character2.png";

const Section7 = () => {
  const carddata = [
    {
      title: "CONQUEST NO.1",
      para: "The inaugural forging of the IronDoge MemeForge demands meticulous strategy and craftsmanship, guaranteeing the quest's triumphant fulfillment.",
      list: ["Team formation", "Community formation", "Powerful marketing"],
    },
    {
      title: "CONQUEST NO.2",
      para: "Aimed at enhancing meme magic, forging alliances, and establishing a solid foundation through expansive marketing and platform development.",
      list: [
        "NFT marketplace setup",  
        "Strategic partnerships",
        "Token listing",
      ],
    },
    {
      title: "CONQUEST NO.3",
      para: "Introducing play-to-earn mechanics and immersive experiences that connect users deeper into the IronDoge ecosystem.",
      list: ["GameFi launch", "Bounty quests", "Cross-platform integration"],
    },
    {
      title: "CONQUEST NO.4",
      para: "Final domination with DAO governance, ecosystem expansion, and community empowerment through full decentralization.",
      list: ["DAO launch", "Global events", "Roadmap V2 reveal"],
    },
  ];

  return (
    <section className=" relative py-20 ">
      <div className="container">
        <div className="hidden xl:block absolute bg-[#62351f] top-[20%] left-1/2 h-[73%] w-[3px]  rounded"></div>

        <div className="flex justify-center items-center flex-col mb-20 max-w-7xl m-auto text-center">
          <div className="mb-7 flex justify-center items-center flex-col">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">
              Roadmap "IronDoge Kingdom"
            </h1>
            <img src={line}  data-aos="fade-up" data-aos-duration="1300"        className="mb-8 w-32 md:w-70" alt="" />
          </div>
          <p  data-aos="fade-up" data-aos-duration="1600">
            The IronDoge Kingdom is deeply integrated with the Idoge token. All
            in-platform transactions, rewards, and fees are conducted using
            idoge, creating a steady circulation of the token and adding to its
            utility. The platform also features a staking system where users can
            lock in their idoge to gain access to premium features and larger
            bounty rewards.
          </p>
        </div>
        <div className=" flex flex-col gap-16">
          <div className="flex flex-col gap-12">
            {carddata.map((val, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-8 md:gap-0`}
              >
                <div className=" bg-gradient-to-r to-[#1d1111] from-[#5b4327]   rounded-xl p-6 shadow-lg border-[3px] border-[#62351f]  transition-transform duration-300 transform hover:-translate-y-2 w-full md:max-w-[550px]">
                  <h2 className="text-2xl font-bold mb-2">{val.title}</h2>
                  <p className="mb-4">{val.para}</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                    {val.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className=" hidden xl:block w-[5.9%] h-[3px]  bg-[#62351f]"></div>
               
                {index % 2 !== 0 ? (
                  <img data-aos="fade-left"   src={character1} alt="" />
                ) : (
                  <img data-aos="fade-right"  src={character2} alt="" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
