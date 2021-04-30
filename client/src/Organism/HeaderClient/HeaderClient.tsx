import React from "react";

import NavElement from "Atoms/NavElement/NavElement";
import HeaderButton from "Atoms/HeaderButton/HeaderButton";

import { Town } from "Utils/types";

import styles from "./HeaderClient.module.scss";

interface Props {
  towns: Town[];
}

// @props
// towns - towns objects fetched from API

const HeaderClient: React.FC<Props> = ({ towns }) => {
  return (
    <header className={styles.header}>
      {towns.map((town: Town) => (
        <NavElement path={`/town/${town._id}`} key={town._id}>
          {town.name}
        </NavElement>
      ))}
      <HeaderButton path="/work">Pracuj u nas!</HeaderButton>
    </header>
  );
};

export default HeaderClient;
