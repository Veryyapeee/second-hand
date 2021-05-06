import React from "react";

import styles from "./FormSubmitButton.module.scss";

interface Props {
  children: string;
  disable: boolean;
}

const FormSubmitButton: React.FC<Props> = ({ children, disable }) => {
  return (
    <button className={styles.button} disabled={disable} type="submit">
      {children}
    </button>
  );
};

export default FormSubmitButton;
