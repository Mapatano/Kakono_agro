import React, { useEffect, useState } from 'react';
import { close , menu } from "/src/assets";
import { navLinks } from "../constants";




const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <nav
    className={`w-full z-40 flex py-6 justify-between items-center ${
      scrolling ? 'bg-[#86B049]' : ''
    } fixed top-0 left-0 right-0 z-10 transition-all duration-300 ease-in-out`}
  >
    

      <ul className="list-none  sm:flex hidden justify-center items-center  flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-black font-poppins hover:text-[#E1AD01] font-medium cursor-pointer text-[14px] ${
              active === nav.title ? "text-black" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>





      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-40`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col z-40">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
