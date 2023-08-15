import styles from "./Header.module.scss";
import Menu from "./menu/Menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
    </header>
  );
};

export default Header;
