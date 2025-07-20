import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";

import techStyles from "./TechShowcase.module.css";

import type { JsonDataContextType } from "../../context/JsonDataContext";
import { JsonDataContext } from "../../context/JsonDataContext";

import TechMenu from "../../components/techMenu/TechMenu";

const Tech = ({ isDefault }: { isDefault?: boolean | undefined }) => {
  const textContext = useContext(JsonDataContext) as JsonDataContextType;
  const params = useParams();
  const [techPosition, setTechPosition] = useState(0);

  useEffect(() => {
    textContext?.technology.map((tech, index) => {
      if (params.techName == tech.name) {
        setTechPosition(index);
      }
    });
  }, [textContext?.technology, params.techName]);

  return (
    <>
      <div className={techStyles.tech__imgContainer}>
        <picture>
          <source
            media="(width >= 1440px)"
            srcSet={`${import.meta.env.BASE_URL}${
              textContext?.technology[techPosition]?.images?.portrait
            }`}
          />

          <source
            media="(width >= 1440px)"
            srcSet={`${import.meta.env.BASE_URL}${
              textContext?.technology[techPosition]?.images?.landscape
            }`}
          />

          <img
            className={techStyles.tech__img}
            src={`${import.meta.env.BASE_URL}${
              textContext?.technology[techPosition]?.images?.portrait
            }`}
            alt="Technology"
          />
        </picture>
      </div>

      <div className={techStyles.tech__infoContainer}>
        <TechMenu
          technology={textContext?.technology ?? null}
          isDefault={isDefault}
        />

        <div>
          <h3 className={techStyles.tech__info__subtitle}>
            The terminology...
          </h3>
          <h2 className={techStyles.tech__info__name}>
            {textContext?.technology[techPosition]?.name}
          </h2>

          <p className={techStyles.tech__info__tech}>
            {textContext?.technology[techPosition]?.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Tech;
