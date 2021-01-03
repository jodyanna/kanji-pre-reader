// Dependencies
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// Styled-components
import { Page } from "./style";
// Components
import StudySheetEntry from "../StudySheetEntry";
// Utility functions
import { fetchAllKanjiData } from "./fetchAllKanjiData";
import { groupKanjiToStudySheets } from "./groupKanjiToStudySheets";


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
                 onClick={() => downloadPDF(groupKanjiToStudySheets(kanjiData))}
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



const downloadPDF = pages => {
  const pdf = new jsPDF({
    format: [2550, 3300],
    unit: "px",
    hotfixes: ["px_scaling"],
  });
  const numOfPages = pages.length;

  for (let i = 0; i < numOfPages; i++) {
    html2canvas(document.querySelector(`#pdf-${i}`))
    .then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      if (i !== 0) pdf.insertPage(i);
      pdf.addImage(imgData, 'JPEG', 0, 0, 2550, 3300);
    })
    .then(() => pdf.save("download.pdf"))
  }
  // pdf.output('dataurlnewwindow');
}
