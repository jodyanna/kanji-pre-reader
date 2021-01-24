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

  const formatKunReadings = readings => {
    return readings.map(kun => {
      if (kun.includes(".")) return `${kun.split(".")[0]}(${kun.split(".")[1]})`
      else return kun
    })
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
          <Info>Kun-Reading: {renderListWithCommas(formatKunReadings(props.kanji.kun_readings))}</Info>
          <Info>On-Reading: {renderListWithCommas(props.kanji.on_readings)}</Info>
          <Info>Meaning: {renderListWithCommas(props.kanji.meanings)}</Info>
        </Summary>
        <PracticeArea />
      </Col>
    </Container>
  )
}
