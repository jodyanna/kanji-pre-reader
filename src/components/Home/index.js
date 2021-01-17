import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, List, Text } from "./style";
import { Button } from "../Shared/Button";


export default function Home() {
  const history = useHistory();

  const handleClick = () => history.push("/step-1")

  return (
    <Container>
      <Section>
        <Text>Welcome!</Text>
        <Text>This app pre-reads Japanese text and creates study sheets based on your selected kanji.</Text>
        <Text>Follow these easy steps to create your own kanji study sheets!</Text>
        <List>
          <li>Step 1: Paste text</li>
          <li>Step 2: Select kanji to appear on sheet</li>
          <li>Step 3: Download study sheet(s)!</li>
        </List>
        <Text>Get started now!</Text>
        <Button onClick={handleClick}
                type="button"
                value="Start"
        />
      </Section>
    </Container>
  )
}
