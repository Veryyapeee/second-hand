import React from "react";

import styles from "./BoldSubTitleBlack.module.scss";

interface Props {
  children: string;
}

const BoldSubTitleBlack: React.FC<Props> = ({ children }) => {
  return <span className={styles.text}>{children}</span>;
};

export default BoldSubTitleBlack;
