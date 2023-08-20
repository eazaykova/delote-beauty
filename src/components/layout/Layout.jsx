import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <section className={[styles.wrapper, styles.container].join(" ")}>
      <Header />
      {children && <main>{children}</main>}
      <Footer />
    </section>
  );
};

export default Layout;
