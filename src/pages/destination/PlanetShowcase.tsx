import { NavLink, useParams } from "react-router";
import destination from "./PlanetShowcase.module.css";
import { useContext, useEffect, useState } from "react";

import type { DataContextType } from "../../App";
import { DataContext } from "../../App";

type DestinationItem = {
  name: string;
};

const PlanetShowcase = () => {
  const params = useParams();

  const dataContext = useContext(DataContext) as DataContextType;
  const [destinations, setDestinations] = useState();

  const [componenText, setComponenText] = useState(dataContext.destination);

  useEffect(() => {
    if (dataContext.destination == null) return;
    const destinationsArray = Object.values(dataContext?.destination);
    setDestinations(destinationsArray);
  }, [dataContext]);

  useEffect(() => {
    if (dataContext.destination == null) return;

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
          src={`../../.${componenText?.images?.webp}`}
          alt={componenText?.name}
        />
      </div>

      <div className={destination.destination__infoWapper}>
        <nav>
          <ul className={destination.destination__menu}>
            {destinations &&
              destinations.map((item: { name: string }) => {
                return (
                  <li key={item.name}>
                    <NavLink
                      to={`/destination/${item.name}`}
                      className={`${destination.menu__item} destinationMenuItem`}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </nav>

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
