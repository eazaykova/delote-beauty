import { inform } from "../../../../../data/inform.data";
import TextList from "../../../../generic/textList/textList";
import Button from "../../../../ui/button/Button";
import styles from "./DetailInfo.module.scss";

const DetailInfo = ({ active, setActive }) => {
  return (
    <aside
      className={[
        styles.aside,
        styles[active ? "aside_show" : "aside_hide"],
      ].join(" ")}
    >
      <Button clickHandler={() => setActive(false)}>
        <img src="/icons/close.svg" alt="Close" />
      </Button>
      <div onClick={(e) => e.stopPropagation()}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
          adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl
          est felis id volutpat. Sed dolor fermentum amet lectus nibh quis.
          Tortor donec pellentesque leo ac placerat. Morbi.
        </p>
        {inform.map((item, index) => (
          <TextList key={item + index} title={item.title} list={item.list} />
        ))}
      </div>
    </aside>
  );
};

export default DetailInfo;
