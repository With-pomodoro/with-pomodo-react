import React, { FC } from "react";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { ClassNameProps } from "../shared/types";

const TitleContainer: FC<ClassNameProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Title>WITH POMODORO</Title>
      <Spacer width="30px" />
      <ShareButton>SHARE</ShareButton>
    </Container>
  );
};

export default TitleContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 58px;
`;

const ShareButton = styled.button`
  font-weight: 700;
  background: inherit;
  border: none;
  display: contents;
`;
