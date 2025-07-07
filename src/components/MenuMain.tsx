import { NavLink } from "react-router";
import IconLogo from "../assets/IconLogo";

import IconMenuOpen from "../assets/menu/IconMenuOpen";
import { useState } from "react";
import IconMenuClose from "../assets/menu/IconMenuClose";

const MenuMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="grid grid-cols-2">
      <IconLogo />

      <hr className="hidden md:block" />

      <nav className="text-end grid align-middle justify-end">
        <button className="z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IconMenuClose /> : <IconMenuOpen />}
        </button>

        <ul
          className={` 
            ${isMenuOpen ? "block" : "hidden"} 
            absolute top-0 right-0 z-10 
            flex flex-col gap-8
            text-start text-base
            pl-8 pt-32 
            min-h-screen w-8/12
            overflow-hidden
            backdrop-blur-xs 
        `}
        >
          <li className="w-full">
            <NavLink
              to={"/"}
              className={
                "w-full p-2 inline-block  bg-white/10 border-r-4 border-white"
              }
            >
              <span className="font-bold">00</span> HOME
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"destination"}>
              <span className="font-bold">01</span> DESTINATION
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"crew"}>
              <span className="font-bold">02</span> CREW
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to={"technology"}>
              <span className="font-bold">03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuMain;
