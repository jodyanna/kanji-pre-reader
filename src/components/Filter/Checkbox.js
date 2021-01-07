import React from "react";
import { TableCell } from "./style";

export  function Checkbox(props) {
  return (
    <TableCell>
      <label>{props.kanji.value}</label>
      <input type="checkbox"
             value={props.kanji.value}
             checked={props.kanji.isChecked}
             onClick={props.handleCheck}
      />
    </TableCell>
  )
}
