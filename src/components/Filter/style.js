import styled from "styled-components";

/* FORM COMPONENTS */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 80%;
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
  
  justify-content: space-evenly;
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

  overflow: scroll;
`;

export const TableHeader = styled.thead`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
`;

export const TileWrapper = styled.tr`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(64px, max-content));
  grid-gap: 24px;
  
  justify-content: center;
  
  padding: 10px;
  
  width: 98%;
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  justify-content: ${props => props.center ? "center;" : "flex-start;"}
  
  align-items: center;
  
  width: 100%;
`;

export const TableCol = styled.td`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: flex-start;
  
  ${props => props.pushRight ? "margin: 0 0.5em 0 auto;" : ""}
`;

/* MISC */
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: flex-start;
  align-items: center;
`;


export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
`;
