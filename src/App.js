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
import Filter from "./components/Filter";
import Home from "./components/Home";
import Result from "./components/Result";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 100%;
  
  margin: 0;
  padding: 0;
  
  overflow: hidden;
`;

export default function App() {
  const [ text, setText ] = useState("Paste text here.");
  const [ allKanji, setAllKanji ] = useState([]);
  const [ filterKanji, setFilterKanji ] = useState([]);

  const resetApp = () => {
    setText("Paste text here.")
    setAllKanji([]);
    setFilterKanji([]);
  }

  return (
    <Router>
      <Page>
        <Header />
        <Switch>
          <Route path="/step-3">
            <Result filterKanji={filterKanji}
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
            <TextareaForm text={text}
                          setText={text => setText(text)}
                          setAllKanji={kanji => setAllKanji(kanji)}
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
