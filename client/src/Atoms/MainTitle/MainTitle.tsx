import React from "react";

import styles from "./MainTitle.module.scss";

interface Props {
  children: string | JSX.Element | JSX.Element[] | string[];
}

const MainTitle: React.FC<Props> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default MainTitle;
