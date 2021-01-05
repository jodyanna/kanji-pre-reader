import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Form, Table, TableRow, ButtonRow, Cell } from "./style";

export default function Filter(props) {
  const [ hasKanji, setHasKanji ] = useState(false);
  const [ checkboxes, setCheckboxes ] = useState([{}])
  const history = useHistory();

  useEffect(() => {
    if (props.allKanji === undefined || props.allKanji.length === 0) setHasKanji(false)
    else {
      setHasKanji(true);
      setCheckboxes(
        props.allKanji.map(entry => {
          return {
            value: entry,
            isChecked: false,
          }
        })
      )
    }
  }, [props.allKanji])

  const handleCheck = event => {
    for (let i = 0; i < checkboxes.length; i++) {
      if (event.target.value === checkboxes[i].value) {
        let temp = [...checkboxes];
        temp[i].isChecked = !checkboxes[i].isChecked;
        setCheckboxes([...temp]);
        break;
      }
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const checkboxNodeList = document.querySelectorAll('input[type=checkbox]:checked');
    const selectedKanji = Array.from(checkboxNodeList, node => node.value);
    props.setFilterKanji(selectedKanji);
    history.push("/step-3");
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
            <td>{props.allKanji.length}</td>
          </TableRow>
          <TableRow>
            <td>These are the kanji that will appear on the study sheet.</td>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            {hasKanji ?
              checkboxes.map(entry => <Checkbox kanji={entry}
                                                key={`f-${entry.value}`}
                                                value={entry.value}
                                                handleCheck={handleCheck}
                />
              )
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

function Checkbox(props) {
  return (
    <Cell>
      <label>{props.kanji.value}</label>
      <input type="checkbox"
             value={props.kanji.value}
             checked={props.kanji.isChecked}
             onClick={props.handleCheck}
      />
    </Cell>
  )
}
