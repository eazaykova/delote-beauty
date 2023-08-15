import styles from "./Menu.module.scss";
import NavLinkUI from "../../../ui/navLinkUI/NavLinkUI";
import { menu } from "./menu.data";

const Menu = () => {
  return (
    <nav>
      <ul className={styles.menuList}>
        <a href="https://vk.com/" target="_blank">
          <img src="/icons/vk.svg" alt="VK" />
        </a>
        {menu.map((item, index) =>
          item.link ? (
            <li key={`_menu_${index}`}>
              <NavLinkUI href={item.link}>{item.title}</NavLinkUI>
            </li>
          ) : (
            <img
              key={`_menu_${index}`}
              src="/icons/logo.svg"
              alt="Логотип Delote Beauty"
            />
          )
        )}
        <a href="#">
          <img src="/icons/info.svg" alt="Information" />
        </a>
      </ul>
    </nav>
  );
};

export default Menu;
