import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 100%;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  
  justify-content: space-evenly;
  align-items: center;
  
  width: 100%;
  
  margin: 0;
`;

const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  justify-content: flex-start;
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

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-evenly;
  align-items: center;
`;

export default function Filter(props) {
  const [ hasKanji, setHasKanji ] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (props.allKanji === undefined || props.allKanji.length === 0) setHasKanji(false)
    else setHasKanji(true)
  }, [props.allKanji])

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
          <TableRow>
            <th>Select the Kanji you do not know.</th>
          </TableRow>
          <TableRow>
            <td>These are the kanji that will appear on the study sheet.</td>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            {hasKanji ?
              props.allKanji.map(entry => <TableCell kanji={entry} key={`f${entry}`}/>)
              : "No kanji detected."
            }
          </TableRow>
        </tbody>
      </Table>
      <ButtonRow>
        <input type="button"
               value="Start Over"
               onClick={handleStartOverClick}
        />
        <input type="button"
               value="Back"
               onClick={() => history.push("/step-1")}
        />
        {hasKanji ? <input type="submit" value="Next"/> : ""}
      </ButtonRow>
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
