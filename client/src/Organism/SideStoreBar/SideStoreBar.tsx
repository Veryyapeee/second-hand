import React, { useState } from "react";
import { motion } from "framer-motion";

import SideNavButton from "Atoms/SideNavButton/SideNavButton";

import styles from "./SideStoreBar.module.scss";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const variants = {
  open: { x: 0 },
  closed: { x: "-80%" },
};

const SideStoreBar: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={styles.mainWrapper}
      variants={variants}
      style={{ pointerEvents: open ? "all" : "none" }}
      animate={open ? "open" : "closed"}
    >
      {children}
      <SideNavButton clicked={() => setOpen(!open)} />
    </motion.div>
  );
};

export default SideStoreBar;
