import React from "react";
import { useQuery } from "react-query";

import NavElement from "Atoms/NavElement/NavElement";
import HeaderButton from "Atoms/HeaderButton/HeaderButton";

import getTowns from "Api/client/getTowns";

import styles from "./Header.module.scss";

const Header = () => {
  // Make it better
  const { isLoading, error, data }: any = useQuery("towns", getTowns);

  if (error) {
    console.log(error.response.status);
    return <span>{error.message}</span>;
  }

  if (isLoading) {
    return <span>Is loading :/</span>;
  }

  return (
    <header className={styles.header}>
      {data.map((town: any) => (
        <NavElement path={`/${town.name}`} key={town._id}>
          {town.name}
        </NavElement>
      ))}
      <HeaderButton path="/work">Pracuj u nas!</HeaderButton>
    </header>
  );
};

export default Header;
