import React, { useState } from "react";

import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import PaginationButton from "Atoms/PaginationButton/PaginationButton";

import styles from "./NewsTemplate.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[] | any;
}

const pagination = (data: JSX.Element[], index: number) => {
  if (data.length < index + 3) {
    return data.slice(index, data.length);
  }
  return data.slice(index, index + 3);
};

const NewsTemplate: React.FC<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goNext = () => {
    setCurrentIndex((prevState) => prevState + 3);
  };
  const goBack = () => {
    setCurrentIndex((prevState) => prevState - 3);
  };

  return (
    <div className={styles.mainCon}>
      <div className={styles.wrapper}>
        <UnderlineTitle>Aktualności</UnderlineTitle>
        <div className={styles.outerContainer}>
          <div className={styles.newsContainer}>
            <div className={styles.newsInnerContainer}>
              {pagination(children, currentIndex)}
            </div>
          </div>
        </div>
        <div className={styles.buttonCon}>
          {currentIndex < children.length - 3 && (
            <PaginationButton clicked={goNext}>Następne</PaginationButton>
          )}

          {currentIndex !== 0 && (
            <PaginationButton clicked={goBack}>Poprzednie</PaginationButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsTemplate;
