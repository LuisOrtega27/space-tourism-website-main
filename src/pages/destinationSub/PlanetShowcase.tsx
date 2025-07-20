import { useParams } from "react-router";
import destinationStyles from "./PlanetShowcase.module.css";
import { useContext, useEffect, useState } from "react";

import type { JsonDataContextType } from "../../context/JsonDataContext";
import { JsonDataContext } from "../../context/JsonDataContext";

import DestinationMenu from "../../components/destinationMenu/DestinationMenu";

const PlanetShowcase = ({ isDefault }: { isDefault?: boolean | undefined }) => {
  const textContext = useContext(JsonDataContext) as JsonDataContextType;
  const params = useParams();

  const [destinationPosition, setDestinationPosition] = useState(0);

  useEffect(() => {
    textContext?.destination.map((planet, index) => {
      if (params.destiny == planet.name) {
        setDestinationPosition(index);
      }
    });
  }, [textContext, params]);

  return (
    <>
      <div className={destinationStyles.destination__imgContainer}>
        <img
          className={destinationStyles.destination__img}
          src={`${import.meta.env.BASE_URL}/.${
            textContext?.destination[destinationPosition].images?.webp
          }`}
          alt={textContext?.destination[destinationPosition].name}
        />
      </div>

      <div className={destinationStyles.destination__infoWapper}>
        <DestinationMenu
          destinations={textContext?.destination ?? null}
          isDefault={isDefault}
        />

        <h2 className={destinationStyles.destination__subtitle}>
          {textContext?.destination[destinationPosition].name}
        </h2>

        <p className={destinationStyles.destination__text}>
          {textContext?.destination[destinationPosition].description}
        </p>

        <hr className={destinationStyles.destination__separator} />

        <div className={destinationStyles.destination__info}>
          <div>
            <h3 className={destinationStyles.info__title}>Avg. distance</h3>
            <p className={destinationStyles.info__text}>
              {textContext?.destination[destinationPosition].distance}
            </p>
          </div>

          <div>
            <p className={destinationStyles.info__title}>travel time</p>
            <h3 className={destinationStyles.info__text}>
              {textContext?.destination[destinationPosition].travel}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetShowcase;
