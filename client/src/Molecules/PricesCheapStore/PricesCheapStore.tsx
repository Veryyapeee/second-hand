import React from "react";

import Card from "Atoms/Card/Card";
import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import BoldSubTitleBlack from "Atoms/BoldSubTitleBlack/BoldSubTitleBlack";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";

import styles from "./PricesCheapStore.module.scss";

import { CheapStorePrice, cheapStoreCargo } from "Utils/types";

interface Props {
  prices: CheapStorePrice;
}

const PricesCheapStore: React.FC<Props> = ({ prices }) => {
  const pricesArray: number[] = [];
  let key: keyof typeof prices;
  for (key in prices) {
    pricesArray.push(prices[key]);
  }

  return (
    <Card>
      <div>
        <UnderlineTitle>Cennik</UnderlineTitle>
      </div>
      <div className={styles.hourContainer}>
        {pricesArray.map((price: number, index: number) => (
          <div className={styles.singleDayCon} key={index}>
            <BoldSubTitleBlack>{cheapStoreCargo[index]}</BoldSubTitleBlack>
            <SubTextBlack>{`${price}zł/sztuka`}</SubTextBlack>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PricesCheapStore;
