
/**
 * Converts hexes to integers.
 * @param {Array<string>} hexes - Array of hex values.
 * @returns {Array<number>}
 */
const convertHexesToNums = hexes => {
  if (!Array.isArray(hexes)) throw new Error("Param is not an Array");
  const nums = [];
  for (let i = 0; i < hexes.length; i++) {
    if (typeof hexes[i] === "string") nums[i] = parseInt(hexes[i], 16)
  }
  return nums
}

/**
 * Converts single character strings to unicode hexes.
 * @param {Array<string>} chars - Array of single character strings.
 * @returns {Array<string>}
 */
const convertCharsToHexes = chars => {
  if (!Array.isArray(chars)) throw new Error("Param is not an Array");
  const hexes = [];
  for (let i = 0; i < chars.length; i++) {
    if (typeof chars[i] === "string") hexes[i] = chars[i].charCodeAt(0).toString(16)
  }
  return hexes
}

/**
 * Parse kanji characters from string into array.
 * @param {string} text -
 * @returns {Array<string>} array of single non-repeating kanji characters.
 */
const parseKanjiFromText = text => {
  const kanjiRegX = /[\u4e00-\u9faf\u3400-\u4dbf]/g

  return [...new Set(text.match(kanjiRegX))]
}

// export functions as object
module.exports = {
  convertHexesToNums: convertHexesToNums,
  convertCharsToHexes: convertCharsToHexes,
  parseKanjiFromText: parseKanjiFromText,
}
