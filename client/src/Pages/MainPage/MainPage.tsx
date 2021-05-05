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
import NewsTemplate from "Templates/NewsTemplate/NewsTemplate";

import getMainPage from "Api/client/getMainPage";

import styles from "./MainPage.module.scss";

import { MainPageNews } from "Utils/types";

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

      <PageInfo>
        <CenterBlueTitle>Kilka słów o nas</CenterBlueTitle>
        <SubTextBlack>{data.description}</SubTextBlack>
      </PageInfo>
      <NewsTemplate>
        {data.news.map((news: MainPageNews) => (
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
    </>
  );
};

export default MainPage;
