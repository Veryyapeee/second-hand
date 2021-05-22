import React from "react";

import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import BoldSubTitleBlack from "Atoms/BoldSubTitleBlack/BoldSubTitleBlack";

import Card from "Atoms/Card/Card";

import styles from "./OpenHours.module.scss";

import { OpenHours, weekDays } from "Utils/types";

interface Props {
  openHours: OpenHours;
}

const OpenTime: React.FC<Props> = ({ openHours }) => {
  // Create array from an object
  const hoursArray: String[] = [];
  let key: keyof typeof openHours;
  for (key in openHours) {
    hoursArray.push(openHours[key]);
  }
  return (
    <Card>
      <div>
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
    </Card>
  );
};

export default OpenTime;
