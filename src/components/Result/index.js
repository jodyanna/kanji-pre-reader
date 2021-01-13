// Dependencies
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
// Components
import StudySheet from "../StudySheet";
// Utility Functions
import { downloadPDF } from "../../utils/downloadPDF";
import { groupKanjiToStudySheets } from "../../utils/groupKanjiToStudySheets";
import { fetchAllKanjiData } from "../../utils/fetchAllKanjiData";


export default function Result(props) {
  const [ kanjiData, setKanjiData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
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
        ""
        : <StudySheet isLoading={isLoading}
                      kanjiData={kanjiData}
        />
      }
    </div>
  )
}
