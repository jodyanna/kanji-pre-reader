import React from "react";
import styled from "styled-components";
import loadingGIF from "../../img/loading.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  font-size: 20px;
`;

export default function Loading({ message }) {
  return (
    <Container>
      <p>{message}</p>
      <img src={loadingGIF} alt="loading..." />
    </Container>
  )
}
