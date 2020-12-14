import React, { useState } from "react";
import { Form, Textarea } from "./style";

export default function TextareaForm() {
  const [ text, setText ] = useState("Paste text here.");

  const handleChange = event => setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    // convert text to unicode hex
    console.log(text.charCodeAt(0).toString(16));

    // convert hex to int
    console.log("hex to num: " + parseInt("4dbf", 16));

    // all common kanji hex values 4e00 - 9faf // int num (19968 - 40879)
    // all rare kanji hex values 3400 - 4dbf // int num (13312 - 19903)
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
