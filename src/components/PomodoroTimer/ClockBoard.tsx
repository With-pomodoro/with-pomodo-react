import React, { FC } from "react";
import styled from "styled-components";
import { TimerMode } from "./types";
import { convertTime } from "./utils";
type Props = {
  secOfTime: number;
  mode: TimerMode;
};
const ClockBoard: FC<Props> = ({ secOfTime, mode }) => {
  const timeObj = convertTime(secOfTime);
  return (
    <Container>
      <Time>{`${timeObj.min}:${timeObj.sec}`}</Time>
      <Mode>{mode}</Mode>
    </Container>
  );
};

export default ClockBoard;

const size = 400;
const Container = styled.div`
  height: ${size}px;
  width: ${size}px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 3px solid #020202;
  border-radius: ${size}px;
`;

const Time = styled.h2`
  font-size: 100px;
  font-weight: 700;
`;

const Mode = styled.p`
  font-size: 38px;
  font-weight: 700;
  line-height: 200%;
`;
