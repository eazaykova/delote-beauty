import Title from "../../generic/title/Title";
import Layout from "../../layout/Layout";
import styles from "./Price.module.scss";
import PriceList from "./priceList/PriceList";

const Price = () => {
  return (
    <Layout>
      <section className={styles.price}>
        <Title>Цены на услуги</Title>
        <PriceList />
      </section>
    </Layout>
  );
};

export default Price;
