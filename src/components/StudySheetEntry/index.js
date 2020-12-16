import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: 15%;
  
  border: 2px solid #000000;
`;

const Kanji = styled.div`
  width: 20%;
  height: 100%;

  text-align: center;
  font-size: 5em;
  
  border: 2px solid #000000;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 80%;
  height: 100%;
  
  border: 2px solid #000000;
`;

const Row = styled.div`
  width: 100%;
  height: 33%;
`;


export default function StudySheetEntry(props) {


  return (
    <Container>
      <Kanji>{props.kanji.kanji}</Kanji>
      <Info>
        <Row>
          kun-yomi: {props.kanji.kun_readings.map(kana => <span>{kana} </span>)}
          on-yomi: {props.kanji.on_readings.map(kana => <span>{kana} </span>)}
        </Row>
        <Row>
          strokes: {props.kanji.stroke_count}
          meaning(s): {props.kanji.meanings.map(def => <span>{def}</span>)}
        </Row>
        <Row>
          Grade: {props.kanji.grade}
          JLPT: N{props.kanji.jlpt}
        </Row>
      </Info>
    </Container>
  )
}