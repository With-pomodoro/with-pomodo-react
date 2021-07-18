import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { TimerMode } from "./types";
import { convertTime, convModeForView } from "./utils";
type Props = {
  secOfTime: number;
  mode: TimerMode;
};
const ClockBoard: FC<Props> = ({ secOfTime, mode }) => {
  const timeObj = convertTime(secOfTime);
  const [indicator, setIndicator] = useState(true);
  useEffect(() => {
    window.setTimeout(() => {
      setIndicator((prev) => !prev);
    }, 1000);
  }, [indicator]);
  return (
    <Container>
      <Time>
        {timeObj.min}
        <Indicator>{indicator && ":"}</Indicator>
        {timeObj.sec}
      </Time>
      <Mode>{convModeForView(mode)}</Mode>
    </Container>
  );
};

export default ClockBoard;

const size = 400;
const Container = styled.h2`
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
  display: inline-block;
  font-size: 100px;
  font-weight: 700;
`;

const Indicator = styled(Time)`
  min-width: 30px;
  text-align: center;
`;
const Mode = styled.p`
  font-size: 38px;
  font-weight: 700;
  line-height: 200%;
`;
