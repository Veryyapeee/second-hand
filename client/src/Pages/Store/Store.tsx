import React from "react";
import { useParams } from "react-router-dom";

import Spinner from "Atoms/Spinner/Spinner";
import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import MainSubtitle from "Atoms/MainSubtitle/MainSubtitle";
import RedSubtitleStore from "Atoms/RedSubtitleStore/RedSubtitleStore";

import SideNavLink from "Atoms/SideNavLink/SideNavLink";
import SideStoreBar from "Organism/SideStoreBar/SideStoreBar";

import useGetSingleStore from "Api/client/getSingleStore";
import useGetSingleTown from "Api/client/getSingleTown";

import { ShopInTown, TParams } from "Utils/types";

import styles from "./Store.module.scss";

const StorePage = () => {
  const { townId, storeId }: TParams = useParams();

  /* Make it context, add little components */
  const { isLoading: isLoadingTown, data: dataTown } = useGetSingleTown(townId);
  const { isLoading: isLoadingStore, data: dataStore } = useGetSingleStore(
    townId,
    storeId
  );

  if (isLoadingStore || isLoadingTown) {
    return <Spinner />;
  }

  return (
    <>
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
    </>
  );
};

export default StorePage;
