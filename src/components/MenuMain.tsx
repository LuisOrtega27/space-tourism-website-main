import { NavLink } from "react-router";
import { useState } from "react";

import IconLogo from "../assets/IconLogo";
import IconMenuOpen from "../assets/menu/IconMenuOpen";
import IconMenuClose from "../assets/menu/IconMenuClose";

const MenuMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="headerMain">
      <div className="headerMain__iconContainer">
        <IconLogo />
      </div>

      <div className="hidden lg:flex flex-col justify-center w-full ">
        <hr className="w-full text-gray-97 translate-x-8 z-20" />
      </div>

      <nav className="menuMain_containerNav">
        <button
          className={`md:hidden z-20`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IconMenuClose /> : <IconMenuOpen />}
        </button>

        <ul className={`${isMenuOpen ? "flex" : "hidden md:flex"} menuMain`}>
          <li>
            <NavLink to={"/"} className={`menuMain__item`}>
              <span className="font-bold inline md:hidden">00</span> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"destination"} className={`menuMain__item`}>
              <span className="font-bold">01</span> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to={"crew"} className={`menuMain__item`}>
              <span className="font-bold">02</span> CREW
            </NavLink>
          </li>
          <li>
            <NavLink to={"technology"} className={`menuMain__item`}>
              <span className="font-bold">03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuMain;
