import { useContext } from "react";
import { useNavigate } from "react-router";

import styles from "./Home.module.css";

import type { JsonDataContextType } from "../context/JsonDataContext";
import { JsonDataContext } from "../context/JsonDataContext";

const Home = () => {
  const textContext = useContext(JsonDataContext) as JsonDataContextType;

  const navigate = useNavigate();

  return (
    <main className={styles.home}>
      <h3 className={styles.home__subTitle}>{textContext?.home?.subTitle}</h3>

      <h1 className={styles.home__title}>{textContext?.home?.title}</h1>

      <p className={styles.home__text}>{textContext?.home?.text}</p>

      <div className={styles.home__buttonContainer}>
        <button
          className={styles.home__button}
          onClick={() => navigate(`${import.meta.env.BASE_URL}destination`)}
        >
          {textContext?.home?.button}
        </button>
      </div>
    </main>
  );
};

export default Home;
