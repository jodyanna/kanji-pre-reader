import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: space-evenly;
  align-items: center;
  
  height: 100%;
`;

const List = styled.ul`
  list-style-type: none;
  
  margin: 0;
  padding: 0;
`

export default function Home() {
  const history = useHistory();

  const handleClick = () => history.push("/step-1")

  return (
    <Container>
      <p>Welcome!</p>
      <p>This app pre-reads Japanese text and creates study sheets containing the Kanji you select.</p>
      <List>
        <li>Step 1: Paste text</li>
        <li>Step 2: Select all unfamiliar Kanji</li>
        <li>Step 3: Get study sheet(s)!</li>
      </List>
      <p>Get started now!</p>
      <input onClick={handleClick}
             type="button"
             value="Start"
      />
    </Container>
  )
}