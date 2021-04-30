import React from "react";

import styles from "./PageInfo.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const PageInfo: React.FC<Props> = ({ children }) => {
  return <section className={styles.aboutUs}>{children}</section>;
};

export default PageInfo;
