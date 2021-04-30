import React from "react";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface Props {
  size?: number;
  style?: any;
}

const Spinner: React.FC<Props> = ({ size = 100, style = override }) => {
  return <ClipLoader css={style} color={"#5c98d6"} size={size} />;
};

export default Spinner;
