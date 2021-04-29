import React from "react";

import styles from "./NavDropdownElement.module.scss";

interface Props {
  children: string;
}

const NavDropdownElement: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default NavDropdownElement;
