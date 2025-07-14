import { NavLink } from "react-router";

import crew from "./Crew.module.css";

const CrewShowcase = () => {
  return (
    <>
      <div className={crew.crew__infoContainer}>
        <h3 className={crew.crew__info__rank}>comander </h3>
        <h2 className={crew.crew__info__name}>Douglas Hurley</h2>

        <p className={crew.crew__info__text}>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>

      <nav>
        <ul className={crew.crew__menu}>
          <li>
            <NavLink to={"#"} className={crew.crew__menu__item}>
              0
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"#"} className={crew.crew__menu__item}>
              1
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"#"} className={crew.crew__menu__item}>
              2
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"#"} className={crew.crew__menu__item}>
              3
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={crew.crew__imgContainer}>
        <img
          className={crew.crew__img}
          src="../../assets/crew/image-douglas-hurley.webp"
          alt="crew"
        />
      </div>
    </>
  );
};

export default CrewShowcase;
