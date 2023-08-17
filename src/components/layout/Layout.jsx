import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <section className={[styles.wrapper, styles.container].join(" ")}>
      <Header />
      {children && <div>{children}</div>}

      <Footer />
    </section>
  );
};

export default Layout;
