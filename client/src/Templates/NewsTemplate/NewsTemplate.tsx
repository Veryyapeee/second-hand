import React, { useState } from "react";

import { motion } from "framer-motion";

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

const variants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const NewsTemplate: React.FC<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [changePage, setChangePage] = useState<boolean>(false);
  const goNext = () => {
    setCurrentIndex((prevState) => prevState + 3);
    setChangePage(true);
    setTimeout(() => {
      setChangePage(false);
    }, 100);
  };
  const goBack = () => {
    setCurrentIndex((prevState) => prevState - 3);
    setChangePage(true);
    setTimeout(() => {
      setChangePage(false);
    }, 100);
  };

  return (
    <div className={styles.mainCon}>
      <div className={styles.wrapper}>
        <UnderlineTitle>Aktualności</UnderlineTitle>
        <div className={styles.outerContainer}>
          <div className={styles.newsContainer}>
            <motion.div
              animate={changePage ? "closed" : "open"}
              variants={variants}
              className={styles.newsInnerContainer}
              style={{
                display: changePage ? "none" : "grid",
              }}
            >
              {pagination(children, currentIndex)}
            </motion.div>
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
