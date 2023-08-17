import styles from "./Button.module.scss";

const Button = ({ children, clickHandler = null }) => {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
