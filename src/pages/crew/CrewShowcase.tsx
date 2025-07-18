import { NavLink, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";

import crewStyles from "./Crew.module.css";

import type { DataContextType } from "../../App";
import { DataContext } from "../../App";

const CrewShowcase = () => {
  const { crew } = useContext(DataContext) as DataContextType;
  const params = useParams();

  const [crewMember, setCrewMember] = useState() as {
    name: string;
    images: { webp: string; png: string };
    role: string;
    bio: string;
  };

  useEffect(() => {
    if (crew == undefined) return;

    Object.values(crew).map((member) => {
      if (member.name == params.integrant || member.name == crew[0].name)
        return setCrewMember(member);
    });
  }, [crew, params.integrant]);

  return (
    <>
      <div className={crewStyles.crew__infoContainer}>
        <h3 className={crewStyles.crew__info__rank}>{crewMember?.role}</h3>
        <h2 className={crewStyles.crew__info__name}>{crewMember?.name}</h2>

        <p className={crewStyles.crew__info__text}>{crewMember?.bio}</p>
      </div>

      <nav className={crewStyles.crew__menuContainer}>
        <ul className={crewStyles.crew__menu}>
          {crew &&
            Object.values(crew).map((member) => {
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

      <div className={crewStyles.crew__imgContainer}>
        <img
          className={crewStyles.crew__img}
          src={`../.${crewMember?.images.webp}`}
          alt={crewMember?.name}
        />
      </div>
    </>
  );
};

export default CrewShowcase;
