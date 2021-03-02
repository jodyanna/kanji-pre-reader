import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: 180px;
  
  margin: 20px 0;
  
  border: 0.5px solid #000000;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: space-evenly;
  align-items: flex-start;
  
  width: 100%;
  height: 40%;
  
  border: 0.5px solid #000000;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;  
`;

export const KanjiCol = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
`;

export const KanjiOverview = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 20%;
  height: 100%;
  
  text-align: baseline;
  
  border: 0.5px solid #000000;
`;

// Text styles
export const Kanji = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;

  font-size: 90px;
`;

export const Info = styled.p`
  margin: 0 0.5em 0 0;
  padding-left: 0.25em;
  
  font-size: 16px;
`;

export const SmCenterText = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  
  font-size: 16px;
`;
