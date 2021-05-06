import React from "react";

import styles from "./BlueSubtitleStore.module.scss";

interface Props {
  children: string;
}

const BlueSubtitleStore: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default BlueSubtitleStore;
