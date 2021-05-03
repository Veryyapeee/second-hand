import React from "react";
import { useQuery } from "react-query";

import Spinner from "Atoms/Spinner/Spinner";
import CoronaInfo from "Molecules/CoronaInfo/CoronaInfo";

import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import MainSubtitle from "Atoms/MainSubtitle/MainSubtitle";

import PageInfo from "Organism/PageInfo/PageInfo";
import CenterBlueTitle from "Atoms/CenterBlueTitle/CenterBlueTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import News from "Molecules/News/News";

import getMainPage from "Api/client/getMainPage";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  const { isLoading, data }: any = useQuery("mainPage", getMainPage);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <MainPageIntro>
        <div className={styles.innerCon}>
          <MainTitle>Dzień dobry!</MainTitle>
          <MainSubtitle>Witaj na naszej stronie.</MainSubtitle>
        </div>
      </MainPageIntro>
      <CoronaInfo data={data.covidInfo} />
      {/* Test news */}
      <News title={data.news[0].title} path={data.news[0].photo.path}>
        {data.news[0].content}
      </News>
      {/* Test news */}
      <PageInfo>
        <CenterBlueTitle>Kilka słów o nas</CenterBlueTitle>
        <SubTextBlack>{data.description}</SubTextBlack>
      </PageInfo>
    </>
  );
};

export default MainPage;
