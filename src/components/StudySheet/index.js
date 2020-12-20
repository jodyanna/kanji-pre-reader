import React from "react";
import { Page } from "./style";
import StudySheetEntry from "../StudySheetEntry";

export default function StudySheet(props) {

  return (
    <Page>
      {props.allKanjiData.map((entry, i) => <StudySheetEntry kanji={entry} key={i}/>)}
    </Page>
  )
}
