import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import styles from "./GalleryPaginationButton.module.scss";

interface Props {
  children: IconDefinition;
  clicked: () => void;
  disable?: boolean;
}

const GalleryPaginationButton: React.FC<Props> = ({
  children,
  clicked,
  disable,
}) => {
  const classes = disable ? styles.disableButton : styles.btnWrapper;
  return (
    <div onClick={clicked} className={classes}>
      <FontAwesomeIcon icon={children} />
    </div>
  );
};

export default GalleryPaginationButton;
