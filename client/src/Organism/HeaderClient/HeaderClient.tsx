import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import NavElement from "Atoms/NavElement/NavElement";
import HeaderButton from "Atoms/HeaderButton/HeaderButton";
import Logo from "Atoms/Logo/Logo";

import { Town } from "Utils/types";

import styles from "./HeaderClient.module.scss";
import hamburger from "Assets/menu.svg";

interface Props {
  towns: Town[];
}

// Get window width function
const getWindowWidth = (): number => {
  const { innerWidth: width } = window;
  return width;
};

// Animation from framer-motion
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

// @props
// towns - towns objects fetched from API
const HeaderClient: React.FC<Props> = ({ towns }) => {
  const [sideBar, setSideBar] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

  // Get window with with every resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo path="/" />
        <img
          src={hamburger}
          alt="hamburger"
          className={styles.hamburger}
          onClick={() => setSideBar(!sideBar)}
        />
      </div>
      <motion.div
        animate={!sideBar && windowWidth <= 900 ? "closed" : "open"}
        variants={variants}
        className={styles.navElements}
        style={{
          display: !sideBar && windowWidth <= 900 ? "none" : "flex",
        }}
      >
        {towns.map((town: Town) => (
          <NavElement path={`/home/town/${town._id}`} key={town._id}>
            {town.name}
          </NavElement>
        ))}
        <HeaderButton path="/work">Pracuj u nas!</HeaderButton>
      </motion.div>
    </header>
  );
};

export default HeaderClient;
