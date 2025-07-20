import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";

import crewStyles from "./Crew.module.css";
import CrewMenu from "../../components/crewMenu/CrewMenu";

import type { JsonDataContextType } from "../../context/JsonDataContext";
import { JsonDataContext } from "../../context/JsonDataContext";

const CrewShowcase = ({ isDefault }: { isDefault?: boolean | undefined }) => {
  const textContext = useContext(JsonDataContext) as JsonDataContextType;
  const params = useParams();

  const [crewMemberPosition, setCrewMemberPosition] = useState(0);

  useEffect(() => {
    textContext?.crew.map((member, index) => {
      if (params.memberName == member.name) setCrewMemberPosition(index);
    });
  }, [textContext?.crew, params.memberName]);

  return (
    <>
      <div className={crewStyles.crew__infoContainer}>
        <h3 className={crewStyles.crew__info__rank}>
          {textContext?.crew[crewMemberPosition]?.role}
        </h3>
        <h2 className={crewStyles.crew__info__name}>
          {textContext?.crew[crewMemberPosition]?.name}
        </h2>

        <p className={crewStyles.crew__info__text}>
          {textContext?.crew[crewMemberPosition]?.bio}
        </p>
      </div>

      <CrewMenu
        crew={
          textContext?.crew
            ? textContext.crew.map((member) => ({ name: member.name }))
            : null
        }
        isDefault={isDefault}
      />

      <div className={crewStyles.crew__imgContainer}>
        <img
          className={crewStyles.crew__img}
          src={`${import.meta.env.BASE_URL}${
            textContext?.crew[crewMemberPosition]?.images.webp
          }`}
          alt={textContext?.crew[crewMemberPosition]?.name}
        />
      </div>
    </>
  );
};

export default CrewShowcase;
