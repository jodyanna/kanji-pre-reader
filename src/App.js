import React from "react";

import Header from "./components/Header";
import TextareaForm from "./components/TextareaForm";
import Footer from "./components/Footer";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 0;
  padding: 0;
  
  
`;

function App() {
  return (
    <Page>
      <Header />
      <TextareaForm />
      <Footer />
    </Page>
  );
}

export default App;
