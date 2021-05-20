import React from "react";

import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import BoldSubTitleBlack from "Atoms/BoldSubTitleBlack/BoldSubTitleBlack";

import styles from "./OpenHours.module.scss";

import { OpenHours, weekDays } from "Utils/types";

interface Props {
  open: OpenHours;
}

const OpenTime: React.FC<Props> = ({ open }) => {
  // Create array from an object
  const hoursArray: String[] = [];
  let key: keyof typeof open;
  for (key in open) {
    hoursArray.push(open[key]);
  }
  console.log(open);
  console.log(hoursArray);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <UnderlineTitle>Godziny otwarcia</UnderlineTitle>
      </div>
      <div className={styles.hourContainer}>
        {hoursArray.map((day: String, index: number) => (
          <div className={styles.singleDayCon} key={index}>
            <BoldSubTitleBlack>{weekDays[index]}</BoldSubTitleBlack>
            <SubTextBlack>{day}</SubTextBlack>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenTime;
