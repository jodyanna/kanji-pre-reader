import React, { useState } from "react";
import { Form, Textarea } from "./style";

export default function TextareaForm(props) {
  const [ text, setText ] = useState("Paste text here.");

  const handleChange = event => setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    fetchAllKanjiData(parseKanjiFromText(text)).then(res => {
      props.setAllKanjiData(res);
      props.setIsReady(true);
    })
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

  return [...new Set(text.match(kanjiRegX))]
}

const fetchAllKanjiData = async kanji => {
  const allKanjiData = [];

  for (let i = 0; i < kanji.length; i++) {
    const response = await fetch("https://kanjiapi.dev/v1/kanji/" + kanji[i])
    response.json().then(json => allKanjiData.push(json))
  }

  return allKanjiData
}
