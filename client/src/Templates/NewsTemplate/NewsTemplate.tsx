import React, { useState } from "react";

import { motion } from "framer-motion";

import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import PaginationButton from "Atoms/PaginationButton/PaginationButton";
import EmptyNotification from "Atoms/EmptyNotification/EmptyNotification";

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
  open: { x: 0, opacity: 1, transition: { stiffness: 200 } },
  closedRight: { x: "-100%", opacity: 0 },
  closedLeft: { x: "100%", opacity: 0 },
};

const NewsTemplate: React.FC<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [swipeLeft, setSwipeLeft] = useState<boolean>(false);
  const [swipeRight, setSwipeRight] = useState<boolean>(false);

  const goNext = () => {
    setCurrentIndex((prevState) => prevState + 3);

    setSwipeLeft(true);
    setTimeout(() => {
      setSwipeLeft(false);
    }, 200);
  };
  const goBack = () => {
    setCurrentIndex((prevState) => prevState - 3);

    setSwipeRight(true);
    setTimeout(() => {
      setSwipeRight(false);
    }, 200);
  };

  return (
    <div className={styles.mainCon}>
      <div className={styles.wrapper}>
        <UnderlineTitle>Aktualności</UnderlineTitle>
        {children.length < 1 ? (
          <EmptyNotification>Brak aktualności</EmptyNotification>
        ) : (
          <>
            <div className={styles.outerContainer}>
              <div className={styles.newsContainer}>
                <motion.div
                  animate={
                    swipeLeft
                      ? "closedLeft"
                      : swipeRight
                      ? "closedRight"
                      : "open"
                  }
                  variants={variants}
                  className={styles.newsInnerContainer}
                  style={{
                    visibility: swipeLeft || swipeRight ? "hidden" : "visible",
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
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsTemplate;
