// Dependencies
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Components
import { Checkbox } from "./Checkbox";
// Styled-components
import {Form, Table, TableBody, TableRow, TableCol, ButtonRow, TableFooter, FlexRow} from "./style";
import { Button } from "../Shared/Button";


export default function Filter(props) {
  const [ hasKanji, setHasKanji ] = useState(false);
  const [ checkboxes, setCheckboxes ] = useState([{},]);
  const history = useHistory();

  useEffect(() => {
    // No kanji detected from user textarea input
    if (props.allKanji === undefined || props.allKanji.length === 0) setHasKanji(false)
    // We have the kanji, set state
    else {
      setHasKanji(true);
      setCheckboxes(
        props.allKanji.map(entry => {
          return {
            value: entry,
            isChecked: false,
          }
        })
      );
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

  const handleCheckAllClick = () => {
    setCheckboxes(checkboxes.map(entry => {
      entry.isChecked = true;
      return entry
    }))
  }

  const handleUncheckAllClick = () => {
    setCheckboxes(checkboxes.map(entry => {
      entry.isChecked = false;
      return entry
    }))
  }

  const handleSubmit = event => {
    event.preventDefault();
    // Get all checked kanji and set to App state.
    props.setFilterKanji(checkboxes.map(entry => entry.isChecked ? entry.value : null)
      // For eliminating unchecked kanji null values from array.
      .filter(value => value !== null));
    history.push("/step-3");
  }

  const validateForm = () => {
    const currentCheckedKanjiCount = checkboxes.filter(checkbox => checkbox.isChecked).length;

    // Current imposed limit is 2 pages (16 kanji)
    return !(currentCheckedKanjiCount > 0 && currentCheckedKanjiCount < 17)
  }

  const handleStartOverClick = () => {
    props.resetApp();
    history.push("/");
  }

  const renderPageCount = () => {
    const kanjiCount = checkboxes.filter(checkbox => checkbox.isChecked).length;
    const pageKanjiLimit = 8;

    // StudySheet kanji limit is 8 per page
    if (kanjiCount === 0) return 0
    else if (kanjiCount > 0 && kanjiCount < 9) return  1
    else if (kanjiCount % 8 === 0) return kanjiCount / pageKanjiLimit
    else return Math.floor(kanjiCount / pageKanjiLimit) + 1
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

        <TableBody>
          <TableRow>
            {hasKanji ?
              checkboxes.map(entry => <Checkbox kanji={entry}
                                                key={`f-${entry.value}`}
                                                value={entry.value}
                                                handleCheck={handleCheck}
                />
              )
              : <td>"No kanji detected."</td>
            }
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCol>
              <FlexRow>
                <Button type="button"
                       value="Select All"
                       onClick={handleCheckAllClick}
                />
                <Button type="button"
                       value="Deselect All"
                       onClick={handleUncheckAllClick}
                />
              </FlexRow>
            </TableCol>

            <TableCol pushRight={true} >
              <div>
                Kanji Count: {checkboxes.filter(checkbox => checkbox.isChecked).length} / {props.allKanji.length}
              </div>
              <div>
                Page Count: {renderPageCount()}
              </div>
            </TableCol>
          </TableRow>
        </TableFooter>
      </Table>

      <ButtonRow>
        <Button type="button"
                value="Start Over"
                onClick={handleStartOverClick}
        />
        <Button type="button"
                value="Back"
                onClick={() => history.push("/step-1")}
        />
        {hasKanji
          ?
          <Button type="submit"
                  value="Next"
                  disabled={validateForm()}
          />
          :
          ""
        }
      </ButtonRow>
    </Form>
  )
}
