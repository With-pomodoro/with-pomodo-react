import React, { FC, useState } from "react";
import styled from "styled-components";
import { ClassNameProps } from "../../shared/types";
import ClockBoard from "./ClockBoard";
import useTimer from "./hooks/useTimer";
import { TimerMode } from "./types";

const PomodoroTimer: FC<ClassNameProps> = ({ className }) => {
  const [timerMode] = useState<TimerMode>("work");
  // 秒で計算する
  const { remainingTime, startTimer, mode } = useTimer(timerMode);

  return (
    <Container className={className}>
      <ClockBoard secOfTime={remainingTime} mode={mode} />
      <button onClick={() => startTimer()}>start!</button>
    </Container>
  );
};
export default PomodoroTimer;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
