import React from "react";
import styled from "styled-components";
import loadingGIF from "../../img/loading.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
`;

export default function Loading(props) {
  return (
    <Container>
      <p>{props.message}</p>
      <img src={loadingGIF} alt="loading..." />
    </Container>

  )
}
