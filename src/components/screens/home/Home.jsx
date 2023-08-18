import styles from "./Home.module.scss";
import Layout from "../../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className={styles.bg}></div>
      <section className={styles.preview}>
        <h1 className={styles.title}>
          Салон красоты <br />
          «Delote-Beauty» <br />
          на Крестовском
        </h1>
        <div className={styles.mouseDown}>
          <img src="/icons/mouse-down.svg" alt="Mouse Down" />
          <span>Прокрутите вниз</span>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
