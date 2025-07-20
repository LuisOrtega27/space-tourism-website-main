import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";

import crewStyles from "./Crew.module.css";
import CrewMenu from "../../components/crewMenu/CrewMenu";

import type { JsonDataContextType } from "../../context/JsonDataContext";
import { JsonDataContext } from "../../context/JsonDataContext";

const CrewShowcase = ({ isDefault }: { isDefault?: boolean | undefined }) => {
  const { crew } = useContext(JsonDataContext) as JsonDataContextType;
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
      if (member?.name == params.integrant || member?.name == crew[0].name)
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
          src={`${import.meta.env.BASE_URL}${crewMember?.images.webp}`}
          alt={crewMember?.name}
        />
      </div>
    </>
  );
};

export default CrewShowcase;
