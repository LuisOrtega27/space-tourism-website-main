import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";

import crewStyles from "./Crew.module.css";
import CrewMenu from "../../components/crewMenu/CrewMenu";

import type { DataContextType } from "../../App";
import { DataContext } from "../../App";

const CrewShowcase = ({ isDefault }: { isDefault?: boolean | undefined }) => {
  const { crew } = useContext(DataContext) as DataContextType;
  const params = useParams();

  const [crewMember, setCrewMember] = useState<
    | {
        name: string;
        images: { webp: string; png: string };
        role: string;
        bio: string;
      }
    | undefined
  >(undefined);

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

      <CrewMenu crew={crew} isDefault={isDefault} />

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
