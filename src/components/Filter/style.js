import styled from "styled-components";
import { fadeInRule } from "../Shared/Animation";
import { colors } from "../Shared/colorScheme";

/* FORM COMPONENTS */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 80%;
  
  animation: ${fadeInRule};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  width: 32px;
  height: 57px;
  
  padding: 16px;
  
  outline: 1px solid #000000;
  
  background-color: ${props => props.isChecked ? colors.lightgreen : colors.white};
  
  font-size: 2em;

  box-shadow: 5px 5px 8px -4px rgba(0,0,0,0.7);
  
  &:hover {
    cursor: pointer;
  }
`;

export const Box = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

/* TABLE COMPONENTS */
export const Table = styled.table`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 85%;
  
  margin: 0;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  
  width: 100%;
  height: 80%;

  overflow-y: scroll;
  overflow-x: hidden;
`;

export const TableHeader = styled.thead`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: flex-start;
  
  width: 100%;
`;

export const TileWrapper = styled.tr`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(64px, max-content));
  grid-gap: 24px;
  
  justify-content: center;
  
  padding: 10px;

  width: 95%;
  height: 100%;
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  justify-content: ${props => props.center ? "center;" : "flex-end;"}
  
  align-items: center;
  
  width: 100%;
  
  margin: 0.2em 0 0 0;
`;

export const TableCol = styled.td`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: flex-start;
  
`;

/* MISC */
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: space-evenly;
  align-items: center;
  
  width: 100%;
  height: 100%;
`;
