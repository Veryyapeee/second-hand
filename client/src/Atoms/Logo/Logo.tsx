import React from "react";

import { Link } from "react-router-dom";

import logo from "Assets/logo.png";
import styles from "./Logo.module.scss";

interface Props {
  path: string;
}

const Logo: React.FC<Props> = ({ path }) => {
  return (
    <Link to={path}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
