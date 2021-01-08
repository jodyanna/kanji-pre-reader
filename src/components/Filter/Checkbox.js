import React from "react";
import { Box, Label } from "./style";

export  function Checkbox(props) {
  return (
    <Label>
      {props.kanji.value}
      <Box type="checkbox"
           value={props.kanji.value}
           checked={props.kanji.isChecked}
           onClick={props.handleCheck}
      />
    </Label>
  )
}
