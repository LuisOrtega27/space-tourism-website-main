import { NavLink } from "react-router";
import { useContext, useState } from "react";

import IconLogo from "../../assets/IconLogo";
import IconMenuOpen from "../../assets/menu/IconMenuOpen";
import IconMenuClose from "../../assets/menu/IconMenuClose";

import styles from "./MenuMain.module.css";

import { NavContext } from "../../App";
import type { NavContextType } from "../../App";

const MenuMain = () => {
  const navContext = useContext(NavContext) as NavContextType;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.headerMain}>
      <div className={styles.headerMain__iconContainer}>
        <IconLogo />
      </div>

      <div className="hidden lg:flex flex-col justify-center w-full">
        <hr className="w-full text-gray-97 translate-x-8 z-20" />
      </div>

      <nav className={styles.menuMain_containerNav}>
        <button
          className={`md:hidden z-20`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IconMenuClose /> : <IconMenuOpen />}
        </button>

        <ul
          className={`${isMenuOpen ? "flex" : "hidden md:flex"} ${
            styles.menuMain
          }`}
        >
          <li>
            <NavLink
              to={"/"}
              className={styles.menuMain__item + " menuMainItem"}
              onClick={() => navContext.setNav("home")}
            >
              <span className="font-bold mr-2 inline md:hidden lg:inline">
                00
              </span>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"destination"}
              className={styles.menuMain__item + " menuMainItem"}
              onClick={() => navContext.setNav("destination")}
            >
              <span className="font-bold mr-2">01</span>
              DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"crew"}
              className={styles.menuMain__item + " menuMainItem"}
              onClick={() => navContext.setNav("crew")}
            >
              <span className="font-bold mr-2">02</span>
              CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"technology"}
              className={styles.menuMain__item + " menuMainItem"}
              onClick={() => navContext.setNav("technology")}
            >
              <span className="font-bold mr-2">03</span>
              TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MenuMain;
