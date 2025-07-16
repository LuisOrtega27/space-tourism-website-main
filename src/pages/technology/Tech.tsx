import { NavLink } from "react-router";

import tech from "./Tech.module.css";

const Tech = () => {
  return (
    <>
      <div className={tech.tech__imgContainer}>
        <picture>
          <source
            media="(width >= 1440px)"
            srcSet="../../../assets/technology/image-launch-vehicle-portrait.jpg"
          />

          <source
            media="(width >= 1440px)"
            srcSet="../../../assets/technology/image-launch-vehicle-landscape.jpg"
          />

          <img
            className={tech.tech__img}
            src="../../../assets/technology/image-launch-vehicle-portrait.jpg"
            alt="Technology"
          />
        </picture>
      </div>

      <div className={tech.tech__infoContainer}>
        <nav>
          <ul className={tech.tech__menu}>
            <li>
              <NavLink to={"launch-vehicle"} className={tech.tech__menu_item}>
                1
              </NavLink>
            </li>
            <li>
              <NavLink to={"spce-capsule"} className={tech.tech__menu_item}>
                2
              </NavLink>
            </li>
            <li>
              <NavLink to={"spaceport"} className={tech.tech__menu_item}>
                3
              </NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className={tech.tech__info__subtitle}>The terminology...</h3>
          <h2 className={tech.tech__info__name}>Launch vehicle</h2>

          <p className={tech.tech__info__tech}>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </>
  );
};

export default Tech;
