import React from "react";
import { Box, Label } from "./style";

export function Checkbox(props) {
  return (
    <td>
      <Label isChecked={props.kanji.isChecked}>
        {props.kanji.value}
        <Box type="checkbox"
             value={props.kanji.value}
             checked={props.kanji.isChecked}
             onChange={props.handleCheck}
        />
      </Label>
    </td>
  )
}
