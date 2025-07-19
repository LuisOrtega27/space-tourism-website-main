import { Outlet } from "react-router";

import crew from "./crewSub/Crew.module.css";

const Crew = () => {
  return (
    <article className={crew.crew__wrapper}>
      <h1 className={crew.crew__title}>
        <span className={crew.crew__title__span}>02</span> meet your crew
      </h1>

      <Outlet />
    </article>
  );
};

export default Crew;
