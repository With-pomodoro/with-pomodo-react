import React, { FC } from "react";
import styled from "styled-components";
import color from "../shared/color";
import mediaQueries from "../shared/mediaQuery";

const Layout: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 8fr;

  background: ${color.mainBg};
  width: 100vw;
  min-height: ${window.innerHeight}px;
  height: ${window.innerHeight}px;
  padding: 40px;

  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
