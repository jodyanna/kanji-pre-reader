// Dependencies
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Styled-components
import { Page } from "./style";
// Components
import StudySheetEntry from "../StudySheetEntry";
// Utility functions
import { fetchAllKanjiData } from "./fetchAllKanjiData";
import { groupKanjiToStudySheets } from "./groupKanjiToStudySheets";
import { downloadPDF } from "./downloadPDF";


export default function StudySheet(props) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ kanjiData, setKanjiData ] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchAllKanjiData(props.filterKanji).then(res => setKanjiData(res))
      .then(() => setIsLoading(false))
  }, [props.filterKanji])

  const handleStartOverClick = () => {
    props.resetApp();
    history.push("/");
  }

  return (
    <div>
      <input type="button"
             value="Start Over"
             onClick={handleStartOverClick}
      />
      {isLoading ?
        "Fetching data..."
        : <input type="button"
                 value="Download PDF"
                 onClick={() => downloadPDF(groupKanjiToStudySheets(kanjiData).length)}
          />
      }
      {isLoading ?
        "Fetching data..."
        : groupKanjiToStudySheets(kanjiData).map((page, i) => {
          return (
            <Page id={`pdf-${i}`}>
              {page.map(entry => <StudySheetEntry kanji={entry} key={entry.kanji} />)}
            </Page>
          )
        })
      }
    </div>
  )
}
