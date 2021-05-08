import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Spinner from "Atoms/Spinner/Spinner";
import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import MainSubtitle from "Atoms/MainSubtitle/MainSubtitle";

import getSingleStore from "Api/client/getSingleStore";
import getSingleTown from "Api/client/getSingleTown";
import { TParams } from "Utils/types";

import styles from "./Store.module.scss";

const Store = () => {
  const { townId, storeId }: TParams = useParams();

  /* Make it context, add little components */
  const dataTown = useQuery(
    ["town", townId],
    async () => await getSingleTown(townId)
  );
  const dataStore = useQuery(
    ["store", storeId],
    async () => await getSingleStore(townId, storeId)
  );

  if (dataTown.isLoading || dataStore.isLoading) {
    return <Spinner />;
  }

  return (
    <MainPageIntro>
      <div className={styles.innerCon}>
        <MainTitle>Dzień dobry!</MainTitle>
        <MainSubtitle>{dataStore.data.store.address.street}</MainSubtitle>
      </div>
    </MainPageIntro>
  );
};

export default Store;
