import React from "react";

import OpenTime from "Molecules/OpenHours/OpenHours";
import PricesStore from "Molecules/PricesStore/PricesStore";

import styles from "./StoreDetails.module.scss";

interface Props {
  storeData: any;
}

const StoreDetails: React.FC<Props> = ({ storeData }) => {
  return (
    <div className={styles.container}>
      <OpenTime />
      <PricesStore />
    </div>
  );
};

export default StoreDetails;
