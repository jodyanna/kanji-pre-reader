import React, { useState, useEffect } from "react";
import { Page } from "./style";
import StudySheetEntry from "../StudySheetEntry";

export default function StudySheet(props) {
  const [ kanjiData, setKanjiData ] = useState([])

  useEffect(() => {
    fetchAllKanjiData(props.filterKanji).then(res => setKanjiData(res))
  })

  return (
    <Page>
      {kanjiData.map((entry, i) => <StudySheetEntry kanji={entry} key={i}/>)}
    </Page>
  )
}

const fetchAllKanjiData = async kanji => {
  const allKanjiData = [];

  for (let i = 0; i < kanji.length; i++) {
    const response = await fetch("https://kanjiapi.dev/v1/kanji/" + kanji[i])
    response.json().then(json => allKanjiData.push(json))
  }

  return allKanjiData
}