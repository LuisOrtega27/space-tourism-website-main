import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";

import IconLogo from "../../assets/IconLogo";
import IconMenuOpen from "../../assets/menu/IconMenuOpen";
import IconMenuClose from "../../assets/menu/IconMenuClose";

import styles from "./MenuMain.module.css";

import { NavigationContext } from "../../context/NavigationContext";
import type { NavigationContextType } from "../../context/NavigationContext";

import type { JsonDataContextType } from "../../context/JsonDataContext";
import { JsonDataContext } from "../../context/JsonDataContext";

const MenuMain = () => {
  const navContext = useContext(NavigationContext) as NavigationContextType;
  const dataContext = useContext(JsonDataContext) as JsonDataContextType;

  const [menuItems, setMenuItems] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (dataContext != null) setMenuItems(dataContext);
  }, [dataContext, menuItems]);

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
                  onClick={() => {
                    if (navContext != null) navContext.setNav(key);
                  }}
                  className={styles.menuMain__item + " menuMainItem"}
                  end={key == "home" ? true : false}
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
