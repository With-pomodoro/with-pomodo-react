import React, { FC } from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import { ClassNameProps } from "../shared/types";

const Title: FC<ClassNameProps> = ({ className }) => {
  return (
    <Container className={className}>
      <TitleText>WITH POMODORO</TitleText>
      <Spacer width="30px" />
      <ShareButton>SHARE</ShareButton>
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TitleText = styled.h1`
  font-weight: 700;
  font-size: 58px;
`;

const ShareButton = styled.button`
  font-weight: 700;
  background: inherit;
  border: none;
  display: contents;
`;
