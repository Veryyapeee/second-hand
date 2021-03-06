import React from "react";

import CoronaInfo from "Molecules/CoronaInfo/CoronaInfo";

import MainPageIntro from "Molecules/MainPageIntro/MainPageIntro";
import MainTitle from "Atoms/MainTitle/MainTitle";
import MainSubtitle from "Atoms/MainSubtitle/MainSubtitle";

import PageInfo from "Organism/PageInfo/PageInfo";
import CenterBlueTitle from "Atoms/CenterBlueTitle/CenterBlueTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import News from "Molecules/News/News";
import NewsTemplate from "Templates/NewsTemplate/NewsTemplate";
import FetchHandler from "HOC/FetchHandler/FetchHandler";

import useGetMainPage from "Api/client/getMainPage";

import styles from "./MainPage.module.scss";

import { MainPageNews } from "Utils/types";

const LadingPage = () => {
  const { isLoading, data, error } = useGetMainPage();

  return (
    <FetchHandler loading={isLoading} data={data} error={error}>
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
    </FetchHandler>
  );
};

export default LadingPage;
