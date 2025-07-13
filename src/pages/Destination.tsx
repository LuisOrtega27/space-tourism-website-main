import { Outlet } from "react-router";

import destination from "./destination/PlanetShowcase.module.css";

const Destination = () => {
  return (
    <article className={destination.destination__wrapper}>
      <h1 className={destination.destination__title}>
        <span className={destination.destination__title__span}>01</span> Pick
        Yuour Destination
      </h1>

      <Outlet />
    </article>
  );
};

export default Destination;
