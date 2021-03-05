import * as React from 'react';
import { render } from '@testing-library/react';
import Loading from "./index";

test("Setting the message prop displays the message.", () => {
  const testMessage = "This is a test message.";
  const { container } = render(<Loading message={testMessage}/>);

  const message = container.firstChild.querySelector('p');

  expect(message.textContent).toBe(testMessage);
})
