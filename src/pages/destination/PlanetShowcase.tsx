import { NavLink } from "react-router";
import destination from "./PlanetShowcase.module.css";

const PlanetShowcase = () => {
  return (
    <>
      <div className={destination.destination__imgContainer}>
        <img
          className={destination.destination__img}
          src="../../../assets/destination/image-moon.webp"
          alt="Planeta"
        />
      </div>

      <div className={destination.destination__infoWapper}>
        <nav>
          <ul className={destination.destination__menu}>
            <li>
              <NavLink className={destination.menu__item} to={"moon"}>
                moon
              </NavLink>
            </li>
            <li>
              <NavLink className={destination.menu__item} to={"mars"}>
                mars
              </NavLink>
            </li>
            <li>
              <NavLink className={destination.menu__item} to={"europa"}>
                europa
              </NavLink>
            </li>
            <li>
              <NavLink className={destination.menu__item} to={"titan"}>
                titan
              </NavLink>
            </li>
          </ul>
        </nav>

        <h2 className={destination.destination__subtitle}>moon</h2>

        <p className={destination.destination__text}>
          Moon Mars Europa Titan Moon See our planet as you’ve never seen it
          before. A perfect relaxing trip away to help regain perspective and
          come back refreshed. While you’re there, take in some history by
          visiting the Luna 2 and Apollo 11 landing sites.
        </p>

        <hr className={destination.destination__separator} />

        <div className={destination.destination__info}>
          <div>
            <h3 className={destination.info__title}>Avg. distance</h3>
            <p className={destination.info__text}>384,400 km Est.</p>
          </div>

          <div>
            <p className={destination.info__title}>travel time</p>
            <h3 className={destination.info__text}>3 days</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetShowcase;
