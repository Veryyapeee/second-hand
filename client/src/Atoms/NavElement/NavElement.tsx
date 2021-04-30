import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavElement.module.scss";

interface Props {
  children: string;
  path: string;
}

// Add logo and dynamic routes from fetch and responsive

const NavElement: React.FC<Props> = ({ children, path }) => {
  return (
    <li className={styles.navLink}>
      <NavLink to={path} activeClassName={styles.active}>
        {children}{" "}
      </NavLink>
    </li>
  );
};

export default NavElement;
