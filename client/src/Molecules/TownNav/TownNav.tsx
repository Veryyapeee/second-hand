import React from "react";
import { Link } from "react-router-dom";

import BlueTitle from "Atoms/BlueTitle/BlueTitle";

import styles from "./TownNav.module.scss";

interface Props {
  children: string;
  townId: string;
  storeId: string;
}

const TownNav: React.FC<Props> = ({ children, storeId, townId }) => {
  return (
    <Link
      to={`/home/town/${townId}/store/${storeId}`}
      className={styles.linkCon}
    >
      <div className={styles.cardWrapper}>
        <BlueTitle>{children}</BlueTitle>
      </div>
    </Link>
  );
};

export default TownNav;
