import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
};

const Spacer: FC<Props> = ({ width, height }) => {
  return <DIV width={width} height={height} />;
};

export default Spacer;

const DIV = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;
