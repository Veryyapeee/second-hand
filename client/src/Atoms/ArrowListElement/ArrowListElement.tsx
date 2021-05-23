import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./ArrowListElement.module.scss";

library.add(faAngleRight);

interface Props {
  children: string;
}

const ArrowListElement: React.FC<Props> = ({ children }) => {
  return (
    <li className={styles.listElement}>
      <span className="fa-li">
        <FontAwesomeIcon icon={faAngleRight} />
      </span>

      {children}
    </li>
  );
};

export default ArrowListElement;
