import React from "react";

import styles from "./CoronaTitle.module.scss";

interface Props {
  children: string;
}

const CoronaTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default CoronaTitle;
