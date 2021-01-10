import React from "react";
import { Box, Label } from "./style";

export  function Checkbox(props) {
  return (
    <td>
      <Label>
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
