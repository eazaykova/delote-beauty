import styles from "./Menu.module.scss";
import NavRef from "../../../ui/NavRef/NavRef";
import { menu } from "./menu.data";
import DetailInfo from "./detailInfo/DetailInfo";
import { useState } from "react";
import Button from "../../../ui/button/Button";

const Menu = () => {
  const [activeDetailInfo, setActiveDetailInfo] = useState(true);

  return (
    <nav>
      <ul className={styles.menuList}>
        <a href="https://vk.com/" target="_blank">
          <img src="/icons/vk.svg" alt="VK" />
        </a>
        {menu.map((item, index) =>
          item.link ? (
            <li key={`_menu_${index}`}>
              <NavRef href={item.link}>{item.title}</NavRef>
            </li>
          ) : (
            <img
              key={`_menu_${index}`}
              src="/icons/logo.svg"
              alt="Логотип Delote Beauty"
            />
          )
        )}
        <Button clickHandler={() => setActiveDetailInfo(true)}>
          <img src="/icons/info.svg" alt="Information" />
        </Button>
      </ul>
      <DetailInfo active={activeDetailInfo} setActive={setActiveDetailInfo} />
    </nav>
  );
};

export default Menu;
