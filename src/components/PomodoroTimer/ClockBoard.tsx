import React, { FC } from "react";
import styled from "styled-components";
import mediaQueries from "../../shared/mediaQuery";
import { TimerMode } from "./types";
import { convertTime, convModeForView } from "./utils";
type Props = {
  secOfTime: number;
  mode: TimerMode;
};
const ClockBoard: FC<Props> = ({ secOfTime, mode }) => {
  const timeObj = convertTime(secOfTime);
  console.log(mediaQueries.mobile);

  return (
    <Container>
      <Time>
        {timeObj.min}:{timeObj.sec}
      </Time>
      <Mode>{convModeForView(mode)}</Mode>
    </Container>
  );
};

export default ClockBoard;

const size = 400;
const mobileSize = 318;
const Container = styled.h2`
  height: ${size}px;
  width: ${size}px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 3px solid #020202;
  border-radius: ${size}px;

  ${mediaQueries.mobile} {
    height: ${mobileSize}px;
    width: ${mobileSize}px;
  }
`;

const Time = styled.h2`
  display: inline-block;
  font-size: 100px;
  font-weight: 700;
`;
const Mode = styled.p`
  font-size: 38px;
  font-weight: 700;
  line-height: 200%;
`;
