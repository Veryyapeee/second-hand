import React from "react";

import ArrowListElement from "Atoms/ArrowListElement/ArrowListElement";
import BoldSubtitleBlack from "Atoms/BoldSubTitleBlack/BoldSubTitleBlack";

import styles from "./CVList.module.scss";

const CVList = () => {
  return (
    <div className={styles.wrapper}>
      <BoldSubtitleBlack>Co oferujemy?</BoldSubtitleBlack>
      <ul className={styles.list}>
        <ArrowListElement>Stabilne zatrudnienie</ArrowListElement>
        <ArrowListElement>Urlopy</ArrowListElement>
        <ArrowListElement>Pensje adekwatną do zaangażowania</ArrowListElement>
      </ul>
    </div>
  );
};

export default CVList;
