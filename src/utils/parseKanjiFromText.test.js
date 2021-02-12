import { parseKanjiFromText } from "./parseKanjiFromText";

test("Parse kanji characters from string removing duplicates.", () => {
  const sampleText = "おにぎり[1]（御握り）は、ご飯を三角形・俵形・球状などに加圧成型した食べ物である。";
  const expectedResult = ["御", "握", "飯", "三", "角", "形", "俵", "球", "状", "加", "圧", "成", "型", "食", "物"];

  const mockParseKanjiFromText = jest.fn().mockImplementation(parseKanjiFromText);

  expect(expectedResult).toStrictEqual(mockParseKanjiFromText(sampleText));
})
