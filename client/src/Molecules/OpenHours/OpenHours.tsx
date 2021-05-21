import React, { useContext } from "react";

import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import BoldSubTitleBlack from "Atoms/BoldSubTitleBlack/BoldSubTitleBlack";

import Card from "Atoms/Card/Card";

import styles from "./OpenHours.module.scss";

import { StoreContext } from "Pages/Store/Store";

import { weekDays } from "Utils/types";

const OpenTime: React.FC = () => {
  const storeData = useContext(StoreContext);
  // Create array from an object
  const hoursArray: String[] = [];
  let key: keyof typeof storeData.openHours;
  for (key in storeData.openHours) {
    hoursArray.push(storeData.openHours[key]);
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
