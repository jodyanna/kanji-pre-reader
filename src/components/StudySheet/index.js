// Dependencies
import React from "react";
// Styled-components
import {EntryWrapper, Page} from "./style";
// Components
import StudySheetEntry from "../StudySheetEntry";
// Utility functions
import { groupKanjiToStudySheets } from "../../utils/groupKanjiToStudySheets";


export default function StudySheet(props) {
  return (
    <div>
      {groupKanjiToStudySheets(props.kanjiData).map((page, i) => {
          return (
            <Page id={`pdf-${i}`} key={`pdf-${i}`}>
              <EntryWrapper>
                {page.map(entry => <StudySheetEntry kanji={entry} key={entry.kanji} />)}
              </EntryWrapper>
            </Page>
          )
        })
      }
    </div>
  )
}
