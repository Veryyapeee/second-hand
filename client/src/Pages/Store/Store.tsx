import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Spinner from "Atoms/Spinner/Spinner";
import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import MainSubtitle from "Atoms/MainSubtitle/MainSubtitle";
import RedSubtitleStore from "Atoms/RedSubtitleStore/RedSubtitleStore";

import SideNavLink from "Atoms/SideNavLink/SideNavLink";
import SideStoreBar from "Organism/SideStoreBar/SideStoreBar";

import getSingleStore from "Api/client/getSingleStore";
import getSingleTown from "Api/client/getSingleTown";

import {
  ShopInTown,
  TParams,
  Store,
  Town,
  defaultTown,
  defaultStore,
} from "Utils/types";

import styles from "./Store.module.scss";

const StorePage = () => {
  const { townId, storeId }: TParams = useParams();

  /* Make it context, add little components */
  const { isLoading: isLoadingTown, data: dataTown = defaultTown } = useQuery<
    Town,
    Error
  >(["town", townId], async () => await getSingleTown(townId));
  const {
    isLoading: isLoadingStore,
    data: dataStore = defaultStore,
  } = useQuery<Store, Error>(
    ["store", storeId],
    async () => await getSingleStore(townId, storeId)
  );

  if (isLoadingStore || isLoadingTown) {
    return <Spinner />;
  }

  return (
    <>
      <MainPageIntro>
        <div className={styles.innerCon}>
          <MainTitle>Dzień dobry!</MainTitle>
          <MainSubtitle>{dataStore.address.street}</MainSubtitle>
          <RedSubtitleStore>Dostawy w {dataStore.suppDay}</RedSubtitleStore>
        </div>
      </MainPageIntro>
      <SideStoreBar>
        {dataTown.shops.map((shop: ShopInTown) => (
          <SideNavLink townId={townId} storeId={shop.id} key={shop.id}>
            {shop.name}
          </SideNavLink>
        ))}
      </SideStoreBar>
    </>
  );
};

export default StorePage;
