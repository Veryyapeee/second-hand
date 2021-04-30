import React from "react";
import { useQuery } from "react-query";

import SubTextWhite from "Atoms/SubTextWhite/SubTextWhite";
import CoronaTitle from "Atoms/CoronaTitle/CoronaTitle";
import Spinner from "Atoms/Spinner/Spinner";

import getMainPage from "Api/client/getMainPage";

import styles from "./CoronaInfo.module.scss";

const CoronaInfo = () => {
  const { isLoading, data }: any = useQuery("mainPage", getMainPage);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {data.covidInfo.enabled ? (
        <section className={styles.coronaMain}>
          <CoronaTitle>Informacje w sprawie koronawirusa</CoronaTitle>
          <SubTextWhite>{data.covidInfo.content}</SubTextWhite>
        </section>
      ) : null}
    </>
  );
};

export default CoronaInfo;
