import React, { useState } from "react";
import { Form, Textarea } from "./style";

export default function TextareaForm() {
  const [ text, setText ] = useState("Paste text here.");
  const [ kanji, setKanji ] = useState([]);

  const handleChange = event => setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setKanji(parseKanjiFromText(text));

    console.log(kanji)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea name="userText"
                onChange={handleChange}
                value={text}
                cols={30}
                rows={5}
      />
      <input type="submit" value="Create study sheet" />
    </Form>
  )
}

const parseKanjiFromText = text => {
  const kanjiRegX = /[\u4e00-\u9faf\u3400-\u4dbf]/g

  return [...new Set(text.match(kanjiRegX))]
}