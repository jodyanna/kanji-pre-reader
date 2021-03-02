// Dependencies
import React from "react";
import { useHistory } from "react-router-dom";
// Styled-components
import { Form, Textarea, H2 } from "./style";
import { AppNav } from "../Shared/AppNav";
import { Button } from "../Shared/Button";
// Utility Functions
import { parseKanjiFromText } from "../../utils/parseKanjiFromText";


export default function TextareaForm({ text, setText, setAllKanji }) {
  const history = useHistory();

  const handleChange = event => setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const parsedKanji = parseKanjiFromText(text);
    setAllKanji(parsedKanji);
    history.push("/step-2");
  }

  const validateForm = () => !text.length > 0

  return (
    <Form onSubmit={handleSubmit}>
      <H2>Paste text below</H2>
      <Textarea onChange={handleChange}
                value={text}
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
