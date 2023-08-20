import styles from "./Button.module.scss";

const Button = ({ children, clickHandler = null, isUnderline = false }) => {
  const onClick = (e) => {
    if (isUnderline) {
      const activeButton = document.querySelectorAll(".active_button");
      activeButton.forEach((current) =>
        current.classList.remove("active_button")
      );
      e.target.classList.add("active_button");
    }
    clickHandler();
  };

  return (
    <button className={styles.button} onClick={(e) => onClick(e)}>
      {children}
    </button>
  );
};

export default Button;
