import React from "react";
import { Box, Label } from "./style";

export function Checkbox({ kanji, handleCheck }) {
  return (
    <td>
      <Label isChecked={kanji.isChecked}>
        {kanji.value}
        <Box type="checkbox"
             value={kanji.value}
             checked={kanji.isChecked}
             onChange={handleCheck}
        />
      </Label>
    </td>
  )
}
