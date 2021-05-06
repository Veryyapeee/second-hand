import React from "react";

import styles from "./CenterBlueTitle.module.scss";

interface Props {
  children: string;
}

const CenterBlueTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default CenterBlueTitle;
