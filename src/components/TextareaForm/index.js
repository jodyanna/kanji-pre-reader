import React, { useState } from "react";
import { Form, Textarea } from "./style";

export default function TextareaForm(props) {
  const [ text, setText ] = useState("Paste text here.");

  const handleChange = event => setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    props.setAllKanjiData(parseKanjiFromText(text));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea name="userText"
                onChange={handleChange}
                value={text}
                cols={50}
                rows={40}
      />
      <input type="submit" value="Next" />
    </Form>
  )
}

const parseKanjiFromText = text => {
  const kanjiRegX = /[\u4e00-\u9faf\u3400-\u4dbf]/g

  // use set to remove duplicates
  return [...new Set(text.match(kanjiRegX))]
}
