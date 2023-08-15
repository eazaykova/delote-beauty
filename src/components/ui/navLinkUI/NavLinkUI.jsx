import { NavLink } from "react-router-dom";
import styles from "./NavLinkUI.module.scss";

const NavLinkUI = ({ children, href }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        [styles.link, isActive ? styles["link_active"] : ""].join(" ")
      }
      to={href}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkUI;
