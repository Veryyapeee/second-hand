import React from "react";

import styles from "./UnderlineWhite.module.scss";

interface Props {
  children: string;
}

const UnderlineWhite: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default UnderlineWhite;
