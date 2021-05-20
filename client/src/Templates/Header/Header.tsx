import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import Logo from "Atoms/Logo/Logo";

import styles from "./Header.module.scss";
import hamburger from "Assets/menu.svg";

interface Props {
  children: (Element | Element[] | JSX.Element[] | JSX.Element)[];
}

// Get window width function
const getWindowWidth = (): number => {
  const { innerWidth: width } = window;
  return width;
};

// Animation from framer-motion
const variants = {
  open: { opacity: 1, y: 0, height: "auto", display: "block" },
  closed: {
    opacity: 0,
    y: "-100%",
    height: 0,
    transitionEnd: { display: "none" },
  },
};

// @props
// towns - towns objects fetched from API
const HeaderClient: React.FC<Props> = ({ children }) => {
  const [sideBar, setSideBar] = useState<boolean>(false);
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
        initial={{ display: "none", opacity: 0 }}
        style={{
          display: !sideBar && windowWidth <= 900 ? "none" : "flex",
        }}
      >
        {children}
      </motion.div>
    </header>
  );
};

export default HeaderClient;
