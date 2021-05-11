import React from "react";
import { useParams } from "react-router-dom";

import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import TownNav from "Molecules/TownNav/TownNav";
import FetchHandler from "HOC/FetchHandler/FetchHandler";

import PageInfo from "Organism/PageInfo/PageInfo";
import CenterBlueTitle from "Atoms/CenterBlueTitle/CenterBlueTitle";

import { ShopInTown, TParams } from "Utils/types";

import styles from "./Town.module.scss";
import useGetSingleTown from "Api/client/getSingleTown";

const TownPage = () => {
  const { townId }: TParams = useParams();
  // Fetch town from API
  const { isLoading, data, error } = useGetSingleTown(townId);

  return (
    <FetchHandler loading={isLoading} data={data} error={error}>
      <MainPageIntro>
        <MainTitle> {data.name} </MainTitle>
      </MainPageIntro>
      <PageInfo>
        <CenterBlueTitle>Nasze sklepy</CenterBlueTitle>
        <div className={styles.wrap}>
          {data.shops.map((townShop: ShopInTown) => (
            <TownNav storeId={townShop.id} key={townShop.id} townId={townId}>
              {townShop.name}
            </TownNav>
          ))}
        </div>
      </PageInfo>
    </FetchHandler>
  );
};

export default TownPage;
