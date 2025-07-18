import { NavLink, useParams } from "react-router";

import techStyles from "./Tech.module.css";

import type { DataContextType } from "../../App";
import { DataContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import TechMenu from "../../components/techMenu/TechMenu";

const Tech = () => {
  const [tech, setTech] = useState() as {
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  };
  const { technology } = useContext(DataContext) as DataContextType;

  const params = useParams();

  useEffect(() => {
    if (technology == undefined) return;

    technology.forEach((tech: { name: string }) => {
      if (tech.name == params.tech || tech.name == "Launch vehicle")
        setTech(tech);
    });
  }, [technology, params.tech]);

  return (
    <>
      <div className={techStyles.tech__imgContainer}>
        <picture>
          <source
            media="(width >= 1440px)"
            srcSet={`../../.${tech?.images?.portrait}`}
          />

          <source
            media="(width >= 1440px)"
            srcSet={`../../.${tech?.images?.landscape}`}
          />

          <img
            className={techStyles.tech__img}
            src={`../../.${tech?.images?.portrait}`}
            alt="Technology"
          />
        </picture>
      </div>

      <div className={techStyles.tech__infoContainer}>
        <TechMenu technology={technology} />

        <div>
          <h3 className={techStyles.tech__info__subtitle}>
            The terminology...
          </h3>
          <h2 className={techStyles.tech__info__name}>{tech?.name}</h2>

          <p className={techStyles.tech__info__tech}>{tech?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Tech;
