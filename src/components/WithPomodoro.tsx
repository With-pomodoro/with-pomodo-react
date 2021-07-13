import React, { FC } from "react";
import styled from "styled-components";
import color from "../shared/color";

const GridLayout: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GridLayout;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 8fr;

  background: ${color.mainBg};
  width: 100vw;
  height: 100vh;
  padding: 40px;
`;
