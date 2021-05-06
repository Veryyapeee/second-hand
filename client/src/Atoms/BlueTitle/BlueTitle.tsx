import React from "react";

import styles from "./BlueTitle.module.scss";

interface Props {
  children: string;
}

const BlueTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default BlueTitle;
