import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./SideNavLink.module.scss";

interface Props {
  children: string;
  townId: string;
  storeId: string;
}

const SideNavLink: React.FC<Props> = ({ children, townId, storeId }) => {
  return (
    <NavLink
      to={`/home/town/${townId}/store/${storeId}`}
      activeClassName={styles.active}
    >
      {children}
    </NavLink>
  );
};

export default SideNavLink;
