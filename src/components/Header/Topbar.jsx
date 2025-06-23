import React from "react";

const Topbar = () => {
  return (
    <>
      <marquee  scrollamount="10" className="w-full h-8 text-sm flex text-center items-center">
        <div className="flex gap-10 font-bold ">
          <div className="">Winter is here! 🌨️</div>
          <div className="">
            Get ready for the Battle of Taps—IRONDOGE BOT is live! ⚔️
          </div>
          <div className="">
            <a href="https://t.me/Battleoftaps_bot" target="_blank">
              Start your Battle
            </a>
          </div>
        </div>
      </marquee>
    </>
  );
};

export default Topbar;
