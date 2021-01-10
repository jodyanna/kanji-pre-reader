import React from "react";
import { useHistory } from "react-router-dom";

import { Form, Textarea, ButtonRow } from "./style";

export default function TextareaForm(props) {
  const history = useHistory();

  const handleChange = event => props.setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    props.setAllKanji(parseKanjiFromText(props.text));
    history.push("/step-2");
  }

  const handleStartOverClick = () => {
    props.resetApp();
    history.push("/");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea onChange={handleChange}
                value={props.text}
                cols={50}
                rows={40}
      />
      <ButtonRow>
        <input type="button"
               value="Start Over"
               onClick={handleStartOverClick}
        />
        <input type="button"
               value="Back"
               onClick={() => history.push("/")}
        />
        <input type="submit" value="Next" />
      </ButtonRow>
    </Form>
  )
}

const parseKanjiFromText = text => {
  const kanjiRegX = /[\u4e00-\u9faf\u3400-\u4dbf]/g

  // use set to remove duplicates
  return [...new Set(text.match(kanjiRegX))]
}
