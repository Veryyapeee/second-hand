import React from "react";

import styles from "./PaginationButton.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  clicked: () => void;
}

const PaginationButton: React.FC<Props> = ({ children, clicked }) => {
  return (
    <span onClick={clicked} className={styles.button}>
      {children}
    </span>
  );
};

export default PaginationButton;
