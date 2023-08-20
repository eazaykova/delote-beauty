import { services } from "../../../../data/services.data";
import Caption from "../../../ui/caption/Сaption";
import ImageWithFrame from "../../../ui/imageWithFrame/ImageWithFrame";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section className={styles.services}>
      {services.map((item, index) => (
        <Caption title={item.title} key={`_img_${index}`}>
          <ImageWithFrame
            src={item.img}
            alt={item.title}
            frameIndent="twenty"
          />
        </Caption>
      ))}
    </section>
  );
};

export default Services;
