import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 100%;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  
  justify-content: space-evenly;
  align-items: center;
  
  width: 100%;
  
  margin: 0;
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  justify-content: flex-start;
  align-items: center;
`;

export const TableCell = styled.td`
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  margin: 0.5em;
  padding: 0.5em;
  
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

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-evenly;
  align-items: center;
`;
