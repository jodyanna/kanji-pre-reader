import React from "react";
import PracticeArea from "../PracticeArea";
import { Container, KanjiOverview, Kanji, SmCenterText, Summary, Col, KanjiCol, Info } from "./style";

export default function StudySheetEntry({ kanji }) {

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
          <SmCenterText>Grade: {kanji.grade}</SmCenterText>
          <SmCenterText>{kanji.jlpt === null ? "" : `JLPT: N${kanji.jlpt}`}</SmCenterText>
        </KanjiCol>
        <Kanji>{kanji.kanji}</Kanji>
        <SmCenterText>Strokes: {kanji.stroke_count}</SmCenterText>
      </KanjiOverview>
      <Col>
        <Summary>
          <Info>Kun-Reading: {renderListWithCommas(formatKunReadings(kanji.kun_readings))}</Info>
          <Info>On-Reading: {renderListWithCommas(kanji.on_readings)}</Info>
          <Info>Meaning: {renderListWithCommas(kanji.meanings)}</Info>
        </Summary>
        <PracticeArea />
      </Col>
    </Container>
  )
}
