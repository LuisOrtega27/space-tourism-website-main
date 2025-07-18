import { NavLink } from "react-router";
import techStyles from "../../pages/Technology/Tech.module.css";

type TechnologyItem = {
  name: string;
  // add other properties if needed
};

type TechMenuProps = {
  technology: Record<string, TechnologyItem>;
};

const TechMenu = ({ technology }: TechMenuProps) => {
  return (
    <nav>
      <ul className={techStyles.tech__menu}>
        {technology &&
          Object.values(technology).map((tech, index) => {
            return (
              <li key={tech.name}>
                <NavLink
                  to={`/technology/${tech.name}`}
                  className={`${techStyles.tech__menu_item} technologyMenuItem`}
                >
                  {index + 1}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default TechMenu;
