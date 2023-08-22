import styles from "./Masters.module.scss";
import Layout from "../../layout/Layout";
import { masters } from "../../../data/masters.data";
import Caption from "../../ui/caption/Сaption";
import ImageWithFrame from "../../ui/imageWithFrame/ImageWithFrame";
import Title from "../../generic/title/Title";

const Masters = () => {
  return (
    <Layout>
      <section className={styles.masters}>
        <Title>Наши мастера</Title>
        <div className={styles.list}>
          {masters.map((item, index) => (
            <Caption
              title={item.name}
              subTitle={item.profession}
              isTitleSmall={true}
              key={`_imgMaster_${index}`}
            >
              <ImageWithFrame src={item.img} alt={item.name} />
            </Caption>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Masters;
