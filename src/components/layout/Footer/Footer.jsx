import { inform } from "../../../data/inform.data";
import TextList from "../../generic/textList/textList";
import styles from "./Footer.module.scss";
import stylesTextList from "../../generic/textList/TextList.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <img src="/icons/logo.svg" alt="Логотип Delote Beauty" />
        {inform.map((item, index) => (
          <TextList key={item + index} title={item.title} list={item.list} />
        ))}

        <div>
          <h3 className={stylesTextList.title}>Мы в VK</h3>
          <a href="https://vk.com/" target="_blank">
            <img src="/icons/vk.svg" alt="VK" />
          </a>
        </div>
      </div>

      <div className={styles.subFooter}>Copyright © 2017 - 2023</div>
    </footer>
  );
};

export default Footer;
