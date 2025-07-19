import { NavLink } from "react-router";
import crewStyles from "../../pages/crewSub/Crew.module.css";

type CrewMember = {
  name: string;
};

type CrewMenuProps = {
  crew: object;
  isDefault: boolean | undefined;
};

const CrewMenu = ({ crew, isDefault }: CrewMenuProps) => {
  return (
    <nav className={crewStyles.crew__menuContainer}>
      <ul className={crewStyles.crew__menu}>
        {crew &&
          Object.values(crew).map((member: CrewMember, index) => {
            return (
              <li key={member.name}>
                <NavLink
                  to={`/crew/${member.name}`}
                  className={`${crewStyles.crew__menu__item} crewMenuItem ${
                    isDefault == true && index == 0 ? "active" : ""
                  }`}
                ></NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default CrewMenu;
