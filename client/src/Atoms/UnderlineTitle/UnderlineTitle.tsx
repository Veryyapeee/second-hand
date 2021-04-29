import React from "react";

import styles from "./UnderlineTitle.module.scss";

interface Props {
  children: string;
}

const UnderlineTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default UnderlineTitle;
