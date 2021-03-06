import React from "react";

import styles from "./SubTextWhite.module.scss";

interface Props {
  children: string;
}

const SubTextRed: React.FC<Props> = ({ children }) => {
  return <span className={styles.subText}>{children}</span>;
};

export default SubTextRed;
