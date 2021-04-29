import React from "react";

import styles from "./SubTextBlack.module.scss";

interface Props {
  children: string;
}

const SubTextBlack: React.FC<Props> = ({ children }) => {
  return <span className={styles.subText}>{children}</span>;
};

export default SubTextBlack;
