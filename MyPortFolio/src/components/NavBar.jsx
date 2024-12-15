import React, { useState } from "react";

import { NavLink } from 'react-router-dom';
const NavBar = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const [isOpen, setIsOpen]=useState(false)

  return (
    <div>
      <nav className="w-full flex justify-between items-center px-[5%] h-[80px]">
        <div className="logo">
          <h2 className="text-4xl font-bold ">AleX</h2>
        </div>

<div className="hamburger lg:hidden visible">
<i className="ri-menu-3-fill text-3xl font-bold transform  hover:text-gray-600 active:scale-[1.1]" onClick={()=>{

  setIsOpen((prevValue)=>!prevValue)
}}></i>
</div>
<div className={`links lg:space-x-8 space-y-8 lg:text-xl text-[20px] font-semibold lg:static fixed right-0 flex lg:flex-row flex-col top-12 lg:h-auto h-[700px] lg:bg-transparent bg-[rgb(31,0,22)] text-white lg:w-auto w-[300px] lg:items-start items-center lg:py-0 py-5 lg:mt-0 mt-3 lg:pr-0 pr-[19%] z-[2000] ${isOpen ? 'block' : 'hidden'} lg:block transition-all delay-75 duration-75`}>
          {navLinks.map((link) => {
            return (
              <NavLink 
                to={link.link} 
                className={({ isActive }) => 
                  isActive ? 'active' : 'hover:border-b-2 hover:border-pink-400'
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
        <div className="button lg:block hidden">
          <button
            class="
primary-bg rounded-full px-7 py-3 hover:scale-[90%] text-white font-bold active:scale-[90%]"
          >
            Connect me
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
