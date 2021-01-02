const util =  require("./util");

test("convertHexesToNums", () => {
  const hexArray = ['e', 'fe', 'abc', '4e00', '9bf00'];
  const numArray = [14, 254, 2748, 19968, 638720];
  expect(util.convertHexesToNums(hexArray)).toStrictEqual(numArray);
  expect(() => util.convertHexesToNums({})).toThrow("Param is not an Array");
})

test("convertCharsToHexes", () => {
  const charArray = ['a', 'æ', '心'];
  const hexArray = ['61', 'e6', '5fc3'];
  expect(util.convertCharsToHexes(charArray)).toStrictEqual(hexArray);
  expect(() => util.convertCharsToHexes({})).toThrow("Param is not an Array");
})

test("parseKanjiFromText", () => {
  expect(util.parseKanjiFromText("kanji === 漢字")).toStrictEqual(["漢", "字"]);
  expect(util.parseKanjiFromText("漢字 かんじ 漢字 カンジ")).toStrictEqual(["漢", "字"]);
  expect(util.parseKanjiFromText("一 䶵")).toStrictEqual(["一", "䶵"]);
})

test("groupKanjiIntoPages", () => {
  expect(util.groupKanjiIntoPages(["漢", "字", "漢", "字", "漢", "字", "漢", "字"]))
    .toStrictEqual([["漢", "字", "漢", "字", "漢", "字", "漢", "字"]]);
  expect(util.groupKanjiIntoPages(
    ["漢", "字", "漢", "字", "漢", "字", "漢", "字", "漢", "字", "漢", "字", "漢", "字", "漢", "字"]
  ))
    .toStrictEqual(
      [["漢", "字", "漢", "字", "漢", "字", "漢", "字"], ["漢", "字", "漢", "字", "漢", "字", "漢", "字"]]
    );
})