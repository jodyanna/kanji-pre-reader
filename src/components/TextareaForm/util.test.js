const util =  require("./util");

test("convertHexesToNums", () => {
  const hexArray = ['e', 'fe', 'abc', '4e00', '9bf00'];
  const numArray = [14, 254, 2748, 19968, 638720];
  expect(util.convertHexesToNums(hexArray)).toStrictEqual(numArray);
})

test("convertCharsToHexes", () => {
  const charArray = ['a', 'æ', '心'];
  const hexArray = ['61', 'e6', '5fc3'];
  expect(util.convertCharsToHexes(charArray)).toStrictEqual(hexArray);
})