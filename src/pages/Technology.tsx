import { Outlet } from "react-router";

import tech from "./technology/Tech.module.css";

const Technology = () => {
  return (
    <article className={tech.tech__section}>
      <div className={tech.tech__wrapper}>
        <h1 className={tech.tech__title}>
          <span className={tech.tech__title__span}>03</span> Space launch 101
        </h1>
      </div>

      <Outlet />
    </article>
  );
};

export default Technology;
