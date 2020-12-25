import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault()
    const checkboxNodeList = document.querySelectorAll('input[type=checkbox]:checked');
    const selectedKanji = Array.from(checkboxNodeList, node => node.value);
    props.setFilterKanji(selectedKanji);
    history.push("/step-3")
  }

  const handleStartOverClick = () => {
    props.resetApp();
    history.push("/");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Table>
        <thead>
          <Row>
            <th>Select the Kanji you do not know.</th>
          </Row>
          <Row>
            <td>These are the kanji that will appear on the study sheet.</td>
          </Row>
        </thead>
        <tbody>
          <Row>{props.allKanji.map(entry => <TableCell kanji={entry} key={`f${entry}`}/>)}</Row>
        </tbody>
      </Table>
      <input type="button"
             value="Start Over"
             onClick={handleStartOverClick}
      />
      <input type="submit" value="Next" />
    </Form>
  )
}

function TableCell(props) {
  return (
    <Cell>
      <label>{props.kanji}</label>
      <input type={"checkbox"}
             value={props.kanji}
      />
    </Cell>
  )
}
