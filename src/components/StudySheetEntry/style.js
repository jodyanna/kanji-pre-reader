import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: 17%;
  
  margin-bottom: 1em;
  
  border: 2px solid #000000;
`;

export const Kanji = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;

  font-size: 3.5em;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 80%;
  height: 100%;
  
  padding-left: 0.5em;
  
  border-left: 2px solid #000000;
`;

export const Row = styled.div`
  display: flex;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 33%;
  
  text-align: baseline;
`;

export const Col = styled.div`
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
`;

export const Info = styled.p`
  margin: 0 1em 0 0;
`;

export const SmCenterText = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  
  font-size: 0.7em;
`;
