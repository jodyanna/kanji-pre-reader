// Dependencies
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// Components
import StudySheet from "../StudySheet";
import Preview from "./Preview";
import Loading from "../Loading";
// Utility Functions
import { downloadPDF } from "../../utils/downloadPDF";
import { groupKanjiToStudySheets } from "../../utils/groupKanjiToStudySheets";
import { fetchAllKanjiData } from "../../utils/fetchAllKanjiData";
// Styled-components
import { Container, Downloader } from "./style";
import { Button } from "../Shared/Button";
import { AppNav } from "../Shared/AppNav";


export default function Result(props) {
  const [ kanjiData, setKanjiData ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(true);
  const [ isDownloading, setIsDownloading ] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchAllKanjiData(props.filterKanji).then(res => setKanjiData(res))
      .then(() => setIsFetching(false))
  }, [props.filterKanji]);

  const handleStartOverClick = () => {
    props.resetApp();
    history.push("/");
  }

  const handleDownloadClick = () => {
    setIsDownloading(prevState => !prevState);
    downloadPDF(groupKanjiToStudySheets(kanjiData).length)
      .then(() => setIsDownloading(prevState => !prevState));
  }

  return (
    <Container>
      {isFetching ?
        ""
        :
        <StudySheet isLoading={isFetching}
                    kanjiData={kanjiData}
        />
      }
      {isFetching ?
        <Loading message={"Fetching kanji data..."} />
        :
        <Downloader>
          <Preview />
          <Button type="button"
                  value="Download PDF"
                  onClick={handleDownloadClick}
                  disabled={isDownloading}
          />
          {isDownloading ?
            <Loading message={"Rendering study sheet(s) for downloading..."} />
            :
            ""
          }
        </Downloader>
      }
      <AppNav>
        <Button type="button"
                value="Start Over"
                onClick={handleStartOverClick}
        />
      </AppNav>
    </Container>
  )
}
