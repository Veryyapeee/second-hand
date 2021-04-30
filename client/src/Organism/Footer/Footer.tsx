import React from "react";

import UnderlineWhite from "Atoms/UnderlineWhite/UnderlineWhite";
import BoldSubTitle from "Atoms/BoldSubTitle/BoldSubTitle";
import SubTextWhite from "Atoms/SubTextWhite/SubTextWhite";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerCon}>
        <UnderlineWhite>Kontakt</UnderlineWhite>
        <BoldSubTitle>Jan Kowalski</BoldSubTitle>
        <SubTextWhite>(+48) 123 123 123</SubTextWhite>
      </div>
      <div className={styles.innerCon}>
        <UnderlineWhite>Siedziba</UnderlineWhite>
        <BoldSubTitle>Adres</BoldSubTitle>
        <SubTextWhite>ul. Ulica</SubTextWhite>
        <SubTextWhite>NIP: nip</SubTextWhite>
      </div>
    </footer>
  );
};

export default Footer;
