// Dependencies
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Components
import { Checkbox } from "./Checkbox";
import Loading from "../Loading";
// Styled-components
import {Form, Table, TableBody, TableRow, TableCol, TableHeader, FlexRow, TileWrapper, FlexCol} from "./style";
import { AppNav } from "../Shared/AppNav";
import { Button } from "../Shared/Button";


export default function Filter(props) {
  const [ hasKanji, setHasKanji ] = useState(null);
  const [ checkboxes, setCheckboxes ] = useState([{},]);
  const history = useHistory();

  useEffect(() => {
    // No kanji detected from user textarea input
    if (props.allKanji === undefined || props.allKanji.length === 0) setHasKanji(false)
    // We have the kanji, set state
    else {
      setCheckboxes(
        props.allKanji.map(entry => {
          return {
            value: entry,
            isChecked: false,
          }
        })
      );
      setHasKanji(true);
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
      {hasKanji === null ?
          <Loading message={"Loading..."} />
        :
          hasKanji ?
            <Table>
              <TableHeader>
                <TableRow center={true}>
                  <th>Select the Kanji you would like to study.</th>
                </TableRow>
                <TableRow center={true}>
                  <TableCol>
                    <div>
                      Kanji count: {checkboxes.filter(checkbox => checkbox.isChecked).length} / {props.allKanji.length}
                    </div>
                    <div>
                      Page count: {renderPageCount()}
                    </div>
                  </TableCol>
                </TableRow>
                <TableRow center={true}>
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
                </TableRow>
              </TableHeader>
              <TableBody>
                <TileWrapper>
                  {checkboxes.map(entry => <Checkbox kanji={entry}
                                                     key={`f-${entry.value}`}
                                                     value={entry.value}
                                                     handleCheck={handleCheck} />
                  )}
                </TileWrapper>
              </TableBody>
            </Table>
          :
            <FlexCol>
              <div>No kanji detected.</div>
              <Button type="button"
                      value="Start Over"
                      onClick={handleStartOverClick}
              />
            </FlexCol>
      }
      <AppNav>
        <Button type="button"
                value="Back"
                onClick={() => history.push("/step-1")}
        />
        <Button type="submit"
                value="Next"
                disabled={validateForm()}
        />
      </AppNav>
    </Form>
  )
}
