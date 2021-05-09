import React from "react";

import styles from "./RedSubtitleStore.module.scss";

interface Props {
  children: any[];
}

const RedSubtitleStore: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default RedSubtitleStore;
