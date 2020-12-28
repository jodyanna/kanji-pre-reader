import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Page } from "./style";
import StudySheetEntry from "../StudySheetEntry";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

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
      <Page id="pdf">
        {isLoading ?
          "Fetching data..."
          : kanjiData.map(entry => <StudySheetEntry kanji={entry} key={entry.kanji} />)
        }
      </Page>
    </div>
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

const printDoc = () => {
  html2canvas(document.querySelector("#pdf"))
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
