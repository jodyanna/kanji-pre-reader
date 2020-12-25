import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import TextareaForm from "./components/TextareaForm";
import Footer from "./components/Footer";
import styled from "styled-components";
import StudySheet from "./components/StudySheet";
import Filter from "./components/Filter";
import Home from "./components/Home";

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

  const resetApp = () => {
    setAllKanji([]);
    setFilterKanji([]);
  }

  return (
    <Router>
      <Page>
        <Header />
        <Switch>
          <Route path="/step-3">
            <StudySheet filterKanji={filterKanji}
                        resetApp={resetApp}
            />
          </Route>
          <Route path="/step-2">
            <Filter allKanji={allKanji}
                    setFilterKanji={kanji => setFilterKanji(kanji)}
                    resetApp={resetApp}
            />
          </Route>
          <Route path="/step-1">
            <TextareaForm setAllKanji={kanji => setAllKanji(kanji)}
                          resetApp={resetApp}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Page>
    </Router>
  );
}
