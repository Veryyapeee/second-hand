import React from "react";

import NavElement from "Atoms/NavElement/NavElement";
import HeaderButton from "Atoms/HeaderButton/HeaderButton";

import Header from "Templates/Header/Header";

import { Town } from "Utils/types";
interface Props {
  towns: Town[];
}

// @props
// towns - towns objects fetched from API
const HeaderClient: React.FC<Props> = ({ towns }) => {
  return (
    <Header>
      {towns.map((town: Town) => (
        <div key={town._id}>
          {town.shops.length > 0 && (
            <NavElement path={`/home/town/${town._id}`} key={town._id}>
              {town.name}
            </NavElement>
          )}
        </div>
      ))}
      <HeaderButton path="/work">Pracuj u nas!</HeaderButton>
    </Header>
  );
};

export default HeaderClient;
