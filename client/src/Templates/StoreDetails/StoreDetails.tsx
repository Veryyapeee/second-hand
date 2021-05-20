import React from "react";

import OpenTime from "Molecules/OpenHours/OpenHours";

import styles from "./StoreDetails.module.scss";

interface Props {
  storeData: any;
}

const StoreDetails: React.FC<Props> = ({ storeData }) => {
  return (
    <div className={styles.container}>
      <OpenTime open={storeData} />
    </div>
  );
};

export default StoreDetails;
