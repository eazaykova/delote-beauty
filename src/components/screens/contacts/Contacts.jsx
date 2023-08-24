import { contacts } from "../../../data/contacts.data";
import TextList from "../../generic/textList/textList";
import Title from "../../generic/title/Title";
import Layout from "../../layout/Layout";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <Layout>
      <section className={styles.contacts}>
        <Title>Контакты</Title>
        <img src="/images/map.jpg" alt="Карта" />
        <div>
          {contacts.map((item, index) => (
            <TextList key={item + index} title={item.title} list={item.list} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Contacts;
