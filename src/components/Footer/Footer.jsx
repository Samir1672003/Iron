import React from "react";
import logo from "../../assets/Images/logo.png";

const Footer = () => {
  return (
    <footer className="relative px-4 text-white overflow-hidden z-1 ">
      <div className="relative  z-1 mx-auto md:py-12">
        <div className="flex flex-col md:flex-row items-center pb-6 justify-between gap-6">
          <a href="#" className="max-h-20 max-w-30 w-full h-full shrink-0">
            <img src={logo} alt="Company Logo"   data-aos="fade-up" data-aos-duration="1000" className="h-full w-auto" />
          </a>

       <nav aria-label="Social media">
  <ul className="flex space-x-6 px-5" data-aos="fade-up" data-aos-duration="1000">
    <li>
      <a
        href="#"
        className="transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#c4ae78]"
        aria-label="Facebook"
      >
        <svg className="w-6 h-6" fill="#c4ae78" viewBox="0 0 24 24">
          <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
        </svg>
      </a>
    </li>

    <li>
      <a
        href="#"
        className="transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#c4ae78]"
        aria-label="Instagram"
      >
        <svg
          className="w-6 h-6"
          fill="transparent"
          stroke="#c4ae78"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="16.5" cy="7.5" r="0.5" />
        </svg>
      </a>
    </li>

    <li>
      <a
        href="#"
        className="transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#c4ae78]"
        aria-label="YouTube"
      >
        <svg
          className="w-6 h-6"
          fill="transparent"
          stroke="#c4ae78"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="4" width="20" height="16" rx="4" ry="4" />
          <polygon points="10 9 16 12 10 15 10 9" />
        </svg>
      </a>
    </li>

    <li>
      <a
        href="#"
        className="transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#c4ae78]"
        aria-label="Twitter"
      >
        <svg
          className="w-6 h-6"
          fill="transparent"
          stroke="#c4ae78"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
        </svg>
      </a>
    </li>
  </ul>
</nav>

        </div>

        <div data-aos="fade-up" data-aos-duration="1200" className="flex flex-wrap text-center pb-3 md:pb-0 gap-5 lg:gap-0 justify-center lg:justify-between items-center border-t border-white/20 pt-5 ">
          <p data-aos="fade-up" data-aos-duration="1500" className="text-center text-sm text-white/80  ">For any queries mail at <a href="" className="text-red-500 tracking-wider">info@irondoge.io </a></p>
          <p data-aos="fade-up" data-aos-duration="1500"  className=" text-center text-sm text-white/80 ">
         To request promo code mail at <a href="" className="text-red-500 tracking-wider"> elite@irondoge.io </a>
          </p>
          <p data-aos="fade-up" data-aos-duration="1500"  className="text-center text-sm text-white/80   ">irondoge 2025 © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
