import { NavLink } from "react-router";
import techStyles from "../../pages/TechnologySub/TechShowcase.module.css";

type TechMenuProps = {
  technology: Array<{
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  }> | null;
  isDefault: boolean | undefined;
};

const TechMenu = ({ technology, isDefault }: TechMenuProps) => {
  return (
    <nav>
      <ul className={techStyles.tech__menu}>
        {technology &&
          Object.values(technology).map((tech, index) => {
            if (!tech) return null;
            return (
              <li key={tech.name}>
                <NavLink
                  to={`${import.meta.env.BASE_URL}technology/${tech.name}`}
                  className={`${
                    techStyles.tech__menu_item
                  } technologyMenuItem ${
                    isDefault && index == 0 ? "active" : ""
                  }`}
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
