import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import MainSubtitle from "Atoms/MainSubtitle/MainSubtitle";
import RedSubtitleStore from "Atoms/RedSubtitleStore/RedSubtitleStore";
import FetchHandler from "HOC/FetchHandler/FetchHandler";

import SideNavLink from "Atoms/SideNavLink/SideNavLink";
import SideStoreBar from "Organism/SideStoreBar/SideStoreBar";

import useGetSingleStore from "Api/client/getSingleStore";
import useGetSingleTown from "Api/client/getSingleTown";

// Import context
// import { TownsContext } from "Templates/ClientTemplate/ClientTemplate";

import { ShopInTown, TParams } from "Utils/types";

import styles from "./Store.module.scss";

const StorePage = () => {
  // Use context example
  // const test = useContext(TownsContext);

  const { townId, storeId }: TParams = useParams();

  /* Make it context, add little components */
  const {
    isLoading: isLoadingTown,
    data: dataTown,
    error: errorTown,
  } = useGetSingleTown(townId);
  const {
    isLoading: isLoadingStore,
    data: dataStore,
    error: errorStore,
  } = useGetSingleStore(townId, storeId);

  return (
    <FetchHandler
      loading={isLoadingTown || isLoadingStore}
      data={dataTown || dataStore}
      error={errorTown || errorStore}
    >
      <MainPageIntro>
        <div className={styles.innerCon}>
          <MainTitle>Dzień dobry!</MainTitle>
          <MainSubtitle>{dataStore.store.address.street}</MainSubtitle>
          <RedSubtitleStore>
            Dostawy w {dataStore.store.suppDay}
          </RedSubtitleStore>
        </div>
      </MainPageIntro>
      <SideStoreBar>
        {dataTown.shops.map((shop: ShopInTown) => (
          <SideNavLink townId={townId} storeId={shop.id} key={shop.id}>
            {shop.name}
          </SideNavLink>
        ))}
      </SideStoreBar>
    </FetchHandler>
  );
};

export default StorePage;
