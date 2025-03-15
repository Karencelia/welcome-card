"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex lg:justify-around lg:text-center justify-between items-center px-4 py-3">
      {/* Logo (Visible always) */}
      <div>
        <img src="WC-1.svg" className="h-8 lg:h-10" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex">
        <ul className="flex flex-row gap-8 text-base">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li className="uppercase bg-[#5a00a1] text-white w-[140px] p-2 text-xs rounded-full font-bold text-center">
            <a href="#">Download App</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Mobile Menu (Smaller and Centered) */}
      {isOpen && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white w-[90%] max-w-[320px] rounded-lg p-5 z-50">
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-3 right-4 text-xl">
            ✖
          </button>

          {/* Logo (Still Visible) */}
          <div className="flex justify-center">
            <img src="WC-1.svg" className="h-8" alt="Logo" />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-3 text-sm text-center mt-4">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li className="uppercase bg-[#5a00a1] text-white w-[140px] p-2 text-xs rounded-full font-bold">
              <a href="#">Download App</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
