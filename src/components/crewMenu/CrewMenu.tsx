import { NavLink } from "react-router";
import crewStyles from "../../pages/crew/Crew.module.css";

type CrewMember = {
  name: string;
};

type CrewMenuProps = {
  crew: Record<string, CrewMember>;
};

const CrewMenu = ({ crew }: CrewMenuProps) => {
  return (
    <nav className={crewStyles.crew__menuContainer}>
      <ul className={crewStyles.crew__menu}>
        {crew &&
          Object.values(crew).map((member: CrewMember) => {
            return (
              <li key={member.name}>
                <NavLink
                  to={`/crew/${member.name}`}
                  className={`${crewStyles.crew__menu__item} crewMenuItem`}
                ></NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default CrewMenu;
