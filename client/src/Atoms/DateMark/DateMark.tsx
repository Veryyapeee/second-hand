import React from "react";

import styles from "./DateMark.module.scss";

interface Props {
  children: any;
}

const DateMark: React.FC<Props> = ({ children }) => {
  return <span className={styles.dateCon}>{children}</span>;
};
export default DateMark;
