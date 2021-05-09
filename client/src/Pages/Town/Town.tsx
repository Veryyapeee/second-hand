import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import Spinner from "Atoms/Spinner/Spinner";
import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import TownNav from "Molecules/TownNav/TownNav";

import getTown from "Api/client/getSingleTown";
import PageInfo from "Organism/PageInfo/PageInfo";
import CenterBlueTitle from "Atoms/CenterBlueTitle/CenterBlueTitle";

import { ShopInTown, TParams, Town, defaultTown } from "Utils/types";

import styles from "./Town.module.scss";

const TownPage = () => {
  const { townId }: TParams = useParams();
  // Fetch town from API
  const { isLoading, data = defaultTown } = useQuery<Town, Error>(
    ["town", townId],
    async () => await getTown(townId)
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
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
    </>
  );
};

export default TownPage;
