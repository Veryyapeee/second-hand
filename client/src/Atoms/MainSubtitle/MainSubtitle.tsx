import React from "react";

import styles from "./MainSubtitle.module.scss";

interface Props {
  children: string;
}

const MainSubtitle: React.FC<Props> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default MainSubtitle;
