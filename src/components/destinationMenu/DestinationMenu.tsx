import { NavLink } from "react-router";

import destination from "../../pages/destinationSub/PlanetShowcase.module.css";
import { useEffect } from "react";

type Destination = { name: string };

interface DestinationMenuProps {
  destinations: Destination[];
  isDefault: boolean | undefined;
}

const DestinationMenu: React.FC<DestinationMenuProps> = ({
  destinations,
  isDefault,
}) => {
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
                  className={`${destination.menu__item} destinationMenuItem ${
                    isDefault == true && item.name == "Moon" ? "active" : ""
                  }`}
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
