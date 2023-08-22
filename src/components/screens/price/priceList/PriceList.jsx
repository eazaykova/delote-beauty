import { price } from "../../../../data/price.data";
import { imgPositionLeftOrRight } from "../../../../utils/imgPositionLeftOrRight";
import PriceItem from "../priceItem/PriceItem";
import styles from "./PriceList.module.scss";

const PriceList = () => {
  return (
    <>
      {price.map((item, index) => (
        <div className={styles.priceList} key={`_price_${index}`}>
          <img
            className={styles[imgPositionLeftOrRight(index)]}
            src={item.img}
            alt={item.name}
          />
          <div className={styles.priceItem}>
            {item.services.map((service, index) => (
              <PriceItem service={service} key={`_price_${index}_service`} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PriceList;
