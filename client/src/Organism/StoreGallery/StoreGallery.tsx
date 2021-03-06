import React, { useState } from "react";
import { motion } from "framer-motion";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import CenterBlueTitle from "Atoms/CenterBlueTitle/CenterBlueTitle";
import GalleryPaginationButton from "Atoms/GalleryPaginationButton/GalleryPaginationButton";

import { Gallery } from "Utils/types";
import { instance } from "Axios/axiosMain";

import styles from "./StoreGallery.module.scss";

library.add(faAngleRight, faAngleLeft);

const variants = {
  open: { x: 0, opacity: 1, transition: { stiffness: 200 } },
  closedRight: { x: "-100%", opacity: 0 },
  closedLeft: { x: "100%", opacity: 0 },
};

interface Props {
  gallery: Gallery[];
}

const StoreGallery: React.FC<Props> = ({ gallery }) => {
  const replacedPaths: string[] = gallery.map((pic: Gallery) =>
    `${instance.defaults.baseURL}/${pic.path}`.replace(/\\/g, "/")
  );

  const [currIndex, setIndex] = useState<number>(0);
  const [currPhoto, setCurrPhoto] = useState<any>(replacedPaths[0]);
  const [swipeLeft, setSwipeLeft] = useState<boolean>(false);
  const [swipeRight, setSwipeRight] = useState<boolean>(false);

  // Next image
  const next = () => {
    setCurrPhoto(replacedPaths[currIndex + 1]);
    setIndex(currIndex + 1);
    setSwipeLeft(true);
    setTimeout(() => {
      setSwipeLeft(false);
    }, 200);
  };

  // Previous image
  const prev = () => {
    setCurrPhoto(replacedPaths[currIndex - 1]);
    setIndex(currIndex - 1);
    setSwipeRight(true);
    setTimeout(() => {
      setSwipeRight(false);
    }, 200);
  };

  return (
    <div className={styles.galleryCon}>
      <CenterBlueTitle>Galeria zdjęć</CenterBlueTitle>
      <motion.div
        className={styles.image}
        variants={variants}
        animate={swipeLeft ? "closedLeft" : swipeRight ? "closedRight" : "open"}
        style={{
          visibility: swipeLeft || swipeRight ? "hidden" : "visible",
          backgroundImage: `url("${currPhoto}")`,
        }}
      ></motion.div>
      <div className={styles.paginationButtons}>
        <GalleryPaginationButton clicked={() => prev()} disable={currIndex < 1}>
          {faAngleLeft}
        </GalleryPaginationButton>
        <GalleryPaginationButton
          clicked={() => next()}
          disable={currIndex === replacedPaths.length - 1}
        >
          {faAngleRight}
        </GalleryPaginationButton>
      </div>
    </div>
  );
};

export default StoreGallery;
