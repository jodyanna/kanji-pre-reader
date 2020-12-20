import React, { useState } from "react";

import Header from "./components/Header";
import TextareaForm from "./components/TextareaForm";
import Footer from "./components/Footer";
import styled from "styled-components";
import StudySheet from "./components/StudySheet";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: flex-start;
  
  margin: 0;
  padding: 0;
  
`;

function App() {
  const [ allKanjiData, setAllKanjiData ] = useState([]);
  const [ isReady, setIsReady ] = useState(false);

  return (
    <Page>
      <Header />
      <TextareaForm setAllKanjiData={data => setAllKanjiData(data)}
                    setIsReady={bool => setIsReady(bool)}
      />
      {isReady? <StudySheet allKanjiData={allKanjiData} /> : ""}
      <Footer />
    </Page>
  );
}

export default App;
