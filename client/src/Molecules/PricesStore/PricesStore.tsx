import React, { useContext } from "react";

import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import BoldSubTitleBlack from "Atoms/BoldSubTitleBlack/BoldSubTitleBlack";

import Card from "Atoms/Card/Card";

import styles from "./PricesStore.module.scss";

import { StoreContext } from "Pages/Store/Store";

import { weekDays } from "Utils/types";

const PricesStore = () => {
  const storeData = useContext(StoreContext);
  const pricesArray: number[] = [];
  let key: keyof typeof storeData.price;
  for (key in storeData.price) {
    pricesArray.push(storeData.price[key]);
  }
  return (
    <Card>
      <div>
        <UnderlineTitle>Cennik na każdy dzień</UnderlineTitle>
      </div>
      <div className={styles.hourContainer}>
        {pricesArray.map((price: number, index: number) => (
          <div className={styles.singleDayCon} key={index}>
            <BoldSubTitleBlack>{weekDays[index]}</BoldSubTitleBlack>
            <SubTextBlack>{`${price}zł/kg`}</SubTextBlack>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PricesStore;
