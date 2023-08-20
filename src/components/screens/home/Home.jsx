import styles from "./Home.module.scss";
import Layout from "../../layout/Layout";
import About from "./about/About";
import Services from "./services/Services";
import Cosmetics from "./cosmetics/Cosmetics";
import Preview from "./preview/Preview";
import OurWorks from "./our-works/OurWorks";

const Home = () => {
  return (
    <Layout>
      <Preview />
      <About />
      <Services />
      <Cosmetics />
      <OurWorks />
    </Layout>
  );
};

export default Home;
