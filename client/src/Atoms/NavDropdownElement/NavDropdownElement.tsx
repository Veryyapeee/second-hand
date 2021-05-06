import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavDropdownElement.module.scss";

interface Props {
  children: string;
  path: string;
}

const NavDropdownElement: React.FC<Props> = ({ children, path }) => {
  return (
    <li className={styles.navLink}>
      <NavLink to={path} activeClassName={styles.active}>
        {children}{" "}
      </NavLink>
    </li>
  );
};

export default NavDropdownElement;
