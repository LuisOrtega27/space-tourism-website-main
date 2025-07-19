import styles from "./Home.module.css";
import { useContext } from "react";

import type { DataContextType } from "../App";
import { DataContext } from "../App";
import { useNavigate } from "react-router";

const Home = () => {
  const { home } = useContext(DataContext) as DataContextType;
  const navigate = useNavigate();

  return (
    <main className={styles.home}>
      <h3 className={styles.home__subTitle}>{home?.subTitle}</h3>

      <h1 className={styles.home__title}>{home?.title}</h1>

      <p className={styles.home__text}>{home?.text}</p>

      <div className={styles.home__buttonContainer}>
        <button
          className={styles.home__button}
          onClick={() => navigate("destination")}
        >
          {home?.button}
        </button>
      </div>
    </main>
  );
};

export default Home;
