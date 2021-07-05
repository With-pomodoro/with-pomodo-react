import React from "react";
import GridLayout from "./components/WithPomodoro";
import styled from "styled-components";
import TitleContainer from "./container/TitleContainer";

function App() {
  return (
    <GridLayout>
      <PositionedTitleContainer />
    </GridLayout>
  );
}

export default App;

const PositionedTitleContainer = styled(TitleContainer)`
  grid-column: 1/2;
  grid-row: 1/2;
`;
