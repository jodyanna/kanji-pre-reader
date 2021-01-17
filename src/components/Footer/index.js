import React from "react";
import { Container } from "./style";
import { Anchor } from "../Shared/Anchor";

export default function Footer() {

  return (
    <Container>
      <span>This app uses <Anchor href="https://kanjiapi.dev/">kanjiapi.dev</Anchor></span>
    </Container>
  )
}
