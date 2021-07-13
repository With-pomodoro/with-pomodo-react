import React from "react";
import GridLayout from "./components/WithPomodoro";
import styled from "styled-components";
import Title from "./components/Title";

function App() {
  return (
    <GridLayout>
      <PositionedTitle />
    </GridLayout>
  );
}

export default App;

const PositionedTitle = styled(Title)`
  grid-column: 1/3;
  grid-row: 1/2;
`;
