import React from "react";

import styles from "./NavElement.module.scss";

interface Props {
  children: string;
}

const NavElement: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default NavElement;
