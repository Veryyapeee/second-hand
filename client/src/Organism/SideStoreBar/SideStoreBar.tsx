import React, { useState } from "react";
import { motion } from "framer-motion";

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
      animate={open ? "open" : "closed"}
    >
      {children}
      <button onClick={() => setOpen(!open)}>Strzałka xD</button>
    </motion.div>
  );
};

export default SideStoreBar;
