import React from "react";

import styles from "./EmptyNotification.module.scss";

interface Props {
  children: string;
}

const EmptyNotification: React.FC<Props> = ({ children }) => {
  return <div className={styles.emptyNot}>{children}</div>;
};

export default EmptyNotification;
