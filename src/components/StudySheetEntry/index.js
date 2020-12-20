import React from "react";
import { Container, Col, Kanji, Strokes, Summary, Row, Info } from "./style";


export default function StudySheetEntry(props) {

  const renderListWithCommas = readings => {
    return readings.map((kana, i) => {
      if (i === readings.length - 1) return <span>{kana}</span>
      else return <span>{kana}, </span>
    })
  }

  return (
    <Container>
      <Col>
        <Kanji>{props.kanji.kanji}</Kanji>
        <Strokes>Strokes: {props.kanji.stroke_count}</Strokes>
      </Col>
      <Summary>
        <Row>
          <Info>Kun-Reading: {renderListWithCommas(props.kanji.kun_readings)}</Info>
          <Info>On-Reading: {renderListWithCommas(props.kanji.on_readings)}</Info>
        </Row>
        <Row>
          <Info>Meaning(s): {renderListWithCommas(props.kanji.meanings)}</Info>
        </Row>
        <Row>
          <Info>Grade: {props.kanji.grade}</Info>
          <Info>JLPT: N{props.kanji.jlpt}</Info>
        </Row>
      </Summary>
    </Container>
  )
}