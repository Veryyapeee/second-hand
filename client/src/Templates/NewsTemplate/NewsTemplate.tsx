import React, { useState } from "react";

import styles from "./NewsTemplate.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[] | any;
}

const pagination = (data: any, index: any) => {
  if (data.length < index + 3) {
    return data.slice(index, data.length);
  }
  return data.slice(index, index + 3);
};

const NewsTemplate: React.FC<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevState) => prevState + 3);
  };
  const goBack = () => {
    setCurrentIndex((prevState) => prevState - 3);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.newsContainer}>
        <div className={styles.newsInnerContainer}>
          {pagination(children, currentIndex)}
        </div>
      </div>
      {currentIndex <= pagination(children, currentIndex).length + 3 && (
        <button onClick={goNext}>Dalej</button>
      )}

      {currentIndex !== 0 && <button onClick={goBack}>Powrót</button>}
    </div>
  );
};

export default NewsTemplate;
