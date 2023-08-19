import styles from "./Preview.module.scss";

const Preview = () => {
  return (
    <>
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
    </>
  );
};

export default Preview;
