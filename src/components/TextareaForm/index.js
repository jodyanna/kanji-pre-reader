// Dependencies
import React from "react";
import { useHistory } from "react-router-dom";
// Styled-components
import { Form, Textarea, H2 } from "./style";
import { AppNav } from "../Shared/AppNav";
import { Button } from "../Shared/Button";
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

  const validateForm = () => !props.text.length > 0

  return (
    <Form onSubmit={handleSubmit}>
      <H2>Paste text below</H2>
      <Textarea onChange={handleChange}
                value={props.text}
                cols={40}
                rows={28}
      />
      <AppNav>
        <Button type="button"
                value="Back"
                onClick={() => history.push("/")}
        />
        <Button type="submit"
                value="Next"
                disabled={validateForm()}
        />
      </AppNav>
    </Form>
  )
}
