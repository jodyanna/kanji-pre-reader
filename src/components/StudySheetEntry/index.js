import React from "react";
import PracticeArea from "../PracticeArea";
import { Container, KanjiOverview, Kanji, SmCenterText, Summary, Col, KanjiCol, Info } from "./style";

export default function StudySheetEntry(props) {

  const renderListWithCommas = readings => {
    return readings.map((kana, i) => {
      if (i === readings.length - 1) return <span key={kana}>{kana}</span>
      else return <span key={kana}>{kana}, </span>
    })
  }

  const sortKunReadings = readings => {
    const temp = [];
    for (let i = 0; i < readings.length; i++) {
      temp.push(readings[i].split('.')[0])
    }
    return [...new Set(temp)]
  }

  return (
    <Container>
      <KanjiOverview>
        <KanjiCol>
          <SmCenterText>Grade: {props.kanji.grade}</SmCenterText>
          <SmCenterText>{props.kanji.jlpt === null ? "" : `JLPT: N${props.kanji.jlpt}`}</SmCenterText>
        </KanjiCol>
        <Kanji>{props.kanji.kanji}</Kanji>
        <SmCenterText>Strokes: {props.kanji.stroke_count}</SmCenterText>
      </KanjiOverview>
      <Col>
        <Summary>
          <Info>Kun-Reading: {renderListWithCommas(sortKunReadings(props.kanji.kun_readings))}</Info>
          <Info>On-Reading: {renderListWithCommas(props.kanji.on_readings)}</Info>
          <Info>Meaning(s): {renderListWithCommas(props.kanji.meanings)}</Info>
        </Summary>
        <PracticeArea />
      </Col>
    </Container>
  )
}
