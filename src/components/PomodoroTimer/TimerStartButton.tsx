import React, { FC } from "react";
import styled from "styled-components";
import color from "../../shared/color";
import { ClassNameProps } from "../../shared/types";

type Props = {
  isStart: boolean;
  handleClick: () => void;
} & ClassNameProps;

const TimerStartButton: FC<Props> = ({ className, isStart, handleClick }) => {
  const buttonText = isStart ? "◉" : "START";
  return (
    <Container onClick={handleClick} className={className}>
      <Button>{buttonText}</Button>
    </Container>
  );
};

export default TimerStartButton;

const size = 160;
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;

  width: ${size}px;
  height: ${size}px;

  border-radius: ${size}px;

  background: ${color.mainGraphicColor};
`;

const Button = styled.span`
  font-size: 38px;
  font-weight: 700;
  color: ${color.mainBg};
`;
