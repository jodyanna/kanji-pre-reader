import * as React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextareaForm from "./index";

test("Typing in the textarea of the form sets the text.",() => {
  let typedText = '';
  const setText = text => (typedText += text);
  const sampleText = '俺は目の前に広がる光景に、興礁で謀えながらも噴いた';

  render(
    <TextareaForm text={typedText}
                  setText={setText}
    />
    );

  userEvent.type(screen.getByRole('textbox'), sampleText);
  expect(typedText).toEqual(sampleText);
})

test("Submitting the form parses and sets kanji.", () => {
  let submittedData;
  const setKanji = kanji => (submittedData = kanji);
  const sampleText = '俺は目の前に広がる光景に、興礁で謀えながらも噴いた';
  const sampleTextParsed = ['俺', '目', '前', '広', '光', '景', '興', '礁', '謀', '噴'];

  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <TextareaForm text={sampleText}
                    setAllKanji={setKanji}
      />
    </Router>
  );

  userEvent.click(screen.getByText(/next/i));
  expect(sampleTextParsed).toStrictEqual(submittedData);
})
