import React, { FC } from "react";
import styled from "styled-components";
import color from "../../shared/color";
import mediaQueries from "../../shared/mediaQuery";
import { ClassNameProps } from "../../shared/types";
import { TimerStatus } from "./types";

type Props = {
  timerStatus: TimerStatus;
  handleClick: () => void;
} & ClassNameProps;

const TimerStartButton: FC<Props> = ({
  className,
  timerStatus,
  handleClick,
}) => {
  const buttonText = timerStatus === "run" ? "◉" : "START";
  return (
    <Container onClick={handleClick} className={className}>
      <ButtonText>{buttonText}</ButtonText>
    </Container>
  );
};

export default TimerStartButton;

const size = 160;
const mobileSize = 90;
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;

  width: ${size}px;
  height: ${size}px;

  border-radius: ${size}px;

  background: ${color.mainGraphicColor};

  ${mediaQueries.mobile} {
    padding: 0;
    width: ${mobileSize}px;
    height: ${mobileSize}px;
    max-width: ${mobileSize}px;
    max-height: ${mobileSize}px;
    border-radius: ${mobileSize / 2} px;
  }
`;

const ButtonText = styled.span`
  font-size: 38px;
  font-weight: 700;
  color: ${color.mainBg};

  ${mediaQueries.mobile} {
    font-size: 18px;
  }
`;
