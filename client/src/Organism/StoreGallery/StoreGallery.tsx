import React from "react";

import styles from "./StoreGallery.module.scss";

import { Gallery } from "Utils/types";
import { instance } from "Axios/axiosMain";

interface Props {
  gallery: Gallery[];
}

const StoreGallery: React.FC<Props> = ({ gallery }) => {
  const replacesPaths: string[] = gallery.map((pic: Gallery) =>
    `${instance.defaults.baseURL}/${pic.path}`.replace(/\\/g, "/")
  );
  return (
    <div className={styles.galleryCon}>
      <img src={replacesPaths[1]} alt="" />
    </div>
  );
};

export default StoreGallery;
