import React /* , { useContext } */ from "react";

import CVLogoSection from "Molecules/CVLogoSection/CVLogoSection";
import CVIntro from "Organism/CVIntro/CVIntro";
import CVList from "Organism/CVList/CVList";

import styles from "./CV.module.scss";

// import { TownsContext } from "Templates/ClientTemplate/ClientTemplate";

const CV: React.FC = () => {
  //   const data = useContext(TownsContext);
  return (
    <div className={styles.mainWrapper}>
      <CVLogoSection />
      <CVIntro />
      <CVList />
    </div>
  );
};

export default CV;
