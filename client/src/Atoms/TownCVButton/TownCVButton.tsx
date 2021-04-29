import React from "react";

import styles from "./TownCVButton.tsx.module.scss";

// Add more props when work on fetching

interface Props {
  children: string;
}

const TownCVButton: React.FC<Props> = ({ children }) => {
  return <span className={styles.button}>{children}</span>;
};

export default TownCVButton;
