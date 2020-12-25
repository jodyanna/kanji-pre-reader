import React, { useState, useEffect } from "react";
import { Page } from "./style";
import StudySheetEntry from "../StudySheetEntry";

export default function StudySheet(props) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ kanjiData, setKanjiData ] = useState([])

  useEffect(() => {
    fetchAllKanjiData(props.filterKanji).then(res => setKanjiData(res))
      .then(() => setIsLoading(false))
  }, [props.filterKanji])

  return (
    <Page>
      {isLoading ?
        "Fetching data..."
        : kanjiData.map(entry => <StudySheetEntry kanji={entry} key={entry.kanji} />)
      }
    </Page>
  )
}

const fetchAllKanjiData = async kanji => {
  const allKanjiData = [];

  for (let i = 0; i < kanji.length; i++) {
    const response = await fetch("https://kanjiapi.dev/v1/kanji/" + kanji[i])
      .catch((error) => console.error('Error:', error));
    if (response.ok) {
      const data = await response.json();
      allKanjiData.push(data)
    } else {
      return Promise.reject("Could not connect to API.")
    }
  }

  return allKanjiData
}