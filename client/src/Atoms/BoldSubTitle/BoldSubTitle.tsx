import React from "react";

import styles from "./BoldSubTitle.module.scss";

interface Props {
  children: string;
}

const BoldSubTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default BoldSubTitle;
