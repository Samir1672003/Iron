import React, { useContext, useState } from "react";
import { datacontext } from "../Context/Context";
import Button from "./Button/Button";

const Popup = ({ content }) => {
  const { carddata, poupindex, setpopup } = useContext(datacontext);

  function handleclose() {
    setpopup(false);
  }
  return (
    <>
      {carddata.map(
        (val, i) =>
          poupindex === i && (
            <section data-aos="fade-up" className="pt-10">

              <div className="container  pt-10 flex justify-center items-center">
                <div className="w-full h-full">
                  <img
                    src={val.image}
                    className="w-full h-full mb-5 relative"
                    alt=""
                  />
                  
              <button
                onClick={handleclose}
                className="absolute right-7 top-27 rounded-md p-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
                  <h1 className="text-2xl font-bold capitalize text-start tracking-widest mb-3">
                    {val.title}
                  </h1>
                  <p className="text-xl tracking-widest mb-3">
                    {val.description}
                  </p>
                  <hr className="my-5" />
                  <p className="">{val.details}</p>
                  <div onClick={handleclose} className="mt-5">
                    <Button content="Go Back" />
                  </div>
                </div>
              </div>
            </section>
          )
      )}
    </>
  );
};

export default Popup;
