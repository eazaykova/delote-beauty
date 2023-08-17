import { NavLink } from "react-router-dom";
import styles from "./NavRef.module.scss";

const NavRef = ({ children, href }) => {
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

export default NavRef;
