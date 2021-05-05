import React from "react";

import styles from "./MainPageIntro.module.scss";
import mainImg from "Assets/mainImg.jpg";
interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const MainPageIntro: React.FC<Props> = ({ children }) => {
  return (
    <section
      className={styles.intro}
      style={{ backgroundImage: `url("${mainImg}")` }}
    >
      {children}
    </section>
  );
};

export default MainPageIntro;
