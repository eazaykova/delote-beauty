import styles from "./Caption.module.scss";

const Caption = ({ children, title, titleSize = null, subTitle = null }) => {
  return (
    <div className={styles.caption}>
      {children}
      <span
        className={[styles.title, styles[titleSize ? "title_small" : ""]].join(
          " "
        )}
      >
        {title}
      </span>
      {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
    </div>
  );
};

export default Caption;
