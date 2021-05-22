import React from "react";

import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import BoldSubTitleBlack from "Atoms/BoldSubTitleBlack/BoldSubTitleBlack";

import Card from "Atoms/Card/Card";

import styles from "./PricesStore.module.scss";

import { StorePrice, weekDays } from "Utils/types";

interface Props {
  price: StorePrice;
}

const PricesStore: React.FC<Props> = ({ price }) => {
  const pricesArray: number[] = [];
  let key: keyof typeof price;
  for (key in price) {
    pricesArray.push(price[key]);
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
