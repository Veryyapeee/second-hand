import React from "react";

import CenterBlueTitle from "Atoms/CenterBlueTitle/CenterBlueTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import OpenTime from "Molecules/OpenHours/OpenHours";
import PricesCheapStore from "Molecules/PricesCheapStore/PricesCheapStore";

import styles from "./CheapStore.module.scss";

import { CheapStore } from "Utils/types";

interface Props {
  cheapStore: CheapStore;
}

const CheapStoreCmt: React.FC<Props> = ({ cheapStore }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.cheapStoreIntro}>
        <CenterBlueTitle>Sklep złotówka</CenterBlueTitle>
        <SubTextBlack>{cheapStore.description}</SubTextBlack>
      </div>
      <div className={styles.cheapStoreDetails}>
        <OpenTime openHours={cheapStore.openHours} />
        <PricesCheapStore prices={cheapStore.price} />
      </div>
    </div>
  );
};

export default CheapStoreCmt;
