import React from "react";

import styles from "./HeaderButton.module.scss";

interface Props {
  children: string;
}

const HeaderButton: React.FC<Props> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default HeaderButton;
