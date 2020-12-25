import React, { useState } from "react";

import Header from "./components/Header";
import TextareaForm from "./components/TextareaForm";
import Footer from "./components/Footer";
import styled from "styled-components";
import StudySheet from "./components/StudySheet";
import Filter from "./components/Filter";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: flex-start;
  
  margin: 0;
  padding: 0;
  
`;

export default function App() {
  const [ allKanji, setAllKanji ] = useState([]);
  const [ filterKanji, setFilterKanji ] = useState([]);
  // Boolean switches to step through app procedure
  const [ isFilterActive, setIsFilterActive ] = useState(false);
  const [ isStudySheetActive, setIsStudySheetActive ] = useState(false);

  return (
    <Page>
      <Header />
      <TextareaForm setAllKanji={kanji => setAllKanji(kanji)}
                    setIsReady={bool => setIsFilterActive(bool)}
      />
      {isFilterActive ?
        <Filter allKanji={allKanji}
                setFilterKanji={kanji => setFilterKanji(kanji)}
                setIsFilterReady={bool => setIsFilterActive(bool)}
                setIsReady={bool => setIsStudySheetActive(bool)}
        />
        : ""
      }
      {isStudySheetActive ?
        <StudySheet filterKanji={filterKanji} />
        : ""
      }
      <Footer />
    </Page>
  );
}
