import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  width: 10%;
  height: 100%;
  
  border: 1px solid #000000;
`;

export default function PracticeArea() {
  return (
    <Container>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Container>
  )
}
