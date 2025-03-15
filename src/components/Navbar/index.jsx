"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex lg:justify-around lg:text-center justify-between items-center px-4 py-3">
      {/* Left: Logo */}
      <div>
        <img src="WC-1.svg" className="lg:block h-10 lg:h-auto" alt="Logo" />
      </div>

      {/* Mobile Menu Toggle (Now at the Right) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`lg:flex ${isOpen ? "flex flex-col absolute top-14 right-4 bg-white p-4 rounded shadow-md w-[200px]" : "hidden"}`}>
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 text-center">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li className="uppercase bg-[#5a00a1] text-white w-[149px] p-3 text-[12px] rounded-full font-black text-center">
            <a href="#">Download App</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
