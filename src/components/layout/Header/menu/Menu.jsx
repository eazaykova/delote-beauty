import styles from "./Menu.module.scss";
import NavRef from "../../../ui/NavRef/NavRef";

import DetailInfo from "./detailInfo/DetailInfo";
import { useState } from "react";
import Button from "../../../ui/button/Button";
import { menu } from "../../../../data/menu.data";
import Hamburger from "./hamburger/Hamburger";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [activeDetailInfo, setActiveDetailInfo] = useState(
    location.pathname === "/" ? true : false
  );
  const [activeHamburger, setActiveHamburger] = useState(false);

  return (
    <>
      <nav className={styles.menuFull}>
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
      </nav>

      <nav className={styles.menuMobile}>
        <ul className={styles.menuList}>
          <img
            src="/icons/logo.svg"
            alt="Логотип Delote Beauty"
            style={{ marginLeft: "10px" }}
          />
          <div>
            <Button clickHandler={() => setActiveHamburger(true)}>
              <img src="/icons/menu.svg" alt="Hamburger" />
            </Button>
            <Button clickHandler={() => setActiveDetailInfo(true)}>
              <img src="/icons/info.svg" alt="Information" />
            </Button>
          </div>
        </ul>
      </nav>
      <DetailInfo active={activeDetailInfo} setActive={setActiveDetailInfo} />
      <Hamburger active={activeHamburger} setActive={setActiveHamburger} />
    </>
  );
};

export default Menu;
