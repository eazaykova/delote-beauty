import styles from "./Home.module.scss";
import Layout from "../../layout/Layout";
import About from "./about/About";
import Services from "./services/Services";
import Cosmetics from "./cosmetics/Cosmetics";
import Preview from "./preview/Preview";

const Home = () => {
  return (
    <Layout>
      <main>
        <Preview />
        <About />
        <Services />
        <Cosmetics />
      </main>
    </Layout>
  );
};

export default Home;
