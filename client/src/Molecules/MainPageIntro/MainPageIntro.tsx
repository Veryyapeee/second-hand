import React from "react";

import styles from "./MainPageIntro.module.scss";
interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const MainPageIntro: React.FC<Props> = ({ children }) => {
  return <section className={styles.intro}>{children}</section>;
};

export default MainPageIntro;
