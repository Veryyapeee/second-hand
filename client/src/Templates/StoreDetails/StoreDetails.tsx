import React from "react";

import OpenTime from "Molecules/OpenHours/OpenHours";
import PricesStore from "Molecules/PricesStore/PricesStore";
import CheapStore from "Templates/CheapStore/CheapStore";
import StoreGallery from "Organism/StoreGallery/StoreGallery";

import styles from "./StoreDetails.module.scss";
import { StoreData } from "Utils/types";

interface Props {
  storeData: StoreData;
}

const StoreDetails: React.FC<Props> = ({ storeData }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.storeInnerData}>
        <OpenTime openHours={storeData.store.openHours} />
        <PricesStore price={storeData.store.price} />
      </div>
      {storeData.cheapStore && <CheapStore cheapStore={storeData.cheapStore} />}
      {storeData.store.gallery.length > 0 && (
        <StoreGallery gallery={storeData.store.gallery} />
      )}
    </div>
  );
};

export default StoreDetails;
