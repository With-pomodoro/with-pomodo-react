import React, { FC, useState } from "react";
import styled from "styled-components";
import mediaQueries from "../../shared/mediaQuery";
import { ClassNameProps } from "../../shared/types";
import ClockBoard from "./ClockBoard";
import useTimer from "./hooks/useTimer";
import TimerStartButton from "./TimerStartButton";
import { TimerMode } from "./types";

const PomodoroTimer: FC<ClassNameProps> = ({ className }) => {
  const [timerMode] = useState<TimerMode>("work");
  // 秒で計算する
  const { remainingTime, startTimer, mode, status } = useTimer(timerMode);

  return (
    <Container className={className}>
      <ClockBoard secOfTime={remainingTime} mode={mode} />
      <StyledTimerStartButton
        handleClick={() => startTimer()}
        timerStatus={status}
      />
    </Container>
  );
};
export default PomodoroTimer;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTimerStartButton = styled(TimerStartButton)`
  position: relative;
  top: 30px;
  left: 160px;

  ${mediaQueries.mobile} {
    top: 10px;
    left: 120px;
  }
`;
