import React, { useState, useEffect } from "react";

import NavElement from "Atoms/NavElement/NavElement";
import HeaderButton from "Atoms/HeaderButton/HeaderButton";

import { Town } from "Utils/types";

import styles from "./HeaderClient.module.scss";
import hamburger from "Assets/menu.svg";

interface Props {
  towns: Town[];
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

// @props
// towns - towns objects fetched from API
const HeaderClient: React.FC<Props> = ({ towns }) => {
  const [sideBar, setSideBar] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    console.log(windowWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const headerClass = sideBar
    ? [styles.header, styles.resHeader].join("")
    : styles.header;
  return (
    <header className={headerClass}>
      <div className={styles.logo}>
        Logo{" "}
        <img
          src={hamburger}
          alt="hamburger"
          className={styles.hamburger}
          onClick={() => setSideBar(!sideBar)}
        />
      </div>
      <div
        className={styles.navElements}
        style={{
          display: !sideBar && windowWidth.width <= 900 ? "none" : "flex",
        }}
      >
        {towns.map((town: Town) => (
          <NavElement path={`/home/town/${town._id}`} key={town._id}>
            {town.name}
          </NavElement>
        ))}
        <HeaderButton path="/work">Pracuj u nas!</HeaderButton>
      </div>
    </header>
  );
};

export default HeaderClient;
