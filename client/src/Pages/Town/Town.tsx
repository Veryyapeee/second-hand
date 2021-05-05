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

import { ShopInTown } from "Utils/types";

const Town = () => {
  const { townId }: any = useParams();
  // Fetch town from API
  const { isLoading, data } = useQuery(
    ["town", townId],
    async () => await getTown(townId)
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <MainPageIntro>
        <MainTitle> {data!.name} </MainTitle>
      </MainPageIntro>
      <PageInfo>
        <CenterBlueTitle>Nasze sklepy</CenterBlueTitle>
        {data.shops.map((townShop: ShopInTown) => (
          <TownNav storeId={townShop.id} key={townShop.id} townId={townId}>
            {townShop.name}
          </TownNav>
        ))}
      </PageInfo>
    </>
  );
};

export default Town;
