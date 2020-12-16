import React, { useState } from "react";

import Header from "./components/Header";
import TextareaForm from "./components/TextareaForm";
import Footer from "./components/Footer";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  margin: 0;
  padding: 0;
  
`;

function App() {
  const [ allKanjiData, setAllKanjiData ] = useState({});

  return (
    <Page>
      <Header />
      <TextareaForm setAllKanjiData={setAllKanjiData}/>
      <Footer />
    </Page>
  );
}

export default App;
