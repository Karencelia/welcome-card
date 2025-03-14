"use client"

import { useState } from 'react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex lg:justify-around lg:text-center justify-between">
      <div className='flex lg:justify-around justify-between'>
      <div>
        <img src="WC-1.svg" className='lg:block'></img>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>
      </div>

      <div>
        <nav className={`lg:flex ${isOpen ? 'flex flex-col mt-4 absolute top-16 right-4 bg-white p-4 rounded' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <li>About</li>
            <li>Features</li>
            <li>FAQs</li>
            <li className="uppercase bg-[#5a00a1] text-white w-[149px] p-3 text-[12px] rounded-full font-black">
              download app
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}