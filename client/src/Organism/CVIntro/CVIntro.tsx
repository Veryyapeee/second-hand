import React from "react";

import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import SubTextBlack from "Atoms/SubTextBlack/SubTextBlack";

import styles from "./CVIntro.module.scss";

const CVIntro = () => {
  return (
    <div className={styles.wrapper}>
      <UnderlineTitle>Pracuj u nas!</UnderlineTitle>
      <SubTextBlack>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat
        turpis at imperdiet vestibulum. Nunc non turpis vestibulum arcu
        condimentum hendrerit non sed diam. Maecenas in vestibulum neque. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </SubTextBlack>
    </div>
  );
};

export default CVIntro;
