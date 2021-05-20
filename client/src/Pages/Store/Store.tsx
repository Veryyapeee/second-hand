import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import MainSubtitle from "Atoms/MainSubtitle/MainSubtitle";
import RedSubtitleStore from "Atoms/RedSubtitleStore/RedSubtitleStore";
import FetchHandler from "HOC/FetchHandler/FetchHandler";

import SideNavLink from "Atoms/SideNavLink/SideNavLink";
import SideStoreBar from "Organism/SideStoreBar/SideStoreBar";
import PageInfo from "Organism/PageInfo/PageInfo";
import CenterBlueTitle from "Atoms/CenterBlueTitle/CenterBlueTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";

import NewsTemplate from "Templates/NewsTemplate/NewsTemplate";
import News from "Molecules/News/News";
import StoreDetails from "Templates/StoreDetails/StoreDetails";

import useGetSingleStore from "Api/client/getSingleStore";

// Import context
import { TownsContext } from "Templates/ClientTemplate/ClientTemplate";

import { MainPageNews, ShopInTown, Town, TParams } from "Utils/types";

import styles from "./Store.module.scss";

const StorePage = () => {
  // Params
  const { townId, storeId }: TParams = useParams();

  //Context with towns
  const towns = useContext(TownsContext);
  const currentTown: Town | undefined = towns.find(
    (town: Town) => town._id === townId
  );

  // Fetch store
  const {
    isLoading: isLoadingStore,
    data: dataStore,
    error: errorStore,
  } = useGetSingleStore(townId, storeId);

  return (
    <FetchHandler loading={isLoadingStore} data={dataStore} error={errorStore}>
      <SideStoreBar>
        {currentTown!.shops.map((shop: ShopInTown) => (
          <SideNavLink townId={townId} storeId={shop.id} key={shop.id}>
            {shop.name}
          </SideNavLink>
        ))}
      </SideStoreBar>
      <MainPageIntro>
        <div className={styles.innerCon}>
          <MainTitle>Dzień dobry!</MainTitle>
          <MainSubtitle>{dataStore.store.address.street}</MainSubtitle>
          <RedSubtitleStore>
            Dostawy w {dataStore.store.suppDay}
          </RedSubtitleStore>
        </div>
      </MainPageIntro>
      <PageInfo>
        <CenterBlueTitle>Witaj na {dataStore.store.name}</CenterBlueTitle>
        <SubTextBlack>{dataStore.store.description}</SubTextBlack>
      </PageInfo>
      <NewsTemplate>
        {dataStore.store.news.map((news: MainPageNews) => (
          <News
            title={news.title}
            path={news.photo.path}
            date={news.date}
            key={news._id}
          >
            {news.content}
          </News>
        ))}
      </NewsTemplate>
      <StoreDetails storeData={dataStore.store.openHours} />
    </FetchHandler>
  );
};

export default StorePage;
