import styles from "./Caption.module.scss";

const Caption = ({ children, title, isTitleSmall, subTitle = null }) => {
  return (
    <div className={styles.caption}>
      {children}
      <span
        className={[
          styles.title,
          styles[isTitleSmall ? "title_small" : ""],
        ].join(" ")}
      >
        {title}
      </span>
      {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
    </div>
  );
};

export default Caption;
