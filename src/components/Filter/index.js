import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  
`;

const Table = styled.table`
  width: 100%;
  height: 100%;
`;

const Row = styled.tr`
  display: flex;
  flex-direction: row;
  
  justify-content: center;
  align-items: center;
`;

const Cell = styled.td`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  margin: 0.5em;
  padding: 0.5em;
  
  outline: 1px solid #000000;
  
  font-size: 2em;
`;

export default function Filter(props) {
  const [ selectedKanji, setSelectedKanji ] = useState([]);

  const handleSubmit = event => {
    event.preventDefault()

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Table>
        <thead>Select Kanji you already know.</thead>
        <tbody>
          <Row>{props.allKanjiData.map(entry => <TableCell kanji={entry.kanji}/>)}</Row>
        </tbody>
      </Table>
      <input type="submit" value="Next" />
    </Form>
  )
}

function TableCell(props) {
  return (
    <Cell>
      <label>{props.kanji}</label>
      <input type={"checkbox"} />
    </Cell>
  )
}
