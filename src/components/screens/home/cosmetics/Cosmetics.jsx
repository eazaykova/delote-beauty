import { cosmetics } from "../../../../data/cosmetics.data";
import styles from "./Cosmetics.module.scss";

const Cosmetics = () => {
  return (
    <section className={styles.cosmetics}>
      {cosmetics.map((item, index) => (
        <img src={item.icon} alt={item.name} key={`_icon_cosmetics${index}`} />
      ))}
    </section>
  );
};

export default Cosmetics;
