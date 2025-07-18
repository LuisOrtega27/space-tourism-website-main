import { NavLink } from "react-router";

import destination from "../../pages/destination/PlanetShowcase.module.css";
import { useEffect } from "react";

type Destination = { name: string };

interface DestinationMenuProps {
  destinations: Destination[];
}

const DestinationMenu: React.FC<DestinationMenuProps> = ({ destinations }) => {
  useEffect(() => {}, []);

  return (
    <nav>
      <ul className={destination.destination__menu}>
        {destinations &&
          destinations.map((item: Destination) => {
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
  );
};

export default DestinationMenu;
