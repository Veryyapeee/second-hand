import React from "react";

import BlueTitle from "Atoms/BlueTitle/BlueTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";

import styles from "./News.module.scss";

import axios from "Axios/axiosMain";

interface Props {
  children: string;
  path: string;
  title: string;
}

const News: React.FC<Props> = ({ children, path, title }) => {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.imgContainer}>
        <img
          src={`${axios.defaults.baseURL}/${path}`}
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <BlueTitle>{title}</BlueTitle>
        <SubTextBlack>{children}</SubTextBlack>
      </div>
    </div>
  );
};

export default News;
