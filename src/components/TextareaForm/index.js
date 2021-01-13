// Dependencies
import React from "react";
import { useHistory } from "react-router-dom";
// Styled-components
import { Form, Textarea } from "./style";
import { AppNav, Button } from "../Shared/style";
// Utility Functions
import { parseKanjiFromText } from "../../utils/parseKanjiFromText";


export default function TextareaForm(props) {
  const history = useHistory();

  const handleChange = event => props.setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    props.setAllKanji(parseKanjiFromText(props.text));
    history.push("/step-2");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea onChange={handleChange}
                value={props.text}
                cols={40}
                rows={30}
      />
      <AppNav>
        <Button type="button"
               value="Back"
               onClick={() => history.push("/")}
        />
        <Button type="submit" value="Next" />
      </AppNav>
    </Form>
  )
}
