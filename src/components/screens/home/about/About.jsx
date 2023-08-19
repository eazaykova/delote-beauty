import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <img src="/icons/quotation-mark.svg" alt="Quotation mark" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
        vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
        risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
        tristique. Viverra augue lorem ut quisque quam tortor, malesuada
        iaculis.
      </p>
      <p>
        Et elementum at nulla venenatis, faucibus integer. Auctor neque eros,
        viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit
        imperdiet sapien fringilla vestibulum sit fames.
      </p>
    </section>
  );
};

export default About;
