import React, { useEffect, useState } from "react";
import navimg from "../../assets/Images/navimg.png";
import logo from "../../assets/Images/logo.png";
import Button from "../Button/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollVal, setscrollVal] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollVal(window.scrollY);
    });
  }, [scrollVal]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      className={`left-0 fixed w-full z-50 backdrop-blur-md md:shadow-lg transition-all ${
        scrollVal === 0 ? "top-8" : "top-0"
      }`}
    >
      <div className="border border-[#3f2f29] bg-gradient-to-b from-[rgba(34,34,34,0.95)] to-[rgba(34,34,34,0.75)] shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-3 mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </a>

        <nav className="hidden md:flex items-center text-sm font-medium">
          <ul className="flex gap-6 items-center transition-all duration-300 ease-in-out">
            <li>
              <a
                href="#"
                className="transition-colors hover:text-yellow-600 duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#section9"
                className="transition-colors hover:text-yellow-600 duration-200"
              >
                Blogs
              </a>
            </li>
            <li>
              <Button content="Connect Tron Wallet" />
            </li>
            <li>
              <Button content="Connect Wallet" />
            </li>
            <li>
              <a href="#">
                <img src={navimg} className="object-contain" alt="icon" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-x cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            
            ) : (
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-menu-3 cursor-pointer"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6h10" />
                <path d="M4 12h16" />
                <path d="M7 12h13" />
                <path d="M4 18h10" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <nav
        className={`md:hidden px-4 pb-4 text-sm font-medium transition-all duration-300 ease-in-out transform origin-top ${
          menuOpen
            ? "opacity-100 scale-y-100 max-h-[500px]"
            : "opacity-0 scale-y-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 transition-opacity duration-300">
          <li>
            <a
              href="#"
              className="hover:text-yellow-600 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#section9"
              className="hover:text-yellow-600 transition-colors duration-200"
            >
              Blogs
            </a>
          </li>
          <li>
            <Button content="Connect Tron Wallet" />
          </li>
          <li>
            <Button content="Connect Wallet" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
