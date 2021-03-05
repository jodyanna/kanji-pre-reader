import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filter from "./index";

test("Passing empty array to filter displays message, hides table.", () => {
  const emptyKanjiArray = [];

  render(<Filter allKanji={emptyKanjiArray} />);
  const message = screen.getByTestId("filter-status-none");

  expect(message.textContent).toBe("No kanji detected.");
})
