import React from "react";

import { IconContext } from "react-icons";
import * as Icon from "react-icons/fa";

import styles from "./SideNavButton.module.scss";

interface Props {
  clicked: () => void;
  open: boolean;
}

const SideNavButton: React.FC<Props> = ({ clicked, open }) => {
  return (
    <span onClick={clicked}>
      <IconContext.Provider value={{ className: styles.sideBtn }}>
        {open ? <Icon.FaArrowLeft /> : <Icon.FaArrowRight />}
      </IconContext.Provider>
    </span>
  );
};

export default SideNavButton;
