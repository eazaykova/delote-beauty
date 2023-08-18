import { menu } from "../../../../../data/menu.data";
import NavRef from "../../../../ui/NavRef/NavRef";
import Button from "../../../../ui/button/Button";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ active, setActive }) => {
  return (
    <div
      className={[styles.menu, styles[active ? "menu_show" : "menu_hide"]].join(
        " "
      )}
    >
      <Button clickHandler={() => setActive(false)}>
        <img src="/icons/close.svg" alt="Close" />
      </Button>

      <nav>
        {menu.map(
          (item, index) =>
            item.link && (
              <li key={`_menu_${index}`}>
                <NavRef href={item.link}>{item.title}</NavRef>
              </li>
            )
        )}
        <a href="https://vk.com/" target="_blank">
          <img src="/icons/vk.svg" alt="VK" />
        </a>
      </nav>
    </div>
  );
};

export default Hamburger;
