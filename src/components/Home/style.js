import styled from "styled-components";
import { fadeInRule } from "../Shared/Animation";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 80%;
  
  overflow-y: scroll;
  
  animation: ${fadeInRule};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  
  justify-content: space-evenly;
  align-items: center;
  
  width: 100%;
  height: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  
  margin: 0;
  padding: 0;
`

export const Text = styled.p`
  text-align: center;
`;
