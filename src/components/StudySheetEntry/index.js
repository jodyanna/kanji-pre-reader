import React from "react";
import { Container, KanjiOverview, Kanji, SmCenterText, Summary, Row, Col, Info } from "./style";

export default function StudySheetEntry(props) {

  const renderListWithCommas = readings => {
    return readings.map((kana, i) => {
      if (i === readings.length - 1) return <span>{kana}</span>
      else return <span>{kana}, </span>
    })
  }

  return (
    <Container>
      <KanjiOverview>
        <Col>
          <SmCenterText>Grade: {props.kanji.grade}</SmCenterText>
          <SmCenterText>JLPT: N{props.kanji.jlpt}</SmCenterText>
        </Col>
        <Kanji>{props.kanji.kanji}</Kanji>
        <SmCenterText>Strokes: {props.kanji.stroke_count}</SmCenterText>
      </KanjiOverview>
      <Summary>
        <Row>
          <Info>Kun-Reading: {renderListWithCommas(props.kanji.kun_readings)}</Info>
        </Row>
        <Row>
          <Info>On-Reading: {renderListWithCommas(props.kanji.on_readings)}</Info>
        </Row>
        <Row>
          <Info>Meaning(s): {renderListWithCommas(props.kanji.meanings)}</Info>
        </Row>
      </Summary>
    </Container>
  )
}
