import React from "react";

import BlueTitle from "Atoms/BlueTitle/BlueTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";
import DateMark from "Atoms/DateMark/DateMark";

import styles from "./News.module.scss";

import { instance } from "Axios/axiosMain";

interface Props {
  children: string;
  path: string;
  title: string;
  date: string;
}

const News: React.FC<Props> = ({ children, path, title, date }) => {
  const replacedPath = `${instance.defaults.baseURL}/${path}`.replace(
    /\\/g,
    "/"
  );
  return (
    <div className={styles.newsContainer}>
      <div
        className={styles.imgContainer}
        style={{ backgroundImage: `url('${replacedPath}')` }}
      ></div>
      <div className={styles.textContainer}>
        <BlueTitle>{title}</BlueTitle>
        <SubTextBlack>{children}</SubTextBlack>
        <DateMark>{date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)}</DateMark>
      </div>
    </div>
  );
};

export default News;
