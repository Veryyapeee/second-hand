import React from "react";

import Logo from "Assets/logo.png";

import styles from "./CVLogoSection.module.scss";

const CVLogoSection = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt="Logo" className={styles.logo} />
    </div>
  );
};

export default CVLogoSection;
