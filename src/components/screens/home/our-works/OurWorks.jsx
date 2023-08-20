import { useState } from "react";
import { ourWorks } from "../../../../data/ourWorks.data";
import Button from "../../../ui/button/Button";
import styles from "./OurWorks.module.scss";

const OurWorks = () => {
  const [type, setType] = useState("");
  return (
    <section className={styles.ourWorks}>
      <h2 className={styles.title}>Наши работы</h2>
      <div className={styles.variants}>
        <Button isUnderline={true} clickHandler={() => setType("")}>
          Показать все
        </Button>
        <Button isUnderline={true} clickHandler={() => setType("hairdresser")}>
          Парикмахерские услуги
        </Button>
        <Button isUnderline={true} clickHandler={() => setType("makeup")}>
          Макияж
        </Button>
        <Button isUnderline={true} clickHandler={() => setType("manicure")}>
          Маникюр
        </Button>
      </div>
      <div className={styles.works}>
        {ourWorks.map((current, index) =>
          type ? (
            current.type === type && (
              <img
                src={current.img}
                alt={current.type}
                key={`_our_works_${index}`}
              />
            )
          ) : (
            <img
              src={current.img}
              alt={current.type}
              key={`_our_works_${index}`}
            />
          )
        )}
      </div>
    </section>
  );
};

export default OurWorks;
