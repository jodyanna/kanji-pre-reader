import { groupKanjiToStudySheets } from "./groupKanjiToStudySheets.js";
import { sampleResponse } from "./sampleResponse.js";

test("grouping response data into groups of 8.", () => {
  const [ kanji1, kanji2, kanji3, kanji4, kanji5, kanji6, kanji7, kanji8, kanji9 ] = sampleResponse;
  const expectedResult = [
    [ kanji1, kanji2, kanji3, kanji4, kanji5, kanji6, kanji7, kanji8 ],
    [ kanji9 ]
  ];
  const arrayLengthLimit = 8;
  const mockGroupKanjiToStudySheets = jest.fn().mockImplementation(groupKanjiToStudySheets);

  expect(expectedResult).toStrictEqual(mockGroupKanjiToStudySheets(sampleResponse));
  expect(mockGroupKanjiToStudySheets(sampleResponse)[0].length).toBe(arrayLengthLimit);
})
