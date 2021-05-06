import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderButton.module.scss";

interface Props {
  children: string;
  path: string;
}

const HeaderButton: React.FC<Props> = ({ children, path }) => {
  return (
    <Link className={styles.headerLink} to={path}>
      {children}
    </Link>
  );
};

export default HeaderButton;
