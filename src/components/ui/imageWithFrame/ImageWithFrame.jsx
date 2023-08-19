import styles from "./ImageWithFrame.module.scss";

const ImageWithFrame = ({ src, alt, frameIndent }) => {
  return (
    <div className={styles.frame}>
      <img
        className={[
          styles.img,
          styles[frameIndent === "twenty" ? "img_twenty" : "img_sixteen"],
        ].join(" ")}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default ImageWithFrame;
