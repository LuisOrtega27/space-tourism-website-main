import { useParams } from "react-router";
import destination from "./PlanetShowcase.module.css";
import { useContext, useEffect, useState } from "react";

import type { JsonDataContextType } from "../../context/JsonDataContext";
import { JsonDataContext } from "../../context/JsonDataContext";

import DestinationMenu from "../../components/destinationMenu/DestinationMenu";

const PlanetShowcase = ({ isDefault }: { isDefault?: boolean | undefined }) => {
  const params = useParams();

  const dataContext = useContext(JsonDataContext) as JsonDataContextType;
  const [destinations, setDestinations] = useState<JsonDataContextType>();

  const [componenText, setComponenText] = useState<
    | {
        name: string;
        images: { png: string; webp: string };
        description: string;
        distance: string;
        travel: string;
      }
    | undefined
  >(
    Array.isArray(dataContext?.destination)
      ? dataContext?.destination[0]
      : dataContext?.destination
  );

  useEffect(() => {
    if (dataContext?.destination == null) return;
    const destinationsArray = Object.values(dataContext?.destination);
    setDestinations(destinationsArray);
  }, [dataContext]);

  useEffect(() => {
    if (dataContext?.destination == null) return;

    dataContext?.destination.map((item) => {
      if (item.name == params.destiny || item.name == "Moon") {
        setComponenText(item);
      }
    });
  }, [dataContext, params.destiny]);

  return (
    <>
      <div className={destination.destination__imgContainer}>
        <img
          className={destination.destination__img}
          src={`${import.meta.env.BASE_URL}/.${componenText?.images?.webp}`}
          alt={componenText?.name}
        />
      </div>

      <div className={destination.destination__infoWapper}>
        <DestinationMenu destinations={destinations} isDefault={isDefault} />

        <h2 className={destination.destination__subtitle}>
          {componenText?.name}
        </h2>

        <p className={destination.destination__text}>
          {componenText?.description}
        </p>

        <hr className={destination.destination__separator} />

        <div className={destination.destination__info}>
          <div>
            <h3 className={destination.info__title}>Avg. distance</h3>
            <p className={destination.info__text}>{componenText?.distance}</p>
          </div>

          <div>
            <p className={destination.info__title}>travel time</p>
            <h3 className={destination.info__text}>{componenText?.travel}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetShowcase;
