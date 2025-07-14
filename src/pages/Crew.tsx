import { Outlet } from "react-router";

import crew from "./crew/Crew.module.css";

const Crew = () => {
  return (
    <main className={crew.crew__wrapper}>
      <h1 className={crew.crew__title}>
        <span className={crew.crew__title__span}>02</span> meet your crew
      </h1>

      <Outlet />
    </main>
  );
};

export default Crew;
