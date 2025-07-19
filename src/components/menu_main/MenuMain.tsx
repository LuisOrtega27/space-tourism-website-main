import { NavLink } from "react-router";
import { useContext, useState } from "react";

import IconLogo from "../../assets/IconLogo";
import IconMenuOpen from "../../assets/menu/IconMenuOpen";
import IconMenuClose from "../../assets/menu/IconMenuClose";

import styles from "./MenuMain.module.css";

import type { NavigationContextType } from "../../context/NavigationContext";
import { NavigationContext } from "../../context/NavigationContext";

import { DataContext } from "../../App";
import type { DataContextType } from "../../App";

const MenuMain = () => {
  const navContext = useContext(NavigationContext) as NavigationContextType;
  const menuItems = useContext(DataContext) as DataContextType;

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
          {Object.keys(menuItems).map((key, index) => {
            return (
              <li key={`${index}-${key}`}>
                <NavLink
                  to={
                    key == "home"
                      ? import.meta.env.BASE_URL
                      : import.meta.env.BASE_URL + key
                  }
                  end={key == "home" && true}
                  onClick={() => navContext.setNav(key)}
                  className={styles.menuMain__item + " menuMainItem"}
                >
                  <span className="font-bold mr-2 inline md:hidden lg:inline">
                    0{index}
                  </span>

                  {key}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default MenuMain;
