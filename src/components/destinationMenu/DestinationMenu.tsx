import { NavLink } from "react-router";

import destination from "../../pages/destinationSub/PlanetShowcase.module.css";

type Destination = { name: string };

interface DestinationMenuProps {
  destinations: Destination[] | null;
  isDefault: boolean | undefined;
}

const DestinationMenu: React.FC<DestinationMenuProps> = ({
  destinations,
  isDefault,
}) => {
  return (
    <nav>
      <ul className={destination.destination__menu}>
        {destinations &&
          destinations.map((item: Destination) => {
            return (
              <li key={item.name}>
                <NavLink
                  to={`${import.meta.env.BASE_URL}destination/${item.name}`}
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
