import React from "react";
import Layout from "./components/WithPomodoro";
import styled from "styled-components";
import Title from "./components/Title";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";

function App() {
  return (
    <Layout>
      <PositionedTitle />
      <PositionedPomodoroTimer />
    </Layout>
  );
}

export default App;

const PositionedTitle = styled(Title)`
  grid-column: 1/3;
  grid-row: 1/2;
`;

const PositionedPomodoroTimer = styled(PomodoroTimer)`
  grid-column: 2/3;
  grid-row: 2/3;
`;
