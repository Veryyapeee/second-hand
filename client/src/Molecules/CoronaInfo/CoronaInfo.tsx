import React from "react";

import SubTextWhite from "Atoms/SubTextWhite/SubTextWhite";
import CoronaTitle from "Atoms/CoronaTitle/CoronaTitle";

import styles from "./CoronaInfo.module.scss";

import { CovidInfo } from "Utils/types";
interface Props {
  data: CovidInfo;
}

const CoronaInfo: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.enabled ? (
        <section className={styles.coronaMain}>
          <CoronaTitle>Informacje w sprawie koronawirusa</CoronaTitle>
          <SubTextWhite>{data.content}</SubTextWhite>
        </section>
      ) : null}
    </>
  );
};

export default CoronaInfo;
