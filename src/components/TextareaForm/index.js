import React, { useState } from "react";
import { Form, Textarea } from "./style";

export default function TextareaForm() {
  const [ text, setText ] = useState("Paste text here.");

  const handleChange = event => setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(text);
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
