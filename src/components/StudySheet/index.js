import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Page } from "./style";
import StudySheetEntry from "../StudySheetEntry";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
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
                 value="Create PDF"
                 onClick={printDoc}
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



const printDoc = () => {
  html2canvas(document.querySelector("#pdf-0"))
    .then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        format: [2550, 3300],
        unit: "px",
        hotfixes: ["px_scaling"],
      });
      pdf.addImage(imgData, 'JPEG', 0, 0, 2550, 3300);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
}
