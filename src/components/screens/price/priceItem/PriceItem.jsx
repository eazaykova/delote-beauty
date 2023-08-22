import styles from "./PriceItem.module.scss";

const PriceItem = ({ service }) => {
  return (
    <div className={styles.priceItem}>
      <div>
        <span>{service.title}</span>
        <span>{service.price} ₽</span>
      </div>
      {service.subTitle && `+ ${service.subTitle}`}
    </div>
  );
};

export default PriceItem;
