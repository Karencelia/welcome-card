"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex lg:justify-around lg:text-center justify-between items-center px-4 py-3">
      <div>
        <img src="WC-1.svg" alt="Logo" />
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        <ul className="flex flex-row gap-8 text-base items-center font-light text-[#0c005b]">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQs</a></li>
        </ul>
        <li className="list-none">
          <a href="#" className="uppercase bg-[#5a00a1] text-white px-5 py-2 lg:px-6 lg:py-3 text-xs lg:text-[12px] rounded-full font-light inline-flex items-center tracking-widest">
            Download App
          </a>
        </li>
      </nav>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none text-[#5a00a1]">
          ☰
        </button>
      </div>

      <div
        className={`absolute top-0 left-0 w-full bg-white p-5 z-50 shadow-md transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-6 text-2xl text-[#5a00a1]">
          ✖
        </button>

        <div className="flex items-center pl-6 pt-3">
          <img src="WC-1.svg" className="h-8" alt="Logo" />
        </div>

        <div className="flex flex-col justify-start pl-6 pt-6">
          <ul className="flex flex-col gap-4 text-base text-[#0c005b]">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <a href="#" className="uppercase bg-[#5a00a1] text-white px-5 py-2 lg:px-6 lg:py-3 text-xs lg:text-[12px] rounded-full font-bold inline-flex items-center">
            Download App
          </a>

        </div>
      </div>
    </div>
  );
}