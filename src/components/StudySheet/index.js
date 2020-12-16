import React from "react";
import { Page } from "./style";
import StudySheetEntry from "../StudySheetEntry";

export default function StudySheet(props) {

  return (
    <Page>
      <StudySheetEntry kanji={props.allKanjiData[0]} />
      <p>hi there</p>
      {props.allKanjiData.map(entry => <p>{entry.kanji}</p>)}
    </Page>
  )
}