import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
      <h3 className={styles.home__subTitle}>So, you want to travel to</h3>

      <h1 className={styles.home__title}>Space</h1>

      <p className={styles.home__text}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <div className={styles.home__buttonContainer}>
        <button className={styles.home__button}>Explore</button>
      </div>
    </main>
  );
};

export default Home;
